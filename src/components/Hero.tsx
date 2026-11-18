import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { CareerMilestone } from '../types/portfolio';
import { PROFILE_IMAGE } from '../data/portfolioData';

interface HeroProps {
  milestone: CareerMilestone;
  onOpenBrandManager: () => void;
  onOpenExperienceSettings: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  milestone,
  onOpenExperienceSettings,
}) => {
  return (
    <section id="home" className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                GRAPHIC DESIGN · OFFSET PRINTING · 3D VISUALIZATION
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs text-zinc-400">
                Sudarshana Advertising
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none text-balance">
              PL Weerarathna
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-zinc-300">
              Senior Graphic Designer & Digital Print Specialist
            </p>

            <p className="mt-5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Professional Graphic Designer with{' '}
              <strong className="text-white font-semibold">
                over {milestone.years} years of industry experience
              </strong>{' '}
              ({milestone.formattedYearsString}) crafting high-impact branding, packaging, vehicle wraps, 3D architectural renders, and operating commercial digital & offset printing machinery.
            </p>

            {/* Unboxed Metadata Attributes */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400">
              <span>Hikkaduwa, Sri Lanka</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Commercial Print Production</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Open to Select Commissions
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
              >
                View Selected Works
              </a>

              <a
                href="#brands"
                className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors"
              >
                Client Brands
              </a>

              <a
                href="/files/CV.pdf"
                download="PL_Weerarathna_CV.pdf"
                className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download CV
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white border border-transparent hover:border-zinc-800 rounded-xl transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Quick Anniversary Insight */}
            <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
              <span>
                Anniversary-synced: Started career Jan 2019
              </span>
              <button
                onClick={onOpenExperienceSettings}
                className="text-amber-400 hover:underline text-[11px]"
              >
                Adjust Date
              </button>
            </div>
          </div>

          {/* Right Column: High-Contrast Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Image Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                <img
                  src={PROFILE_IMAGE}
                  alt="PL Weerarathna - Graphic Designer"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                
                {/* Floating Info Overlay at bottom of portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-semibold text-white">PL Weerarathna</span>
                    <span className="block text-[11px] text-zinc-400 font-mono">Senior Graphic & Print Designer</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-amber-400 font-mono tabular-nums">
                      {milestone.years}+ Years Active
                    </span>
                    <span className="block text-[10px] text-zinc-400">
                      Live Anniversary Engine
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Quantitative KPI Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
            <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              {milestone.years}+
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-300">Years Experience</p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Auto-updates annually
            </p>
          </div>

          <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              500+
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-300">Projects Completed</p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Branding, Print & 3D
            </p>
          </div>

          <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              50+
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-300">Satisfied Clients</p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Corporate & Direct
            </p>
          </div>

          <div className="p-4 bg-[#121215] border border-zinc-800 rounded-xl">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
              15+
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-300">Brands Partnered</p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Live website logo sync
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
