/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AnniversaryBanner } from './components/AnniversaryBanner';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { BrandsSection } from './components/BrandsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrandManagerModal } from './components/BrandManagerModal';
import { ExperienceSettingsModal } from './components/ExperienceSettingsModal';
import {
  calculateCareerMilestone,
  getStoredCareerStartDate,
  saveStoredCareerStartDate,
  DEFAULT_CAREER_START_DATE,
} from './utils/experienceCalculator';
import {
  getStoredBrands,
  saveStoredBrands,
  resetBrandsToDefaults,
} from './utils/brandLogos';
import { Brand, CareerMilestone } from './types/portfolio';

export default function App() {
  // Career Milestone state (dynamically updates with upcoming anniversaries)
  const [startDate, setStartDate] = useState<string>(getStoredCareerStartDate());
  const [milestone, setMilestone] = useState<CareerMilestone>(() =>
    calculateCareerMilestone(getStoredCareerStartDate())
  );

  // Brands State (with official website live logo sync)
  const [brands, setBrands] = useState<Brand[]>(() => getStoredBrands());

  // Modal Dialog states
  const [isBrandManagerOpen, setIsBrandManagerOpen] = useState(false);
  const [isExperienceSettingsOpen, setIsExperienceSettingsOpen] = useState(false);

  // Scroll Progress Bar percentage
  const [scrollProgress, setScrollProgress] = useState(0);

  // Recalculate milestone whenever startDate changes
  useEffect(() => {
    const updated = calculateCareerMilestone(startDate);
    setMilestone(updated);
  }, [startDate]);

  // Track window scroll progress
  useEffect(() => {
    const updateScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleUpdateStartDate = (newDate: string) => {
    saveStoredCareerStartDate(newDate);
    setStartDate(newDate);
  };

  const handleResetStartDate = () => {
    saveStoredCareerStartDate(DEFAULT_CAREER_START_DATE);
    setStartDate(DEFAULT_CAREER_START_DATE);
  };

  const handleSaveBrands = (updatedBrands: Brand[]) => {
    setBrands(updatedBrands);
    saveStoredBrands(updatedBrands);
  };

  const handleResetBrands = () => {
    const defaults = resetBrandsToDefaults();
    setBrands(defaults);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Live Career Anniversary Notification Banner */}
      <AnniversaryBanner
        milestone={milestone}
        onOpenSettings={() => setIsExperienceSettingsOpen(true)}
      />

      {/* Strict 3-zone Top Bar Contract Navigation */}
      <Navbar onOpenBrandManager={() => setIsBrandManagerOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Split-Screen & Dynamic Experience */}
        <Hero
          milestone={milestone}
          onOpenBrandManager={() => setIsBrandManagerOpen(true)}
          onOpenExperienceSettings={() => setIsExperienceSettingsOpen(true)}
        />

        {/* About Section with Dynamic Career Anniversary Details */}
        <AboutSection
          milestone={milestone}
          onOpenExperienceSettings={() => setIsExperienceSettingsOpen(true)}
        />

        {/* Technical Software & Print Production Skills */}
        <SkillsSection />

        {/* Work Experience Timeline */}
        <TimelineSection milestone={milestone} />

        {/* Brands I've Worked With (Live Website Logo Auto-Sync) */}
        <BrandsSection
          brands={brands}
          onOpenBrandManager={() => setIsBrandManagerOpen(true)}
        />

        {/* Portfolio Showcase with Lightbox Modal */}
        <PortfolioSection />

        {/* Services & Deliverables */}
        <ServicesSection />

        {/* Testimonials & Proof */}
        <TestimonialsSection />

        {/* Contact Information & Interactive Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Brand Manager Modal (Auto-syncs company logos from websites) */}
      <BrandManagerModal
        isOpen={isBrandManagerOpen}
        onClose={() => setIsBrandManagerOpen(false)}
        brands={brands}
        onSaveBrands={handleSaveBrands}
        onResetDefaults={handleResetBrands}
      />

      {/* Experience & Career Anniversary Settings Modal */}
      <ExperienceSettingsModal
        isOpen={isExperienceSettingsOpen}
        onClose={() => setIsExperienceSettingsOpen(false)}
        milestone={milestone}
        onUpdateStartDate={handleUpdateStartDate}
        onResetToDefault={handleResetStartDate}
      />

    </div>
  );
}
