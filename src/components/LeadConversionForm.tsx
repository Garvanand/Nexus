'use client';

import React, { useState } from 'react';
import { useBranch } from '../context/BranchContext';
import { BranchId } from '../types';

export const LeadConversionForm: React.FC<{ initialStep?: number }> = ({
  initialStep = 1,
}) => {
  const { branchId, setBranch, getWhatsAppUrl } = useBranch();
  const [selectedBranch, setSelectedBranch] = useState<BranchId>(branchId || 'sector-85');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('Strength & Iron');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const disciplines = [
    'Strength & Iron',
    'Kinetic Zumba',
    'Restorative Yoga',
    'Athletic Aerobics',
    'Rooftop Cricket (Sec 86)',
    'General Membership',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleBranchToggle = (id: BranchId) => {
    setSelectedBranch(id);
    setBranch(id);
  };

  return (
    <section className="section final-cta-section" id="join" aria-label="Join Nexus">
      <div className="container final-cta-container">
        <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '1.25rem' }}>
          <span className="eyebrow-line"></span>
          <span>STEP ONTO THE FLOOR</span>
        </div>

        <h2 className="final-cta-title">
          START YOUR<br />TRANSFORMATION.
        </h2>

        <p className="final-cta-desc">
          Zero sign-up gimmicks. Experience the space, meet the coaches, and feel the standard firsthand across Sector 85 & 86.
        </p>

        {submitted ? (
          <div
            style={{
              padding: '3rem 2rem',
              backgroundColor: 'var(--nexus-surface)',
              border: '1px solid var(--nexus-border)',
              borderRadius: '2px',
              textAlign: 'center',
            }}
          >
            <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '1rem' }}>
              ✓ INVITATION CONFIRMED
            </div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--nexus-off-white)' }}>
              WE’LL SEE YOU ON THE FLOOR, {name.toUpperCase()}.
            </h3>
            <p style={{ color: 'var(--nexus-grey-2)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Our front desk at {selectedBranch === 'sector-85' ? 'Sector 85 Flagship' : 'Sector 86 Performance'} has received your request and will contact you via WhatsApp shortly.
            </p>
            <a
              href={getWhatsAppUrl(`Hi Nexus, I just requested a guest visit for ${selectedDiscipline} at ${selectedBranch === 'sector-85' ? 'Sector 85' : 'Sector 86'}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open Direct WhatsApp Chat →
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--nexus-surface)',
              border: '1px solid var(--nexus-border)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              textAlign: 'left',
            }}
          >
            {/* Branch Selection Toggle */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontFamily: 'var(--ff-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nexus-grey-2)', marginBottom: '0.75rem' }}>
                01 // SELECT DESTINATION
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => handleBranchToggle('sector-85')}
                  className="btn btn-secondary"
                  style={{
                    borderColor: selectedBranch === 'sector-85' ? 'var(--nexus-yellow)' : 'var(--nexus-border)',
                    backgroundColor: selectedBranch === 'sector-85' ? 'rgba(229, 255, 0, 0.08)' : 'transparent',
                    color: selectedBranch === 'sector-85' ? 'var(--nexus-off-white)' : 'var(--nexus-grey-2)',
                  }}
                >
                  Sector 85 (Flagship)
                </button>
                <button
                  type="button"
                  onClick={() => handleBranchToggle('sector-86')}
                  className="btn btn-secondary"
                  style={{
                    borderColor: selectedBranch === 'sector-86' ? 'var(--nexus-yellow)' : 'var(--nexus-border)',
                    backgroundColor: selectedBranch === 'sector-86' ? 'rgba(229, 255, 0, 0.08)' : 'transparent',
                    color: selectedBranch === 'sector-86' ? 'var(--nexus-off-white)' : 'var(--nexus-grey-2)',
                  }}
                >
                  Sector 86 (Studios & Turf)
                </button>
              </div>
            </div>

            {/* Discipline Selection */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontFamily: 'var(--ff-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nexus-grey-2)', marginBottom: '0.75rem' }}>
                02 // PRIMARY DISCIPLINE
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {disciplines.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDiscipline(d)}
                    style={{
                      padding: '0.45rem 0.9rem',
                      fontFamily: 'var(--ff-display)',
                      fontSize: '0.8125rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: selectedDiscipline === d ? 'var(--nexus-off-white)' : 'var(--nexus-concrete)',
                      color: selectedDiscipline === d ? 'var(--nexus-black)' : 'var(--nexus-grey-2)',
                      border: '1px solid',
                      borderColor: selectedDiscipline === d ? 'var(--nexus-off-white)' : 'var(--nexus-border)',
                      borderRadius: '2px',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--ff-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nexus-grey-2)', marginBottom: '0.5rem' }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arjun Mehta"
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    backgroundColor: 'var(--nexus-black)',
                    border: '1px solid var(--nexus-border)',
                    color: 'var(--nexus-off-white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    borderRadius: '2px',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--ff-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--nexus-grey-2)', marginBottom: '0.5rem' }}>
                  Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    backgroundColor: 'var(--nexus-black)',
                    border: '1px solid var(--nexus-border)',
                    color: 'var(--nexus-off-white)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    borderRadius: '2px',
                  }}
                />
              </div>
            </div>

            {error && (
              <p style={{ color: '#FF5555', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                {error}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '300px' }}
              >
                {loading ? 'Confirming...' : 'Confirm Guest Pass →'}
              </button>

              <a
                href={getWhatsAppUrl(`Hi Nexus, I'd like to book a tour directly.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Or Chat with Front Desk on WhatsApp ↗
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
