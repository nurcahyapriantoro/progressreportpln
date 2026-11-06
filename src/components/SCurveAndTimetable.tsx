import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  BarChart3, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Layers, 
  Info,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { WORK_PACKAGES, SCURVE_DATA } from '../data/scurveAndTimetable';
import { WorkPackageCategory } from '../types/project';

type CurveFilter = 'gabungan' | 'sipil' | 'iot';
type TableFilter = 'all' | 'sipil' | 'iot_hidroponik';

export const SCurveAndTimetable: React.FC = () => {
  const [curveFilter, setCurveFilter] = useState<CurveFilter>('gabungan');
  const [tableFilter, setTableFilter] = useState<TableFilter>('all');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'pkg-1': true,
    'pkg-5': true,
    'pkg-13': true,
    'pkg-15': true,
  });

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    WORK_PACKAGES.forEach((p) => { all[p.id] = true; });
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  // Transform data for recharts depending on curveFilter
  const chartData = SCURVE_DATA.map((item) => {
    let plan = item.planCombinedCumulative;
    let actual = item.actualCombinedCumulative;

    if (curveFilter === 'sipil') {
      plan = item.planCivilCumulative;
      actual = item.actualCivilCumulative;
    } else if (curveFilter === 'iot') {
      plan = item.planIotCumulative;
      actual = item.actualIotCumulative;
    }

    return {
      label: item.label,
      date: item.date,
      plan: Number(plan.toFixed(2)),
      actual: actual !== null ? Number(actual.toFixed(2)) : null,
    };
  });

  const filteredPackages = WORK_PACKAGES.filter((p) => {
    if (tableFilter === 'sipil') return p.scope === 'sipil';
    if (tableFilter === 'iot_hidroponik') return p.scope === 'iot_hidroponik';
    return true;
  });

  return (
    <section id="kurva-s-dan-rab" className="space-y-6">
      {/* =========================================================================
          SECTION TITLE
      ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-pln-blue" />
            <span>Kurva S & Master Time Table 28 November 2026</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Monitoring deviasi rencana vs realisasi fisik 17 paket pekerjaan
          </p>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE S-CURVE CARD (RECHARTS)
      ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Grafik Kurva S (Plan vs Actual)
            </h3>
            <p className="text-xs text-slate-500">
              Interval pelaporan 2 harian hingga milestone 100% pada 28 November 2026
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setCurveFilter('gabungan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                curveFilter === 'gabungan'
                  ? 'bg-white text-pln-blue shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kurva S Gabungan
            </button>
            <button
              onClick={() => setCurveFilter('sipil')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                curveFilter === 'sipil'
                  ? 'bg-white text-pln-blue shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sipil (1-10)
            </button>
            <button
              onClick={() => setCurveFilter('iot')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                curveFilter === 'iot'
                  ? 'bg-white text-pln-blue shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              IoT & Hidroponik (11-17)
            </button>
          </div>
        </div>

        {/* Recharts Area */}
        <div className="h-72 sm:h-88 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis 
                dataKey="label" 
                tick={{ fontSize: 11, fill: '#64748B' }}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <YAxis 
                domain={[0, 100]} 
                ticks={[0, 20, 40, 60, 80, 100]}
                tick={{ fontSize: 11, fill: '#64748B' }}
                tickFormatter={(val) => `${val}%`}
                axisLine={{ stroke: '#E2E8F0' }}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value: any, name: any) => [
                  `${value}%`,
                  name === 'plan' ? 'Rencana (Plan)' : 'Realisasi Aktual'
                ]}
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  border: '1px solid #E2E8F0',
                  fontSize: '12px',
                }}
              />
              <Legend 
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ paddingBottom: '10px', fontSize: '12px' }}
                formatter={(val) => (val === 'plan' ? 'Rencana (Target 28 Nov 100%)' : 'Realisasi Aktual Lapangan')}
              />
              {/* Plan Line */}
              <Line
                type="monotone"
                dataKey="plan"
                stroke="#94A3B8"
                strokeWidth={2.5}
                strokeDasharray="4 4"
                dot={{ r: 3, fill: '#94A3B8' }}
                activeDot={{ r: 5 }}
                name="plan"
              />
              {/* Actual Line */}
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#00A2E9"
                strokeWidth={3.5}
                dot={{ r: 5, fill: '#00A2E9', stroke: '#FFFFFF', strokeWidth: 2 }}
                activeDot={{ r: 7 }}
                connectNulls={false}
                name="actual"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Status Note */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 rounded-xl text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1 bg-[#00A2E9] rounded-full" />
            <span>Realisasi Aktual Siklus 05 Nov: <strong className="text-slate-900 font-bold">10.00%</strong> (On Schedule)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-1 bg-slate-400 border-dashed rounded-full" />
            <span>Target Akhir: <strong className="text-slate-900 font-bold">100.00% pada 28 Nov 2026</strong></span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MASTER TIME TABLE (17 LINGKUP PEKERJAAN - NO RUPIAH AMOUNTS)
      ========================================================================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Master Time Table & 17 Paket Lingkup Pekerjaan
            </h3>
            <p className="text-xs text-slate-500">
              Daftar volume, satuan, dan bobot pekerjaan (tanpa rincian harga satuan)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs">
              <button
                onClick={() => setTableFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  tableFilter === 'all'
                    ? 'bg-white text-pln-blue shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua (17 Paket)
              </button>
              <button
                onClick={() => setTableFilter('sipil')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  tableFilter === 'sipil'
                    ? 'bg-white text-pln-blue shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sipil (1-10)
              </button>
              <button
                onClick={() => setTableFilter('iot_hidroponik')}
                className={`px-3 py-1.5 rounded-lg font-bold transition ${
                  tableFilter === 'iot_hidroponik'
                    ? 'bg-white text-pln-blue shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                IoT-Hidroponik (11-17)
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-xs">
              <button
                onClick={expandAll}
                className="px-2.5 py-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
              >
                Buka Semua
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
              >
                Tutup Semua
              </button>
            </div>
          </div>
        </div>

        {/* Packages Accordion List */}
        <div className="space-y-3">
          {filteredPackages.map((pkg) => {
            const isExpanded = !!expandedCategories[pkg.id];
            const isCivil = pkg.scope === 'sipil';

            return (
              <div
                key={pkg.id}
                className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all bg-white"
              >
                {/* Category Header Bar */}
                <div
                  onClick={() => toggleCategory(pkg.id)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors select-none"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                        isCivil ? 'bg-blue-50 text-pln-blue' : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {pkg.categoryNo}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {pkg.name}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {pkg.subItems.length} sub-pekerjaan • {isCivil ? 'Lingkup Sipil' : 'Lingkup IoT & Hidroponik'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs font-extrabold text-slate-800">
                        {pkg.totalWeightPct.toFixed(2)}%
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Bobot Kategori
                      </div>
                    </div>
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Sub-Items Table */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/40 p-3 sm:p-4 overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                          <th className="py-2 px-2 w-12">No</th>
                          <th className="py-2 px-3">Uraian Pekerjaan</th>
                          <th className="py-2 px-3 text-right">Volume</th>
                          <th className="py-2 px-2 text-center">Sat</th>
                          <th className="py-2 px-3 text-right">Bobot (%)</th>
                          <th className="py-2 px-3 text-center">Alokasi Hari</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {pkg.subItems.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-100/60 transition-colors">
                            <td className="py-2.5 px-2 text-slate-400 font-mono text-[11px]">
                              {item.no}
                            </td>
                            <td className="py-2.5 px-3 font-semibold text-slate-800">
                              {item.description}
                            </td>
                            <td className="py-2.5 px-3 text-right font-mono font-medium text-slate-700">
                              {item.volume.toLocaleString('id-ID')}
                            </td>
                            <td className="py-2.5 px-2 text-center text-slate-500">
                              {item.unit}
                            </td>
                            <td className="py-2.5 px-3 text-right font-mono font-bold text-pln-blue">
                              {item.weightPct.toFixed(2)}%
                            </td>
                            <td className="py-2.5 px-3 text-center text-slate-500 text-[11px]">
                              Hari ke-{item.startDay}{item.startDay !== item.endDay ? ` s.d ${item.endDay}` : ''} ({item.durationDays} hr)
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
