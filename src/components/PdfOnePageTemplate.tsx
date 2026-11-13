import React from 'react';
import { BiDailyReport } from '../types/project';

interface PdfOnePageTemplateProps {
  report: BiDailyReport;
}

export const PdfOnePageTemplate: React.FC<PdfOnePageTemplateProps> = ({ report }) => {
  const photoCount = report.photos.length;

  return (
    <div className="flex justify-center bg-slate-200 py-4 overflow-x-auto">
      {/* 
        EXACT A4 PORTRAIT SPECIFICATION (210mm x 297mm):
        Width: 794px, Height: 1123px
        Pixel-perfect layout with zero page-break overflow, fully visible narratives,
        and clean unified ON-SCHEDULE badge (no wrapping).
      */}
      <div
        id="pdf-one-page-container"
        className="w-[794px] h-[1123px] min-h-[1123px] max-h-[1123px] bg-white text-slate-800 p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden box-border font-sans select-none"
        style={{ width: '794px', height: '1123px', boxSizing: 'border-box' }}
      >
        {/* =====================================================================
            1. OFFICIAL HEADER (PLN UPDL PALEMBANG & BRAIN IPB UNIVERSITY)
        ===================================================================== */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#003366]">
            {/* Left: PLN Logo */}
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

            {/* Center: Title & Subtitle */}
            <div className="text-center px-2 flex-1 max-w-[390px]">
              <div className="text-[9.5px] font-extrabold tracking-widest text-[#003366] uppercase">
                LAPORAN PROGRES PEKERJAAN (SIKLUS #{report.cycleNumber})
              </div>
              <h1 className="text-[13.5px] font-black text-slate-900 uppercase tracking-tight leading-tight mt-0.5">
                Pembangunan Smart Greenhouse
              </h1>
              <div className="text-[9px] text-slate-500 font-semibold mt-0.5">
                Greenhouse Galvanis 8x25m • Smart IoT BRAIN • Hidroponik NFT & Drip
              </div>
            </div>

            {/* Right: BRAIN IPB Logo */}
            <div className="flex items-center justify-end">
              <img
                src="/logos/logo-brain-ipb.png"
                alt="BRAIN IPB University"
                className="h-9 w-auto object-contain max-w-[150px] shrink-0"
              />
            </div>
          </div>

          {/* =====================================================================
              2. PROJECT METADATA & 3-COLUMN PHYSICAL KPI (NO CONTRACT PRICE)
          ===================================================================== */}
          <div className="mt-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
            {/* Top Info Bar: Clean 2-Row Layout - No Truncation, Perfectly Balanced */}
            <div className="pb-2.5 border-b border-slate-200/80 space-y-1.5 text-[10px]">
              {/* Row 1: Reporting Date, Target Date, & Status Badge */}
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

                {/* Status Badge: Perfectly Centered Pill with Natural Balanced Padding */}
                <div className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/90 font-black text-[9px] uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center leading-normal shadow-2xs">
                  {report.status}
                </div>
              </div>

              {/* Row 2: Location, Weather, and Manpower (Clean Single Row, No Clipping) */}
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
                        Briefing: <strong className="text-amber-800 font-bold">09.00 WIB (Mulai 13 Nov)</strong>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Clean 3-Pillar Physical Progress (Price Removed per instructions) */}
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
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Sistem IoT & Hidroponik</div>
                <div className="text-[17px] font-black text-[#10B981] tracking-tight mt-0.5">
                  {report.iotProgress.toFixed(1)}%
                </div>
                <div className="text-[8.5px] text-slate-500 font-medium mt-0.5">Bobot: 49.84%</div>
              </div>
            </div>

            {/* Executive Summary Narrative */}
            <div className="mt-2 text-[10px] text-slate-700 leading-snug">
              <span className="font-bold text-slate-900">Ringkasan Eksekutif: </span>
              {report.executiveSummary}
            </div>
          </div>

          {/* =====================================================================
              3. ADAPTIVE PHOTO DOCUMENTATION GRID (ALL TEXT FULLY VISIBLE)
          ===================================================================== */}
          <div className="mt-2.5">
            <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center justify-between">
              <span>Dokumentasi Visual Pekerjaan Lapangan ({photoCount} Foto)</span>
              <span className="text-[8.5px] font-normal text-slate-400">Workshop Pra-Fabrikasi & Tapak Pengerjaan</span>
            </div>

            {/* 5+ Photos: 3x2 Grid */}
            {photoCount >= 5 && (
              <div className="grid grid-cols-3 gap-2">
                {report.photos.slice(0, 6).map((p, idx) => (
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

            {/* Exactly 4 Photos: 2x2 Grid */}
            {photoCount === 4 && (
              <div className="grid grid-cols-2 gap-2.5">
                {report.photos.map((p, idx) => (
                  <div key={p.id} className="bg-slate-50 rounded-xl p-2 border border-slate-200 flex flex-col justify-between">
                    <div className="h-[180px] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
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
                {report.photos.map((p, idx) => (
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
                {report.photos.map((p, idx) => (
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

            {/* 1 Photo: Centered Hero Showcase (High Impact, Zero Distortion) */}
            {photoCount === 1 && (
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 max-w-2xl mx-auto flex flex-col">
                <div className="h-[275px] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center">
                  <img
                    src={report.photos[0].url}
                    alt={report.photos[0].caption}
                    className="w-full h-auto min-h-full object-cover object-center"
                    style={{ width: '100%', height: 'auto', minHeight: '100%', display: 'block' }}
                  />
                </div>
                <div className="mt-3 px-1">
                  <div className="text-[12px] font-black text-slate-900 leading-tight">
                    1. {report.photos[0].caption}
                  </div>
                  <div className="text-[9.5px] text-slate-600 leading-relaxed mt-1 font-normal">
                    {report.photos[0].narrative}
                  </div>
                </div>
              </div>
            )}

            {/* 0 Photos: Kickoff Box */}
            {photoCount === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 p-8 bg-slate-50/80 text-center">
                <div className="text-[12.5px] font-bold text-slate-800">
                  Tahap Kickoff & Finalisasi Administrasi Shop Drawing
                </div>
                <p className="text-[10px] text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                  Pada siklus awal pekerjaan, tim teknis berfokus pada penyelesaian Shop Drawing struktur 8x25m, izin kerja SMK3, serta koordinasi pengadaan material pipa galvanis ke workshop pra-fabrikasi Depok.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================================
            4. NEXT STEPS, MILESTONE BAR, & OFFICIAL SIGN-OFF FOOTER
        ===================================================================== */}
        <div>
          {report.nextSteps && report.nextSteps.length > 0 && (
            <div className="mt-2 bg-amber-50/80 rounded-xl p-2 border border-amber-200/70 text-[9px]">
              <div className="font-extrabold text-amber-900 uppercase tracking-wide mb-1">
                Rencana Kerja 2 Hari Berikutnya:
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
            <span>Tenaga Kerja: <strong className="text-slate-600">{report.manpowerCount ? `${report.manpowerCount} Personel Aktif Lapangan` : '10 Personel Lapangan'} {report.briefingSchedule ? '(Briefing Pagi 09.00 WIB)' : ''}</strong></span>
            <span>Kualifikasi K3: <strong className="text-emerald-700">Working Permit #0018 Approved • Lembur 08.00–22.00 WIB</strong></span>
          </div>

          {/* =====================================================================
              5. OFFICIAL SIGN-OFF FOOTER
          ===================================================================== */}
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
              <span className="text-slate-400">Verifikasi Dokumen: </span>
              <span className="font-mono text-slate-700 font-semibold">GH-PLN-{report.dateStr.replace(/-/g, '')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
