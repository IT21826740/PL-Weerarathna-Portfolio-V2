import React from 'react';
import { MapPin } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { CareerMilestone } from '../types/portfolio';

interface TimelineSectionProps {
  milestone: CareerMilestone;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ milestone }) => {
  return (
    <section id="experience" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              MY JOURNEY
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Work Experience
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              {milestone.years}+ years of experience in branding, advertising, digital & offset printing, and creative design.
            </p>
          </div>

          <div className="p-3 bg-[#121215] border border-zinc-800 rounded-xl text-xs text-zinc-400 shrink-0">
            <span className="block text-white font-semibold">Active Experience:</span>
            <span className="font-mono text-amber-400 tabular-nums">{milestone.formattedYearsString}</span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-8">
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.isCurrent
                    ? 'bg-amber-400 border-[#09090b] shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                    : 'bg-zinc-800 border-zinc-600 group-hover:bg-zinc-700'
                }`}
              />

              <div className="bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-amber-400/90 font-medium">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-zinc-600">·</span>
                          <span className="text-zinc-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
