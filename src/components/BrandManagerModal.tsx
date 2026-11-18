import React, { useState } from 'react';
import { X, Globe, Plus, Trash2, Edit3, Check, RefreshCw, ExternalLink, AlertCircle } from 'lucide-react';
import { Brand } from '../types/portfolio';
import { extractCleanDomain } from '../utils/brandLogos';
import { BrandLogo } from './BrandLogo';

interface BrandManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  brands: Brand[];
  onSaveBrands: (updatedBrands: Brand[]) => void;
  onResetDefaults: () => void;
}

export const BrandManagerModal: React.FC<BrandManagerModalProps> = ({
  isOpen,
  onClose,
  brands,
  onSaveBrands,
  onResetDefaults,
}) => {
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Form states for add / edit
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [customLogoUrl, setCustomLogoUrl] = useState('');
  const [category, setCategory] = useState<Brand['category']>('retail');
  const [scope, setScope] = useState('');
  const [year, setYear] = useState('2024 - Present');
  const [notes, setNotes] = useState('');
  const [featured, setFeatured] = useState(true);

  // Image load preview state
  const [testLogoLoaded, setTestLogoLoaded] = useState<boolean | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCleanDomain = extractCleanDomain(website);

  const startAddBrand = () => {
    setIsAddingNew(true);
    setEditingBrand(null);
    setName('');
    setWebsite('https://');
    setCustomLogoUrl('');
    setCategory('retail');
    setScope('Packaging & Brand Identity');
    setYear('2024 - 2026');
    setNotes('');
    setFeatured(true);
    setTestLogoLoaded(null);
  };

  const startEditBrand = (b: Brand) => {
    setEditingBrand(b);
    setIsAddingNew(true);
    setName(b.name);
    setWebsite(b.website);
    setCustomLogoUrl(b.customLogoUrl || '');
    setCategory(b.category);
    setScope(b.scope);
    setYear(b.year);
    setNotes(b.notes || '');
    setFeatured(b.featured ?? true);
    setTestLogoLoaded(null);
  };

  const cancelForm = () => {
    setIsAddingNew(false);
    setEditingBrand(null);
    setTestLogoLoaded(null);
  };

  const handleSaveBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !website.trim()) return;

    const domain = extractCleanDomain(website);
    const updatedBrand: Brand = {
      id: editingBrand ? editingBrand.id : `b-${Date.now()}`,
      name: name.trim(),
      website: website.trim().startsWith('http') ? website.trim() : `https://${website.trim()}`,
      domain,
      category,
      scope: scope.trim() || 'Brand Identity & Print Design',
      year: year.trim() || '2024 - Present',
      notes: notes.trim(),
      featured,
      customLogoUrl: customLogoUrl.trim() || undefined,
    };

    let newBrandsList: Brand[];
    if (editingBrand) {
      newBrandsList = brands.map((b) => (b.id === editingBrand.id ? updatedBrand : b));
      setSavedNotice(`Updated ${name}`);
    } else {
      newBrandsList = [updatedBrand, ...brands];
      setSavedNotice(`Added ${name}`);
    }

    onSaveBrands(newBrandsList);
    cancelForm();

    setTimeout(() => {
      setSavedNotice(null);
    }, 2000);
  };

  const handleDeleteBrand = (id: string, brandName: string) => {
    if (window.confirm(`Are you sure you want to remove "${brandName}" from your portfolio brands?`)) {
      const filtered = brands.filter((b) => b.id !== id);
      onSaveBrands(filtered);
      setSavedNotice(`Removed ${brandName}`);
      setTimeout(() => setSavedNotice(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#121215] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col text-zinc-100 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#15151a]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Brands & Website Logo Sync Manager</h3>
              <p className="text-xs text-zinc-400">
                Logos auto-fetch directly from company official domains with live fallbacks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close brand manager"
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedNotice && (
          <div className="px-6 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>{savedNotice}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isAddingNew ? (
            /* Add / Edit Form */
            <form onSubmit={handleSaveBrand} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h4 className="text-sm font-semibold text-white">
                  {editingBrand ? `Edit Brand: ${editingBrand.name}` : 'Add New Client / Brand'}
                </h4>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Company / Brand Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arpico, LANWA, Nestlé"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Official Website URL / Domain *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. arpico.com or https://raigam.lk"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                      setTestLogoLoaded(null);
                    }}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Live Logo Auto-Sync Preview Box */}
              {currentCleanDomain && (
                <div className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BrandLogo
                      name={name || currentCleanDomain}
                      domain={currentCleanDomain}
                      customLogoUrl={customLogoUrl}
                      size={128}
                      className="w-12 h-12 rounded-lg"
                      onStatusChange={(loaded) => setTestLogoLoaded(loaded)}
                    />
                    <div>
                      <div className="text-xs font-medium text-white flex items-center gap-2">
                        <span>Domain Detected: <span className="font-mono text-amber-400">{currentCleanDomain}</span></span>
                        {testLogoLoaded === true && (
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Live Synced
                          </span>
                        )}
                        {testLogoLoaded === false && (
                          <span className="text-[10px] text-amber-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Fallback active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Automatically fetching high-res favicon from official site
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://${currentCleanDomain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 shrink-0"
                  >
                    Test Visit <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Industry Sector</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Brand['category'])}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="retail">Retail & Stores</option>
                    <option value="fmcg">FMCG & Food</option>
                    <option value="industrial">Industrial & Steel</option>
                    <option value="print">Commercial Print</option>
                    <option value="services">Services & Health</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Project Scope</label>
                  <input
                    type="text"
                    placeholder="e.g. Vehicle Wraps & Packaging"
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Collaboration Period</label>
                  <input
                    type="text"
                    placeholder="e.g. 2023 - 2026"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Custom Logo Image URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://example.com/logo.png (leave blank for automatic website sync)"
                  value={customLogoUrl}
                  onChange={(e) => {
                    setCustomLogoUrl(e.target.value);
                    setTestLogoLoaded(null);
                  }}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-500 font-mono mb-3"
                />

                <label className="block text-xs font-medium text-zinc-300 mb-1">Project Details / Portfolio Notes</label>
                <textarea
                  rows={2}
                  placeholder="Specific print presses, die lines, or materials created..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featuredCheckbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="rounded border-zinc-700 text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="featuredCheckbox" className="text-xs text-zinc-300 cursor-pointer">
                  Feature prominently on portfolio homepage
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={cancelForm}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  {editingBrand ? 'Save Changes' : 'Add Brand & Sync Logo'}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Showing <strong className="text-white">{brands.length}</strong> synced brands
              </span>
              <button
                onClick={startAddBrand}
                className="px-3.5 py-2 text-xs font-medium bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Plus className="w-4 h-4" />
                Add Brand / Client
              </button>
            </div>
          )}

          {/* List of current brands */}
          <div className="space-y-2">
            {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex items-center justify-between p-3.5 bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800/80 rounded-xl transition-colors group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <BrandLogo
                      name={brand.name}
                      domain={brand.domain}
                      customLogoUrl={brand.customLogoUrl}
                      size={64}
                      className="w-10 h-10 rounded-lg"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white truncate">{brand.name}</span>
                        <span className="text-[11px] font-mono text-zinc-400 truncate">{brand.domain}</span>
                      </div>
                      <div className="text-xs text-zinc-400 truncate">
                        <span>{brand.scope}</span>
                        <span className="mx-1.5">·</span>
                        <span className="font-mono text-[11px]">{brand.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noreferrer"
                      title="Open official website"
                      className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => startEditBrand(brand)}
                      title="Edit brand"
                      className="p-1.5 text-zinc-400 hover:text-amber-400 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBrand(brand.id, brand.name)}
                      title="Delete brand"
                      className="p-1.5 text-zinc-500 hover:text-red-400 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-zinc-800 bg-[#15151a]">
          <button
            onClick={onResetDefaults}
            className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Default Sri Lankan Brands
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};