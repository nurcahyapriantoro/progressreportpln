import { BiDailyReport } from '../types/project';
import { INITIAL_PROGRESS_REPORTS } from '../data/progressReports';

const STORAGE_KEY = 'gh_pln_progress_reports_v6';

export function loadReportsFromStorage(): BiDailyReport[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS_REPORTS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load reports from localStorage:', err);
  }
  return INITIAL_PROGRESS_REPORTS;
}

export function saveReportsToStorage(reports: BiDailyReport[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.error('Failed to save reports to localStorage:', err);
  }
}

export function resetReportsStorage(): BiDailyReport[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to reset storage:', err);
  }
  return INITIAL_PROGRESS_REPORTS;
}

export function exportReportsToJson(reports: BiDailyReport[]): void {
  const jsonStr = JSON.stringify(reports, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `progressReports_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function generateWhatsAppMessage(report: BiDailyReport, vercelUrl = window.location.origin): string {
  const isLatest = report.isLatestActive;
  const headerStatus = isLatest ? '🟢 *LAPORAN PROGRES TERBARU*' : '📋 *LAPORAN PROGRES DUA HARIAN*';
  
  let msg = `${headerStatus}
*PEMBANGUNAN SMART GREENHOUSE PLN UPDL PALEMBANG*
_Pelaksana: BRAIN IPB University_
_Pemilik: PT PLN (Persero) UPDL Palembang_

📅 *Periode Laporan:* ${report.displayDate} (Siklus #${report.cycleNumber})
📍 *Lokasi Pekerjaan:* ${report.location}
🚀 *Tahapan Proyek:* ${report.pipelineStageLabel}${report.weather ? `\n🌤️ *Kondisi Cuaca:* Pagi: ${report.weather.morning} | Siang/Sore: ${report.weather.afternoon}` : ''}${report.manpowerCount !== undefined ? `\n👷 *Tenaga Kerja Harian:* ${report.manpowerCount} Orang ${report.manpowerRole ? `(${report.manpowerRole})` : ''}` : ''}

📊 *RINGKASAN CAPAIAN FISIK:*
• Progres Kumulatif Total: *${report.cumulativeProgress.toFixed(1)}%* (${report.progressDelta >= 0 ? '+' : ''}${report.progressDelta.toFixed(1)}% dari siklus sebelumnya)
• Pekerjaan Sipil & Rangka: *${report.civilProgress.toFixed(1)}%*
• Sistem IoT & Hidroponik: *${report.iotProgress.toFixed(1)}%*
• Status Pelaksanaan: *${report.status}* (Target Rampung: 28 Nov 2026)

📝 *RINGKASAN TEKNIS:*
${report.executiveSummary}
${report.logisticsNotes ? `\n🚚 *Koordinasi Kedatangan Site Indralaya:* ${report.logisticsNotes}\n` : ''}${report.briefingSchedule ? `\n⏰ *Jadwal Briefing Pagi:* ${report.briefingSchedule}\n` : ''}${report.approvalNotes ? `📑 *Izin & Approval Lapangan:* ${report.approvalNotes}\n` : ''}${report.localPurchases && report.localPurchases.length > 0 ? `🛒 *Material Approval (Beli Lokal Palembang):* ${report.localPurchases.join(', ')}\n` : ''}`;

  if (report.photos && report.photos.length > 0) {
    msg += `\n📸 *DOKUMENTASI PEKERJAAN (${report.photos.length} Foto Terlampir):*\n`;
    report.photos.forEach((p, idx) => {
      msg += `${idx + 1}. *${p.caption}*\n   _${p.narrative}_\n`;
    });
  }

  if (report.nextSteps && report.nextSteps.length > 0) {
    msg += `\n⏭️ *RENCANA KERJA 2 HARI BERIKUTNYA:*\n`;
    report.nextSteps.forEach((s) => {
      msg += `• ${s}\n`;
    });
  }

  msg += `
👷 *TENAGA KERJA LAPANGAN (10 Personel):*
1. Achmad Widodo, 2. Mandalahi Alfiando, 3. Aruz Sunandar, 4. Sukono, 5. Andriyansah, 6. Egi Ruswandi, 7. Sulaeman Abdul Malik, 8. Akat Sukatma, 9. Hendra Ripansyah, 10. Reza Iman Santosa.
_Kualifikasi: 100% Siap Mobilisasi Erection & K3 Konstruksi_

🌐 *Portal Monitoring Interaktif:*
${vercelUrl}

_Demikian laporan ini kami sampaikan sebagai wujud transparansi berkala. Terima kasih atas dukungan Manajemen PT PLN (Persero) UPDL Palembang._`;

  return msg;
}

export function compressImageFile(file: File, maxWidth = 1200, maxHeight = 900, quality = 0.8): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
