import React from 'react';
import { Hero } from '../components/Hero';
import { Statement } from '../components/Statement';
import { BranchSelector } from '../components/BranchSelector';
import { Pillars } from '../components/Pillars';
import { ExperienceSequence } from '../components/ExperienceSequence';
import { InstagramCarousel } from '../components/InstagramCarousel';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { NexusTools } from '../components/NexusTools';
import { LeadConversionForm } from '../components/LeadConversionForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <BranchSelector />
      <Pillars />
      <ExperienceSequence />
      <InstagramCarousel />
      <FacilitiesSection />
      <SocialProofSection />
      <NexusTools />
      <LeadConversionForm />
    </>
  );
}
