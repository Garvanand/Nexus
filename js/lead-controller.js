/**
 * NEXUS — THE LIFTING CLUB
 * Lead Conversion Funnel Controller (/js/lead-controller.js)
 * 
 * Manages:
 * - 3-step state machine (Branch -> Interest -> Contact details)
 * - Validation & Loading state transitions
 * - Polished Success state & WhatsApp fallback generation
 * - Global Modal triggers & Context Synchronization
 */

(function () {
  'use strict';

  const INTEREST_LABELS = {
    'gym': 'Gym & General Fitness',
    'strength': 'Strength Training & Powerlifting',
    'zumba': 'Zumba Dance Cardio',
    'yoga': 'Yoga & Mindfulness Flow',
    'aerobics': 'Athletic Aerobics & HIIT',
    'general': 'General Enquiry'
  };

  const BRANCH_LABELS = {
    'sector-85': 'Sector 85 (Flagship Arena)',
    'sector-86': 'Sector 86 (Studios & Turf)'
  };

  const LeadController = {
    container: null,
    modal: null,

    state: {
      step: 1,
      branch: 'sector-85',
      interest: 'strength',
      name: '',
      phone: '',
      preferredContact: 'whatsapp',
      formLoadTime: Date.now(),
      isSubmitting: false
    },

    init: function () {
      this.container = document.getElementById('lead-funnel');
      this.modal = document.getElementById('lead-modal');

      if (!this.container && !this.modal) return;

      this.readInitialContext();
      this.bindElements(this.container);
      if (this.modal) {
        this.bindModal();
      }

      this.bindGlobalTriggers();
      this.updateView();
    },

    /**
     * Synchronize with global branch context or URL params
     */
    readInitialContext: function () {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlBranch = params.get('branch');
        const urlInterest = params.get('interest');

        if (urlBranch && (urlBranch === 'sector-85' || urlBranch === 'sector-86')) {
          this.state.branch = urlBranch;
        } else {
          // Read from global branch context if available
          const savedBranch = localStorage.getItem('nexus_selected_branch');
          if (savedBranch === 'sector-85' || savedBranch === 'sector-86') {
            this.state.branch = savedBranch;
          }
        }

        if (urlInterest && INTEREST_LABELS[urlInterest]) {
          this.state.interest = urlInterest;
        }

        const urlStep = parseInt(params.get('step'), 10);
        if (urlStep >= 1 && urlStep <= 3) {
          this.state.step = urlStep;
        }

        if (params.get('submitted') === 'true') {
          setTimeout(() => {
            this.showSuccessState({
              branch: this.state.branch,
              interest: this.state.interest,
              interestLabel: INTEREST_LABELS[this.state.interest],
              name: 'Vikram Sharma',
              phone: '9876543210',
              preferredContact: 'whatsapp'
            });
          }, 60);
        }
      } catch (e) {
        // Fallback
      }
    },

    /**
     * Bind DOM elements for a given container (inline or modal)
     */
    bindElements: function (root) {
      if (!root) return;

      // 1. Step 1: Branch Cards
      const branchCards = root.querySelectorAll('[data-lead-branch]');
      branchCards.forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const branchVal = card.getAttribute('data-lead-branch');
          this.setBranch(branchVal);
          this.goToStep(2);
        });
      });

      // 2. Step 2: Interest Tiles
      const interestTiles = root.querySelectorAll('[data-lead-interest]');
      interestTiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
          e.preventDefault();
          const interestVal = tile.getAttribute('data-lead-interest');
          this.setInterest(interestVal);
          this.goToStep(3);
        });
      });

      // 3. Step 3: Contact Method Switch
      const contactBtns = root.querySelectorAll('[data-contact-method]');
      contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const method = btn.getAttribute('data-contact-method');
          this.setContactMethod(method);
        });
      });

      // 4. Inputs
      const nameInput = root.querySelector('#lead-name');
      if (nameInput) {
        nameInput.addEventListener('input', (e) => {
          this.state.name = e.target.value;
          this.clearError('name');
          this.updateWhatsAppFallback();
        });
      }

      const phoneInput = root.querySelector('#lead-phone');
      if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
          this.state.phone = e.target.value;
          this.clearError('phone');
          this.updateWhatsAppFallback();
        });
      }

      // 5. Navigation Buttons (Back & Next)
      root.querySelectorAll('[data-lead-prev]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.goToStep(this.state.step - 1);
        });
      });

      root.querySelectorAll('[data-lead-goto-step]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetStep = parseInt(btn.getAttribute('data-lead-goto-step'), 10);
          if (targetStep) this.goToStep(targetStep);
        });
      });

      // 6. Form Submission
      const formEl = root.querySelector('#lead-form');
      if (formEl) {
        formEl.addEventListener('submit', (e) => {
          e.preventDefault();
          this.submitForm();
        });
      }

      // 7. Reset Form (from success state)
      root.querySelectorAll('[data-lead-reset]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.resetForm();
        });
      });
    },

    setBranch: function (branchKey) {
      if (branchKey !== 'sector-85' && branchKey !== 'sector-86') return;
      this.state.branch = branchKey;
      this.updateView();
    },

    setInterest: function (interestKey) {
      if (!INTEREST_LABELS[interestKey]) return;
      this.state.interest = interestKey;
      this.updateView();
    },

    setContactMethod: function (method) {
      if (method !== 'whatsapp' && method !== 'call') return;
      this.state.preferredContact = method;
      this.updateView();
    },

    goToStep: function (stepNum) {
      if (stepNum < 1) stepNum = 1;
      if (stepNum > 3) stepNum = 3;
      this.state.step = stepNum;
      this.updateView();

      // Ensure focus on current step for accessibility
      const activeStep = document.querySelector(`.lead-step[data-step="${stepNum}"]`);
      if (activeStep) {
        const firstFocusable = activeStep.querySelector('button, input');
        if (firstFocusable) firstFocusable.focus();
      }
    },

    updateView: function () {
      const roots = [this.container, this.modal].filter(Boolean);

      roots.forEach(root => {
        // 1. Step Progress Indicators
        const stepNum = this.state.step;
        const progressCurrent = root.querySelector('.lead-progress__current');
        if (progressCurrent) progressCurrent.textContent = `0${stepNum}`;

        const bars = root.querySelectorAll('.lead-progress__bar');
        bars.forEach((bar, idx) => {
          bar.classList.remove('lead-progress__bar--active', 'lead-progress__bar--completed');
          if (idx + 1 === stepNum) {
            bar.classList.add('lead-progress__bar--active');
          } else if (idx + 1 < stepNum) {
            bar.classList.add('lead-progress__bar--completed');
          }
        });

        // 2. Step visibility
        root.querySelectorAll('.lead-step').forEach(stepEl => {
          const stepIndex = parseInt(stepEl.getAttribute('data-step'), 10);
          if (stepIndex === stepNum) {
            stepEl.classList.add('lead-step--active');
          } else {
            stepEl.classList.remove('lead-step--active');
          }
        });

        // 3. Branch cards active state
        root.querySelectorAll('[data-lead-branch]').forEach(card => {
          if (card.getAttribute('data-lead-branch') === this.state.branch) {
            card.classList.add('lead-branch-card--active');
            card.setAttribute('aria-checked', 'true');
          } else {
            card.classList.remove('lead-branch-card--active');
            card.setAttribute('aria-checked', 'false');
          }
        });

        // 4. Interest tiles active state
        root.querySelectorAll('[data-lead-interest]').forEach(tile => {
          if (tile.getAttribute('data-lead-interest') === this.state.interest) {
            tile.classList.add('lead-interest-tile--active');
            tile.setAttribute('aria-checked', 'true');
          } else {
            tile.classList.remove('lead-interest-tile--active');
            tile.setAttribute('aria-checked', 'false');
          }
        });

        // 5. Contact method buttons
        root.querySelectorAll('[data-contact-method]').forEach(btn => {
          if (btn.getAttribute('data-contact-method') === this.state.preferredContact) {
            btn.classList.add('lead-contact-btn--active');
          } else {
            btn.classList.remove('lead-contact-btn--active');
          }
        });

        // 6. Step 3 Summary bar pills
        const summaryBranch = root.querySelector('#lead-summary-branch');
        if (summaryBranch) {
          summaryBranch.textContent = this.state.branch === 'sector-85' ? 'Sector 85' : 'Sector 86';
        }
        const summaryInterest = root.querySelector('#lead-summary-interest');
        if (summaryInterest) {
          summaryInterest.textContent = INTEREST_LABELS[this.state.interest] || 'Fitness';
        }
      });

      this.updateWhatsAppFallback();
    },

    /**
     * Update dynamic secondary WhatsApp link
     */
    updateWhatsAppFallback: function () {
      const branchName = BRANCH_LABELS[this.state.branch] || 'Nexus';
      const interestName = INTEREST_LABELS[this.state.interest] || 'membership';
      const namePart = this.state.name ? ` My name is ${this.state.name.trim()}.` : '';

      const msg = `Hi Nexus! I would like to get membership details for ${interestName} at ${branchName}.${namePart}`;
      const url = `https://wa.me/919582333003?text=${encodeURIComponent(msg)}`;

      document.querySelectorAll('.lead-btn-whatsapp').forEach(btn => {
        btn.href = url;
      });
    },

    clearError: function (fieldName) {
      const roots = [this.container, this.modal].filter(Boolean);
      roots.forEach(root => {
        const input = root.querySelector(`#lead-${fieldName}`);
        const err = root.querySelector(`#lead-${fieldName}-error`);
        if (input) input.classList.remove('lead-input--error');
        if (err) {
          err.textContent = '';
          err.classList.remove('lead-field__error--visible');
        }
        const banner = root.querySelector('#lead-error-banner');
        if (banner) banner.classList.remove('lead-error-banner--visible');
      });
    },

    showError: function (fieldName, message) {
      const roots = [this.container, this.modal].filter(Boolean);
      roots.forEach(root => {
        const input = root.querySelector(`#lead-${fieldName}`);
        const err = root.querySelector(`#lead-${fieldName}-error`);
        if (input) input.classList.add('lead-input--error');
        if (err) {
          err.textContent = message;
          err.classList.add('lead-field__error--visible');
        }
      });
    },

    showBannerError: function (message) {
      const roots = [this.container, this.modal].filter(Boolean);
      roots.forEach(root => {
        const banner = root.querySelector('#lead-error-banner');
        if (banner) {
          banner.textContent = message;
          banner.classList.add('lead-error-banner--visible');
        }
      });
    },

    submitForm: async function () {
      if (this.state.isSubmitting) return;

      this.clearError('name');
      this.clearError('phone');

      // Honeypot check from active form
      const activeForm = (this.modal && this.modal.classList.contains('lead-modal--open'))
        ? this.modal
        : this.container;

      const hpInput = activeForm ? activeForm.querySelector('input[name="website_hp"]') : null;
      const honeypotVal = hpInput ? hpInput.value : '';

      const payload = {
        branch: this.state.branch,
        interest: this.state.interest,
        interestLabel: INTEREST_LABELS[this.state.interest],
        name: this.state.name,
        phone: this.state.phone,
        preferredContact: this.state.preferredContact,
        website_hp: honeypotVal
      };

      // Set loading state
      this.setLoading(true);

      const service = window.NexusLeadService;
      if (!service) {
        this.setLoading(false);
        this.showBannerError('Service momentarily unavailable. Please contact Nexus via WhatsApp directly.');
        return;
      }

      const result = await service.submit(payload, this.state.formLoadTime);

      this.setLoading(false);

      if (result.success) {
        this.showSuccessState(result.record || payload);
      } else {
        if (result.field) {
          this.showError(result.field, result.error);
        } else {
          this.showBannerError(result.error || 'Submission failed. Please contact us on WhatsApp.');
        }
      }
    },

    setLoading: function (loading) {
      this.state.isSubmitting = loading;
      const roots = [this.container, this.modal].filter(Boolean);

      roots.forEach(root => {
        const submitBtn = root.querySelector('#lead-submit-btn');
        const submitText = root.querySelector('#lead-submit-text');
        if (submitBtn) {
          submitBtn.disabled = loading;
          if (loading) {
            submitBtn.classList.add('lead-btn-submit--loading');
            if (submitText) submitText.textContent = 'Submitting Request...';
          } else {
            submitBtn.classList.remove('lead-btn-submit--loading');
            if (submitText) submitText.textContent = 'Get Membership Details';
          }
        }
      });
    },

    showSuccessState: function (record) {
      const roots = [this.container, this.modal].filter(Boolean);

      roots.forEach(root => {
        // Hide form steps & progress
        const stepsWrapper = root.querySelector('#lead-steps-wrapper');
        const progressEl = root.querySelector('.lead-progress');
        const successView = root.querySelector('#lead-success-view');

        if (stepsWrapper) stepsWrapper.style.display = 'none';
        if (progressEl) progressEl.style.display = 'none';
        if (successView) {
          successView.classList.add('lead-state-view--active');

          // Populate success details
          const successBranch = successView.querySelector('#lead-success-branch');
          if (successBranch) successBranch.textContent = BRANCH_LABELS[record.branch] || 'Nexus Club';

          const successInterest = successView.querySelector('#lead-success-interest');
          if (successInterest) successInterest.textContent = record.interestLabel || record.interest;

          const successMethod = successView.querySelector('#lead-success-method');
          if (successMethod) {
            successMethod.textContent = record.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Phone Call';
          }

          // Direct WhatsApp fast-track button
          const fastTrackBtn = successView.querySelector('#lead-success-whatsapp-btn');
          if (fastTrackBtn) {
            const msg = `Hi Nexus! I've submitted my enquiry for ${record.interestLabel || record.interest} at ${BRANCH_LABELS[record.branch] || 'Nexus'}. My name is ${record.name}.`;
            fastTrackBtn.href = `https://wa.me/919582333003?text=${encodeURIComponent(msg)}`;
          }
        }
      });
    },

    resetForm: function () {
      this.state.step = 1;
      this.state.name = '';
      this.state.phone = '';
      this.state.formLoadTime = Date.now();
      this.state.isSubmitting = false;

      const roots = [this.container, this.modal].filter(Boolean);
      roots.forEach(root => {
        const stepsWrapper = root.querySelector('#lead-steps-wrapper');
        const progressEl = root.querySelector('.lead-progress');
        const successView = root.querySelector('#lead-success-view');
        const nameInput = root.querySelector('#lead-name');
        const phoneInput = root.querySelector('#lead-phone');

        if (nameInput) nameInput.value = '';
        if (phoneInput) phoneInput.value = '';
        if (stepsWrapper) stepsWrapper.style.display = '';
        if (progressEl) progressEl.style.display = '';
        if (successView) successView.classList.remove('lead-state-view--active');
      });

      this.clearError('name');
      this.clearError('phone');
      this.goToStep(1);
    },

    // -----------------------------------------------------------
    // Modal Mode & Global Trigger Handler
    // -----------------------------------------------------------
    bindModal: function () {
      if (!this.modal) return;

      const closeBtn = this.modal.querySelector('.lead-modal__close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }

      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('lead-modal--open')) {
          this.closeModal();
        }
      });
    },

    openModal: function (branchPreference, interestPreference) {
      if (!this.modal) return;
      if (branchPreference) this.setBranch(branchPreference);
      if (interestPreference) this.setInterest(interestPreference);

      this.modal.classList.add('lead-modal--open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Re-focus first input
      this.goToStep(this.state.step);
    },

    closeModal: function () {
      if (!this.modal) return;
      this.modal.classList.remove('lead-modal--open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    },

    bindGlobalTriggers: function () {
      document.querySelectorAll('[data-open-lead-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const branch = trigger.getAttribute('data-lead-branch-target');
          const interest = trigger.getAttribute('data-lead-interest-target');
          this.openModal(branch, interest);
        });
      });
    }
  };

  window.NexusLeadController = LeadController;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LeadController.init());
  } else {
    LeadController.init();
  }
})();
