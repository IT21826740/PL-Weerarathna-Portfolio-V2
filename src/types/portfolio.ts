export interface Brand {
  id: string;
  name: string;
  website: string;
  domain: string;
  category: 'retail' | 'fmcg' | 'industrial' | 'print' | 'services';
  scope: string;
  year: string;
  featured?: boolean;
  notes?: string;
  customLogoUrl?: string;
}

export interface CareerMilestone {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  startDate: string; // YYYY-MM-DD
  nextAnniversaryDate: string;
  daysUntilNextAnniversary: number;
  formattedYearsString: string;
  progressPercentage: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'branding' | 'printing' | 'packaging' | '3d' | 'video';
  categoryLabel: string;
  image: string;
  client: string;
  year: string;
  tools: string[];
  description: string;
  featured?: boolean;
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string; // YYYY-MM
  endDate?: string;  // 'Present' or YYYY-MM
  isCurrent: boolean;
  description: string;
  location?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  projectScope: string;
}
