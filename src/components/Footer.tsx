import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <svg viewBox="0 0 100 100" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#0B0B0B" />
                <circle cx="50" cy="50" r="49" stroke="#2A2A2A" strokeWidth="1" />
                <path d="M30 75V25h8l24 33V25h8v50h-8L38 42v33z" fill="#FAF9F6" />
              </svg>
              <span className="footer__logo-text">NEXUS</span>
            </Link>
            <p className="footer__tagline">
              THE LIFTING CLUB.<br />GREATER FARIDABAD.
            </p>
            <p className="footer__desc">
              Built for people who show up. Calibrated iron, competition platforms, sprung group studios, and rooftop cricket arena.
            </p>
          </div>

          {/* Branches Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Club Locations</h4>
            <div className="footer__branch-card">
              <h5 className="footer__branch-name">SECTOR 85 FLAGSHIP</h5>
              <p className="footer__branch-addr">
                Sector 85, Greater Faridabad, Haryana 121002<br />
                Adjacent to BPTP Park Elite / World Street
              </p>
              <div className="footer__branch-links">
                <Link href="/locations/sector-85" className="footer__branch-link">Explore Sector 85 →</Link>
                <a href="https://maps.google.com/?q=Nexus+The+Lifting+Club+Sector+85+Faridabad" target="_blank" rel="noopener noreferrer" className="footer__branch-link">Google Maps ↗</a>
              </div>
            </div>

            <div className="footer__branch-card" style={{ marginTop: '16px' }}>
              <h5 className="footer__branch-name">SECTOR 86 PERFORMANCE</h5>
              <p className="footer__branch-addr">
                Sector 86, Greater Faridabad, Haryana 121002<br />
                Near BPTP Princess Park Corridor
              </p>
              <div className="footer__branch-links">
                <Link href="/locations/sector-86" className="footer__branch-link">Explore Sector 86 →</Link>
                <a href="https://maps.google.com/?q=Nexus+The+Lifting+Club+Sector+86+Faridabad" target="_blank" rel="noopener noreferrer" className="footer__branch-link">Google Maps ↗</a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              <li><Link href="/" className="footer__link">Homepage</Link></li>
              <li><Link href="/locations" className="footer__link">Locations (Sec 85 &amp; 86)</Link></li>
              <li><Link href="/#experience" className="footer__link">The Nexus Experience</Link></li>
              <li><Link href="/training" className="footer__link">Training Zones &amp; Quiz</Link></li>
              <li><Link href="/classes" className="footer__link">Studio Classes</Link></li>
              <li><Link href="/#facilities" className="footer__link">Club Facilities</Link></li>
              <li><Link href="/#social-proof" className="footer__link">Member Stories</Link></li>
              <li><Link href="/tools" className="footer__link">Nexus Tools</Link></li>
              <li><Link href="/join" className="footer__link" style={{ color: 'var(--accent)' }}>Start Journey (Join)</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__col">
            <h4 className="footer__col-title">Operating Hours</h4>
            <div className="footer__hours">
              <p className="footer__hours-item">
                <span className="footer__hours-days">Monday – Saturday</span>
                <span className="footer__hours-time">6:00 AM – 10:00 PM</span>
              </p>
              <p className="footer__hours-item">
                <span className="footer__hours-days">Sunday</span>
                <span className="footer__hours-time">7:00 AM – 8:00 PM</span>
              </p>
            </div>
            <div className="footer__direct" style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>Direct Concierge:</p>
              <a href="https://wa.me/919582333003?text=Hi%20Nexus%2C%20I'd%20like%20to%20know%20more%20about%20membership." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600, display: 'inline-block', marginTop: '4px' }}>
                WhatsApp +91 95823 33003
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} NEXUS THE LIFTING CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/nexusliftingclub/" target="_blank" rel="noopener noreferrer" className="footer__link">
              @nexusliftingclub on Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
