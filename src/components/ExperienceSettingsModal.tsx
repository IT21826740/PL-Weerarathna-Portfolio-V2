import React, { useState } from 'react';
import { X, Calendar, RefreshCw, Check, Clock } from 'lucide-react';
import { CareerMilestone } from '../types/portfolio';
import { formatAnniversaryDate } from '../utils/experienceCalculator';

interface ExperienceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  milestone: CareerMilestone;
  onUpdateStartDate: (newDate: string) => void;
  onResetToDefault: () => void;
}

export const ExperienceSettingsModal: React.FC<ExperienceSettingsModalProps> = ({
  isOpen,
  onClose,
  milestone,
  onUpdateStartDate,
  onResetToDefault,
}) => {
  const [inputDate, setInputDate] = useState(milestone.startDate);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputDate) return;
    onUpdateStartDate(inputDate);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#121215] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6 text-zinc-100 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Career Anniversary Settings</h3>
              <p className="text-xs text-zinc-400">Automated experience calculation & milestone tracking</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="startDateInput" className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
              Career Commencement Date
            </label>
            <input
              id="startDateInput"
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-mono"
              required
            />
            <p className="mt-1.5 text-xs text-zinc-400">
              Set the date you began your graphic design career (UP Printers foundation: January 15, 2019).
            </p>
          </div>

          {/* Current Live Stats Breakdown */}
          <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Completed Experience:</span>
              <span className="font-semibold text-white font-mono tabular-nums">
                {milestone.years} Years, {milestone.months} Months ({milestone.totalDays.toLocaleString()} Days)
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Next Career Anniversary:</span>
              <span className="font-semibold text-amber-400 font-mono">
                {formatAnniversaryDate(milestone.nextAnniversaryDate)}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Countdown to Next Milestone:</span>
              <span className="font-semibold text-white font-mono tabular-nums">
                {milestone.daysUntilNextAnniversary} Days remaining
              </span>
            </div>

            {/* Progress bar towards next year */}
            <div className="pt-2">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                <span>Progress toward Year {milestone.years + 1}</span>
                <span className="font-mono tabular-nums">{milestone.progressPercentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-500"
                  style={{ width: `${milestone.progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80 gap-3">
            <button
              type="button"
              onClick={onResetToDefault}
              className="px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset to Jan 2019
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-medium text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl font-semibold transition-colors flex items-center gap-1.5"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Saved!
                  </>
                ) : (
                  'Apply Date'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
