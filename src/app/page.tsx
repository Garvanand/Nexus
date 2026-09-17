import React from 'react';
import { Hero } from '../components/Hero';
import { Statement } from '../components/Statement';
import { TrainingExperience } from '../components/TrainingExperience';
import { BranchSelector } from '../components/BranchSelector';
import { RooftopCricketFeature } from '../components/RooftopCricketFeature';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { InstagramCarousel } from '../components/InstagramCarousel';
import { SocialProofSection } from '../components/SocialProofSection';
import { LeadConversionForm } from '../components/LeadConversionForm';

export default function HomePage() {
  return (
    <>
      {/* 01. HERO — TRAIN WITH PURPOSE */}
      <Hero />

      {/* 02. BRAND STATEMENT — MORE THAN A GYM (Asymmetric Spread) */}
      <Statement />

      {/* 03. TRAINING EXPERIENCE — TRAIN YOUR WAY (4 Chapters) */}
      <TrainingExperience />

      {/* 04. TWO DESTINATIONS — SECTOR 85 & 86 (50/50 Split Screen) */}
      <BranchSelector />

      {/* 05. ROOFTOP CRICKET ARENA — TRAIN HARD. PLAY HARDER (Standout Feature) */}
      <RooftopCricketFeature />

      {/* 06. AMENITIES & ARCHITECTURE — EVERYTHING YOU NEED (Spatial Collage) */}
      <FacilitiesSection />

      {/* 07. INSTAGRAM / LIVE ATMOSPHERE — THIS IS WHAT NEXUS FEELS LIKE */}
      <InstagramCarousel />

      {/* 08. VERIFIED MEMBER STANDARDS — STANDARDS OVER GIMMICKS */}
      <SocialProofSection />

      {/* 09. FINAL CONVERSION — START YOUR TRANSFORMATION (3-Step Enquiry) */}
      <LeadConversionForm />
    </>
  );
}
