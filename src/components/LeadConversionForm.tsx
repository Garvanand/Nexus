'use client';

import React, { useState } from 'react';
import { useBranch } from '../context/BranchContext';
import { BranchId } from '../types';

interface FormData {
  branch: BranchId;
  interest: string;
  name: string;
  phone: string;
  contactMethod: 'whatsapp' | 'call';
}

interface InterestOption {
  id: string;
  name: string;
  tag: string;
  desc: string;
}

const INTEREST_OPTIONS: InterestOption[] = [
  {
    id: 'gym',
    name: 'Gym',
    tag: 'Floor',
    desc: 'Cardio machines, resistance machines & free weights.'
  },
  {
    id: 'strength',
    name: 'Strength Training',
    tag: 'Barbell',
    desc: 'Squat, bench, deadlift & progressive overload.'
  },
  {
    id: 'zumba',
    name: 'Zumba',
    tag: 'Studio',
    desc: 'High-cadence dance cardio & music flow.'
  },
  {
    id: 'yoga',
    name: 'Yoga',
    tag: 'Mobility',
    desc: 'Restorative mobility & spinal decompression.'
  },
  {
    id: 'aerobics',
    name: 'Aerobics',
    tag: 'Conditioning',
    desc: 'Athletic HIIT intervals & metabolic burn.'
  },
  {
    id: 'general',
    name: 'General enquiry',
    tag: 'Consultation',
    desc: 'Club tour, personal training & memberships.'
  }
];

export const LeadConversionForm: React.FC<{ initialStep?: number }> = ({
  initialStep = 1
}) => {
  const { branchId, setBranch, getWhatsAppUrl } = useBranch();
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    branch: branchId || 'sector-85',
    interest: 'Strength Training',
    name: '',
    phone: '',
    contactMethod: 'whatsapp'
  });

  const handleBranchSelect = (selected: BranchId) => {
    setFormData((prev) => ({ ...prev, branch: selected }));
    setBranch(selected);
  };

  const handleInterestSelect = (interestName: string) => {
    setFormData((prev) => ({ ...prev, interest: interestName }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot detection
    if (honeypot.trim().length > 0) {
      // Quietly reject bot
      setSubmitted(true);
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    // Simulate backend CRM / webhook submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setErrorMessage('');
    setFormData({
      branch: branchId || 'sector-85',
      interest: 'Strength Training',
      name: '',
      phone: '',
      contactMethod: 'whatsapp'
    });
  };

  const branchDisplay =
    formData.branch === 'sector-85'
      ? 'Sector 85 (Flagship Arena)'
      : 'Sector 86 (Studios & Turf)';

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hi Nexus! I'm interested in ${formData.interest} at ${
      formData.branch === 'sector-85' ? 'Sector 85' : 'Sector 86'
    }. Please share membership details.`
  );

  return (
    <section className="lead-section" id="visit" aria-label="Start Your Journey">
      <div className="container">
        <div className="lead-card" id="lead-funnel">
          {/* Header */}
          <div className="lead-header">
            <div className="lead-badge">
              <span className="dot"></span> Membership Consultation · Greater Faridabad
            </div>
            <h2 className="lead-title">START YOUR NEXUS JOURNEY.</h2>
            <p className="lead-subtitle">
              Two clubs in Greater Faridabad. One uncompromising standard. Select your branch and training focus below to receive verified details and tailored membership options directly from our team.
            </p>
          </div>

          {/* Progress Indicator */}
          {!submitted && (
            <div className="lead-progress">
              <div className="lead-progress__label">
                Step <span className="lead-progress__current">0{currentStep}</span> of 03
              </div>
              <div className="lead-progress__bars" aria-hidden="true">
                <div
                  className={`lead-progress__bar ${
                    currentStep >= 1 ? 'lead-progress__bar--active' : ''
                  }`}
                ></div>
                <div
                  className={`lead-progress__bar ${
                    currentStep >= 2 ? 'lead-progress__bar--active' : ''
                  }`}
                ></div>
                <div
                  className={`lead-progress__bar ${
                    currentStep >= 3 ? 'lead-progress__bar--active' : ''
                  }`}
                ></div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div
              className="lead-error-banner"
              style={{ display: 'block', marginBottom: '24px' }}
              role="alert"
            >
              ⚠️ {errorMessage}
            </div>
          )}

          {/* Form Steps */}
          {!submitted ? (
            <div id="lead-steps-wrapper">
              <form id="lead-form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot Spam Trap */}
                <input
                  type="text"
                  name="website_hp"
                  className="lead-hp-trap"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                {/* STEP 1: CHOOSE YOUR BRANCH */}
                {currentStep === 1 && (
                  <div className="lead-step lead-step--active" data-step="1">
                    <div className="lead-step__heading">
                      <span>1. Choose Your Branch</span>
                      <span className="lead-step__subhead">Select location</span>
                    </div>

                    <div className="lead-branches" role="radiogroup" aria-label="Choose your preferred branch">
                      {/* Sector 85 Card */}
                      <div
                        className={`lead-branch-card ${
                          formData.branch === 'sector-85' ? 'lead-branch-card--active' : ''
                        }`}
                        role="radio"
                        aria-checked={formData.branch === 'sector-85'}
                        tabIndex={0}
                        onClick={() => handleBranchSelect('sector-85')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleBranchSelect('sector-85');
                          }
                        }}
                      >
                        <div className="lead-branch-card__header">
                          <span className="lead-branch-card__sector">Sector 85</span>
                          <span className="lead-branch-card__badge">Flagship Arena</span>
                        </div>
                        <p className="lead-branch-card__desc">
                          Olympic Power Racks, calibrated steel plates, competition benches, and heavy sled tracks.
                        </p>
                        <div className="lead-branch-card__footer">
                          <span>Lifting Arena</span>
                          <span className="lead-branch-card__check">
                            {formData.branch === 'sector-85' ? '✓' : ''}
                          </span>
                        </div>
                      </div>

                      {/* Sector 86 Card */}
                      <div
                        className={`lead-branch-card ${
                          formData.branch === 'sector-86' ? 'lead-branch-card--active' : ''
                        }`}
                        role="radio"
                        aria-checked={formData.branch === 'sector-86'}
                        tabIndex={0}
                        onClick={() => handleBranchSelect('sector-86')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleBranchSelect('sector-86');
                          }
                        }}
                      >
                        <div className="lead-branch-card__header">
                          <span className="lead-branch-card__sector">Sector 86</span>
                          <span className="lead-branch-card__badge">Studios &amp; Turf</span>
                        </div>
                        <p className="lead-branch-card__desc">
                          Acoustic mirrored studios for Zumba, Yoga, Aerobics, and Open-Air Rooftop Cricket Turf.
                        </p>
                        <div className="lead-branch-card__footer">
                          <span>Studios + Rooftop Turf</span>
                          <span className="lead-branch-card__check">
                            {formData.branch === 'sector-86' ? '✓' : ''}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lead-nav-actions">
                      <div></div>
                      <div className="lead-btn-group">
                        <a
                          href={whatsappInquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lead-btn-whatsapp"
                        >
                          WhatsApp Nexus
                        </a>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setCurrentStep(2)}
                        >
                          Next: Training Interest →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: WHAT ARE YOU INTERESTED IN? */}
                {currentStep === 2 && (
                  <div className="lead-step lead-step--active" data-step="2">
                    <div className="lead-step__heading">
                      <span>2. What Are You Interested In?</span>
                      <span className="lead-step__subhead">Select primary focus</span>
                    </div>

                    <div className="lead-interests" role="radiogroup" aria-label="Select training focus">
                      {INTEREST_OPTIONS.map((opt) => {
                        const isSelected = formData.interest === opt.name;
                        return (
                          <div
                            key={opt.id}
                            className={`lead-interest-tile ${
                              isSelected ? 'lead-interest-tile--active' : ''
                            }`}
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={0}
                            onClick={() => handleInterestSelect(opt.name)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                handleInterestSelect(opt.name);
                              }
                            }}
                          >
                            <div className="lead-interest-tile__top">
                              <span className="lead-interest-tile__tag">{opt.tag}</span>
                            </div>
                            <div className="lead-interest-tile__name">{opt.name}</div>
                            <div className="lead-interest-tile__desc">{opt.desc}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="lead-nav-actions">
                      <button
                        type="button"
                        className="lead-btn-back"
                        onClick={() => setCurrentStep(1)}
                      >
                        ← Back to Branch
                      </button>
                      <div className="lead-btn-group">
                        <a
                          href={whatsappInquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lead-btn-whatsapp"
                        >
                          WhatsApp Nexus
                        </a>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setCurrentStep(3)}
                        >
                          Next: Your Details →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: YOUR DETAILS */}
                {currentStep === 3 && (
                  <div className="lead-step lead-step--active" data-step="3">
                    <div className="lead-step__heading">
                      <span>3. Your Details</span>
                      <span className="lead-step__subhead">Direct front-desk consultation</span>
                    </div>

                    {/* Summary Bar */}
                    <div className="lead-summary-bar">
                      <div className="lead-summary-bar__info">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
                          Selected:
                        </span>
                        <span className="lead-summary-pill">
                          {formData.branch === 'sector-85' ? 'Sector 85' : 'Sector 86'}
                        </span>
                        <span className="lead-summary-pill">{formData.interest}</span>
                      </div>
                      <button
                        type="button"
                        className="lead-summary-bar__edit"
                        onClick={() => setCurrentStep(1)}
                      >
                        Change ✎
                      </button>
                    </div>

                    <div className="lead-form-grid">
                      {/* Name Field */}
                      <div className="lead-field">
                        <label htmlFor="lead-name" className="lead-field__label">
                          Your Full Name <span className="lead-field__label-req">*</span>
                        </label>
                        <input
                          type="text"
                          id="lead-name"
                          className="lead-input"
                          placeholder="e.g. Vikram Sharma"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          required
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="lead-field">
                        <label htmlFor="lead-phone" className="lead-field__label">
                          Mobile Number <span className="lead-field__label-req">*</span>
                        </label>
                        <div className="lead-phone-group">
                          <span className="lead-phone-prefix">🇮🇳 +91</span>
                          <input
                            type="tel"
                            id="lead-phone"
                            className="lead-phone-input"
                            placeholder="98765 43210"
                            maxLength={15}
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            required
                          />
                        </div>
                      </div>

                      {/* Preferred Contact Method */}
                      <div className="lead-field">
                        <label className="lead-field__label">Preferred Contact Method</label>
                        <div
                          className="lead-contact-methods"
                          role="group"
                          aria-label="Preferred Contact Method"
                        >
                          <button
                            type="button"
                            className={`lead-contact-btn ${
                              formData.contactMethod === 'whatsapp'
                                ? 'lead-contact-btn--active'
                                : ''
                            }`}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, contactMethod: 'whatsapp' }))
                            }
                          >
                            <span>💬 WhatsApp (Recommended)</span>
                          </button>
                          <button
                            type="button"
                            className={`lead-contact-btn ${
                              formData.contactMethod === 'call'
                                ? 'lead-contact-btn--active'
                                : ''
                            }`}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, contactMethod: 'call' }))
                            }
                          >
                            <span>📞 Phone Call</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="lead-nav-actions">
                      <button
                        type="button"
                        className="lead-btn-back"
                        onClick={() => setCurrentStep(2)}
                      >
                        ← Back to Interest
                      </button>
                      <div className="lead-btn-group">
                        <a
                          href={whatsappInquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lead-btn-whatsapp"
                        >
                          WhatsApp Nexus
                        </a>
                        <button
                          type="submit"
                          className={`lead-btn-submit ${loading ? 'lead-btn-submit--loading' : ''}`}
                          disabled={loading}
                        >
                          <span className="lead-spinner"></span>
                          <span>{loading ? 'Submitting...' : 'Get Membership Details'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* SUCCESS STATE VIEW */
            <div
              className="lead-state-view lead-state-view--active"
              role="status"
              aria-live="polite"
            >
              <div className="lead-success-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="lead-success-title">YOU'RE IN.</h3>
              <p className="lead-success-lead">
                Welcome, <strong>{formData.name}</strong>. Your inquiry for{' '}
                <strong>{formData.interest}</strong> at <strong>{branchDisplay}</strong> has been
                registered. Your Nexus team will reach out shortly via{' '}
                {formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'phone call'}.
              </p>

              <div className="lead-success-card">
                <div className="lead-success-row">
                  <span className="lead-success-label">Selected Branch</span>
                  <span className="lead-success-val">{branchDisplay}</span>
                </div>
                <div className="lead-success-row">
                  <span className="lead-success-label">Training Interest</span>
                  <span className="lead-success-val">{formData.interest}</span>
                </div>
                <div className="lead-success-row">
                  <span className="lead-success-label">Contact Method</span>
                  <span className="lead-success-val">
                    {formData.contactMethod === 'whatsapp' ? 'WhatsApp Message' : 'Phone Call'}
                  </span>
                </div>
                <div className="lead-success-row">
                  <span className="lead-success-label">Phone</span>
                  <span className="lead-success-val">{formData.phone}</span>
                </div>
              </div>

              <div className="lead-success-actions">
                <a
                  href={`https://wa.me/919582333003?text=${encodeURIComponent(
                    `Hi Nexus! I just submitted my details online. My name is ${formData.name}, interested in ${formData.interest} at ${branchDisplay}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '16px 32px', fontSize: '0.875rem' }}
                >
                  Connect On WhatsApp Right Now →
                </a>
                <button type="button" className="lead-reset-link" onClick={resetForm}>
                  Submit another inquiry or change details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
