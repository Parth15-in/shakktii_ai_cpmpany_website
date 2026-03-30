'use client';

import { useState } from 'react';
import NeuralCanvas from '@/components/NeuralCanvas';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import {
  ProblemSection,
  LifecycleSection,
  MockMingleSection,
  SolutionsSection,
  TrustSection,
  InsightsSection,
  ContactSection,
} from '@/components/sections/PageSections';

export default function Home() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <>
      <NeuralCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onLogoClick={() => setIsLogoOpen(prev => !prev)} />
        <main>
          <HeroSection 
            showLogo={isLogoOpen} 
            onClose={() => setIsLogoOpen(false)} 
          />
          <ProblemSection />
          <LifecycleSection />
          <MockMingleSection />
          <SolutionsSection />
          <TrustSection />
          <InsightsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
