'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useBranch } from '../../context/BranchContext';

export const HydrationTool: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();

  const [weightKg, setWeightKg] = useState<number>(75);
  const [workoutDurationMins, setWorkoutDurationMins] = useState<number>(60);
  const [environment, setEnvironment] = useState<'gym' | 'studio' | 'rooftop'>('gym');

  const hydration = useMemo(() => {
    // Baseline: 35ml per kg of bodyweight
    const baselineLiters = weightKg * 0.035;

    // Sweat multiplier based on session type
    let sweatRatePerHour = 0.6; // standard indoor gym lifting
    if (environment === 'studio') sweatRatePerHour = 0.8; // high aerobic sweat
    if (environment === 'rooftop') sweatRatePerHour = 1.0; // outdoor sun / sports output

    const workoutLiters = (workoutDurationMins / 60) * sweatRatePerHour;
    const totalLiters = parseFloat((baselineLiters + workoutLiters).toFixed(1));
    const totalGlasses = Math.round((totalLiters * 1000) / 250);

    return {
      baselineLiters: parseFloat(baselineLiters.toFixed(1)),
      workoutLiters: parseFloat(workoutLiters.toFixed(1)),
      totalLiters,
      totalGlasses
    };
  }, [weightKg, workoutDurationMins, environment]);

  const whatsappMsg = `Hi Nexus, I calculated my daily athletic hydration target (~${hydration.totalLiters} L) on your website. I'd like to know more about training at the club.`;

  return (
    <div className="hydration-tool" id="hydration-calculator">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Step 4: Athletic Daily Hydration Target &amp; Pacing
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Personalized fluid intake calculation accounting for bodyweight, heavy sweat rates in Greater Faridabad, and training environment.
        </p>
      </div>

      <div className="tool-form-layout">
        {/* Left Inputs */}
        <div className="tool-inputs-column">
          <div className="tool-field-group">
            <label className="tool-field-label" htmlFor="hyd-weight">
              Body Weight <span>{weightKg} kg</span>
            </label>
            <input
              id="hyd-weight"
              type="range"
              min={45}
              max={150}
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
            />
          </div>

          <div className="tool-field-group">
            <label className="tool-field-label" htmlFor="hyd-duration">
              Training Session Duration <span>{workoutDurationMins} minutes</span>
            </label>
            <input
              id="hyd-duration"
              type="range"
              min={0}
              max={120}
              step={15}
              value={workoutDurationMins}
              onChange={(e) => setWorkoutDurationMins(Number(e.target.value))}
              style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
            />
          </div>

          <div className="tool-field-group">
            <span className="tool-field-label">Training Discipline &amp; Climate</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <button
                type="button"
                className={`tool-segment-btn ${environment === 'gym' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setEnvironment('gym')}
              >
                Strength Floor
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${environment === 'studio' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setEnvironment('studio')}
              >
                Zumba / Aerobics
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${environment === 'rooftop' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setEnvironment('rooftop')}
              >
                Rooftop Turf
              </button>
            </div>
          </div>
        </div>

        {/* Right Outputs */}
        <div className="tool-results-column">
          <div className="tool-stat-highlight">
            <span className="tool-stat-eyebrow">Target Total Daily Fluids</span>
            <div className="tool-stat-val">
              {hydration.totalLiters}
              <span className="tool-stat-unit">Liters / day</span>
            </div>
            <p className="tool-stat-subtext">
              Equivalent to approximately <strong>{hydration.totalGlasses} standard glasses</strong> (250ml each).
            </p>
          </div>

          <div className="hydration-grid">
            <div className="hydration-card">
              <div className="hydration-card-num">500ml</div>
              <div className="hydration-card-label">Pre-Lift Window (60m prior)</div>
            </div>
            <div className="hydration-card">
              <div className="hydration-card-num">200ml</div>
              <div className="hydration-card-label">Every 15–20m of Sets</div>
            </div>
            <div className="hydration-card">
              <div className="hydration-card-num">500ml</div>
              <div className="hydration-card-label">Post-Session Recovery</div>
            </div>
          </div>

          <div className="tool-athletic-note">
            <strong>Club Water Stations:</strong> Free filtered hydration stations are situated directly on the gym floor and studio entries across both Sector 85 and Sector 86 grounds.
          </div>
        </div>
      </div>

      <div className="tool-actions-strip">
        <Link href="/join?tool=hydration" className="tool-cta-primary">
          TRAIN HYDRATED AT NEXUS → START JOURNEY
        </Link>
        <a href={getWhatsAppUrl(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="tool-cta-whatsapp">
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
};
