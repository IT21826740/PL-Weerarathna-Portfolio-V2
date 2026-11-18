import { PortfolioProject, WorkExperienceItem, ServiceItem, TestimonialItem } from '../types/portfolio';

// Local profile and portfolio image assets
export const PROFILE_IMAGE = '/images/profile/profile.png';
export const BRANDING_IMAGE = '/src/assets/images/portfolio_branding_identity_1791615104178.jpg';
export const PACKAGING_IMAGE = '/src/assets/images/portfolio_packaging_design_1791615126244.jpg';
export const THREE_D_IMAGE = '/src/assets/images/portfolio_3d_portcity_1791615148158.jpg';
export const PRINT_POSTER_IMAGE = '/src/assets/images/portfolio_print_poster_1791615179424.jpg';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Aeterna Luxury Brand Identity',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    image: BRANDING_IMAGE,
    client: 'Aeterna Atelier',
    year: '2025',
    tools: ['Adobe Illustrator', 'Photoshop', 'Typography'],
    description: 'High-contrast obsidian and copper foil stationary suite, business cards, hot-stamped wax seal envelopes, and complete corporate visual guidelines.',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Aethel Lumina Organic Packaging',
    category: 'packaging',
    categoryLabel: 'Packaging',
    image: PACKAGING_IMAGE,
    client: 'Aethel Botanicals',
    year: '2025',
    tools: ['InDesign', 'Illustrator', 'CAD Die-Cutter'],
    description: 'Custom textured matte black paperboard cartons with geometric copper foil embossing, dropper bottle label systems, and FSC-certified retail displays.',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Port City Waterfront 3D Masterplan',
    category: '3d',
    categoryLabel: '3D Visualization',
    image: THREE_D_IMAGE,
    client: 'Colombo Port City Project',
    year: '2024',
    tools: ['AutoCAD', 'Photoshop', '3D Architecture'],
    description: 'Detailed 3D architectural visualization, twilight illumination studies, marina pedestrian bridge renders, and commercial boulevard elevations.',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Urban Energy Metropolis Poster',
    category: 'printing',
    categoryLabel: 'Printing',
    image: PRINT_POSTER_IMAGE,
    client: 'Gallery Moderne London',
    year: '2024',
    tools: ['Illustrator', 'CorelDRAW', 'Offset Prep'],
    description: 'Brutalist dynamic typographic exhibition poster. CMYK halftone screen overlay, spot UV varnishing specifications, and 300 DPI vector artwork setup.',
    featured: true
  },
  {
    id: 'proj-5',
    title: 'LANWA Heavy Fleet Wrap Series',
    category: 'branding',
    categoryLabel: 'Vehicle Branding',
    image: BRANDING_IMAGE,
    client: 'LANWA Ceylon Steel',
    year: '2025',
    tools: ['CorelDRAW', 'Photoshop', 'Large Format'],
    description: 'Full commercial vehicle wrap graphics tailored for heavy transport haulers, reflective vinyl contour cuts, and UV-resistant outdoor durability prep.',
    featured: false
  },
  {
    id: 'proj-6',
    title: 'Raigam FMCG Confectionery Box Line',
    category: 'packaging',
    categoryLabel: 'Packaging',
    image: PACKAGING_IMAGE,
    client: 'The Kingdom of Raigam',
    year: '2024',
    tools: ['InDesign', 'Photoshop', 'Color Separation'],
    description: 'Commercial 6-color offset printed packaging boxes with food-grade foil barrier, clear nutrition layout hierarchy, and shelf-impact color grading.',
    featured: false
  },
  {
    id: 'proj-7',
    title: 'Commercial Brand Showreel 2026',
    category: 'video',
    categoryLabel: 'Video Editing',
    image: THREE_D_IMAGE,
    client: 'Sudarshana Media',
    year: '2026',
    tools: ['Premiere Pro', 'After Effects'],
    description: '4K promotional motion graphics reel showcasing signage installations, kinetic typography, audio waveform sync, and broadcast-ready color correction.',
    featured: false
  },
  {
    id: 'proj-8',
    title: 'Precision Offset Exhibition Catalog',
    category: 'printing',
    categoryLabel: 'Printing',
    image: PRINT_POSTER_IMAGE,
    client: 'UP Printers Showcase',
    year: '2023',
    tools: ['Adobe InDesign', 'CorelDRAW'],
    description: '80-page luxury art catalog with blind debossing, metallic silver spot ink, smyth sewn binding layout, and automated pre-flight plate verification.',
    featured: false
  }
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Graphic Designer & Digital Print Operator',
    company: 'Sudarshana Advertising',
    period: 'May 2025 – Present',
    startDate: '2025-05',
    isCurrent: true,
    description: 'Designing branding, advertising materials, packaging, vehicle branding, signage and operating digital printing machines for leading Sri Lankan brands.'
  },
  {
    id: 'exp-2',
    role: 'Freelance Graphic Designer',
    company: 'Self Employed',
    period: '2021 – Present',
    startDate: '2021-01',
    isCurrent: true,
    description: 'Graphic design, branding, artwork, social media creatives, 3D visualization and promotional video editing.'
  },
  {
    id: 'exp-3',
    role: 'Bar & Kitchen Operations Assistant',
    company: 'Golden Beach Hotel',
    period: '2024 – 2025',
    startDate: '2024-01',
    endDate: '2025-04',
    isCurrent: false,
    description: 'Inventory management, employee coordination and daily kitchen support.'
  },
  {
    id: 'exp-4',
    role: 'Graphic Designer',
    company: 'UP Printers',
    period: '2019 – 2021',
    startDate: '2019-01',
    endDate: '2021-12',
    isCurrent: false,
    description: 'Offset printing, lamination, laser cutting, commercial print production and artwork design.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Brand Identity',
    description: 'Logo design, brand guidelines, stationery suites, and visual identity.',
    iconName: 'Palette',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Stationery Suites', 'Visual Identity']
  },
  {
    id: 'srv-2',
    title: 'Print Design',
    description: 'Flyers, brochures, posters, banners, and offset commercial packaging.',
    iconName: 'Printer',
    deliverables: ['Flyers & Brochures', 'Offset Separations', 'Posters & Banners', 'Packaging Art']
  },
  {
    id: 'srv-3',
    title: 'Vehicle Branding',
    description: 'Creative vehicle wraps and commercial fleet branding aligned with vehicle contours.',
    iconName: 'Car',
    deliverables: ['Vehicle Wraps', 'Fleet Graphics', 'Contour Cut Vinyls', 'Outdoor Proofing']
  },
  {
    id: 'srv-4',
    title: '3D Design',
    description: 'AutoCAD drawings and 3D architectural visualization.',
    iconName: 'Box',
    deliverables: ['AutoCAD Drawings', '3D Visualizations', 'Architectural Views', 'Elevation Layouts']
  },
  {
    id: 'srv-5',
    title: 'Video Editing',
    description: 'Premiere Pro and After Effects commercial and promotional videos.',
    iconName: 'Film',
    deliverables: ['Premiere Pro Cutting', 'After Effects Titles', 'Promotional Videos', 'Social Media Reels']
  },
  {
    id: 'srv-6',
    title: 'Artwork Design',
    description: 'Professional artwork ready for digital & offset printing with precise bleeds and color separations.',
    iconName: 'Palette',
    deliverables: ['Press-Ready Artworks', 'Color Separations', 'Spot UV & Foils', 'Print Inspection']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'Excellent designer with creative ideas and professional communication.',
    author: 'Business Client',
    role: 'Corporate Director',
    company: 'Commercial Retail Client',
    rating: 5,
    projectScope: 'Brand Identity & Packaging'
  },
  {
    id: 't-2',
    quote: 'Very satisfied with the branding and print quality.',
    author: 'Printing Client',
    role: 'Production Manager',
    company: 'Commercial Print Client',
    rating: 5,
    projectScope: 'Offset & Digital Print Production'
  },
  {
    id: 't-3',
    quote: 'Delivered everything on time with amazing quality.',
    author: 'Freelance Client',
    role: 'Project Lead',
    company: 'Freelance Design Client',
    rating: 5,
    projectScope: 'Vehicle Wrap & Artwork Design'
  }
];

export const SOFTWARE_SKILLS = [
  { name: 'Adobe Photoshop', category: 'Raster & Photo Manipulation', level: 'Expert (95%)', icon: 'Image' },
  { name: 'Adobe Illustrator', category: 'Vector & Identity Design', level: 'Expert (98%)', icon: 'PenTool' },
  { name: 'CorelDRAW', category: 'Industrial & Offset Pre-press', level: 'Expert (96%)', icon: 'Layers' },
  { name: 'Adobe InDesign', category: 'Editorial & Multi-page Layout', level: 'Advanced (90%)', icon: 'BookOpen' },
  { name: 'AutoCAD', category: '2D Architectural Plans & Elevations', level: 'Skilled (85%)', icon: 'Building' },
  { name: 'Premiere Pro', category: 'Commercial Video Timeline Editing', level: 'Advanced (88%)', icon: 'Video' },
  { name: 'After Effects', category: 'Motion Graphics & Kinetic Title Art', level: 'Advanced (85%)', icon: 'Film' }
];
