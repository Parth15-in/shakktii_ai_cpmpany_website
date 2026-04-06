'use client';

import { useState } from 'react';
import NeuralCanvas from '@/components/NeuralCanvas';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  EcosystemHero,
  SchoolsSection,
  CollegesSection,
  ProfessionalsSection,
  EnterprisesSection,
  WorkforceSection,
  AnalyticsSection
} from '@/components/sections/EcosystemSections';
import { ContactSection } from '@/components/sections/PageSections';

export default function EcosystemPage() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <>
      <NeuralCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onLogoClick={() => setIsLogoOpen(prev => !prev)} />
        <main>
          <EcosystemHero />
          <SchoolsSection />
          <CollegesSection />
          <ProfessionalsSection />
          <EnterprisesSection />
          <WorkforceSection />
          <AnalyticsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
