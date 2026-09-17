/**
 * NEXUS — THE LIFTING CLUB
 * Lead Provider & CRM Abstraction Engine
 * 
 * Clean architecture decoupling business logic from UI components.
 * Ready for pluggable backend CRM systems (HubSpot, Zoho, Zapier, Webhook).
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // Validation Utilities
  // -------------------------------------------------------------

  /**
   * Validate Indian Mobile Number (10 digits starting with 6, 7, 8, or 9)
   * Supports inputs with or without +91, 0, or spaces/dashes.
   */
  function validateIndianPhone(input) {
    if (!input || typeof input !== 'string') {
      return { valid: false, error: 'Phone number is required.' };
    }

    // Strip out spaces, hyphens, parentheses, and leading +91 / 91 / 0
    let clean = input.replace(/[\s\-\(\)]/g, '');
    if (clean.startsWith('+91')) {
      clean = clean.substring(3);
    } else if (clean.startsWith('91') && clean.length === 12) {
      clean = clean.substring(2);
    } else if (clean.startsWith('0') && clean.length === 11) {
      clean = clean.substring(1);
    }

    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(clean)) {
      return {
        valid: false,
        error: 'Please enter a valid 10-digit mobile number.',
        cleanPhone: clean
      };
    }

    return {
      valid: true,
      error: null,
      cleanPhone: clean,
      formatted: `+91 ${clean.slice(0, 5)} ${clean.slice(5)}`
    };
  }

  /**
   * Validate Name (minimum 2 characters, letters, spaces, hyphens)
   */
  function validateName(input) {
    if (!input || typeof input !== 'string') {
      return { valid: false, error: 'Name is required.' };
    }
    const trimmed = input.trim();
    if (trimmed.length < 2) {
      return { valid: false, error: 'Please enter at least 2 characters.' };
    }
    if (trimmed.length > 60) {
      return { valid: false, error: 'Name is too long (maximum 60 characters).' };
    }
    return { valid: true, error: null, cleanName: trimmed };
  }

  // -------------------------------------------------------------
  // Spam Protection Architecture
  // -------------------------------------------------------------
  const SpamShield = {
    STORAGE_KEY: 'nexus_lead_submissions',
    MAX_SUBMISSIONS_PER_WINDOW: 4,
    WINDOW_MS: 10 * 60 * 1000, // 10 minutes
    MIN_INTERACTION_TIME_MS: 1200, // Bot trap: humans take > 1.2s to fill 3 steps

    /**
     * Inspect lead for honeypot and time-based bots
     */
    inspect: function (leadPayload, formLoadTime) {
      // 1. Honeypot check (field hidden from humans via CSS/tabindex)
      if (leadPayload.website_hp && leadPayload.website_hp.trim() !== '') {
        return { isSpam: true, reason: 'Bot trap triggered (honeypot field populated).' };
      }

      // 2. Form submission speed check
      const elapsed = Date.now() - (formLoadTime || 0);
      if (elapsed < this.MIN_INTERACTION_TIME_MS) {
        return { isSpam: true, reason: 'Submission completed too quickly.' };
      }

      // 3. Rate limiting check per client
      if (this.isRateLimited()) {
        return {
          isSpam: true,
          reason: 'Too many requests. Please wait a few minutes or contact Nexus directly via WhatsApp.'
        };
      }

      return { isSpam: false };
    },

    recordSubmission: function () {
      try {
        const history = this.getHistory();
        history.push(Date.now());
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
      } catch (e) {
        // Fallback for private mode
      }
    },

    getHistory: function () {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (!raw) return [];
        const now = Date.now();
        const parsed = JSON.parse(raw);
        // Filter out entries older than window
        return parsed.filter(t => (now - t) < this.WINDOW_MS);
      } catch (e) {
        return [];
      }
    },

    isRateLimited: function () {
      return this.getHistory().length >= this.MAX_SUBMISSIONS_PER_WINDOW;
    }
  };

  // -------------------------------------------------------------
  // Provider 1: Local Lead Provider (Default / Offline-Resilient)
  // -------------------------------------------------------------
  class LocalLeadProvider {
    constructor() {
      this.STORAGE_KEY = 'nexus_leads_db';
    }

    async submitLead(leadData) {
      // Simulate realistic API network latency
      await new Promise(resolve => setTimeout(resolve, 550));

      const leadRecord = {
        id: `NEXUS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        branch: leadData.branch,
        branchName: leadData.branch === 'sector-85' ? 'Sector 85 (Flagship Lifting Arena)' : 'Sector 86 (Studios & Turf)',
        interest: leadData.interest,
        interestLabel: leadData.interestLabel || leadData.interest,
        name: leadData.name,
        phone: leadData.cleanPhone,
        formattedPhone: leadData.formattedPhone,
        preferredContact: leadData.preferredContact, // 'whatsapp' | 'call'
        sourceUrl: window.location.href,
        status: 'NEW_PENDING_TEAM_CONTACT'
      };

      // Persist to client DB
      try {
        const existing = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
        existing.unshift(leadRecord);
        // Keep last 50 leads locally
        if (existing.length > 50) existing.length = 50;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));
      } catch (e) {
        console.warn('LocalStorage lead write skipped (private browsing):', e);
      }

      console.info('%c[NEXUS LEAD SERVICE]%c Lead captured successfully:', 'background:#C8B830;color:#0B0B0B;font-weight:bold;padding:2px 6px;', '', leadRecord);

      return {
        success: true,
        leadId: leadRecord.id,
        record: leadRecord
      };
    }

    getStoredLeads() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
      } catch (e) {
        return [];
      }
    }
  }

  // -------------------------------------------------------------
  // Provider 2: Webhook / REST CRM Provider (Future Integration)
  // -------------------------------------------------------------
  class WebhookLeadProvider {
    constructor(config = {}) {
      this.endpoint = config.endpoint || '/api/leads';
      this.apiKey = config.apiKey || null;
    }

    async submitLead(leadData) {
      const headers = { 'Content-Type': 'application/json' };
      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          brand: 'NEXUS_THE_LIFTING_CLUB',
          ...leadData,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.message || `Lead ingestion returned HTTP ${response.status}`);
      }

      return await response.json();
    }
  }

  // -------------------------------------------------------------
  // Lead Service Manager (Singleton)
  // -------------------------------------------------------------
  class LeadServiceManager {
    constructor() {
      this.provider = new LocalLeadProvider();
    }

    setProvider(customProvider) {
      if (!customProvider || typeof customProvider.submitLead !== 'function') {
        throw new Error('Custom lead provider must implement submitLead(data)');
      }
      this.provider = customProvider;
    }

    validateName(name) {
      return validateName(name);
    }

    validatePhone(phone) {
      return validateIndianPhone(phone);
    }

    async submit(leadPayload, formLoadTime) {
      // 1. Spam protection inspection
      const spamCheck = SpamShield.inspect(leadPayload, formLoadTime);
      if (spamCheck.isSpam) {
        return {
          success: false,
          error: spamCheck.reason || 'Verification failed. Please try WhatsApp directly.'
        };
      }

      // 2. Validation check
      const nameCheck = validateName(leadPayload.name);
      if (!nameCheck.valid) {
        return { success: false, error: nameCheck.error, field: 'name' };
      }

      const phoneCheck = validateIndianPhone(leadPayload.phone);
      if (!phoneCheck.valid) {
        return { success: false, error: phoneCheck.error, field: 'phone' };
      }

      // 3. Delegate to active provider
      try {
        const submissionPayload = {
          branch: leadPayload.branch || 'sector-85',
          interest: leadPayload.interest || 'strength',
          interestLabel: leadPayload.interestLabel,
          name: nameCheck.cleanName,
          phone: phoneCheck.cleanPhone,
          cleanPhone: phoneCheck.cleanPhone,
          formattedPhone: phoneCheck.formatted,
          preferredContact: leadPayload.preferredContact || 'whatsapp'
        };

        const result = await this.provider.submitLead(submissionPayload);
        SpamShield.recordSubmission();
        return result;
      } catch (err) {
        console.error('[NEXUS LEAD SERVICE ERROR]:', err);
        return {
          success: false,
          error: err.message || 'Unable to submit right now. Please connect directly via WhatsApp.'
        };
      }
    }
  }

  const singleton = new LeadServiceManager();

  // Expose to window and CommonJS / Node
  if (typeof window !== 'undefined') {
    window.NexusLeadService = singleton;
    window.NexusLocalLeadProvider = LocalLeadProvider;
    window.NexusWebhookLeadProvider = WebhookLeadProvider;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      LeadService: singleton,
      LocalLeadProvider,
      WebhookLeadProvider,
      validateIndianPhone,
      validateName,
      SpamShield
    };
  }
})();
