import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBrandManager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrandManager }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Brands', href: '#brands' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          PL Weerarathna<span className="text-amber-400">.</span>
        </a>

        {/* Zone 2: 4–5 single-line clean text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/files/CV.pdf"
            download="PL_Weerarathna_CV.pdf"
            className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-zinc-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Get In Touch
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0e0e12] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandManager();
              }}
              className="w-full text-left px-3 py-2 text-xs font-medium text-amber-400 hover:bg-zinc-800 rounded-lg"
            >
              Manage Brands & Logo Sync
            </button>
            <a
              href="/files/CV.pdf"
              download="PL_Weerarathna_CV.pdf"
              className="w-full text-center px-4 py-2 text-xs font-medium text-white border border-zinc-700 rounded-lg"
            >
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 text-xs font-semibold text-zinc-950 bg-white rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
