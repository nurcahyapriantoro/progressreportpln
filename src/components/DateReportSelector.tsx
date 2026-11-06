import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  FileText, 
  Copy, 
  Maximize2, 
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { BiDailyReport, ProgressPhoto } from '../types/project';

interface DateReportSelectorProps {
  reports: BiDailyReport[];
  selectedReportId: string;
  onSelectReport: (reportId: string) => void;
  onCopyWhatsApp: () => void;
}

export const DateReportSelector: React.FC<DateReportSelectorProps> = ({
  reports,
  selectedReportId,
  onSelectReport,
  onCopyWhatsApp,
}) => {
  const [activePhotoModal, setActivePhotoModal] = useState<ProgressPhoto | null>(null);

  const selectedReport = reports.find((r) => r.id === selectedReportId) || reports[2]; // Default 05 Nov

  return (
    <section id="laporan-harian" className="space-y-6">
      {/* =========================================================================
          SECTION TITLE & DATE PILL CAROUSEL BAR
      ========================================================================= */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pln-blue" />
              <span>Pilih Siklus Laporan (Setiap 2 Hari)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Geser horizontal untuk memilih tanggal laporan (01 Nov s.d. 28 Nov 2026)
            </p>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Siklus Terkini: <strong>05 Nov 2026</strong></span>
          </div>
        </div>

        {/* Swipeable Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
          {reports.map((rep) => {
            const isSelected = rep.id === selectedReport.id;
            const isLatest = rep.isLatestActive;

            return (
              <button
                key={rep.id}
                onClick={() => onSelectReport(rep.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center px-4 py-2.5 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-pln-blue text-white shadow-md shadow-sky-500/20 ring-2 ring-pln-blue ring-offset-2'
                    : rep.isCompleted
                    ? 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-400 border border-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className={`text-xs font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                    {rep.shortDate}
                  </span>
                  {isLatest && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <span className={`text-[10px] font-semibold mt-0.5 ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>
                  {rep.isCompleted ? `${rep.cumulativeProgress.toFixed(1)}%` : 'Rencana'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          SELECTED REPORT DETAIL CARD
      ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        {/* Report Header Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-pln-blue text-xs font-extrabold border border-blue-100">
                Laporan Siklus #{selectedReport.cycleNumber}
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                selectedReport.isCompleted 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80' 
                  : 'bg-amber-50 text-amber-700 border border-amber-200/80'
              }`}>
                {selectedReport.status}
              </span>
              {selectedReport.isLatestActive && (
                <span className="px-2.5 py-1 rounded-full bg-pln-yellow/20 text-amber-900 text-xs font-extrabold border border-pln-yellow/40">
                  Laporan Aktif Terbaru
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Periode {selectedReport.displayDate}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pln-blue" />
                <span>Lokasi: <strong className="text-slate-700">{selectedReport.location}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Tahapan: <strong className="text-slate-700">{selectedReport.pipelineStageLabel}</strong></span>
              </div>
            </div>
          </div>

          {/* Share Action */}
          <div className="flex items-center gap-2.5 self-start lg:self-auto">
            <button
              onClick={onCopyWhatsApp}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition active:scale-95 shadow-2xs"
              title="Salin pesan siap kirim WhatsApp untuk grup koordinasi PLN"
            >
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Salin Teks WA</span>
            </button>
          </div>
        </div>

        {/* Executive Narrative */}
        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60">
          <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-pln-blue" />
            <span>Ringkasan Eksekutif Pekerjaan</span>
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {selectedReport.executiveSummary}
          </p>
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap gap-4 text-xs">
            <div>
              <span className="text-slate-500">Progres Kumulatif: </span>
              <strong className="text-slate-900 font-bold">{selectedReport.cumulativeProgress.toFixed(1)}%</strong>
            </div>
            <div>
              <span className="text-slate-500">Sipil: </span>
              <strong className="text-pln-blue font-bold">{selectedReport.civilProgress.toFixed(1)}%</strong>
            </div>
            <div>
              <span className="text-slate-500">IoT & Hidroponik: </span>
              <strong className="text-emerald-600 font-bold">{selectedReport.iotProgress.toFixed(1)}%</strong>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ADAPTIVE PHOTO DOCUMENTATION GRID
        ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pln-blue" />
              <span>Dokumentasi Visual Lapangan ({selectedReport.photos.length} Foto)</span>
            </h4>
            <span className="text-[11px] text-slate-400">Klik foto untuk memperbesar</span>
          </div>

          {selectedReport.photos.length === 0 ? (
            /* No photos state (e.g. Kickoff 01 Nov) */
            <div className="rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center bg-slate-50/50">
              <Sparkles className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-700">
                Tahap Kickoff & Finalisasi Administrasi Desain
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                Pada periode ini fokus pekerjaan adalah pematangan Shop Drawing, koordinasi SMK3, dan pemesanan logistik pipa hollow. Dokumentasi foto lapangan dimulai aktif sejak fabrikasi workshop Depok.
              </p>
            </div>
          ) : (
            /* Adaptive Grid: 2 columns if 2 photos, 2x2 if 4 photos */
            <div
              className={`grid gap-5 ${
                selectedReport.photos.length <= 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}
            >
              {selectedReport.photos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoModal(photo)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-card-hover hover:border-pln-cyan transition-all cursor-pointer flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold">
                      Foto #{index + 1}
                    </div>
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Caption & Technical Narrative */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-pln-blue transition-colors">
                        {photo.caption}
                      </h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {photo.narrative}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =========================================================================
            NEXT STEPS BOX ("RENCANA KERJA 2 HARI BERIKUTNYA")
        ========================================================================= */}
        {selectedReport.nextSteps && selectedReport.nextSteps.length > 0 && (
          <div className="rounded-2xl bg-amber-50/60 border border-amber-200/80 p-5">
            <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-amber-600" />
              <span>Rencana Kerja 2 Hari Berikutnya</span>
            </h4>
            <ul className="space-y-2">
              {selectedReport.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR FULLSCREEN PHOTO INSPECTION
      ========================================================================= */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhotoModal(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhotoModal.url}
                alt={activePhotoModal.caption}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 bg-white">
              <h4 className="text-base font-bold text-slate-900">
                {activePhotoModal.caption}
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {activePhotoModal.narrative}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
