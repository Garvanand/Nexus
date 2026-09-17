'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useBranch } from '../../context/BranchContext';

export const BmiTool: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState<number>(178);
  const [weightKg, setWeightKg] = useState<number>(76);

  // Imperial states
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(10);
  const [weightLbs, setWeightLbs] = useState<number>(168);

  const bmiData = useMemo(() => {
    let hMeters = heightCm / 100;
    let wKg = weightKg;

    if (unit === 'imperial') {
      const totalInches = heightFeet * 12 + heightInches;
      hMeters = totalInches * 0.0254;
      wKg = weightLbs * 0.453592;
    }

    if (hMeters <= 0 || wKg <= 0) return { bmi: 22, category: 'Normal', color: '#E6C34C' };

    const bmi = parseFloat((wKg / (hMeters * hMeters)).toFixed(1));

    let category = 'Normal';
    let color = '#4AE290'; // Green

    if (bmi < 18.5) {
      category = 'Underweight';
      color = '#4A90E2';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Healthy Athletic Range';
      color = '#E6C34C';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight / High Muscularity';
      color = '#E29A4A';
    } else {
      category = 'Obese Class / Heavy Strength Athlete';
      color = '#E24A4A';
    }

    return { bmi, category, color, wKg: Math.round(wKg), hCm: Math.round(hMeters * 100) };
  }, [unit, heightCm, weightKg, heightFeet, heightInches, weightLbs]);

  const whatsappMsg = `Hi Nexus, I calculated my BMI index (${bmiData.bmi}) on your website. Since I train with weights, I would like to book an in-person body composition screening at the club.`;

  return (
    <div className="bmi-tool" id="bmi-calculator">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Step 3: Athletic Body Mass Index &amp; Composition Context
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Calculate your standard BMI alongside the critical Lifting Club athletic perspective on muscle density vs body fat.
        </p>
      </div>

      <div className="tool-form-layout">
        {/* Left Inputs */}
        <div className="tool-inputs-column">
          <div className="tool-field-group">
            <span className="tool-field-label">Measurement System</span>
            <div className="tool-segment-control">
              <button
                type="button"
                className={`tool-segment-btn ${unit === 'metric' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setUnit('metric')}
              >
                METRIC (CM / KG)
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${unit === 'imperial' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setUnit('imperial')}
              >
                IMPERIAL (FT / LBS)
              </button>
            </div>
          </div>

          {unit === 'metric' ? (
            <>
              <div className="tool-field-group">
                <label className="tool-field-label" htmlFor="bmi-height">
                  Height <span>{heightCm} cm</span>
                </label>
                <input
                  id="bmi-height"
                  type="range"
                  min={130}
                  max={220}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
              </div>

              <div className="tool-field-group">
                <label className="tool-field-label" htmlFor="bmi-weight">
                  Weight <span>{weightKg} kg</span>
                </label>
                <input
                  id="bmi-weight"
                  type="range"
                  min={40}
                  max={160}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="tool-field-group">
                  <label className="tool-field-label" htmlFor="bmi-ft">
                    Feet
                  </label>
                  <input
                    id="bmi-ft"
                    type="number"
                    min={4}
                    max={7}
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="tool-input-text"
                  />
                </div>
                <div className="tool-field-group">
                  <label className="tool-field-label" htmlFor="bmi-in">
                    Inches
                  </label>
                  <input
                    id="bmi-in"
                    type="number"
                    min={0}
                    max={11}
                    value={heightInches}
                    onChange={(e) => setHeightInches(Number(e.target.value))}
                    className="tool-input-text"
                  />
                </div>
              </div>

              <div className="tool-field-group">
                <label className="tool-field-label" htmlFor="bmi-lbs">
                  Weight <span>(lbs)</span>
                </label>
                <input
                  id="bmi-lbs"
                  type="number"
                  min={80}
                  max={350}
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(Number(e.target.value))}
                  className="tool-input-text"
                />
              </div>
            </>
          )}
        </div>

        {/* Right Output */}
        <div className="tool-results-column">
          <div className="tool-stat-highlight">
            <span className="tool-stat-eyebrow">Calculated BMI Score</span>
            <div className="tool-stat-val" style={{ color: bmiData.color }}>
              {bmiData.bmi}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--ff-display)', textTransform: 'uppercase', color: 'var(--text-primary)', marginTop: '4px' }}>
              Classification: <span style={{ color: bmiData.color }}>{bmiData.category}</span>
            </div>
          </div>

          {/* The Lifter's Paradox Disclaimer */}
          <div className="tool-athletic-note">
            <strong>The Lifter&apos;s Nuance:</strong> BMI does not distinguish between dense skeletal muscle and adipose body fat. Advanced strength athletes and bodybuilders frequently score in the &ldquo;overweight&rdquo; or &ldquo;obese&rdquo; bracket despite having sub-12% body fat. We recommend pairing this number with our in-club body composition screening.
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Reference Standard: WHO Adult Classification (Underweight &lt;18.5 · Normal 18.5–24.9 · Overweight 25–29.9 · Obese 30+).
          </div>
        </div>
      </div>

      <div className="tool-actions-strip">
        <Link href="/join?tool=bmi&assessment=true" className="tool-cta-primary">
          BOOK IN-PERSON PHYSICAL SCREENING →
        </Link>
        <a href={getWhatsAppUrl(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="tool-cta-whatsapp">
          Inquire About Screening on WhatsApp
        </a>
      </div>
    </div>
  );
};
