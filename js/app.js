/**
 * NEXUS — THE LIFTING CLUB
 * Main Application Controller (v2.0 Cinematic)
 * 
 * Handles: Navigation state machine, hero branch selector,
 * interactive visit scheduler, mobile menu, smooth scrolling,
 * and active section tracking.
 */

(function () {
  'use strict';

  // ============================================================
  // DOM REFERENCES
  // ============================================================

  const nav = document.getElementById('nav');
  const navHamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');
  const navLinks = document.querySelectorAll('.nav__link');
  const stickyBar = document.getElementById('sticky-bar');
  const hero = document.getElementById('hero');
  const joinSection = document.getElementById('join');

  // Hero branch selector elements
  const pill85 = document.getElementById('hero-pill-85');
  const pill86 = document.getElementById('hero-pill-86');
  const heroSummary = document.getElementById('hero-branch-summary');

  // Visit Walkthrough elements
  const visitBranchOptions = document.querySelectorAll('#visit-branch-options .visit__btn-option');
  const visitGoalOptions = document.querySelectorAll('#visit-goal-options .visit__btn-option');
  const visitTimeOptions = document.querySelectorAll('#visit-time-options .visit__btn-option');
  const visitWhatsappBtn = document.getElementById('visit-whatsapp-btn');

  // ============================================================
  // STATE
  // ============================================================

  let lastScrollY = 0;
  let isMenuOpen = false;
  let ticking = false;

  // Visit Scheduler State
  const visitState = {
    branch: 'Sector 85',
    goal: 'Strength & Heavy Lifting',
    time: 'Morning (6 AM - 11 AM)'
  };

  // ============================================================
  // NAVIGATION CONTROLLER
  // ============================================================

  function updateNav() {
    const scrollY = window.scrollY;
    const heroHeight = hero ? hero.offsetHeight : 650;
    const delta = scrollY - lastScrollY;

    // STATE 1: Transparent over hero
    if (scrollY < heroHeight - 90) {
      nav.classList.remove('nav--solid', 'nav--hidden');
    }
    // STATE 2: Solid background with smart auto-hide
    else {
      nav.classList.add('nav--solid');

      if (delta > 8 && scrollY > heroHeight + 100) {
        nav.classList.add('nav--hidden');
      } else if (delta < -4) {
        nav.classList.remove('nav--hidden');
      }
    }

    lastScrollY = scrollY;
  }

  // Active section spy
  function updateActiveSection() {
    const sections = ['statement', 'branches', 'pillars', 'strength', 'amenities', 'instagram', 'visit'];
    const scrollY = window.scrollY + window.innerHeight / 3;

    let activeSection = null;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          activeSection = sectionId;
        }
      }
    }

    navLinks.forEach(link => {
      const section = link.getAttribute('data-section');
      if (section === activeSection) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }

  // Mobile Sticky Bar (Appears after hero, hides at final CTA)
  function updateStickyBar() {
    if (!stickyBar || window.innerWidth >= 768) return;

    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
    const joinTop = joinSection ? joinSection.offsetTop : Infinity;
    const scrollY = window.scrollY;
    const viewportBottom = scrollY + window.innerHeight;

    if (scrollY > heroBottom * 0.75 && viewportBottom < joinTop + 100) {
      stickyBar.classList.add('sticky-bar--visible');
    } else {
      stickyBar.classList.remove('sticky-bar--visible');
    }
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNav();
        updateActiveSection();
        updateStickyBar();
        ticking = false;
      });
      ticking = true;
    }
  }

  // ============================================================
  // HERO BRANCH SELECTOR & GLOBAL SYNC
  // ============================================================

  function initHeroBranchSelector() {
    if (!pill85 || !pill86) return;

    pill85.addEventListener('click', () => {
      if (window.NexusBranchContext) {
        window.NexusBranchContext.set('sector-85');
      }
    });

    pill86.addEventListener('click', () => {
      if (window.NexusBranchContext) {
        window.NexusBranchContext.set('sector-86');
      }
    });
  }

  // ============================================================
  // VISIT WALKTHROUGH SCHEDULER (Dynamic WhatsApp Link)
  // ============================================================

  function updateVisitWhatsappLink() {
    if (!visitWhatsappBtn) return;

    const msg = `Hi Nexus! I'd like to schedule a walkthrough at ${visitState.branch} for ${visitState.goal} during ${visitState.time}.`;
    const encoded = encodeURIComponent(msg);
    visitWhatsappBtn.href = `https://wa.me/919582333003?text=${encoded}`;
  }

  function initVisitScheduler() {
    function setupGroup(optionsList, stateKey) {
      optionsList.forEach(btn => {
        btn.addEventListener('click', function () {
          optionsList.forEach(b => b.classList.remove('visit__btn-option--active'));
          this.classList.add('visit__btn-option--active');
          visitState[stateKey] = this.getAttribute('data-val');

          if (stateKey === 'branch' && window.NexusBranchContext) {
            const is85 = this.getAttribute('data-val').includes('85');
            window.NexusBranchContext.set(is85 ? 'sector-85' : 'sector-86');
          }

          updateVisitWhatsappLink();
        });
      });
    }

    setupGroup(visitBranchOptions, 'branch');
    setupGroup(visitGoalOptions, 'goal');
    setupGroup(visitTimeOptions, 'time');

    // Listen for global branch changes
    window.addEventListener('nexus:branchChanged', (e) => {
      if (e.detail && e.detail.branch) {
        visitState.branch = e.detail.branch.shortName;
        updateVisitWhatsappLink();
      }
    });

    updateVisitWhatsappLink();
  }

  // ============================================================
  // MOBILE DRAWER
  // ============================================================

  function openMenu() {
    isMenuOpen = true;
    mobileMenu.classList.add('nav__mobile-overlay--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    navHamburger.classList.add('nav__hamburger--open');
    navHamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isMenuOpen = false;
    mobileMenu.classList.remove('nav__mobile-overlay--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navHamburger.classList.remove('nav__hamburger--open');
    navHamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // ============================================================
  // SMOOTH SCROLLING WITH OFFSET
  // ============================================================

  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = nav ? nav.offsetHeight : 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  function handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.slice(1);

      if (isMenuOpen) {
        closeMenu();
        setTimeout(() => smoothScrollTo(targetId), 250);
      } else {
        smoothScrollTo(targetId);
      }
    }
  }

  // ============================================================
  // KEYBOARD ACCESSIBILITY
  // ============================================================

  function handleKeydown(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    window.addEventListener('scroll', onScroll, { passive: true });

    if (navHamburger) {
      navHamburger.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    document.addEventListener('keydown', handleKeydown);

    initHeroBranchSelector();
    initVisitScheduler();

    updateNav();
    updateStickyBar();
    updateActiveSection();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
