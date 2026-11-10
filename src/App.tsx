import React, { useState, useMemo, useEffect } from 'react';
import { NavbarHeader } from './components/NavbarHeader';
import { ExecutiveKpiCards } from './components/ExecutiveKpiCards';
import { DateReportSelector } from './components/DateReportSelector';
import { SCurveAndTimetable } from './components/SCurveAndTimetable';
import { Design3DShowcase } from './components/Design3DShowcase';
import { ManpowerSection } from './components/ManpowerSection';
import { PdfOnePageTemplate } from './components/PdfOnePageTemplate';
import { AdminPanelModal } from './components/AdminPanelModal';
import { Toast, ToastMessage } from './components/Toast';
import { 
  loadReportsFromStorage, 
  saveReportsToStorage, 
  resetReportsStorage, 
  exportReportsToJson, 
  generateWhatsAppMessage 
} from './utils/storageAndExport';
import { downloadOnePagePdf } from './utils/pdfGenerator';
import { BiDailyReport } from './types/project';

export function App() {
  const [reports, setReports] = useState<BiDailyReport[]>(() => loadReportsFromStorage());
  const [selectedReportId, setSelectedReportId] = useState<string>(() => {
    const loaded = loadReportsFromStorage();
    const latest = loaded.find((r) => r.isLatestActive);
    return latest?.id || 'report-2026-11-10';
  });
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Calculate target days remaining to 28 November 2026
  const targetDaysRemaining = useMemo(() => {
    const targetDate = new Date('2026-11-28T23:59:59+07:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  const selectedReport = useMemo(() => {
    return reports.find((r) => r.id === selectedReportId) || reports.find((r) => r.isLatestActive) || reports[0];
  }, [reports, selectedReportId]);

  // Handle URL route /admin or #/admin to open admin panel automatically
  useEffect(() => {
    const checkAdminRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (pathname === '/admin' || pathname === '/admin/' || hash === '#/admin' || hash === '#admin') {
        setIsAdminOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (pathname.includes('/admin') || hash.includes('admin')) {
      window.history.replaceState(null, '', '/');
    }
  };

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random()}`,
      type,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDownloadPdf = async () => {
    if (isDownloadingPdf) return;
    setIsDownloadingPdf(true);
    addToast('info', 'Menyiapkan layout PDF eksekutif 1 lembar A4...');

    const filename = `Laporan_Progres_GH_PLN_Palembang_${selectedReport.dateStr}.pdf`;
    const success = await downloadOnePagePdf('pdf-one-page-container', filename);

    setIsDownloadingPdf(false);
    if (success) {
      addToast('success', `Berhasil mengunduh ${filename}`);
    } else {
      addToast('error', 'Gagal membuat file PDF. Silakan coba kembali.');
    }
  };

  const handleCopyWhatsApp = () => {
    const text = generateWhatsAppMessage(selectedReport);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => addToast('success', 'Teks laporan WhatsApp berhasil disalin ke clipboard!'),
        () => addToast('info', 'Silakan salin teks secara manual.')
      );
    } else {
      addToast('info', 'Clipboard API tidak didukung pada browser ini.');
    }
  };

  const handleSaveReport = (updated: BiDailyReport) => {
    const updatedReports = reports.map((r) => (r.id === updated.id ? updated : r));
    setReports(updatedReports);
    saveReportsToStorage(updatedReports);
    addToast('success', `Perubahan laporan ${updated.displayDate} berhasil disimpan!`);
  };

  const handleExportJson = () => {
    exportReportsToJson(reports);
    addToast('success', 'File progressReports.json berhasil diekspor.');
  };

  const handleResetDefault = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset seluruh data laporan ke pengaturan awal?')) {
      const initial = resetReportsStorage();
      setReports(initial);
      setSelectedReportId('report-2026-11-05');
      addToast('info', 'Data laporan telah dikembalikan ke kondisi default.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* 1. Official Header (No Admin Button) */}
      <NavbarHeader targetDaysRemaining={targetDaysRemaining} />

      {/* 2. Main Executive Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
        {/* Executive Hero & 4 KPI Cards + 5-Stage Logistics Pipeline (No PDF button) */}
        <ExecutiveKpiCards
          report={selectedReport}
          targetDaysRemaining={targetDaysRemaining}
        />

        {/* 2-Day Reporting Cycle Selector & Adaptive Photo Documentation */}
        <DateReportSelector
          reports={reports}
          selectedReportId={selectedReportId}
          onSelectReport={(id) => setSelectedReportId(id)}
        />

        {/* Interactive S-Curve (Recharts) & Master Time Table (17 Packages) */}
        <SCurveAndTimetable />

        {/* 3D Design Showcase (12 Pages from PDF) */}
        <Design3DShowcase />

        {/* Operational Field Personnel & Manpower (10 Workers) */}
        <ManpowerSection />

        {/* Offscreen Locked Container for Clean A4 PDF Generation (Exclusive for Admin) */}
        <div
          style={{
            position: 'fixed',
            left: '-9999px',
            top: '0',
            width: '794px',
            height: '1123px',
            zIndex: -100,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <PdfOnePageTemplate report={selectedReport} />
        </div>
      </main>

      {/* 3. Corporate Footer */}
      <footer className="mt-16 bg-[#0A2540] text-slate-400 text-xs border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            {/* Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span>Smart Greenhouse PLN UPDL Palembang</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Inisiatif modernisasi pertanian presisi terintegrasi Smart IoT, fertigasi terotomasi NFT & Drip, serta kontrol mikroklimat untuk PT PLN (Persero) UPDL Palembang.
              </p>
            </div>

            {/* Entities */}
            <div className="space-y-2">
              <div className="text-white font-bold text-xs uppercase tracking-wider">
                Kemitraan Strategis
              </div>
              <div className="text-slate-300 font-semibold">
                Pelaksana Pekerjaan:
              </div>
              <p className="text-slate-400">
                BRAIN – IPB University
              </p>
              <div className="text-slate-300 font-semibold pt-1">
                Pemilik Pekerjaan (User):
              </div>
              <p className="text-slate-400">
                PT PLN (Persero) UPDL Palembang
              </p>
            </div>

            {/* Target & Scope */}
            <div className="space-y-2">
              <div className="text-white font-bold text-xs uppercase tracking-wider">
                Parameter Proyek
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Total Lingkup:</span>
                <span className="text-white font-bold">17 Paket Pekerjaan</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Target Rampung:</span>
                <span className="text-pln-yellow font-bold">28 November 2026</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Frekuensi Laporan:</span>
                <span className="text-emerald-400 font-bold">Setiap 2 Hari (15 Siklus)</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 BRAIN IPB University & PT PLN (Persero). All rights reserved.
            </div>
            <div>
              Smart Farming Greenhouse Monitoring Portal
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Panel Modal (Triggered via /admin URL route) */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={handleCloseAdmin}
        reports={reports}
        selectedReportId={selectedReportId}
        onSelectReport={(id) => setSelectedReportId(id)}
        onSaveReport={handleSaveReport}
        onExportJson={handleExportJson}
        onResetDefault={handleResetDefault}
        onDownloadPdf={handleDownloadPdf}
        onCopyWhatsApp={handleCopyWhatsApp}
        isDownloadingPdf={isDownloadingPdf}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}

export default App;
