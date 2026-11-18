import React from 'react';
import { Mail, MapPin, Phone, Calendar, Download, Award, Printer, Palette, Sparkles } from 'lucide-react';
import { CareerMilestone } from '../types/portfolio';
import { formatAnniversaryDate } from '../utils/experienceCalculator';

interface AboutSectionProps {
  milestone: CareerMilestone;
  onOpenExperienceSettings: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ milestone, onOpenExperienceSettings }) => {
  return (
    <section id="about" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Summary & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                BIOGRAPHY & PRODUCTION BACKGROUND
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Creative Graphic Designer with Deep Print Engineering Mastery
              </h2>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed">
              I am a dedicated Graphic Designer with{' '}
              <strong className="text-white font-semibold">
                more than {milestone.years} years of continuous professional experience
              </strong>{' '}
              in branding, advertising, commercial print production, vehicle wraps, and 3D architectural visualization.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Currently serving at <strong>Sudarshana Advertising</strong> managing digital print machinery and nationwide advertising campaigns, while simultaneously partnering with businesses and private clients as an independent graphic designer.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              My technical background bridges digital brand design and industrial print manufacturing—ranging from RGB digital workflows to CMYK 4-color offset pre-press separations, Pantone spot inks, die-cutting plate engineering, and full vehicular wraps.
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
                <Palette className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-white">Visual Identity</h4>
                <p className="text-xs text-zinc-400 mt-1">Branding systems, logos, typography & guidelines.</p>
              </div>

              <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
                <Printer className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-white">Print Production</h4>
                <p className="text-xs text-zinc-400 mt-1">Digital, offset, die-lines, spot UV & foil stamping.</p>
              </div>

              <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-white">3D & Large Format</h4>
                <p className="text-xs text-zinc-400 mt-1">Vehicle wraps, hoardings, Maya & AutoCAD models.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Dynamic Experience Breakdown */}
          <div className="lg:col-span-5 bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-zinc-800/80 pb-4">
              Professional Information
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Full Name
                </span>
                <span className="font-semibold text-white">PL Weerarathna</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" /> Professional Experience
                </span>
                <div className="text-right">
                  <span className="font-semibold text-amber-400 font-mono tabular-nums block">
                    {milestone.formattedYearsString} ({milestone.years}+ Years)
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    Next milestone: {formatAnniversaryDate(milestone.nextAnniversaryDate)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Location
                </span>
                <span className="font-semibold text-white">Hikkaduwa, Sri Lanka</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" /> Direct Email
                </span>
                <a
                  href="mailto:plweerarathna41@gmail.com"
                  className="font-medium text-white hover:text-amber-400 transition-colors"
                >
                  plweerarathna41@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" /> Mobile / WhatsApp
                </span>
                <a
                  href="tel:+94756492993"
                  className="font-mono text-white hover:text-amber-400 transition-colors"
                >
                  +94 75 6492993
                </a>
              </div>
            </div>

            {/* Anniversary Details Card */}
            <div className="p-4 bg-zinc-950/80 border border-zinc-800/80 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Career Commencement:</span>
                <span className="font-mono text-zinc-200">{formatAnniversaryDate(milestone.startDate)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Total Tracked Industry Days:</span>
                <span className="font-mono text-amber-400 tabular-nums">{milestone.totalDays.toLocaleString()} Days</span>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={onOpenExperienceSettings}
                  className="text-[11px] text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Configure Anniversary Date
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 py-3 px-4 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Start a Design Project
              </a>
              <a
                href="/files/CV.pdf"
                download="PL_Weerarathna_CV.pdf"
                className="py-3 px-4 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                Download CV
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
