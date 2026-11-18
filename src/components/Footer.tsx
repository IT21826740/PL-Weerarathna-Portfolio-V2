import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-900 py-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-zinc-200 font-bold text-sm block">PL Weerarathna</span>
          <p className="mt-1 text-zinc-400">
            Senior Graphic Designer · Sudarshana Advertising · Print & Production Specialist
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-zinc-200 transition-colors">About</a>
          <a href="#brands" className="hover:text-zinc-200 transition-colors">Brands</a>
          <a href="#portfolio" className="hover:text-zinc-200 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-zinc-200 transition-colors">Contact</a>
        </div>

        <div className="text-zinc-500 font-mono text-[11px]">
          © {new Date().getFullYear()} PL Weerarathna. All Rights Reserved.
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 bg-zinc-900/90 hover:bg-zinc-800 text-amber-400 border border-zinc-700/80 rounded-xl shadow-xl transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};
