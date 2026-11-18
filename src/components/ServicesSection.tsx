import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Palette, Printer, Package, Car, Box, Film, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-400" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-amber-400" />;
      case 'Package':
        return <Package className="w-6 h-6 text-amber-400" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-400" />;
      case 'Box':
        return <Box className="w-6 h-6 text-amber-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-amber-400" />;
      default:
        return <Palette className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            CREATIVE DELIVERABLES & SERVICES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Comprehensive Design & Print Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            From initial sketch and 3D visualization through precision die-making and high-speed digital print machine execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#121215] hover:bg-[#16161b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-amber-500/40 transition-colors">
                  {getServiceIcon(srv.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-2">
                {srv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
