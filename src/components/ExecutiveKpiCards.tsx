import React from 'react';
import { 
  TrendingUp, 
  Layers, 
  Calendar, 
  Coins, 
  CheckCircle2, 
  Truck, 
  Wrench, 
  Cpu, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { BiDailyReport, PipelineStage } from '../types/project';

interface ExecutiveKpiCardsProps {
  report: BiDailyReport;
  targetDaysRemaining: number;
}

const PIPELINE_STAGES: {
  id: PipelineStage;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}[] = [
  {
    id: 'workshop_depok',
    label: '1. Fabrikasi Depok',
    sublabel: 'Rangka & Meja Modular',
    icon: Wrench,
  },
  {
    id: 'qc_packing',
    label: '2. QC & Muat Depok',
    sublabel: 'Muat: 10 Nov 2026',
    icon: CheckCircle2,
  },
  {
    id: 'ekspedisi',
    label: '3. Ekspedisi & Dropping',
    sublabel: 'Tiba: 12–15 Nov (Indralaya)',
    icon: Truck,
  },
  {
    id: 'erection_palembang',
    label: '4. Erection Palembang',
    sublabel: 'Pondasi, Rangka & Net',
    icon: Layers,
  },
  {
    id: 'iot_bast',
    label: '5. Smart IoT & BAST',
    sublabel: 'Uji Fungsi & Serah Terima',
    icon: Cpu,
  },
];

export const ExecutiveKpiCards: React.FC<ExecutiveKpiCardsProps> = ({
  report,
  targetDaysRemaining,
}) => {
  // Determine active pipeline stage index
  const currentStageIndex = PIPELINE_STAGES.findIndex(s => s.id === report.pipelineStage);
  const activeIdx = currentStageIndex >= 0 ? currentStageIndex : 0;

  return (
    <div className="space-y-6">
      {/* =========================================================================
          EXECUTIVE HERO BANNER (IPB DEEP NAVY #0A2540)
      ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#003366] to-[#041E38] text-white p-6 sm:p-8 shadow-xl border border-blue-900/40">
        {/* Subtle Decorative Pattern */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-pln-cyan/10 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -bottom-20 w-64 h-64 rounded-full bg-pln-yellow/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                STATUS: {report.status}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-xs">
                Siklus #{report.cycleNumber} ({report.displayDate})
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Pembangunan Smart Greenhouse <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pln-cyan via-sky-300 to-pln-yellow">
                PLN UPDL Palembang
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Monitoring eksekutif berkala per 2 hari oleh <strong className="text-white font-semibold">BRAIN IPB University</strong> untuk <strong className="text-white font-semibold">PT PLN (Persero) UPDL Palembang</strong>.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pln-cyan" />
                <span>Posisi Pekerjaan: <strong className="text-white">{report.location}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-pln-yellow" />
                <span>Target BAST: <strong className="text-pln-yellow">28 November 2026</strong> ({targetDaysRemaining > 0 ? `${targetDaysRemaining} hari lagi` : 'Tuntas'})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4 EXECUTIVE KPI CARDS (3-SECOND RULE)
      ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Physical Progress */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Progres Fisik Total
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-pln-blue flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {report.cumulativeProgress.toFixed(1)}%
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              {report.progressDelta >= 0 ? `+${report.progressDelta.toFixed(1)}%` : `${report.progressDelta.toFixed(1)}%`}
            </span>
          </div>
          {/* Dual tone progress bar */}
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
            <div
              className="bg-pln-cyan h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, report.cumulativeProgress)}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Siklus #{report.cycleNumber}</span>
            <span>Target: 100% (28 Nov)</span>
          </div>
        </div>

        {/* Card 2: Breakdown Sipil vs IoT */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Rincian Lingkup Fisik
            </span>
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </div>
          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Pekerjaan Sipil (50.16%):</span>
                <span className="text-pln-blue font-extrabold">{report.civilProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#003366] h-full rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, report.civilProgress)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>IoT & Hidroponik (49.84%):</span>
                <span className="text-emerald-600 font-extrabold">{report.iotProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#10B981] h-full rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, report.iotProgress)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Target Countdown */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Target Penyelesaian
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-extrabold text-slate-900">
              28 Nov 2026
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{targetDaysRemaining > 0 ? `${targetDaysRemaining} Hari Kerja Tersisa` : 'Waktu Selesai'}</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-500">
            Jadwal terkunci akselerasi 28 hari kalender
          </div>
        </div>

        {/* Card 4: Total Scope Packages (No Price/Contract Amount) */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Paket Pekerjaan
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900 mb-1">
            17 Paket Penuh
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Lingkup: GH 200 m², Kanopi Kolam 32 m², NFT 100 m², Drip 100 m², Vertical Farming, Smart IoT Display 24"
          </p>
        </div>
      </div>

      {/* =========================================================================
          5-STAGE EXECUTION PIPELINE TRACKER (DEPOK -> PALEMBANG)
      ========================================================================= */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pln-cyan" />
              Pipeline Eksekusi Logistik & Konstruksi (Depok → Palembang)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Alur perpindahan bertahap dari workshop pra-fabrikasi knock-down menuju tapak PLN UPDL Palembang
            </p>
          </div>
          <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 w-fit">
            Tahap Aktif: <strong className="text-pln-blue">{report.pipelineStageLabel}</strong>
          </div>
        </div>

        {/* Step Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {PIPELINE_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isPast = idx < activeIdx;
            const isCurrent = idx === activeIdx;

            return (
              <div
                key={stage.id}
                className={`relative flex sm:flex-col items-center sm:items-start p-3 sm:p-3.5 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-blue-50/80 border-pln-blue ring-2 ring-pln-blue/20 shadow-xs'
                    : isPast
                    ? 'bg-slate-50 border-emerald-200'
                    : 'bg-white border-slate-200/70 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:mb-2 mr-3 sm:mr-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isCurrent
                        ? 'bg-pln-blue text-white shadow-xs'
                        : isPast
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isCurrent && (
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-pln-blue text-white">
                      Aktif
                    </span>
                  )}
                  {isPast && (
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">
                      Selesai
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-bold leading-tight ${isCurrent ? 'text-pln-blue' : isPast ? 'text-slate-800' : 'text-slate-500'}`}>
                    {stage.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {stage.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logistics Dropping & Coordination Alert with PLN Indralaya */}
        <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-emerald-50/80 border border-blue-200/80 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-pln-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    Rencana Dropping & Koordinasi Lapangan PLN Indralaya
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Jadwal Terkonfirmasi
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Pemuatan material modular di <strong>Workshop Depok: 10 November 2026</strong>. Estimasi armada ekspedisi tiba di site <strong>PLN UPDL Indralaya/Palembang: 12 – 15 November 2026</strong> untuk dropping material dan persiapan tapak konstruksi.
                </p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col sm:items-end gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-blue-200/60">
              <div className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-blue-100 shadow-2xs whitespace-nowrap">
                Muat di Depok: <strong className="text-pln-blue">10 Nov 2026</strong>
              </div>
              <div className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs whitespace-nowrap">
                ETA Palembang: <strong className="text-emerald-700">12 – 15 Nov 2026</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
