import React from 'react';
import { BiDailyReport, ProgressPhoto } from '../types/project';

interface PdfOnePageTemplateProps {
  report: BiDailyReport;
  allReports?: BiDailyReport[];
}

interface WeeklyPhotoItem extends ProgressPhoto {
  shortDate: string;
}

export const PdfOnePageTemplate: React.FC<PdfOnePageTemplateProps> = ({ report, allReports }) => {
  const WEEKLY_DATES = ['2026-11-19', '2026-11-20', '2026-11-21', '2026-11-22'];
  const weeklyReports =
    report.id === 'report-2026-11-22' && allReports
      ? WEEKLY_DATES.map((d) => allReports.find((r) => r.dateStr === d)).filter(
          (r): r is BiDailyReport => Boolean(r)
        )
      : [];

  const isWeeklyConsolidated = report.id === 'report-2026-11-22' && weeklyReports.length > 1;

  // ===========================================================================
  // SHARED SIGN-OFF & MILESTONE FOOTER BUILDER
  // ===========================================================================
  const renderFooterSignOff = (pageNumber: number, totalPagesCount: number, includeNextSteps = true) => (
    <div>
      {includeNextSteps && report.nextSteps && report.nextSteps.length > 0 && (
        <div className="mt-2 bg-amber-50/80 rounded-xl p-2 border border-amber-200/70 text-[9px]">
          <div className="font-extrabold text-amber-900 uppercase tracking-wide mb-1">
            {isWeeklyConsolidated ? 'Rencana Kerja Minggu Berikutnya (23–28 Nov Menuju BAST 100%):' : 'Rencana Kerja 2 Hari Berikutnya:'}
          </div>
          <div className="grid grid-cols-3 gap-2 text-amber-950">
            {report.nextSteps.slice(0, 3).map((step, idx) => (
              <div key={idx} className="flex items-start gap-1">
                <span className="text-amber-600 font-bold">•</span>
                <span className="leading-tight">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mini Milestone Progress Indicator */}
      <div className="mt-2 pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 font-bold mb-1 uppercase tracking-wider">
          <span>01 Nov (Kickoff)</span>
          <span>05 Nov (Fabrikasi Depok)</span>
          <span>15 Nov (Erection Palembang)</span>
          <span>23 Nov (Testing IoT)</span>
          <span>28 Nov (BAST 100%)</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#00A2E9] h-full rounded-full"
            style={{ width: `${Math.min(100, report.cumulativeProgress)}%` }}
          />
        </div>
      </div>

      {/* Manpower & Operational Deployment Indicator */}
      <div className="mt-1.5 flex items-center justify-between text-[8px] text-slate-400">
        <span>
          Tenaga Kerja:{' '}
          <strong className="text-slate-600">
            {isWeeklyConsolidated
              ? '4–5 Personel Aktif / Hari (Briefing Pagi K3 Rutin)'
              : report.manpowerCount
                ? `${report.manpowerCount} Personel Aktif Lapangan ${report.briefingSchedule ? '(Briefing Pagi K3 Rutin)' : ''}`
                : '10 Personel Lapangan'}
          </strong>
        </span>
        <span>
          Kualifikasi K3: <strong className="text-emerald-700">Working Permit #0018 Approved • Lembur 08.00–22.00 WIB</strong>
        </span>
      </div>

      {/* OFFICIAL SIGN-OFF FOOTER */}
      <div className="mt-2 pt-1.5 border-t-2 border-slate-200 flex items-center justify-between text-[9px] text-slate-500">
        <div>
          <span className="text-slate-400">Dilaporkan oleh: </span>
          <strong className="text-slate-800">BRAIN – IPB University</strong>
        </div>
        <div>
          <span className="text-slate-400">Ditujukan kepada: </span>
          <strong className="text-slate-800">PT PLN (Persero) UPDL Palembang</strong>
        </div>
        <div>
          <span className="text-slate-400">Verifikasi: </span>
          <span className="font-mono text-slate-700 font-semibold">
            {isWeeklyConsolidated ? 'GH-PLN-WEEKLY-1922NOV' : `GH-PLN-${report.dateStr.replace(/-/g, '')}`}{' '}
            {totalPagesCount > 1 ? `• Hal. ${pageNumber}/${totalPagesCount}` : ''}
          </span>
        </div>
      </div>
    </div>
  );

  // ===========================================================================
  // MODE 1: WEEKLY CONSOLIDATED PDF (19–22 NOV 2026) — SUMMARY + ALL 23 PHOTOS
  // ===========================================================================
  if (isWeeklyConsolidated) {
    const weeklyPhotos: WeeklyPhotoItem[] = weeklyReports.flatMap((r) =>
      r.photos.map((p) => ({
        ...p,
        shortDate: r.shortDate,
      }))
    );
    const totalWeeklyPhotos = weeklyPhotos.length;
    const weeklyPhotoChunks: WeeklyPhotoItem[][] = [];
    for (let i = 0; i < weeklyPhotos.length; i += 6) {
      weeklyPhotoChunks.push(weeklyPhotos.slice(i, i + 6));
    }
    const weeklyTotalPages = 1 + weeklyPhotoChunks.length;

    const weeklyRowActivities: Record<string, string> = {
      '2026-11-19': 'Perataan tanah (cangkul & angkong), galian 2 lubang pondasi pintu, selesai galian bak tandon NFT, penyemaian bibit Pakcoy Nauli F1, & briefing K3.',
      '2026-11-20': 'Pemasangan besi dudukan plastik UV atap (full body harness), cor rabatan dasar, pasangan dinding Hebel ruang kontrol & sisi 3 lapis (60 cm).',
      '2026-11-21': 'Plesteran halus dinding Hebel depan & ruang kontrol, lanjutan bata Hebel, profil kanal & klip Insect Net, tandon NFT tertanam & selang PE drip.',
      '2026-11-22': 'Pemasangan awal lembaran atap Plastik UV 200 micron, lanjutan bata Hebel dinding keliling, & posisi lengkap 2 unit tandon air nutrisi.'
    };

    return (
      <div className="flex flex-col items-center gap-6 bg-slate-200 py-4 overflow-x-auto">
        <div id="pdf-one-page-container" className="flex flex-col gap-6">
          {/* HALAMAN 1: EXECUTIVE WEEKLY SUMMARY (19–22 NOV 2026) */}
          <div
            className="pdf-a4-page w-[794px] h-[1123px] min-h-[1123px] max-h-[1123px] bg-white text-slate-800 p-7 shadow-2xl relative flex flex-col justify-between overflow-hidden box-border font-sans select-none"
            style={{ width: '794px', height: '1123px', boxSizing: 'border-box' }}
          >
            <div>
              {/* OFFICIAL HEADER */}
              <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#003366]">
                <div className="flex items-center gap-3">
                  <img
                    src="/logos/logo-pln.png"
                    alt="PLN Logo"
                    className="h-11 w-auto object-contain shrink-0"
                  />
                  <div className="leading-tight">
                    <div className="text-[12.5px] font-black tracking-tight text-slate-900">
                      PT PLN (PERSERO)
                    </div>
                    <div className="text-[10.5px] font-bold text-[#00A2E9]">
                      UPDL PALEMBANG
                    </div>
                  </div>
                </div>

                <div className="text-center px-2 flex-1 max-w-[420px]">
                  <div className="text-[9.5px] font-extrabold tracking-widest text-[#003366] uppercase">
                    LAPORAN PROGRES MINGGUAN GABUNGAN (19–22 NOV 2026)
                  </div>
                  <h1 className="text-[13.5px] font-black text-slate-900 uppercase tracking-tight leading-tight mt-0.5">
                    Pembangunan Smart Greenhouse
                  </h1>
                  <div className="text-[8.8px] text-slate-500 font-semibold mt-0.5">
                    Siklus #17–#20 • Greenhouse Galvanis 8x25m • Smart IoT BRAIN • Hidroponik NFT &amp; Drip
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <img
                    src="/logos/logo-brain-ipb.png"
                    alt="BRAIN IPB University"
                    className="h-9 w-auto object-contain max-w-[150px] shrink-0"
                  />
                </div>
              </div>

              {/* METADATA & WEEKLY KPI SUMMARY */}
              <div className="mt-2.5 bg-slate-50 rounded-xl p-3 border border-slate-200">
                <div className="pb-2 border-b border-slate-200/80 space-y-1 text-[9.5px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-slate-500 font-medium">Periode Laporan:</span>
                        <strong className="text-slate-900 font-bold">19 – 22 November 2026 (4 Hari Kerja)</strong>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-slate-500 font-medium">Target BAST:</span>
                        <strong className="text-[#003366] font-bold">28 November 2026</strong>
                      </div>
                    </div>
                    <div className="px-3.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/90 font-black text-[8.5px] uppercase tracking-wider whitespace-nowrap">
                      {report.status}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-slate-700">
                    <div>
                      <span className="text-slate-500 font-medium">Lokasi: </span>
                      <strong className="text-slate-900 font-bold">{report.location}</strong>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span>Tenaga Kerja: <strong className="text-[#003366]">4–5 Orang/Hari</strong></span>
                      <span className="text-slate-300">•</span>
                      <span>Dokumentasi: <strong className="text-slate-900">{totalWeeklyPhotos} Foto Lengkap</strong></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                  <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                    <div className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wider">Progres Fisik Total (22 Nov)</div>
                    <div className="text-[17px] font-black text-slate-900 tracking-tight mt-0.5">
                      {report.cumulativeProgress.toFixed(1)}%
                    </div>
                    <div className="text-[8.5px] font-bold text-emerald-600 mt-0.5">
                      +12.5% selama periode 19–22 Nov (dari 75.0%)
                    </div>
                  </div>

                  <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                    <div className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wider">Lingkup Pekerjaan Sipil</div>
                    <div className="text-[17px] font-black text-[#003366] tracking-tight mt-0.5">
                      {report.civilProgress.toFixed(1)}%
                    </div>
                    <div className="text-[8.5px] text-slate-500 font-medium mt-0.5">+15.0% minggu ini • Bobot: 50.16%</div>
                  </div>

                  <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                    <div className="text-[8.5px] font-bold text-slate-500 uppercase tracking-wider">Sistem IoT &amp; Hidroponik</div>
                    <div className="text-[17px] font-black text-[#10B981] tracking-tight mt-0.5">
                      {report.iotProgress.toFixed(1)}%
                    </div>
                    <div className="text-[8.5px] text-slate-500 font-medium mt-0.5">+10.0% minggu ini • Bobot: 49.84%</div>
                  </div>
                </div>

                <div className="mt-2 text-[9.5px] text-slate-700 leading-snug">
                  <span className="font-bold text-slate-900">Summary Progress Mingguan (19–22 Nov 2026): </span>
                  Dalam kurun waktu 4 hari kerja terakhir, akselerasi konstruksi Smart Greenhouse PLN UPDL Palembang mencatat lonjakan progres kumulatif sebesar <strong className="text-emerald-700">+12,5%</strong> dari 75,0% (18 Nov) mencapai <strong className="text-slate-900">87,5%</strong> (22 Nov). Lingkup Sipil telah menuntaskan perataan tanah, galian pondasi pintu, cor rabatan &amp; pemasangan dinding Hebel ruang kontrol serta sisi keliling beserta plesterannya, pemasangan besi dudukan atap ber-body harness, profil penjepit kain Insect Net, hingga dimulainya pembentangan atap Plastik UV 200 micron. Pada Lingkup IoT &amp; Hidroponik, bibit Pakcoy Nauli F1 telah disemai pada media rockwool, kedua tandon nutrisi berkapasitas besar telah ditempatkan di area kerja (tandon NFT tertanam di bak galian), serta platform Web IoT <strong className="text-[#003366]">smartfarmpln.com</strong> siap diintegrasikan.
                </div>
              </div>

              {/* TABEL REKAPITULASI PROGRES HARIAN (19–22 NOV 2026) */}
              <div className="mt-3">
                <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>Rekapitulasi Progres Harian Gabungan (19–22 November 2026)</span>
                  <span className="text-[8px] font-semibold text-[#003366]">Siklus #17 s/d Siklus #20</span>
                </div>

                <div className="rounded-xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-left border-collapse text-[8.5px]">
                    <thead>
                      <tr className="bg-[#003366] text-white font-bold uppercase tracking-wider text-[8px]">
                        <th className="py-1.5 px-2.5 w-[72px]">Tanggal</th>
                        <th className="py-1.5 px-2.5">Aktivitas &amp; Capaian Utama Lapangan</th>
                        <th className="py-1.5 px-2 w-[92px]">Cuaca &amp; TK</th>
                        <th className="py-1.5 px-2 text-center w-[46px]">Sipil</th>
                        <th className="py-1.5 px-2 text-center w-[46px]">IoT</th>
                        <th className="py-1.5 px-2 text-center w-[52px]">Total</th>
                        <th className="py-1.5 px-2 text-center w-[42px]">Foto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {weeklyReports.map((item, idx) => (
                        <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="py-2 px-2.5 font-bold text-slate-900 align-top whitespace-nowrap">
                            <div>{item.shortDate}</div>
                            <div className="text-[7.5px] font-semibold text-[#00A2E9]">Siklus #{item.cycleNumber}</div>
                          </td>
                          <td className="py-2 px-2.5 text-slate-700 leading-snug align-top">
                            {weeklyRowActivities[item.dateStr] || item.executiveSummary}
                          </td>
                          <td className="py-2 px-2 text-slate-600 align-top leading-tight">
                            <div className="font-semibold text-slate-800">{item.manpowerCount ?? 4} Orang</div>
                            <div className="text-[7.5px] text-slate-500 mt-0.5">
                              {item.weather ? `${item.weather.morning} / ${item.weather.afternoon}` : 'Cerah'}
                            </div>
                          </td>
                          <td className="py-2 px-2 text-center font-bold text-[#003366] align-top">
                            {item.civilProgress.toFixed(1)}%
                          </td>
                          <td className="py-2 px-2 text-center font-bold text-emerald-600 align-top">
                            {item.iotProgress.toFixed(1)}%
                          </td>
                          <td className="py-2 px-2 text-center align-top">
                            <div className="font-black text-slate-900">{item.cumulativeProgress.toFixed(1)}%</div>
                            <div className="text-[7.5px] font-bold text-emerald-600">+{item.progressDelta.toFixed(1)}%</div>
                          </td>
                          <td className="py-2 px-2 text-center font-bold text-slate-700 align-top">
                            {item.photos.length}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2-COLUMN WEEKLY HIGHLIGHTS: SIPIL VS IOT & HIDROPONIK */}
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <div className="bg-blue-50/60 rounded-xl p-2.5 border border-blue-200/70">
                  <div className="text-[9px] font-extrabold text-[#003366] uppercase tracking-wider mb-1">
                    Highlight Lingkup Sipil (75,5% → 90,5%)
                  </div>
                  <ul className="space-y-1 text-[8.2px] text-slate-700 leading-snug">
                    <li>• <strong>Pek. Tanah &amp; Pondasi Pintu (19 Nov):</strong> Perataan tanah tapak dengan angkong &amp; 2 titik galian pondasi akses pintu selesai.</li>
                    <li>• <strong>Dinding Hebel &amp; Rabatan (20–21 Nov):</strong> Cor rabatan dasar, pasangan dinding Hebel ruang kontrol 3 lapis (60 cm) beserta plesteran halus depan &amp; samping.</li>
                    <li>• <strong>Atap UV &amp; Insect Net (20–22 Nov):</strong> Pemasangan besi dudukan atap ber-<em>full body harness</em>, profil kanal &amp; klip <em>insect net</em>, serta bentangan awal atap Plastik UV 200 micron.</li>
                  </ul>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-2.5 border border-emerald-200/70">
                  <div className="text-[9px] font-extrabold text-emerald-900 uppercase tracking-wider mb-1">
                    Highlight IoT &amp; Hidroponik (74,5% → 84,5%)
                  </div>
                  <ul className="space-y-1 text-[8.2px] text-slate-700 leading-snug">
                    <li>• <strong>Penyemaian Bibit (19 Nov):</strong> Penanaman benih unggul <em>Pakcoy Nauli F1</em> pada ratusan kubus <em>rockwool</em> siap pindah tanam ke meja NFT.</li>
                    <li>• <strong>2 Unit Tandon Nutrisi (21–22 Nov):</strong> Penyelesaian bak galian &amp; penanaman tandon NFT utama + penempatan tandon ke-2 irigasi Drip kapasitas besar.</li>
                    <li>• <strong>Material &amp; Web IoT:</strong> Pemilahan selang PE hitam irigasi Drip, kesiapan modul meja &amp; gully NFT, serta platform Web IoT <em>smartfarmpln.com</em> siap pasang di ruang kontrol.</li>
                  </ul>
                </div>
              </div>
            </div>

            {renderFooterSignOff(1, weeklyTotalPages, true)}
          </div>

          {/* HALAMAN 2..N: LAMPIRAN SELURUH 23 FOTO GABUNGAN (19–22 NOV 2026) */}
          {weeklyPhotoChunks.map((chunk, chunkIdx) => {
            const pageNumber = chunkIdx + 2;
            const isLastPage = chunkIdx === weeklyPhotoChunks.length - 1;
            const startPhotoNumber = chunkIdx * 6 + 1;
            const endPhotoNumber = startPhotoNumber + chunk.length - 1;
            const imgHeightClass = !isLastPage ? 'h-[195px]' : 'h-[175px]';

            return (
              <div
                key={`weekly-pdf-page-${pageNumber}`}
                className="pdf-a4-page w-[794px] h-[1123px] min-h-[1123px] max-h-[1123px] bg-white text-slate-800 p-7 shadow-2xl relative flex flex-col justify-between overflow-hidden box-border font-sans select-none"
                style={{ width: '794px', height: '1123px', boxSizing: 'border-box' }}
              >
                <div>
                  {/* Compact Continuation Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#003366]">
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/logos/logo-pln.png"
                        alt="PLN Logo"
                        className="h-9 w-auto object-contain shrink-0"
                      />
                      <div className="leading-tight">
                        <div className="text-[11px] font-black text-slate-900">
                          PT PLN (PERSERO) UPDL PALEMBANG
                        </div>
                        <div className="text-[8.5px] font-semibold text-slate-500">
                          Lampiran Dokumentasi Gabungan Periode Mingguan • 19–22 November 2026
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#003366] text-[9px] font-bold border border-slate-200">
                        Halaman {pageNumber} dari {weeklyTotalPages}
                      </span>
                      <img
                        src="/logos/logo-brain-ipb.png"
                        alt="BRAIN IPB University"
                        className="h-7 w-auto object-contain shrink-0"
                      />
                    </div>
                  </div>

                  {/* Section Title */}
                  <div className="mt-2.5 text-[9.5px] font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center justify-between">
                    <span>
                      Dokumentasi Visual Mingguan (Foto {startPhotoNumber}–{endPhotoNumber} dari {totalWeeklyPhotos} Foto • 19–22 Nov 2026)
                    </span>
                    <span className="text-[8.5px] font-normal text-slate-400">Site Indralaya / UPDL Palembang</span>
                  </div>

                  {/* 2-Column Photo Grid (up to 6 photos per page) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {chunk.map((p, idx) => (
                      <div key={p.id} className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex flex-col justify-between">
                        <div className={`${imgHeightClass} w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center`}>
                          <img
                            src={p.url}
                            alt={p.caption}
                            className="w-full h-auto min-h-full object-cover object-center"
                            style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                          />
                        </div>
                        <div className="mt-1.5 px-0.5">
                          <div className="flex items-start gap-1.5 text-[9.2px] font-bold text-slate-900 leading-tight">
                            <span className="shrink-0 px-1.5 py-0.5 rounded bg-[#003366] text-white text-[7.5px] font-extrabold uppercase">
                              {p.shortDate}
                            </span>
                            <span>{startPhotoNumber + idx}. {p.caption}</span>
                          </div>
                          <div className="text-[7.6px] text-slate-600 leading-snug mt-0.5">
                            {p.narrative}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {isLastPage ? (
                  renderFooterSignOff(pageNumber, weeklyTotalPages, false)
                ) : (
                  <div className="pt-2 border-t-2 border-slate-200 flex items-center justify-between text-[9px] text-slate-500">
                    <div>
                      <span className="text-slate-400">Dokumen: </span>
                      <strong className="text-slate-800">Laporan Progres Mingguan Smart Greenhouse (19–22 Nov 2026)</strong>
                    </div>
                    <div className="font-semibold text-[#003366]">
                      Dokumentasi Berlanjut ke Halaman {pageNumber + 1} →
                    </div>
                    <div>
                      <span className="font-mono text-slate-700 font-semibold">
                        Hal. {pageNumber} / {weeklyTotalPages}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ===========================================================================
  // MODE 2: STANDARD SINGLE-DAY REPORT (<=6 FOTO 1 PAGE, >6 FOTO MULTI-PAGE)
  // ===========================================================================
  const photoCount = report.photos.length;
  const isMultiPage = photoCount > 6;

  // For multi-page reports (>6 photos): Page 1 holds 4 photos, continuation pages hold up to 6 photos each
  const firstPagePhotos = isMultiPage ? report.photos.slice(0, 4) : report.photos;
  const continuationChunks: typeof report.photos[] = [];
  if (isMultiPage) {
    const remaining = report.photos.slice(4);
    for (let i = 0; i < remaining.length; i += 6) {
      continuationChunks.push(remaining.slice(i, i + 6));
    }
  }
  const totalPages = 1 + continuationChunks.length;

  return (
    <div className="flex flex-col items-center gap-6 bg-slate-200 py-4 overflow-x-auto">
      <div id="pdf-one-page-container" className="flex flex-col gap-6">
        {/* =====================================================================
            HALAMAN 1: HEADER, METADATA, KPI, RINGKASAN, & FOTO (MAKS 4 SAAT MULTI)
        ===================================================================== */}
        <div
          className="pdf-a4-page w-[794px] h-[1123px] min-h-[1123px] max-h-[1123px] bg-white text-slate-800 p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden box-border font-sans select-none"
          style={{ width: '794px', height: '1123px', boxSizing: 'border-box' }}
        >
          <div>
            {/* 1. OFFICIAL HEADER */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#003366]">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/logo-pln.png"
                  alt="PLN Logo"
                  className="h-11 w-auto object-contain shrink-0"
                />
                <div className="leading-tight">
                  <div className="text-[12.5px] font-black tracking-tight text-slate-900">
                    PT PLN (PERSERO)
                  </div>
                  <div className="text-[10.5px] font-bold text-[#00A2E9]">
                    UPDL PALEMBANG
                  </div>
                </div>
              </div>

              <div className="text-center px-2 flex-1 max-w-[390px]">
                <div className="text-[9.5px] font-extrabold tracking-widest text-[#003366] uppercase">
                  LAPORAN PROGRES PEKERJAAN (SIKLUS #{report.cycleNumber})
                </div>
                <h1 className="text-[13.5px] font-black text-slate-900 uppercase tracking-tight leading-tight mt-0.5">
                  Pembangunan Smart Greenhouse
                </h1>
                <div className="text-[9px] text-slate-500 font-semibold mt-0.5">
                  Greenhouse Galvanis 8x25m • Smart IoT BRAIN • Hidroponik NFT &amp; Drip
                </div>
              </div>

              <div className="flex items-center justify-end">
                <img
                  src="/logos/logo-brain-ipb.png"
                  alt="BRAIN IPB University"
                  className="h-9 w-auto object-contain max-w-[150px] shrink-0"
                />
              </div>
            </div>

            {/* 2. PROJECT METADATA & 3-COLUMN PHYSICAL KPI */}
            <div className="mt-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
              <div className="pb-2.5 border-b border-slate-200/80 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-slate-500 font-medium">Tanggal Laporan:</span>
                      <strong className="text-slate-900 font-bold">{report.displayDate}</strong>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-slate-500 font-medium">Target Selesai:</span>
                      <strong className="text-[#003366] font-bold">28 November 2026</strong>
                    </div>
                  </div>

                  <div className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/90 font-black text-[9px] uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center leading-normal shadow-2xs">
                    {report.status}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9.5px] leading-normal pt-0.5">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="text-slate-500 font-medium shrink-0">Lokasi:</span>
                    <strong className="text-slate-900 font-bold">{report.location}</strong>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 text-[9px] text-slate-700">
                    {report.weather && (
                      <span className="font-semibold text-slate-600">
                        Cuaca: <strong className="text-slate-900 font-bold">{report.weather.morning} / {report.weather.afternoon}</strong>
                      </span>
                    )}
                    {report.manpowerCount !== undefined && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="font-semibold text-slate-600">
                          Tenaga Kerja: <strong className="text-[#003366] font-bold">{report.manpowerCount} Orang</strong>
                        </span>
                      </>
                    )}
                    {report.briefingSchedule && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="font-semibold text-slate-600">
                          Briefing: <strong className="text-amber-800 font-bold">K3 Pagi Rutin</strong>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Progres Fisik Total</div>
                  <div className="text-[17px] font-black text-slate-900 tracking-tight mt-0.5">
                    {report.cumulativeProgress.toFixed(1)}%
                  </div>
                  <div className="text-[8.5px] font-bold text-emerald-600 mt-0.5">
                    {report.progressDelta >= 0 ? `+${report.progressDelta.toFixed(1)}%` : `${report.progressDelta.toFixed(1)}%`} dari siklus sebelumnya
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Lingkup Pekerjaan Sipil</div>
                  <div className="text-[17px] font-black text-[#003366] tracking-tight mt-0.5">
                    {report.civilProgress.toFixed(1)}%
                  </div>
                  <div className="text-[8.5px] text-slate-500 font-medium mt-0.5">Bobot: 50.16%</div>
                </div>

                <div className="bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Sistem IoT &amp; Hidroponik</div>
                  <div className="text-[17px] font-black text-[#10B981] tracking-tight mt-0.5">
                    {report.iotProgress.toFixed(1)}%
                  </div>
                  <div className="text-[8.5px] text-slate-500 font-medium mt-0.5">Bobot: 49.84%</div>
                </div>
              </div>

              <div className="mt-2 text-[10px] text-slate-700 leading-snug">
                <span className="font-bold text-slate-900">Ringkasan Eksekutif: </span>
                {report.executiveSummary}
              </div>
            </div>

            {/* 3. ADAPTIVE PHOTO DOCUMENTATION GRID ON PAGE 1 */}
            <div className="mt-2.5">
              <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center justify-between">
                <span>
                  Dokumentasi Visual Pekerjaan Lapangan (
                  {isMultiPage ? `Foto 1–4 dari ${photoCount} Foto` : `${photoCount} Foto`})
                </span>
                <span className="text-[8.5px] font-normal text-slate-400">Workshop Pra-Fabrikasi &amp; Tapak Pengerjaan</span>
              </div>

              {/* 5–6 Photos (Single Page 3x2 Grid) */}
              {!isMultiPage && photoCount >= 5 && (
                <div className="grid grid-cols-3 gap-2">
                  {firstPagePhotos.map((p, idx) => (
                    <div key={p.id} className="bg-slate-50 rounded-xl p-1.5 border border-slate-200 flex flex-col justify-between">
                      <div className="h-[118px] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-auto min-h-full object-cover object-center"
                          style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                        />
                      </div>
                      <div className="mt-1 px-0.5">
                        <div className="text-[9px] font-bold text-slate-900 leading-tight">
                          {idx + 1}. {p.caption}
                        </div>
                        <div className="text-[7.5px] text-slate-600 leading-snug mt-0.5">
                          {p.narrative}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 4 Photos (or first 4 of Multi-Page): 2x2 Grid */}
              {(photoCount === 4 || isMultiPage) && (
                <div className="grid grid-cols-2 gap-2.5">
                  {firstPagePhotos.map((p, idx) => (
                    <div key={p.id} className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex flex-col justify-between">
                      <div
                        className={`${isMultiPage ? 'h-[195px]' : 'h-[180px]'} w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center`}
                      >
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-auto min-h-full object-cover object-center"
                          style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                        />
                      </div>
                      <div className="mt-1.5 px-0.5">
                        <div className="text-[10px] font-bold text-slate-900 leading-tight">
                          {idx + 1}. {p.caption}
                        </div>
                        <div className="text-[8px] text-slate-600 leading-snug mt-0.5">
                          {p.narrative}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3 Photos: 3 Columns Side by Side */}
              {photoCount === 3 && (
                <div className="grid grid-cols-3 gap-2.5">
                  {firstPagePhotos.map((p, idx) => (
                    <div key={p.id} className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex flex-col justify-between">
                      <div className="h-[210px] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-auto min-h-full object-cover object-center"
                          style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                        />
                      </div>
                      <div className="mt-1.5 px-0.5">
                        <div className="text-[10px] font-bold text-slate-900 leading-tight">
                          {idx + 1}. {p.caption}
                        </div>
                        <div className="text-[8px] text-slate-600 leading-snug mt-0.5">
                          {p.narrative}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 2 Photos: 2 Columns Side by Side */}
              {photoCount === 2 && (
                <div className="grid grid-cols-2 gap-3.5">
                  {firstPagePhotos.map((p, idx) => (
                    <div key={p.id} className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
                      <div className="h-[235px] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-auto min-h-full object-cover object-center"
                          style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <div className="text-[11px] font-bold text-slate-900 leading-tight">
                          {idx + 1}. {p.caption}
                        </div>
                        <div className="text-[9px] text-slate-600 leading-relaxed mt-1">
                          {p.narrative}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 1 Photo: Centered Hero Showcase */}
              {photoCount === 1 && (
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 max-w-2xl mx-auto flex flex-col">
                  <div className="h-[275px] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
                    <img
                      src={firstPagePhotos[0].url}
                      alt={firstPagePhotos[0].caption}
                      className="w-full h-auto min-h-full object-cover object-center"
                      style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <div className="text-[12px] font-black text-slate-900 leading-tight">
                      1. {firstPagePhotos[0].caption}
                    </div>
                    <div className="text-[9.5px] text-slate-600 leading-relaxed mt-1 font-normal">
                      {firstPagePhotos[0].narrative}
                    </div>
                  </div>
                </div>
              )}

              {/* 0 Photos: Kickoff Box */}
              {photoCount === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 p-8 bg-slate-50/80 text-center">
                  <div className="text-[12.5px] font-bold text-slate-800">
                    Tahap Kickoff &amp; Finalisasi Administrasi Shop Drawing
                  </div>
                  <p className="text-[10px] text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                    Pada siklus awal pekerjaan, tim teknis berfokus pada penyelesaian Shop Drawing struktur 8x25m, izin kerja SMK3, serta koordinasi pengadaan material pipa galvanis ke workshop pra-fabrikasi Depok.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* BOTTOM SECTION OF PAGE 1 */}
          {!isMultiPage ? (
            renderFooterSignOff(1, totalPages, true)
          ) : (
            <div className="pt-2 border-t-2 border-slate-200 flex items-center justify-between text-[9px] text-slate-500">
              <div>
                <span className="text-slate-400">Dokumen: </span>
                <strong className="text-slate-800">Laporan Progres Smart Greenhouse PLN UPDL Palembang</strong>
              </div>
              <div className="font-semibold text-[#003366]">
                Dokumentasi Lengkap Berlanjut ke Halaman 2 →
              </div>
              <div>
                <span className="font-mono text-slate-700 font-semibold">
                  Hal. 1 / {totalPages}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* =====================================================================
            HALAMAN LANJUTAN (2..N) BILA JUMLAH FOTO > 6
        ===================================================================== */}
        {continuationChunks.map((chunk, chunkIdx) => {
          const pageNumber = chunkIdx + 2;
          const isLastPage = chunkIdx === continuationChunks.length - 1;
          const startPhotoNumber = 4 + chunkIdx * 6 + 1;
          const endPhotoNumber = startPhotoNumber + chunk.length - 1;

          // Optimal image height so 3 rows + footer always fit cleanly on A4 (1123px)
          const imgHeightClass = !isLastPage
            ? 'h-[205px]'
            : chunk.length >= 5
              ? 'h-[145px]'
              : 'h-[195px]';

          return (
            <div
              key={`pdf-page-${pageNumber}`}
              className="pdf-a4-page w-[794px] h-[1123px] min-h-[1123px] max-h-[1123px] bg-white text-slate-800 p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden box-border font-sans select-none"
              style={{ width: '794px', height: '1123px', boxSizing: 'border-box' }}
            >
              <div>
                {/* Compact Continuation Header */}
                <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#003366]">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/logos/logo-pln.png"
                      alt="PLN Logo"
                      className="h-9 w-auto object-contain shrink-0"
                    />
                    <div className="leading-tight">
                      <div className="text-[11px] font-black text-slate-900">PT PLN (PERSERO) UPDL PALEMBANG</div>
                      <div className="text-[8.5px] font-semibold text-slate-500">
                        Lampiran Dokumentasi Lapangan • {report.displayDate} (Siklus #{report.cycleNumber})
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#003366] text-[9px] font-bold border border-slate-200">
                      Halaman {pageNumber} dari {totalPages}
                    </span>
                    <img
                      src="/logos/logo-brain-ipb.png"
                      alt="BRAIN IPB University"
                      className="h-7 w-auto object-contain shrink-0"
                    />
                  </div>
                </div>

                {/* Section Title */}
                <div className="mt-3 text-[9.5px] font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center justify-between">
                  <span>
                    Dokumentasi Visual Pekerjaan Lapangan (Foto {startPhotoNumber}–{endPhotoNumber} dari {photoCount} Foto)
                  </span>
                  <span className="text-[8.5px] font-normal text-slate-400">{report.location}</span>
                </div>

                {/* 2-Column Photo Grid (up to 6 photos per page) */}
                <div className="grid grid-cols-2 gap-2.5">
                  {chunk.map((p, idx) => (
                    <div key={p.id} className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex flex-col justify-between">
                      <div className={`${imgHeightClass} w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center`}>
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-auto min-h-full object-cover object-center"
                          style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                        />
                      </div>
                      <div className="mt-1.5 px-0.5">
                        <div className="text-[9.5px] font-bold text-slate-900 leading-tight">
                          {startPhotoNumber + idx}. {p.caption}
                        </div>
                        <div className="text-[7.8px] text-slate-600 leading-snug mt-0.5">
                          {p.narrative}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Middle Page vs Final Page */}
              {isLastPage ? (
                renderFooterSignOff(pageNumber, totalPages, true)
              ) : (
                <div className="pt-2 border-t-2 border-slate-200 flex items-center justify-between text-[9px] text-slate-500">
                  <div>
                    <span className="text-slate-400">Dokumen: </span>
                    <strong className="text-slate-800">Laporan Progres Smart Greenhouse PLN UPDL Palembang</strong>
                  </div>
                  <div className="font-semibold text-[#003366]">
                    Dokumentasi Berlanjut ke Halaman {pageNumber + 1} →
                  </div>
                  <div>
                    <span className="font-mono text-slate-700 font-semibold">
                      Hal. {pageNumber} / {totalPages}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
