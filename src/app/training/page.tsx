'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface StyleGoal {
  id: string;
  label: string;
  title: string;
  recommendation: string;
  zones: string[];
  whatsappText: string;
}

const GOALS: StyleGoal[] = [
  {
    id: 'stronger',
    label: 'GET STRONGER',
    title: 'Compound Barbell Strength & Progression',
    recommendation: 'Target Sector 85 or Sector 86 Strength Floor. Focus on progressive overload using heavy barbells, lifting platforms, and power cages under coach guidance.',
    zones: ['Lifting Platforms', 'Power Cages', 'Free Weights Area'],
    whatsappText: 'Hi Nexus, my goal is to GET STRONGER. Please recommend the best training schedule and coach availability.'
  },
  {
    id: 'fat-loss',
    label: 'LOSE FAT',
    title: 'Metabolic Interval & Strength Fusion',
    recommendation: 'Combine 3 days of compound resistance training with 2 high-intensity studio batches (Athletic Aerobics or Zumba) and post-lift conditioning.',
    zones: ['Aerobics Studio', 'Conditioning Track', 'Strength Floor'],
    whatsappText: 'Hi Nexus, my goal is FAT LOSS and conditioning. Please share recommended batches.'
  },
  {
    id: 'fitness',
    label: 'IMPROVE FITNESS',
    title: 'Hybrid Athletic Conditioning',
    recommendation: 'A well-rounded weekly split: heavy iron twice a week, functional movement on turf track, and cardiovascular sessions in the studio.',
    zones: ['Functional Turf', 'Cardio Line', 'Zumba Studio'],
    whatsappText: 'Hi Nexus, I want to IMPROVE OVERALL FITNESS. Please guide me on membership options.'
  },
  {
    id: 'consistency',
    label: 'BUILD CONSISTENCY',
    title: 'Structured Habit & Community Cohorts',
    recommendation: 'Join an early-morning or evening accountability cohort. Showing up at fixed batch times eliminates decision fatigue and builds sustainable discipline.',
    zones: ['Morning Cohort Squad', 'Coached Zones'],
    whatsappText: 'Hi Nexus, I want to BUILD WORKOUT CONSISTENCY. What are the best cohort times?'
  },
  {
    id: 'move-better',
    label: 'MOVE BETTER',
    title: 'Spinal Mobility & Breathwork',
    recommendation: 'Prioritize the Sector 86 Yoga & Mobility Studio. Guided breathwork, hip mobility, and thoracic spine restoration designed to reverse desk stiffness.',
    zones: ['Yoga & Flow Studio', 'Mobility Bay'],
    whatsappText: 'Hi Nexus, my goal is to MOVE BETTER and fix posture/stiffness. Please share mobility class details.'
  },
  {
    id: 'group',
    label: 'TRAIN WITH A GROUP',
    title: 'High-Energy Studios & Rooftop Play',
    recommendation: 'Sector 86 group classes: high-cadence Zumba, athletic aerobics circuits, and rooftop cricket matches with fellow members.',
    zones: ['Zumba Studio', 'Aerobics Hall', 'Rooftop Cricket Turf'],
    whatsappText: 'Hi Nexus, I want to TRAIN WITH A GROUP. What classes and community sessions are active?'
  }
];

export default function TrainingPage() {
  const [selectedGoalId, setSelectedGoalId] = useState<string>('stronger');
  const activeGoal = GOALS.find((g) => g.id === selectedGoalId) || GOALS[0];

  return (
    <div className="training-page" style={{ paddingTop: '100px', backgroundColor: 'var(--surface-primary)' }}>
      {/* Hero */}
      <section className="training-hero" style={{ padding: '80px 0 60px 0', borderBottom: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            THE NEXUS METHOD // UNCOMPROMISING STANDARDS
          </span>
          <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '16px 0', letterSpacing: '-0.02em' }}>
            TRAINING, WITHOUT<br />DISTRACTIONS.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            An uncompromising physical environment. No decorative clutter, no distractions. Quality barbells, dedicated lifting platforms, and evidence-based group conditioning.
          </p>
        </div>
      </section>

      {/* 5 Dedicated Training Zones */}
      <section className="training-zones" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>FLOOR ARCHITECTURE</span>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '8px' }}>
              FIVE SPECIALIZED TRAINING ZONES
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <div className="zone-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src="/assets/images/photo10.webp" alt="Strength Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                  ZONE 01 · STRENGTH
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Lifting Platforms & Power Racks
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Solid wooden lifting platforms, cast iron plates, and reinforced cages built for heavy squats, presses, and deadlifts.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                  ✓ Available at Sector 85 & Sector 86
                </div>
              </div>
            </div>

            <div className="zone-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src="/assets/images/photo9.webp" alt="Conditioning Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                  ZONE 02 · CONDITIONING
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Metabolic & Cardio Output
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Non-motorized curved sprint treadmills, rowing ergs, assault bikes, and weighted sled tracks designed for athletic stamina and VO2 max development.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                  ✓ Available at Both Branches
                </div>
              </div>
            </div>

            <div className="zone-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src="/assets/images/photo2.webp" alt="Zumba & Aerobics Studios" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                  ZONE 03 · KINETIC STUDIOS
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Sprung-Floor Group Studios
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Acoustically isolated group halls with shock-absorbent sprung timber floors for high-tempo Zumba choreography and athletic aerobic interval circuits.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                  ✓ Verified at Sector 86 Hub
                </div>
              </div>
            </div>

            <div className="zone-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src="/assets/images/training_yoga.jpg" alt="Mindfulness Sanctuary" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                  ZONE 04 · RECOVERY
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Yoga & Mobility Sanctuary
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Warm low-lux atmosphere dedicated to spinal decompression, thoracic opening, and parasympathetic nervous system de-escalation.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                  ✓ Verified at Sector 86 Hub
                </div>
              </div>
            </div>

            <div className="zone-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '220px', position: 'relative' }}>
                <img src="/assets/images/space_cricket.jpg" alt="Rooftop Cricket Turf" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                  ZONE 05 · ROOFTOP TURF
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Rooftop Cricket Turf
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  An outdoor synthetic cricket turf atop Sector 86. Train downstairs, bowl 6 overs with friends upstairs under the evening sky.
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                  ✓ Sector 86 Rooftop Deck
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive "Find Your Training Style" Recommendation Tool */}
      <section className="training-style-quiz" id="find-style" style={{ padding: '80px 0', background: 'var(--surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>PRECISION FIT</span>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, textTransform: 'uppercase', marginTop: '8px' }}>
              FIND YOUR TRAINING STYLE
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Select what matters most to your body and schedule. Get an immediate, tailored Nexus recommendation.
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
            {GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelectedGoalId(g.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid ' + (selectedGoalId === g.id ? 'var(--accent)' : 'var(--border-subtle)'),
                  background: selectedGoalId === g.id ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                  color: selectedGoalId === g.id ? '#0b0b0b' : 'var(--text-primary)',
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Result Card */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '36px', boxShadow: '0 16px 40px rgba(0,0,0,0.6)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              NEXUS PRESCRIPTION
            </span>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 16px 0' }}>
              {activeGoal.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeGoal.recommendation}
            </p>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Primary Recommended Zones
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {activeGoal.zones.map((z, i) => (
                  <span key={i} style={{ background: 'rgba(200, 184, 48, 0.1)', color: 'var(--accent)', border: '1px solid rgba(200, 184, 48, 0.3)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8125rem', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                    ✓ {z}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919582333003?text=${encodeURIComponent(activeGoal.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Discuss This Plan With A Coach On WhatsApp →
              </a>
              <Link href="/join" className="btn btn-secondary">
                Start Nexus Journey (Join Form)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
            START YOUR TRANSFORMATION.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '640px', margin: '0 auto 32px auto' }}>
            Walk into Sector 85 or Sector 86. Tour the floor, talk to a coach, and see what real training feels like.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" className="btn btn-primary">
              Get Membership Details
            </Link>
            <a href="https://wa.me/919582333003?text=Hi%20Nexus,%20I'd%20like%20to%20visit%20the%20club." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
