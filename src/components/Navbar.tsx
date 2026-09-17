'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBranch } from '../context/BranchContext';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { branch, branchId, setBranch } = useBranch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Train', href: '/training' },
    { label: 'Classes', href: '/classes' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Locations', href: '/locations' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Mark */}
          <Link href="/" className="brand-logo" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-logo__mark">N</span>
            <span>NEXUS</span>
            <span className="brand-logo__sub">// THE LIFTING CLUB</span>
          </Link>

          {/* Center Links */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action & Branch */}
          <div className="nav-right">
            <button
              onClick={() => setBranch(branchId === 'sector-85' ? 'sector-86' : 'sector-85')}
              className="nav-branch-pill"
              title="Toggle active branch view"
              type="button"
            >
              <span className="nav-branch-dot"></span>
              <span>{branch.shortName}</span>
            </button>

            <Link href="/join" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.75rem' }}>
              Start Journey
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              type="button"
            >
              <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-drawer__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mobile-drawer__link"
            style={{ color: 'var(--nexus-yellow)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Start Your Journey →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--nexus-border)', paddingTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              type="button"
              onClick={() => setBranch('sector-85')}
              className="btn btn-secondary"
              style={{
                flex: 1,
                borderColor: branchId === 'sector-85' ? 'var(--nexus-yellow)' : 'var(--nexus-border)',
                color: branchId === 'sector-85' ? 'var(--nexus-off-white)' : 'var(--nexus-grey-2)',
              }}
            >
              Sector 85
            </button>
            <button
              type="button"
              onClick={() => setBranch('sector-86')}
              className="btn btn-secondary"
              style={{
                flex: 1,
                borderColor: branchId === 'sector-86' ? 'var(--nexus-yellow)' : 'var(--nexus-border)',
                color: branchId === 'sector-86' ? 'var(--nexus-off-white)' : 'var(--nexus-grey-2)',
              }}
            >
              Sector 86
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--nexus-grey-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Greater Faridabad, Haryana · 6:00 AM – 10:00 PM
          </p>
        </div>
      </div>
    </>
  );
};
