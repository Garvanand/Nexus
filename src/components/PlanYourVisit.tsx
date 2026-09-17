'use client';

import React, { useState } from 'react';
import { Branch } from '../types';

interface PlanYourVisitProps {
  branch: Branch;
}

export const PlanYourVisit: React.FC<PlanYourVisitProps> = ({ branch }) => {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('Evening (5 PM – 9 PM)');
  const [selectedFocus, setSelectedFocus] = useState(
    branch.id === 'sector-86' ? 'Rooftop Cricket Turf' : 'Heavy Barbell & Strength'
  );

  const days = ['Today', 'Tomorrow', 'This Weekend'];
  const times = [
    'Early Morning (6 AM – 9 AM)',
    'Midday Window (11 AM – 3 PM)',
    'Peak Evening (5 PM – 9 PM)'
  ];

  const focusOptions = branch.id === 'sector-86'
    ? ['Rooftop Cricket Turf', 'Zumba Dance Studio', 'Yoga & Mobility', 'Strength & Free Weights', 'Full Club Tour']
    : ['Strength Lifting Bay', 'Power Racks & Free Weights', 'Cardio & Machines', 'Coaching Consult', 'Full Facility Tour'];

  const whatsappMessage = encodeURIComponent(
    `Hi Nexus! I would like to plan a visit to ${branch.name}. Day: ${selectedDay}, Preferred Time: ${selectedTime}, Focus: ${selectedFocus}. Please confirm coach availability.`
  );

  return (
    <section className="plan-visit-section" style={{ margin: '60px 0', padding: '48px 0', background: 'var(--surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            CLUB WALKTHROUGH // VISIT NEXUS
          </span>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 12px 0' }}>
            PLAN YOUR VISIT TO {branch.shortName.toUpperCase()}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            Tour the floor, check out the equipment, and discuss your training goals before joining. No sales pressure.
          </p>
        </div>

        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* 1. Day Selector */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Step 1: When would you like to drop by?
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '4px',
                    border: '1px solid ' + (selectedDay === day ? 'var(--accent)' : 'var(--border-subtle)'),
                    background: selectedDay === day ? 'rgba(200, 184, 48, 0.15)' : 'rgba(255,255,255,0.02)',
                    color: selectedDay === day ? 'var(--accent)' : 'var(--text-primary)',
                    fontFamily: 'var(--ff-display)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Time Slot Selector */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Step 2: Preferred Time of Day
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '4px',
                    border: '1px solid ' + (selectedTime === time ? 'var(--accent)' : 'var(--border-subtle)'),
                    background: selectedTime === time ? 'rgba(200, 184, 48, 0.15)' : 'rgba(255,255,255,0.02)',
                    color: selectedTime === time ? 'var(--accent)' : 'var(--text-primary)',
                    fontFamily: 'var(--ff-display)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Primary Interest Focus */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Step 3: What do you want to inspect first?
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {focusOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedFocus(opt)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: '1px solid ' + (selectedFocus === opt ? 'var(--accent)' : 'var(--border-subtle)'),
                    background: selectedFocus === opt ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
                    color: selectedFocus === opt ? '#0b0b0b' : 'var(--text-secondary)',
                    fontFamily: 'var(--ff-display)',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Concierge Action */}
          <div style={{ padding: '20px', background: 'rgba(200, 184, 48, 0.06)', border: '1px solid rgba(200, 184, 48, 0.3)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase' }}>
                Your Planned Walkthrough:
              </div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', marginTop: '2px', fontWeight: 600 }}>
                {branch.shortName} · {selectedDay} during {selectedTime}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
                Focus: {selectedFocus}
              </div>
            </div>

            <a
              href={`https://wa.me/919582333003?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ minWidth: '220px', textAlign: 'center' }}
            >
              Confirm on WhatsApp ↗
            </a>
          </div>

          {/* Quick First-Time Visitor Protocol */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.125rem' }}>👟</span>
              <div>
                <strong style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>Clean Footwear</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Carry clean indoor training shoes for the platform.</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.125rem' }}>🔒</span>
              <div>
                <strong style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>Locker Padlock</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Personal lockers accept personal shackles or digital pins.</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.125rem' }}>🤝</span>
              <div>
                <strong style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>Coach Walkthrough</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>A dedicated trainer will walk you through biomechanics.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
