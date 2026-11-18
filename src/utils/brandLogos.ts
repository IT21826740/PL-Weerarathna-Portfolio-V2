import { Brand } from '../types/portfolio';

const BRANDS_STORAGE_KEY = 'pl_portfolio_brands_v3';

export const INITIAL_BRANDS: Brand[] = [
  {
    id: 'b-arpico',
    name: 'Arpico',
    website: 'https://arpico.com',
    domain: 'arpico.com',
    category: 'retail',
    scope: 'Retail Brand Collateral & Packaging',
    year: '2025 - 2026',
    featured: true,
    notes: 'Richard Pieris & Company flagship retail brand; large format store branding & packaging collateral.'
  },
  {
    id: 'b-lanwa',
    name: 'LANWA',
    website: 'https://www.ceylonsteel.com',
    domain: 'ceylonsteel.com',
    category: 'industrial',
    scope: 'Industrial Fleet & Heavy Billboard Wraps',
    year: '2025 - 2026',
    featured: true,
    notes: 'Ceylon Steel Corporation; vehicle fleet branding & industrial outdoor display production.'
  },
  {
    id: 'b-raigam',
    name: 'Raigam',
    website: 'https://raigam.lk',
    domain: 'raigam.lk',
    category: 'fmcg',
    scope: 'FMCG Packaging & Point of Sale Graphics',
    year: '2025 - 2026',
    featured: true,
    notes: 'Leading Sri Lankan FMCG brand; food packaging box designs, carton art & retail POS displays.'
  },
  {
    id: 'b-lassana',
    name: 'Lassana Flora',
    website: 'https://lassana.com',
    domain: 'lassana.com',
    category: 'retail',
    scope: 'Premium Gift Packaging & Digital Creatives',
    year: '2025 - 2026',
    featured: true,
    notes: 'Luxury floral & confectionery packaging; seasonal campaign brochures & shop signage.'
  },
  {
    id: 'b-aima',
    name: 'AIMA',
    website: 'https://aima.lk',
    domain: 'aima.lk',
    category: 'services',
    scope: 'Apparel Identity & Merchandising Tags',
    year: '2025 - 2026',
    featured: true,
    notes: 'Textile branding, garment hangtags, barcode labels & promotional merchandise print setup.'
  },
  {
    id: 'b-lrh',
    name: 'Lady Ridgeway Hospital (LRH)',
    website: 'https://lrh.health.gov.lk',
    domain: 'lrh.health.gov.lk',
    category: 'services',
    scope: 'Wayfinding Signage & Public Health Posters',
    year: '2025 - 2026',
    featured: false,
    notes: 'Wayfinding system signage, awareness campaigns, and hospital informational print panels.'
  },
  {
    id: 'b-sensor',
    name: 'Sensor',
    website: 'https://sensor.lk',
    domain: 'sensor.lk',
    category: 'industrial',
    scope: 'Industrial Tech Catalogues & Exhibition Panels',
    year: '2025 - 2026',
    featured: false,
    notes: 'Electronics & automation tech data sheets, equipment labels and trade show booth graphics.'
  },
  {
    id: 'b-sudarshana',
    name: 'Sudarshana Advertising',
    website: 'https://sudarshana.lk',
    domain: 'sudarshana.lk',
    category: 'print',
    scope: 'Digital Large Format Print Production',
    year: '2025 - Present',
    featured: true,
    notes: 'Current design agency; high-speed solvent & UV digital printer color calibration and production.'
  },
  {
    id: 'b-upprinters',
    name: 'UP Printers',
    website: 'https://upprinters.lk',
    domain: 'upprinters.lk',
    category: 'print',
    scope: 'Offset Press Pre-press & Packaging Finishing',
    year: '2019 - 2021',
    featured: true,
    notes: 'Commercial offset press work, 4-color separations, die-cutting plates and foil embossing setup.'
  }
];

/**
 * Normalizes any URL or user input to extract clean domain
 */
export function extractCleanDomain(urlOrDomain: string): string {
  if (!urlOrDomain) return '';
  let cleaned = urlOrDomain.trim().toLowerCase();
  
  // Remove protocol
  cleaned = cleaned.replace(/^https?:\/\//i, '');
  // Remove www.
  cleaned = cleaned.replace(/^www\./i, '');
  // Remove port and path
  cleaned = cleaned.split('/')[0].split(':')[0].split('?')[0];

  return cleaned;
}

/**
 * Returns an ordered list of reliable logo/favicon URLs for a domain.
 */
export function getBrandLogoCandidates(domain: string, size = 128, customLogoUrl?: string): string[] {
  const candidates: string[] = [];
  if (customLogoUrl?.trim()) {
    candidates.push(customLogoUrl.trim());
  }
  const cleanDomain = extractCleanDomain(domain);
  if (cleanDomain) {
    candidates.push(
      `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanDomain)}&sz=${size}`,
      `https://icon.horse/icon/${encodeURIComponent(cleanDomain)}`,
      `https://icons.duckduckgo.com/ip3/${encodeURIComponent(cleanDomain)}.ico`
    );
  }
  return candidates;
}

/**
 * Returns the primary Google high-res favicon URL for a company's official website.
 */
export function getOfficialWebsiteLogoUrl(domain: string, size = 128): string {
  const cleanDomain = extractCleanDomain(domain);
  if (!cleanDomain) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanDomain)}&sz=${size}`;
}

/**
 * Returns alternative secondary logo provider URL
 */
export function getAlternativeLogoUrl(domain: string): string {
  const cleanDomain = extractCleanDomain(domain);
  if (!cleanDomain) return '';
  return `https://icon.horse/icon/${encodeURIComponent(cleanDomain)}`;
}

/**
 * Stored brands management with localStorage
 */
export function getStoredBrands(): Brand[] {
  if (typeof window === 'undefined') return INITIAL_BRANDS;
  try {
    const raw = localStorage.getItem(BRANDS_STORAGE_KEY);
    if (!raw) return INITIAL_BRANDS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // fallback
  }
  return INITIAL_BRANDS;
}

export function saveStoredBrands(brands: Brand[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(BRANDS_STORAGE_KEY, JSON.stringify(brands));
}

export function resetBrandsToDefaults(): Brand[] {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(BRANDS_STORAGE_KEY);
  }
  return INITIAL_BRANDS;
}