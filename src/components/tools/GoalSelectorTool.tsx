'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NEXUS_GOALS } from '../../data/tools';
import { GoalKey } from '../../types';
import { useBranch } from '../../context/BranchContext';

export const GoalSelectorTool: React.FC = () => {
  const [selectedGoalId, setSelectedGoalId] = useState<GoalKey>('strength');
  const { getWhatsAppUrl } = useBranch();

  const currentGoal = NEXUS_GOALS.find((g) => g.id === selectedGoalId) || NEXUS_GOALS[0];

  const whatsappMsg = `Hi Nexus, I used the Goal Selector on Nexus Tools for ${currentGoal.label}. My starting path is ${currentGoal.startingProtocol.slice(0, 60)}... I'd like to book my walkthrough.`;

  return (
    <div className="goal-tool" id="goal-matcher">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Step 1: What Are You Training For?
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Select your primary athletic priority to generate a verified Nexus training path, recommended equipment floor, and coach specialization.
        </p>
      </div>

      {/* 6 Goal Cards Grid */}
      <div className="goal-grid" role="radiogroup" aria-label="Training Goals">
        {NEXUS_GOALS.map((goal) => {
          const isSelected = goal.id === selectedGoalId;
          return (
            <div
              key={goal.id}
              className={`goal-card ${isSelected ? 'goal-card--active' : ''}`}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => setSelectedGoalId(goal.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedGoalId(goal.id);
                }
              }}
            >
              <div className="goal-card__header">
                <span className="goal-card__title">{goal.label}</span>
                <div className="goal-card__radio">
                  {isSelected && <div className="goal-card__radio-inner" />}
                </div>
              </div>
              <p className="goal-card__tagline">{goal.tagline}</p>
              <span className="goal-card__badge">
                {goal.recommendedBranch === 'sector-85'
                  ? 'Sector 85 Ground'
                  : goal.recommendedBranch === 'sector-86'
                  ? 'Sector 86 Ground'
                  : 'Both Grounds'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dynamic Recommendation Output Box */}
      <div className="goal-output-box">
        <div className="goal-output-head">
          <div>
            <span className="goal-output-badge">Recommended Nexus Starting Path</span>
            <h4 className="goal-output-title">{currentGoal.label} PROTOCOL</h4>
          </div>
          <div className="goal-output-branch">
            Ideal Ground:{' '}
            <strong style={{ color: 'var(--text-primary)' }}>
              {currentGoal.recommendedBranch === 'sector-85'
                ? 'Sector 85 Flagship'
                : currentGoal.recommendedBranch === 'sector-86'
                ? 'Sector 86 Performance'
                : 'Available Across Both Locations'}
            </strong>
          </div>
        </div>

        <p className="goal-output-desc">{currentGoal.description}</p>

        {/* 3 Columns Breakdown */}
        <div className="goal-output-columns">
          <div className="goal-col-card">
            <div className="goal-col-label">Focus Zones &amp; Equipment</div>
            <div className="goal-col-val">
              <ul>
                {currentGoal.focusZones.map((z, idx) => (
                  <li key={idx}>{z}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="goal-col-card">
            <div className="goal-col-label">Recommended Classes &amp; Services</div>
            <div className="goal-col-val">
              <ul>
                {currentGoal.recommendedServices.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="goal-col-card">
            <div className="goal-col-label">Coach Specialization</div>
            <div className="goal-col-val">
              <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '4px' }}>
                {currentGoal.coachArchetype}
              </strong>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {currentGoal.startingProtocol}
              </span>
            </div>
          </div>
        </div>

        {/* Weekly Template Box */}
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '4px', padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)', marginRight: '8px' }}>Suggested Weekly Blueprint:</strong>
          {currentGoal.weeklyScheduleTemplate}
        </div>

        {/* High Conversion Action Strip */}
        <div className="tool-actions-strip">
          <Link
            href={`/join?goal=${currentGoal.id}&branch=${currentGoal.recommendedBranch}`}
            className="tool-cta-primary"
          >
            START YOUR NEXUS JOURNEY ({currentGoal.label}) →
          </Link>

          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-cta-whatsapp"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Consult Coach on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
