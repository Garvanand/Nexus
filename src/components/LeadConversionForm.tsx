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
    'Rooftop Cricket',
    'General Enquiry',
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
    }, 500);
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
          <span>START YOUR JOURNEY</span>
        </div>

        <h2 className="final-cta-title">
          START YOUR<br />TRANSFORMATION.
        </h2>

        <p className="final-cta-desc">
          Zero gimmicks. Select your ground, choose your discipline, and experience the standard firsthand.
        </p>

        {submitted ? (
          <div className="enquiry-confirmed-box">
            <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '1rem' }}>
              ✓ INVITATION CONFIRMED
            </div>
            <h3 className="enquiry-confirmed-box__title">
              WE’LL SEE YOU ON THE FLOOR, {name.toUpperCase()}.
            </h3>
            <p className="enquiry-confirmed-box__desc">
              Our front desk at {selectedBranch === 'sector-85' ? 'Sector 85 Flagship' : 'Sector 86 Performance'} has received your request and will connect with you via WhatsApp to coordinate your guest walkthrough.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppUrl(`Hi Nexus, I just submitted an enquiry for ${selectedDiscipline} at ${selectedBranch === 'sector-85' ? 'Sector 85' : 'Sector 86'}. Name: ${name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open WhatsApp Concierge Directly →
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                }}
                className="btn btn-secondary"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enquiry-form">
            {/* Step 01: Choose Club */}
            <div className="enquiry-step">
              <label className="enquiry-step__label">
                01 // SELECT DESTINATION
              </label>
              <div className="enquiry-branch-toggle">
                <button
                  type="button"
                  onClick={() => handleBranchToggle('sector-85')}
                  className={`btn-branch-opt ${selectedBranch === 'sector-85' ? 'btn-branch-opt--active' : ''}`}
                >
                  <span className="dot"></span>
                  <span>Sector 85 (Flagship Arena)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleBranchToggle('sector-86')}
                  className={`btn-branch-opt ${selectedBranch === 'sector-86' ? 'btn-branch-opt--active' : ''}`}
                >
                  <span className="dot"></span>
                  <span>Sector 86 (Studios & Turf)</span>
                </button>
              </div>
            </div>

            {/* Step 02: Select Discipline */}
            <div className="enquiry-step">
              <label className="enquiry-step__label">
                02 // WHAT ARE YOU LOOKING FOR?
              </label>
              <div className="enquiry-discipline-grid">
                {disciplines.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDiscipline(d)}
                    className={`btn-discipline-pill ${selectedDiscipline === d ? 'btn-discipline-pill--active' : ''}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 03: Contact Details */}
            <div className="enquiry-step">
              <label className="enquiry-step__label">
                03 // YOUR DETAILS
              </label>
              <div className="enquiry-inputs-grid">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    required
                    className="enquiry-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp / Mobile Number"
                    required
                    className="enquiry-input"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p style={{ color: '#FF5555', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                {error}
              </p>
            )}

            {/* Form Actions */}
            <div className="enquiry-form-actions">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', maxWidth: '320px' }}
              >
                {loading ? 'Submitting...' : 'Confirm Guest Pass →'}
              </button>

              <a
                href={getWhatsAppUrl(`Hi Nexus, I'd like to book a club walkthrough for ${selectedDiscipline} at ${selectedBranch === 'sector-85' ? 'Sector 85' : 'Sector 86'}.`)}
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
