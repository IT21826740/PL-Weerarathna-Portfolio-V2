# PL Weerarathna — Senior Graphic & Print Designer Portfolio

Professional high-contrast dark theme portfolio application for **PL Weerarathna** (Graphic Designer & Digital Print Specialist at Sudarshana Advertising).

Deployed on Vercel: [https://pl-weerarathna-portfolio.vercel.app/](https://plweerararthna.vercel.app/)  
GitHub Repository: [https://github.com/IT21826740/pl-weerarathna-portfolio](https://github.com/IT21826740/pl-weerarathna-portfolio)

---

## Key Features

1. **Auto-Syncing Official Company Logos**:
   - Company logos for the "Brands I've Worked With" section are automatically resolved and synced in real-time from official company websites via high-resolution favicon proxies and fallback services.
   - Pre-configured with Sri Lanka's leading brands: Arpico, LANWA, Raigam, Lassana Flora, AIMA, Lady Ridgeway Hospital, Sensor, Sudarshana Advertising, and UP Printers.
   - Built-in **Brand Manager Modal** for quick client updates, domain previews, and live sync testing.

2. **Automated Anniversary-Aware Experience Engine**:
   - Dynamic career milestone tracker that calculates exact completed years, months, and days since January 15, 2019.
   - Automatically increments years of experience on upcoming anniversaries and displays a live countdown to the next career anniversary milestone.
   - Synchronized across Hero, KPI statistics, About section, and Career Timeline.

3. **High-Contrast Dark Theme Aesthetic**:
   - Deep obsidian canvas (`#09090b`), rich structural cards (`#121215`), subtle hairline zinc borders (`#27272a`), crisp WCAG AAA typography (`#fafafa`), and warm amber accents (`#f59e0b`).
   - Zero-pill unboxed metadata discipline, tabular numerals (`font-mono tabular-nums`), and single-row 3-zone Top Bar Contract.

4. **Curated Showcase & Interactive Lightbox**:
   - Filterable portfolio categories: Branding, Printing, Packaging, 3D Architectural Visualization, and Video/Motion.
   - Fullscreen Lightbox modal with project client credits, year, tools used, and keyboard navigation (`ESC`, arrow keys).

5. **Original Profile & Resume Download**:
   - Features PL Weerarathna's original profile photo (`/images/profile/profile.png`).
   - One-click CV download (`/files/CV.pdf`).

---

## Connecting & Updating on GitHub & Vercel

To push this updated project directly to your GitHub repository:

```bash
# Initialize or verify git remote
git init
git remote add origin https://github.com/IT21826740/pl-weerarathna-portfolio.git

# Stage and commit all updated files
git add .
git commit -m "Update portfolio: dark mode theme, official brand logo auto-sync, anniversary calculator, and styled profile photo"

# Push to your main branch
git branch -M main
git push -u origin main
```

Because your repository is connected to **Vercel**, Vercel will automatically trigger a new deployment upon push:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Routing Configuration**: Handled by `vercel.json`

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build production bundle
npm run build
```
