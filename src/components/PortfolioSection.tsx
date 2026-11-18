import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types/portfolio';
import { LightboxModal } from './LightboxModal';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding & Identity' },
    { id: 'printing', label: 'Print & Offset' },
    { id: 'packaging', label: 'Packaging' },
    { id: '3d', label: '3D Visualization' },
    { id: 'video', label: 'Video & Motion' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              SELECTED WORKS & CASE STUDIES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Featured Portfolio
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              A curated selection of corporate identities, luxury packaging boxes, large format vehicle graphics, 3D architectural renders, and offset print collateral.
            </p>
          </div>

          <span className="text-xs text-zinc-500 font-mono">
            Click any project tile to expand full lightbox details
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-zinc-900">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-amber-400 text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dynamic Bento & Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isWideCard = idx === 0 || idx === 3;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative bg-[#121215] hover:bg-[#16161b] border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isWideCard ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Canvas */}
                <div className={`relative overflow-hidden bg-black ${isWideCard ? 'h-72 sm:h-80' : 'h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Overlaid Bottom Title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      {project.categoryLabel} · {project.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80">
                  <div className="truncate pr-2">
                    <span className="text-zinc-500">Client:</span>{' '}
                    <span className="text-zinc-200 font-medium">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 shrink-0">
                    <span>{project.tools[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
};
