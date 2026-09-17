'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useBranch } from '../../context/BranchContext';

export const CalorieMacroTool: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(72);
  const [activity, setActivity] = useState<number>(1.45); // 1.2, 1.45, 1.65
  const [goalType, setGoalType] = useState<'deficit' | 'maintenance' | 'surplus'>('maintenance');

  const stats = useMemo(() => {
    // Mifflin-St Jeor Formula
    const bmr =
      gender === 'male'
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

    const tdee = Math.round(bmr * activity);

    let targetCalories = tdee;
    if (goalType === 'deficit') targetCalories = Math.max(1200, tdee - 400);
    if (goalType === 'surplus') targetCalories = tdee + 300;

    // High-Protein Lifter Split: 30% Protein, 45% Carbs, 25% Fats
    const proteinCals = targetCalories * 0.3;
    const carbsCals = targetCalories * 0.45;
    const fatsCals = targetCalories * 0.25;

    const proteinGrams = Math.round(proteinCals / 4);
    const carbsGrams = Math.round(carbsCals / 4);
    const fatsGrams = Math.round(fatsCals / 9);

    return {
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinGrams,
      carbsGrams,
      fatsGrams,
      proteinPct: 30,
      carbsPct: 45,
      fatsPct: 25
    };
  }, [gender, age, heightCm, weightKg, activity, goalType]);

  const whatsappMsg = `Hi Nexus, I used the Calorie & Macro Estimator on your website. My daily target is ~${stats.targetCalories} kcal with ${stats.proteinGrams}g Protein, ${stats.carbsGrams}g Carbs, ${stats.fatsGrams}g Fats for ${goalType.toUpperCase()}. I'd like to align this with a training program.`;

  return (
    <div className="macro-tool" id="calorie-macro">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Step 2: Caloric Expenditure &amp; Athletic Macro Split
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Standard Mifflin-St Jeor metabolic baseline tailored for resistance athletes. Estimates daily energy expenditure and macronutrient fueling targets.
        </p>
      </div>

      <div className="tool-form-layout">
        {/* Left: Interactive Form Inputs */}
        <div className="tool-inputs-column">
          {/* Sex Selection */}
          <div className="tool-field-group">
            <span className="tool-field-label">Biological Baseline</span>
            <div className="tool-segment-control">
              <button
                type="button"
                className={`tool-segment-btn ${gender === 'male' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setGender('male')}
              >
                MALE
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${gender === 'female' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setGender('female')}
              >
                FEMALE
              </button>
            </div>
          </div>

          {/* Age & Weight Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="tool-field-group">
              <label className="tool-field-label" htmlFor="input-age">
                Age <span>(Years)</span>
              </label>
              <input
                id="input-age"
                type="number"
                min={14}
                max={90}
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || 20)}
                className="tool-input-text"
              />
            </div>

            <div className="tool-field-group">
              <label className="tool-field-label" htmlFor="input-weight">
                Weight <span>(kg)</span>
              </label>
              <input
                id="input-weight"
                type="number"
                min={35}
                max={200}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value) || 60)}
                className="tool-input-text"
              />
            </div>
          </div>

          {/* Height Input */}
          <div className="tool-field-group">
            <label className="tool-field-label" htmlFor="input-height">
              Height <span>(cm)</span>
            </label>
            <input
              id="input-height"
              type="number"
              min={120}
              max={230}
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value) || 170)}
              className="tool-input-text"
            />
          </div>

          {/* Activity Level Selector */}
          <div className="tool-field-group">
            <label className="tool-field-label" htmlFor="input-activity">
              Training Frequency
            </label>
            <select
              id="input-activity"
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="tool-select"
            >
              <option value={1.2}>Sedentary / Minimal Exercise (Desk routine)</option>
              <option value={1.45}>Moderate Lifter (3–4 days/week resistance)</option>
              <option value={1.65}>Heavy Athlete (5+ days/week intense gym + turf)</option>
            </select>
          </div>

          {/* Target Goal Selector */}
          <div className="tool-field-group">
            <span className="tool-field-label">Caloric Strategy</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <button
                type="button"
                className={`tool-segment-btn ${goalType === 'deficit' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setGoalType('deficit')}
                style={{ background: goalType === 'deficit' ? 'rgba(230, 195, 76, 0.15)' : 'rgba(255,255,255,0.03)', borderColor: goalType === 'deficit' ? 'var(--accent)' : 'transparent' }}
              >
                Deficit (-400)
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${goalType === 'maintenance' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setGoalType('maintenance')}
                style={{ background: goalType === 'maintenance' ? 'rgba(230, 195, 76, 0.15)' : 'rgba(255,255,255,0.03)', borderColor: goalType === 'maintenance' ? 'var(--accent)' : 'transparent' }}
              >
                Maintain
              </button>
              <button
                type="button"
                className={`tool-segment-btn ${goalType === 'surplus' ? 'tool-segment-btn--active' : ''}`}
                onClick={() => setGoalType('surplus')}
                style={{ background: goalType === 'surplus' ? 'rgba(230, 195, 76, 0.15)' : 'rgba(255,255,255,0.03)', borderColor: goalType === 'surplus' ? 'var(--accent)' : 'transparent' }}
              >
                Surplus (+300)
              </button>
            </div>
          </div>
        </div>

        {/* Right: Calculated Athletic Results */}
        <div className="tool-results-column">
          <div className="tool-stat-highlight">
            <span className="tool-stat-eyebrow">Estimated Daily Target</span>
            <div className="tool-stat-val">
              {stats.targetCalories.toLocaleString()}
              <span className="tool-stat-unit">kcal/day</span>
            </div>
            <p className="tool-stat-subtext">
              Basal Metabolic Rate: <strong>{stats.bmr} kcal</strong> · Maintenance TDEE: <strong>{stats.tdee} kcal</strong>.
            </p>
          </div>

          {/* Visual Macro Split Progress Bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--ff-display)', letterSpacing: '0.08em', marginBottom: '4px' }}>
              <span>High-Protein Athletic Fueling Breakdown</span>
              <span>100% Target</span>
            </div>
            <div className="macro-bar-container" role="progressbar" aria-label="Macro split bar">
              <div className="macro-bar-seg macro-bar-seg--protein" style={{ width: `${stats.proteinPct}%` }} title="Protein" />
              <div className="macro-bar-seg macro-bar-seg--carbs" style={{ width: `${stats.carbsPct}%` }} title="Carbohydrates" />
              <div className="macro-bar-seg macro-bar-seg--fats" style={{ width: `${stats.fatsPct}%` }} title="Fats" />
            </div>
          </div>

          {/* 3 Macro Cards */}
          <div className="macro-legend">
            <div className="macro-legend-item">
              <span className="macro-legend-title">
                <span className="macro-dot" style={{ background: '#E6C34C' }} />
                Protein
              </span>
              <span className="macro-legend-val">{stats.proteinGrams}g</span>
              <span className="macro-legend-sub">~{(stats.proteinGrams / weightKg).toFixed(1)}g / kg</span>
            </div>

            <div className="macro-legend-item">
              <span className="macro-legend-title">
                <span className="macro-dot" style={{ background: '#4A90E2' }} />
                Carbs
              </span>
              <span className="macro-legend-val">{stats.carbsGrams}g</span>
              <span className="macro-legend-sub">Glycogen fuel</span>
            </div>

            <div className="macro-legend-item">
              <span className="macro-legend-title">
                <span className="macro-dot" style={{ background: '#E26A4A' }} />
                Fats
              </span>
              <span className="macro-legend-val">{stats.fatsGrams}g</span>
              <span className="macro-legend-sub">Hormonal health</span>
            </div>
          </div>

          {/* Scientific Disclaimer Note */}
          <div className="tool-athletic-note">
            <strong>Athletic Guidance:</strong> This macro split prioritizes muscle tissue repair and training output for barbell and studio athletics. It is an educational baseline, not a clinical prescription.
          </div>
        </div>
      </div>

      {/* Conversion Actions */}
      <div className="tool-actions-strip">
        <Link href={`/join?calories=${stats.targetCalories}&goal=${goalType}`} className="tool-cta-primary">
          APPLY THIS NUTRITION AT NEXUS →
        </Link>
        <a href={getWhatsAppUrl(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="tool-cta-whatsapp">
          Discuss Nutrition with Nexus Coach
        </a>
      </div>
    </div>
  );
};
