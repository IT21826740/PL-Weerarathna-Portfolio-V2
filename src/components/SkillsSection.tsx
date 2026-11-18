import React from 'react';
import { SOFTWARE_SKILLS } from '../data/portfolioData';
import { PenTool, Image, Layers, BookOpen, Box, Building, Video, Film, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Image':
        return <Image className="w-5 h-5 text-amber-400" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-amber-400" />;
      case 'Building':
        return <Building className="w-5 h-5 text-amber-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-amber-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-amber-400" />;
      default:
        return <PenTool className="w-5 h-5 text-amber-400" />;
    }
  };

  const domainExpertise = [
    'Offset & Digital Pre-press (Bleeds, Trapping, Separations)',
    'Packaging Dielines & Corrugated Structural Boxes',
    'Full Vehicle Wraps & Large Outdoor Hoardings',
    '3D Architectural Visualization & AutoCAD Drawings',
    'Color Management (Pantone PMS, CMYK, Fogra Standards)',
    'Video Editing & Motion Graphics (Premiere & After Effects)'
  ];

  return (
    <section id="skills" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            TECHNICAL ARSENAL & TOOLING
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Software & Production Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Industry-standard digital applications paired with physical workshop know-how in offset printing, lamination, die-cutting, and digital wide-format machinery.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SOFTWARE_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#121215] hover:bg-[#16161b] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/30 transition-colors">
                  {getIcon(skill.icon)}
                </div>
                <span className="text-[11px] font-mono text-amber-400/90 font-medium">
                  {skill.level}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                {skill.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        {/* Specialized Production Capabilities */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-white mb-6">
            Production & Engineering Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domainExpertise.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-950/60 border border-zinc-800/80 rounded-xl">
                <div className="p-1 rounded-md bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-zinc-300 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
