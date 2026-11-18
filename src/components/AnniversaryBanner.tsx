import React, { useState } from 'react';
import { Calendar, ChevronRight, Sliders, Sparkles, X } from 'lucide-react';
import { CareerMilestone } from '../types/portfolio';
import { formatAnniversaryDate } from '../utils/experienceCalculator';

interface AnniversaryBannerProps {
  milestone: CareerMilestone;
  onOpenSettings: () => void;
}

export const AnniversaryBanner: React.FC<AnniversaryBannerProps> = ({ milestone, onOpenSettings }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Career anniversary updates" className="w-full bg-[#111116] border-b border-zinc-800 text-zinc-200 py-2.5 px-4 text-xs transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="p-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md shrink-0">
            <Calendar className="w-3.5 h-3.5" />
          </span>
          <p className="leading-snug">
            <strong className="text-white font-semibold">Live Experience Anniversary:</strong>{' '}
            <span className="text-zinc-300">
              Completed <strong className="text-amber-400 font-mono tabular-nums">{milestone.years} Years & {milestone.months} Months</strong> · Next milestone ({milestone.years + 1} Years) in{' '}
              <strong className="text-white font-mono tabular-nums">{milestone.daysUntilNextAnniversary} days</strong> on {formatAnniversaryDate(milestone.nextAnniversaryDate)}.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSettings}
            className="text-[11px] font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline underline-offset-4"
          >
            <span>Anniversary Settings</span>
            <ChevronRight className="w-3 h-3" />
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
