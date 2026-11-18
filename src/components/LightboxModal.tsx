import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioProject } from '../types/portfolio';

interface LightboxModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white bg-black/60 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame (Left / Top) */}
        <div className="lg:w-3/5 bg-black flex items-center justify-center relative overflow-hidden group min-h-[320px] lg:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[85vh]"
            referrerPolicy="no-referrer"
          />

          {/* Nav arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Project Details Sidebar (Right / Bottom) */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#121215]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>{project.categoryLabel}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-mono">{project.year}</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metadata Credits */}
            <div className="mt-6 pt-6 border-t border-zinc-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" /> Client
                </span>
                <span className="text-white font-medium">{project.client}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" /> Completion Year
                </span>
                <span className="text-white font-mono">{project.year}</span>
              </div>

              <div>
                <span className="text-zinc-500 flex items-center gap-1.5 mb-2">
                  <Wrench className="w-3.5 h-3.5 text-zinc-400" /> Software & Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <a
              href="#contact"
              onClick={onClose}
              className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              Inquire Similar Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
