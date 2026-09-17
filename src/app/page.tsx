import React from 'react';
import { Hero } from '../components/Hero';
import { Statement } from '../components/Statement';
import { TrainingStory } from '../components/TrainingStory';
import { BranchSelector } from '../components/BranchSelector';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { InstagramCarousel } from '../components/InstagramCarousel';
import { SocialProofSection } from '../components/SocialProofSection';
import { LeadConversionForm } from '../components/LeadConversionForm';

export default function HomePage() {
  return (
    <>
      {/* 01. HERO — TRAIN WITH PURPOSE */}
      <Hero />

      {/* 02. BRAND STATEMENT — MORE THAN A GYM */}
      <Statement />

      {/* 03. VISUAL TRAINING STORY — STRENGTH / MOVE / PLAY */}
      <TrainingStory />

      {/* 04. TWO DESTINATIONS — SECTOR 85 & SECTOR 86 */}
      <BranchSelector />

      {/* 05. EDITORIAL FACILITIES & EXPERIENCE COLLAGE */}
      <FacilitiesSection />

      {/* 06. INSTAGRAM / LIVE ATMOSPHERE EDITORIAL ROW */}
      <InstagramCarousel />

      {/* 07. COMMUNITY / VERIFIED MEMBER PROOF */}
      <SocialProofSection />

      {/* 08. FINAL CTA — START YOUR TRANSFORMATION */}
      <LeadConversionForm />
    </>
  );
}
