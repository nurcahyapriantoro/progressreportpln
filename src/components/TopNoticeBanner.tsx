import React, { useState } from 'react';
import { CalendarClock, ExternalLink, FileCheck2, Maximize2, X } from 'lucide-react';

/**
 * Top executive notice banner displayed above the hero section
 * to highlight the extended Working Permit #0030 and additional paving block work.
 */
export const TopNoticeBanner: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <section
        aria-label="Catatan Penting Proyek"
        className="rounded-2xl bg-amber-50/90 border border-amber-300/80 p-4 sm:p-5 shadow-xs"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 border border-amber-300/70 text-amber-700 flex items-center justify-center mt-0.5">
              <CalendarClock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-300">
                  Notes Penting • Working Permit #0030 Approved
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  25 Nov – 08 Des 2026 (08.00–22.00 WIB)
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Working Permit Perpanjangan No. 0030/70201000/XI/2026 telah disetujui hingga 08 Desember 2026 untuk penyelesaian konstruksi utama &amp; pengerjaan paving block tambahan pasca 28 November 2026.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disetujui digital oleh MUP PT PLN (Persero) UPDL Palembang (Ibu Sri Wigati) pada 24 Nov 2026 pukul 18.14 WIB (18 personel terdaftar). Penambahan jalur paving block meliputi area keliling luar 3000 × 800 cm dan jalur dalam 2100 cm sesuai denah terlampir.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 self-start lg:self-center">
            <a
              href="/documents/Working-Permit-0030-70201000-XI-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>Working Permit #0030 (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              type="button"
              onClick={() => setIsImageModalOpen(true)}
              className="group flex-shrink-0 flex items-center gap-3 p-2 pr-3 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all text-left"
            >
              <img
                src="/notes/denah-paving-block-tambahan.jpg"
                alt="Denah Paving Block Tambahan"
                className="w-16 h-12 object-cover rounded-lg border border-slate-200 bg-slate-100"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 group-hover:text-amber-800 transition-colors">
                  Denah Paving Block
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700">
                  <Maximize2 className="w-3 h-3" />
                  <span>Lihat Detail</span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4"
          onClick={() => setIsImageModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Detail Denah Paving Block Tambahan"
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Denah Pekerjaan Paving Block Tambahan
                </h3>
                <p className="text-xs text-slate-500">
                  Lingkup perpanjangan Working Permit #0030/70201000/XI/2026 (25 Nov – 08 Des 2026)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-100 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src="/notes/denah-paving-block-tambahan.jpg"
                alt="Denah Lengkap Paving Block Tambahan"
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
