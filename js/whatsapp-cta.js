/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Smart WhatsApp CTA System (/js/whatsapp-cta.js)
 * 
 * Primary Number: 9582333003
 * Context-aware messaging, real-time branch synchronization,
 * mobile sticky action bar, subtle desktop floating pill,
 * and unified analytics abstraction.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NexusWhatsApp = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  const PRIMARY_PHONE = '9582333003';
  const PRIMARY_INT_PHONE = '919582333003';

  // Context-Aware Pre-filled Messages
  const MESSAGE_TEMPLATES = {
    'homepage': "Hi Nexus, I'd like to know more about membership.",
    'default': "Hi Nexus, I'd like to know more about membership.",
    'sector-85': "Hi Nexus, I'm interested in the Sector 85 club. Please share membership details.",
    'sector-86': "Hi Nexus, I'm interested in the Sector 86 club. Please share membership details.",
    'zumba': "Hi Nexus, I'd like to know about Zumba classes.",
    'yoga': "Hi Nexus, I'd like to know about Yoga classes.",
    'aerobics': "Hi Nexus, I'd like to know about Aerobics classes.",
    'strength': "Hi Nexus, I'd like to know about Strength Training at Nexus.",
    'visit': "Hi Nexus, I'd like to visit the club.",
    'turf': "Hi Nexus, I'd like to know about the Rooftop Cricket Turf.",
    'cricket': "Hi Nexus, I'd like to know about the Rooftop Cricket Turf.",
    'training': "Hi Nexus, I'd like to know more about training programs at Nexus.",
    'transformation': "Hi Nexus, I want to start my transformation. Please share membership details.",
    'general': "Hi Nexus, I have a question about Nexus The Lifting Club."
  };

  // Context Badges for Desktop Floating Pill
  const CONTEXT_LABELS = {
    'homepage': 'WhatsApp Nexus',
    'default': 'WhatsApp Nexus',
    'sector-85': 'Sector 85 · WhatsApp',
    'sector-86': 'Sector 86 · WhatsApp',
    'zumba': 'Inquire Zumba · WhatsApp',
    'yoga': 'Inquire Yoga · WhatsApp',
    'aerobics': 'Inquire Aerobics · WhatsApp',
    'strength': 'Strength Coaching · WhatsApp',
    'visit': 'Schedule Visit · WhatsApp',
    'turf': 'Cricket Turf · WhatsApp',
    'cricket': 'Cricket Turf · WhatsApp',
    'training': 'Training · WhatsApp',
    'transformation': 'Start Transformation',
    'general': 'Chat with Nexus'
  };

  class WhatsAppCTASystem {
    constructor() {
      this.phone = PRIMARY_PHONE;
      this.intPhone = PRIMARY_INT_PHONE;
      this.currentContext = 'default';
      this.currentBranch = null;
      this.desktopPillEl = null;
      this.mobileBarEl = null;
      this.initialized = false;
      this.sectionObserver = null;
    }

    /**
     * Resolve pre-filled message text for a given context
     */
    getMessage(contextKey, customParams = {}) {
      const key = (contextKey || this.currentContext || 'default').toLowerCase().trim();
      let template = MESSAGE_TEMPLATES[key] || MESSAGE_TEMPLATES['default'];

      if (customParams.branchName) {
        template = template.replace(/Sector \d+/g, customParams.branchName);
      }
      return template;
    }

    /**
     * Build standard wa.me URL
     */
    getUrl(contextKey, customParams = {}) {
      const message = customParams.customText || this.getMessage(contextKey, customParams);
      return `https://wa.me/${this.intPhone}?text=${encodeURIComponent(message)}`;
    }

    /**
     * Get user-friendly label for current context
     */
    getLabel(contextKey) {
      const key = (contextKey || this.currentContext || 'default').toLowerCase().trim();
      return CONTEXT_LABELS[key] || CONTEXT_LABELS['default'];
    }

    /**
     * Set active context dynamically (e.g. from branch switch or scroll)
     */
    setContext(newContext, source = 'system') {
      if (!newContext || this.currentContext === newContext) return;
      this.currentContext = newContext;
      this.updateDynamicCTAs(newContext);
    }

    /**
     * Track click on a WhatsApp CTA via Analytics Abstraction
     */
    trackClick(contextKey, source = 'unknown', customData = {}) {
      const resolvedContext = contextKey || this.currentContext || 'default';
      const message = this.getMessage(resolvedContext, customData);
      const url = this.getUrl(resolvedContext, customData);

      const eventPayload = {
        context: resolvedContext,
        source: source,
        message: message,
        branch: this.currentBranch || 'unspecified',
        url: url,
        device: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'mobile' : 'desktop'
      };

      const analytics = (typeof window !== 'undefined' && window.NexusAnalytics) ||
                        (typeof global !== 'undefined' && global.NexusAnalytics) ||
                        root.NexusAnalytics;

      if (analytics && typeof analytics.track === 'function') {
        analytics.track('whatsapp_cta_click', eventPayload);
      } else {
        console.log('[NexusWhatsApp] Click tracked:', eventPayload);
      }

      return eventPayload;
    }

    /**
     * Update all dynamic CTAs across the DOM (desktop pill, mobile bar, tagged buttons)
     */
    updateDynamicCTAs(contextKey) {
      if (typeof document === 'undefined') return;
      const ctx = contextKey || this.currentContext;
      const url = this.getUrl(ctx);
      const label = this.getLabel(ctx);

      // 1. Update Desktop Floating Pill
      if (this.desktopPillEl) {
        const link = this.desktopPillEl.querySelector('.nexus-wa-pill__link');
        const textSpan = this.desktopPillEl.querySelector('.nexus-wa-pill__text');
        if (link) link.href = url;
        if (textSpan) textSpan.textContent = label;
        this.desktopPillEl.setAttribute('data-current-context', ctx);
      }

      // 2. Update Mobile Sticky Action Bar
      if (this.mobileBarEl) {
        const waBtn = this.mobileBarEl.querySelector('.sticky-bar__btn--whatsapp, [data-wa-mobile-btn]');
        if (waBtn) {
          waBtn.href = url;
          // Optionally update sub-label
          const labelSpan = waBtn.querySelector('.sticky-bar__wa-label');
          if (labelSpan) {
            labelSpan.textContent = ctx.includes('sector-85') ? 'Sector 85' :
                                    ctx.includes('sector-86') ? 'Sector 86' : 'WhatsApp';
          }
        }
      }

      // 3. Update any element with [data-whatsapp-sync="context"]
      const syncedLinks = document.querySelectorAll('[data-whatsapp-sync="context"]');
      syncedLinks.forEach(el => {
        el.href = url;
      });
    }

    /**
     * Detect initial page context
     */
    detectInitialContext() {
      if (typeof window === 'undefined') return 'default';
      const path = window.location.pathname.toLowerCase();

      // Check current BranchContext if available
      if (window.BranchContext && typeof window.BranchContext.getActiveBranch === 'function') {
        const active = window.BranchContext.getActiveBranch();
        if (active) {
          this.currentBranch = active.id;
          return active.id;
        }
      }

      // Check URL path
      if (path.includes('classes')) return 'zumba';
      if (path.includes('training')) return 'training';
      if (path.includes('join')) return 'homepage';

      return 'default';
    }

    /**
     * Mount Desktop Subtle Floating Pill
     */
    mountDesktopPill() {
      if (typeof document === 'undefined') return;
      if (document.getElementById('nexus-wa-desktop-pill')) {
        this.desktopPillEl = document.getElementById('nexus-wa-desktop-pill');
        return;
      }

      const pill = document.createElement('aside');
      pill.id = 'nexus-wa-desktop-pill';
      pill.className = 'nexus-wa-pill';
      pill.setAttribute('aria-label', 'WhatsApp Front Desk Consultation');
      pill.setAttribute('role', 'complementary');

      const initialUrl = this.getUrl(this.currentContext);
      const initialLabel = this.getLabel(this.currentContext);

      pill.innerHTML = `
        <a href="${initialUrl}" target="_blank" rel="noopener noreferrer" class="nexus-wa-pill__link" data-whatsapp-source="desktop_pill">
          <span class="nexus-wa-pill__pulse" aria-hidden="true">
            <span class="nexus-wa-pill__dot"></span>
          </span>
          <svg class="nexus-wa-pill__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="nexus-wa-pill__text">${initialLabel}</span>
          <span class="nexus-wa-pill__hint">Direct Front Desk</span>
        </a>
      `;

      document.body.appendChild(pill);
      this.desktopPillEl = pill;

      // Bind click tracking
      const link = pill.querySelector('.nexus-wa-pill__link');
      link.addEventListener('click', () => {
        this.trackClick(this.currentContext, 'desktop_pill');
      });
    }

    /**
     * Mount or enhance Mobile Sticky Action Bar
     */
    mountMobileBar() {
      if (typeof document === 'undefined') return;
      let bar = document.getElementById('sticky-bar') || document.querySelector('.sticky-bar');

      if (!bar) {
        // Create standard mobile bar if not already present on page
        bar = document.createElement('div');
        bar.id = 'sticky-bar';
        bar.className = 'sticky-bar';
        bar.setAttribute('role', 'complementary');
        bar.setAttribute('aria-label', 'Quick Actions');

        const initialUrl = this.getUrl(this.currentContext);

        bar.innerHTML = `
          <div class="sticky-bar__inner">
            <a href="${initialUrl}" target="_blank" rel="noopener noreferrer" class="sticky-bar__btn sticky-bar__btn--whatsapp" id="sticky-whatsapp" data-whatsapp-source="mobile_sticky_bar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+919582333003" class="sticky-bar__btn sticky-bar__btn--call" id="sticky-call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call</span>
            </a>
          </div>
        `;
        document.body.appendChild(bar);
      }

      this.mobileBarEl = bar;

      // Bind click tracking
      const waBtn = bar.querySelector('.sticky-bar__btn--whatsapp');
      if (waBtn) {
        waBtn.addEventListener('click', () => {
          this.trackClick(this.currentContext, 'mobile_sticky_bar');
        });
      }

      // Scroll visibility management: show after 250px scroll, hide near footer or modals
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const nearBottom = scrollY + winHeight > docHeight - 140;

            if (scrollY > 80 && !nearBottom) {
              bar.classList.add('sticky-bar--visible');
            } else {
              bar.classList.remove('sticky-bar--visible');
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    /**
     * Setup Section-based scroll observer for real-time contextual updates
     */
    setupSectionObserver() {
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

      const sectionMap = [
        { id: 'sector-85', context: 'sector-85' },
        { id: 'sector-86', context: 'sector-86' },
        { id: 'zumba', context: 'zumba' },
        { id: 'yoga', context: 'yoga' },
        { id: 'aerobics', context: 'aerobics' },
        { id: 'strength', context: 'strength' },
        { id: 'cricket', context: 'turf' },
        { id: 'turf', context: 'turf' },
        { id: 'visit', context: 'visit' },
        { id: 'branches', context: this.currentBranch || 'sector-85' }
      ];

      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            const match = sectionMap.find(item => item.id === entry.target.id);
            if (match) {
              this.setContext(match.context, 'scroll_observer');
              break;
            }
          }
        }
      }, {
        threshold: [0.35, 0.6]
      });

      sectionMap.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });

      this.sectionObserver = observer;
    }

    /**
     * Bind all declarative [data-whatsapp-cta] elements on the page
     */
    bindDeclarativeCTAs() {
      if (typeof document === 'undefined') return;

      const ctas = document.querySelectorAll('[data-whatsapp-cta]');
      ctas.forEach(el => {
        const context = el.getAttribute('data-whatsapp-context') || this.currentContext;
        const source = el.getAttribute('data-whatsapp-source') || el.id || 'declarative_cta';
        const customText = el.getAttribute('data-whatsapp-text');

        // Only override href if not already explicitly assigned a full custom URL or if empty
        if (!el.href || el.getAttribute('data-whatsapp-auto-href') === 'true') {
          el.href = this.getUrl(context, { customText });
        }

        // Attach tracked click listener (once)
        if (!el.dataset.waBound) {
          el.dataset.waBound = 'true';
          el.addEventListener('click', () => {
            this.trackClick(context, source, { customText });
          });
        }
      });
    }

    /**
     * Subscribe to global branch changes from BranchContext
     */
    setupBranchListener() {
      if (typeof window === 'undefined') return;

      window.addEventListener('nexus:branch-change', (event) => {
        const branch = event.detail?.branch || event.detail;
        if (branch && branch.id) {
          this.currentBranch = branch.id;
          const branchContextKey = branch.id === 'sector-86' ? 'sector-86' : 'sector-85';
          this.setContext(branchContextKey, 'branch_context_event');
        }
      });
    }

    /**
     * Initialize the WhatsApp CTA System
     */
    init() {
      if (this.initialized || typeof window === 'undefined') return;
      this.initialized = true;

      this.currentContext = this.detectInitialContext();

      // Mount UI components
      this.mountDesktopPill();
      this.mountMobileBar();

      // Bind declarative elements
      this.bindDeclarativeCTAs();

      // Setup listeners
      this.setupSectionObserver();
      this.setupBranchListener();

      // Initial dynamic sync
      this.updateDynamicCTAs(this.currentContext);

      console.log(`%c[NexusWhatsApp] Initialized with primary number ${this.phone} · Active context: '${this.currentContext}'`, 'color:#C8B830; font-weight:bold;');
    }
  }

  const instance = new WhatsAppCTASystem();

  // Auto-init on DOMContentLoaded if running in browser
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => instance.init());
    } else {
      instance.init();
    }
  }

  return instance;
});
