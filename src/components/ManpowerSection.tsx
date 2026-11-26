import React from 'react';
import { Users, HardHat, CheckCircle2, FileCheck2, ExternalLink } from 'lucide-react';
import { MANPOWER_LIST } from '../data/manpower';

export const ManpowerSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-black text-pln-blue uppercase tracking-widest">
            <HardHat className="w-4 h-4 text-amber-500" />
            <span>Manpower & Tim Kerja Lapangan</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2.5">
            <span>Daftar Tenaga Kerja</span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-pln-blue text-xs font-black border border-blue-200">
              {MANPOWER_LIST.length} Orang
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Daftar personel resmi terdaftar pada Working Permit Inspekta No. 0030/70201000/XI/2026 untuk pekerjaan Smart Greenhouse PLN UPDL Palembang.
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-pln-blue text-xs font-bold border border-blue-200 shadow-2xs">
            <span>Briefing Pagi: <strong>Rutin 08.00–09.00 WIB</strong></span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{MANPOWER_LIST.length} Personel Terdaftar (WP #0030)</span>
          </span>
          <a
            href="/documents/Working-Permit-0030-70201000-XI-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-2xs transition-colors"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>WP #0030 (PDF)</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>

      {/* Grid of Workers (Clean Names Only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
        {MANPOWER_LIST.map((worker) => {
          const initials = worker.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

          return (
            <div
              key={worker.id}
              className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-pln-blue/40 shadow-2xs hover:shadow-xs transition-all flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono font-bold text-slate-400 leading-none mb-1">
                  #{String(worker.id).padStart(2, '0')}
                </div>
                <h4 className="text-xs font-extrabold text-slate-900 leading-snug truncate" title={worker.name}>
                  {worker.name}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Note */}
      <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-pln-blue flex items-center justify-center shrink-0">
          <Users className="w-4 h-4" />
        </div>
        <p className="text-[11.5px] leading-relaxed">
          Seluruh <strong>{MANPOWER_LIST.length} tenaga kerja</strong> di atas tercantum resmi dalam <strong>Working Permit Inspekta No. 0030/70201000/XI/2026</strong> (berlaku <strong>25 Nov – 08 Des 2026, pukul 08.00–22.00 WIB</strong>) untuk pelaksanaan pekerjaan di PLN UPDL Palembang / Indralaya setelah sebelumnya mengacu pada WP #0018. <strong>Briefing K3 pagi rutin dilaksanakan</strong> sebelum aktivitas lapangan dimulai.
        </p>
      </div>
    </section>
  );
};
