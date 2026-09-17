/**
 * NEXUS — THE LIFTING CLUB
 * Dynamic Branch Page Renderer
 * 
 * Takes a branchId from the URL or caller and renders the entire
 * bespoke branch portal dynamically from NEXUS_BRANCHES.
 * Zero duplicate HTML files!
 */

(function () {
  'use strict';

  const NexusBranchPage = {
    init: function (forcedBranchId) {
      // Determine branchId from parameter, path, or query
      let branchId = forcedBranchId;

      if (!branchId) {
        const path = window.location.pathname;
        if (path.includes('sector-86')) {
          branchId = 'sector-86';
        } else if (path.includes('sector-85')) {
          branchId = 'sector-85';
        } else {
          const urlParams = new URLSearchParams(window.location.search);
          branchId = urlParams.get('branch') || 'sector-85';
        }
      }

      const branch = (window.NEXUS_BRANCHES && window.NEXUS_BRANCHES[branchId]) || window.NEXUS_BRANCHES['sector-85'];
      if (!branch) return;

      document.title = `${branch.name} | Nexus The Lifting Club Faridabad`;
      this.render(branch);
      this.attachInteractions(branch);
    },

    render: function (branch) {
      const root = document.getElementById('branch-app');
      if (!root) return;

      // Determine alternate branch for the switcher banner
      const otherBranchId = branch.id === 'sector-85' ? 'sector-86' : 'sector-85';
      const otherBranch = window.NEXUS_BRANCHES[otherBranchId];

      // Dynamic path calculation to support both /locations/ and /locations/sector-XX/
      const isSubfolder = window.location.pathname.includes('sector-85') || window.location.pathname.includes('sector-86');
      const rootPrefix = isSubfolder ? '../../' : '../';
      const otherBranchLink = isSubfolder ? `../${otherBranch.slug}/index.html` : `./${otherBranch.slug}/index.html`;

      const html = `
        <!-- Fixed Branch Nav -->
        <header class="nav nav--solid" role="navigation">
          <div class="nav__inner">
            <a href="${rootPrefix}index.html" class="nav__logo" aria-label="Nexus home">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#0B0B0B"/>
                <circle cx="50" cy="50" r="49" stroke="#2A2A2A" stroke-width="1"/>
                <path d="M30 75V25h8l24 33V25h8v50h-8L38 42v33z" fill="#FAF9F6"/>
              </svg>
              <span class="nav__logo-text">NEXUS · ${branch.shortName}</span>
            </a>

            <div class="nav__links">
              <a href="#overview" class="nav__link">Overview</a>
              <a href="#facilities" class="nav__link">Facilities</a>
              <a href="#gallery" class="nav__link">Gallery</a>
              <a href="#location" class="nav__link">Hours & Map</a>
              <a href="${rootPrefix}index.html#branches" class="nav__link" style="color:var(--text-tertiary)">All Branches ↗</a>
            </div>

            <a href="https://wa.me/919582333003?text=${encodeURIComponent(branch.whatsappMessages.general)}"
               target="_blank" rel="noopener noreferrer" class="btn btn-primary nav__cta">
              Join ${branch.shortName}
            </a>
          </div>
        </header>

        <!-- Branch Hero -->
        <section class="branch-hero" style="background-image: url('${rootPrefix}${branch.heroImage}');">
          <div class="branch-hero__overlay"></div>
          <div class="container branch-hero__content">
            <div class="branch-hero__badge">
              <span class="dot"></span> ${branch.badge} · GREATER FARIDABAD
            </div>
            <h1 class="branch-hero__title">${branch.name.toUpperCase()}</h1>
            <p class="branch-hero__tagline">${branch.tagline}</p>
            <p class="branch-hero__address">📍 ${branch.fullAddress}</p>

            <div class="branch-hero__actions">
              <a href="https://wa.me/919582333003?text=${encodeURIComponent(branch.whatsappMessages.visit)}"
                 target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Book Walkthrough On WhatsApp
              </a>
              <a href="${branch.directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                Get Directions
              </a>
              <a href="tel:${branch.phone}" class="btn btn-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call ${branch.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <!-- Highlights & Philosophy -->
        <section class="section" id="overview" style="background-color: var(--surface-primary);">
          <div class="container">
            <div class="branch-overview__grid">
              <div>
                <div class="section-label">
                  <span class="section-label__rule"></span>
                  <span class="section-label__text">About This Location</span>
                </div>
                <h2 class="t-hero" style="margin-bottom: var(--space-24);">Built With Purpose.</h2>
                <p class="t-body" style="color: var(--text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-20);">
                  ${branch.description}
                </p>
                <div class="branch-hours-card">
                  <h4 style="font-family: var(--ff-display); text-transform: uppercase; margin-bottom: 8px; color: var(--accent);">
                    Verified Branch Hours
                  </h4>
                  <p style="color: var(--text-primary); margin-bottom: 4px;">⏰ ${branch.hours.weekdays}</p>
                  <p style="color: var(--text-secondary); margin-bottom: 4px;">⏰ ${branch.hours.sunday}</p>
                  <p style="color: var(--text-muted); font-size: 0.8125rem;">${branch.hours.peak}</p>
                </div>
              </div>

              <div class="branch-highlights-list">
                ${branch.highlights.map((item, idx) => `
                  <div class="branch-highlight-item">
                    <span class="branch-highlight-num">0${idx + 1}</span>
                    <div>
                      <h3 class="branch-highlight-title">${item.title}</h3>
                      <p class="branch-highlight-desc">${item.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- Facilities Inventory -->
        <section class="section" id="facilities" style="background-color: var(--surface-elevated); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="margin-bottom: var(--space-48);">
              <div class="section-label">
                <span class="section-label__rule"></span>
                <span class="section-label__text">Club Equipment & Amenities</span>
              </div>
              <h2 class="t-hero">Every Detail Engineered.</h2>
            </div>

            <div class="branch-facilities-grid">
              ${branch.facilities.map(f => `
                <div class="branch-facility-card">
                  <div class="branch-facility-dot"></div>
                  <div>
                    <h3 class="branch-facility-name">${f.name}</h3>
                    <p class="branch-facility-desc">${f.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Branch Specific Gallery -->
        <section class="section" id="gallery" style="background-color: var(--surface-primary);">
          <div class="container">
            <div style="margin-bottom: var(--space-48);">
              <div class="section-label">
                <span class="section-label__rule"></span>
                <span class="section-label__text">${branch.shortName} Photo Tour</span>
              </div>
              <h2 class="t-hero">Inside The Space.</h2>
            </div>

            <div class="branch-gallery-grid">
              ${branch.gallery.map((img, idx) => `
                <div class="branch-gallery-item">
                  <img src="${rootPrefix}${img.src}" alt="${img.alt}" loading="lazy">
                  <div class="branch-gallery-caption">
                    <span class="branch-gallery-badge">NEXUS · ${branch.shortName.toUpperCase()} · 0${idx + 1}</span>
                    <span class="branch-gallery-text">${img.alt}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Map & Directions -->
        <section class="section" id="location" style="background-color: var(--surface-elevated); border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="margin-bottom: var(--space-32); text-align: center;">
              <div class="section-label" style="justify-content:center;">
                <span class="section-label__rule"></span>
                <span class="section-label__text">How To Reach Us</span>
              </div>
              <h2 class="t-hero">${branch.name}</h2>
              <p style="color: var(--text-tertiary); max-width: 500px; margin: 8px auto 0;">
                ${branch.fullAddress}
              </p>
            </div>

            <div class="branch-map-container">
              <iframe src="${branch.mapEmbedUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${branch.name} Map"></iframe>
            </div>

            <div style="display: flex; justify-content: center; gap: var(--space-16); margin-top: var(--space-32); flex-wrap: wrap;">
              <a href="${branch.directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Open In Google Maps Directions →
              </a>
              <a href="https://wa.me/919582333003?text=${encodeURIComponent('Hi! I need help finding the location of Nexus ' + branch.shortName)}"
                 target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                WhatsApp For Assistance
              </a>
            </div>
          </div>
        </section>

        <!-- Location Switcher Banner -->
        <section class="branch-switcher-banner">
          <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-20);">
            <div>
              <span style="font-family: var(--ff-display); font-size: var(--text-eyebrow); letter-spacing: var(--tracking-wider); text-transform: uppercase; color: var(--accent);">
                Looking for our other location?
              </span>
              <h3 style="font-family: var(--ff-display); font-size: 1.5rem; text-transform: uppercase; color: var(--text-primary); margin-top: 4px;">
                ${otherBranch.name} — ${otherBranch.tagline}
              </h3>
            </div>
            <a href="${otherBranchLink}" class="btn btn-secondary">
              Explore ${otherBranch.shortName} →
            </a>
          </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
          <div class="container">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-24);">
              <div style="display: flex; align-items: center; gap: var(--space-12);">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 28px; height: 28px;">
                  <circle cx="50" cy="50" r="50" fill="#0B0B0B"/>
                  <circle cx="50" cy="50" r="49" stroke="#2A2A2A" stroke-width="1"/>
                  <path d="M30 75V25h8l24 33V25h8v50h-8L38 42v33z" fill="#FAF9F6"/>
                </svg>
                <span style="font-family: var(--ff-display); font-size: 0.8125rem; font-weight: bold; letter-spacing: var(--tracking-wider); text-transform: uppercase; color: var(--text-primary);">
                  NEXUS THE LIFTING CLUB · ${branch.shortName}
                </span>
              </div>
              <div style="display: flex; gap: var(--space-24);">
                <a href="${rootPrefix}index.html" style="color: var(--text-tertiary); font-size: var(--text-body-sm);">Home</a>
                <a href="${otherBranchLink}" style="color: var(--text-tertiary); font-size: var(--text-body-sm);">${otherBranch.shortName}</a>
                <a href="https://www.instagram.com/nexusliftingclub/" target="_blank" rel="noopener noreferrer" style="color: var(--text-tertiary); font-size: var(--text-body-sm);">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      `;

      root.innerHTML = html;
    },

    attachInteractions: function (branch) {
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href').slice(1);
          const target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            const navHeight = 72;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        });
      });
    }
  };

  window.NexusBranchPage = NexusBranchPage;
})();
