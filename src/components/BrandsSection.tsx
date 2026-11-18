import React, { useState } from 'react';
import { Search, Sparkles, SlidersHorizontal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Brand } from '../types/portfolio';
import { BrandLogo } from './BrandLogo';

interface BrandsSectionProps {
  brands: Brand[];
  onOpenBrandManager: () => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ brands, onOpenBrandManager }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Brands' },
    { id: 'retail', label: 'Retail & Stores' },
    { id: 'fmcg', label: 'FMCG & Food' },
    { id: 'industrial', label: 'Industrial & Steel' },
    { id: 'print', label: 'Print & Packaging' },
    { id: 'services', label: 'Services' },
  ];

  const filteredBrands = brands.filter((brand) => {
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;
    const matchesSearch =
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="brands" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                CLIENT ROSTER & PARTNERSHIPS
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Official Website Auto-Sync
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Brands I've Worked With
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Commercial identities, packaging box art, fleet wraps, and high-volume offset print campaigns for Sri Lanka's industry leaders and international enterprises.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBrandManager}
              className="px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Manage Brands & Sync Logos
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brands or domains..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#121215] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Brands Grid */}
        {filteredBrands.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/40">
            <p className="text-sm text-zinc-400">No brands found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="group relative bg-[#121215] hover:bg-[#16161b] border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Brand Card Top: Synced Logo and External Link */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <BrandLogo
                        name={brand.name}
                        domain={brand.domain}
                        customLogoUrl={brand.customLogoUrl}
                        size={128}
                        className="w-14 h-14 rounded-xl group-hover:border-amber-500/40 transition-colors"
                      />

                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
                        title={`Visit ${brand.name} website`}
                        aria-label={`Visit official website for ${brand.name}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Brand Name & Domain */}
                    <div className="mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {brand.name}
                      </h3>
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-zinc-200 inline-block truncate max-w-full"
                      >
                        {brand.domain}
                      </a>
                    </div>

                    {/* Scope of Work */}
                    <p className="text-xs text-zinc-300 font-medium line-clamp-2 mb-3">
                      {brand.scope}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-mono tabular-nums">{brand.year}</span>
                    <span className="flex items-center gap-1 text-emerald-400/90">
                      <CheckCircle2 className="w-3 h-3" />
                      Synced
                    </span>
                  </div>
                </div>
            ))}
          </div>
        )}

        {/* Live sync feature explanation footnote */}
        <div className="mt-12 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Company logos dynamically resolve from official host web domains in real-time. Use <strong>Manage Brands</strong> to add new partners or update links anytime.
            </span>
          </div>
          <button
            onClick={onOpenBrandManager}
            className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 shrink-0 text-left"
          >
            Open Brand Manager
          </button>
        </div>

      </div>
    </section>
  );
};