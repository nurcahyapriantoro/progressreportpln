import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarHeaderProps {
  targetDaysRemaining: number;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ targetDaysRemaining }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Subtle Corporate Tricolor Top Bar */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-[#003366]" title="IPB University Deep Navy" />
        <div className="w-1/2 bg-[#00A2E9]" title="PLN Corporate Electric Blue" />
        <div className="w-1/6 bg-[#FFD100]" title="PLN Energy Accent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Left: PLN Logo & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center p-1 bg-white rounded-xl shadow-xs border border-slate-100">
              <img
                src="/logos/logo-pln.png"
                alt="PT PLN (Persero)"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 leading-tight">
                PT PLN (Persero)
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-pln-blue leading-tight">
                UPDL Palembang
              </span>
              <span className="text-[10px] text-slate-500 hidden sm:inline leading-tight">
                Smart Farming Greenhouse Project
              </span>
            </div>
          </div>

          {/* Center: Partnership Divider & IPB BRAIN Logo */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block h-9 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-2.5">
              <img
                src="/logos/logo-brain-ipb.png"
                alt="BRAIN IPB University"
                className="h-9 sm:h-11 w-auto object-contain max-w-[150px] sm:max-w-[200px]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right: Status Countdown Pill (No Admin Button) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">Target: 28 Nov 2026</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900 text-[10px] font-bold">
                {targetDaysRemaining > 0 ? `${targetDaysRemaining} Hari Lagi` : 'Tuntas'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
