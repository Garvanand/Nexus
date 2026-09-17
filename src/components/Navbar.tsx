'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBranch } from '../context/BranchContext';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { branch, branchId, setBranch, getWhatsAppUrl } = useBranch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to transition from transparent hero to dense sticky
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('drawer-open');
    };
  }, [isMenuOpen]);

  // Clean toggle for mobile drawer with body lock
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('drawer-open');
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
      }
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    document.body.classList.remove('drawer-open');
  }, []);

  const navClass = `nav ${isScrolled ? 'nav--scrolled' : ''}`;

  return (
    <>
      <header className={navClass} id="main-nav" role="banner">
        <div className="nav__inner">
          {/* Left: Brand logo & contextual branch pill */}
          <div className="nav__left">
            <Link href="/" className="nav__logo" aria-label="NEXUS Home" onClick={closeMenu}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="50" cy="50" r="50" fill="#0B0B0B" />
                <circle cx="50" cy="50" r="48" stroke="#262626" strokeWidth="2" />
                <path d="M30 75V25h8l24 33V25h8v50h-8L38 42v33z" fill="#FAF9F6" />
              </svg>
              <span className="nav__logo-text">NEXUS</span>
            </Link>

            {/* Subtle active branch indicator pill */}
            <div className="nav__branch-pill" title="Active Branch Ground — Click to switch">
              <span className="nav__branch-dot" aria-hidden="true" />
              <button
                type="button"
                className="nav__branch-btn"
                onClick={() => setBranch(branchId === 'sector-85' ? 'sector-86' : 'sector-85')}
                aria-label={`Current branch: ${branch.name}. Click to switch branch context.`}
              >
                <span>{branch.shortName}</span>
                <span className="nav__branch-switch-icon" aria-hidden="true">⇄</span>
              </button>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="nav__links" aria-label="Desktop primary navigation">
            <Link
              href="/training"
              className={`nav__link ${pathname === '/training' ? 'nav__link--active' : ''}`}
            >
              TRAIN
            </Link>

            <Link
              href="/classes"
              className={`nav__link ${pathname === '/classes' ? 'nav__link--active' : ''}`}
            >
              CLASSES
            </Link>

            <Link
              href="/#experience"
              className="nav__link"
            >
              EXPERIENCE
            </Link>

            <Link
              href="/locations"
              className={`nav__link ${pathname.startsWith('/locations') ? 'nav__link--active' : ''}`}
            >
              LOCATIONS
            </Link>

            <a
              href="https://www.instagram.com/nexusliftingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link"
              aria-label="Nexus Instagram Profile (opens in a new tab)"
            >
              INSTAGRAM
              <span className="nav__link-icon" aria-hidden="true">↗</span>
            </a>
          </nav>

          {/* Right: Desktop CTA & Mobile Actions */}
          <div className="nav__right">
            {/* Desktop CTA */}
            <Link href="/join" className="btn btn-primary nav__cta">
              START YOUR JOURNEY
            </Link>

            {/* Mobile Persistent CTA */}
            <Link
              href="/join"
              className="nav__mobile-persistent-cta"
              onClick={closeMenu}
              aria-label="Start Your Journey"
            >
              START JOURNEY
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className={`nav__hamburger ${isMenuOpen ? 'nav__hamburger--open' : ''}`}
              id="mobile-menu-btn"
              aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-overlay"
              onClick={toggleMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Smooth Full-Screen Mobile Navigation Experience */}
      <div
        className={`nav__mobile-overlay ${isMenuOpen ? 'nav__mobile-overlay--open' : ''}`}
        id="mobile-navigation-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isMenuOpen}
      >
        {/* Top Header inside overlay */}
        <div className="nav__mobile-top">
          <Link href="/" className="nav__logo" onClick={closeMenu}>
            <svg viewBox="0 0 100 100" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="50" r="50" fill="#0B0B0B" />
              <circle cx="50" cy="50" r="48" stroke="#262626" strokeWidth="2" />
              <path d="M30 75V25h8l24 33V25h8v50h-8L38 42v33z" fill="#FAF9F6" />
            </svg>
            <span className="nav__logo-text">NEXUS</span>
          </Link>

          {/* Close button inside header */}
          <button
            type="button"
            className="nav__hamburger nav__hamburger--open"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            style={{ display: 'flex' }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Branch Context Selector inside Mobile Menu */}
        <div className="nav__mobile-branch-box">
          <span className="nav__mobile-branch-label">Active Club Ground</span>
          <div className="nav__mobile-branch-btns">
            <button
              type="button"
              className={`nav__mobile-branch-btn ${branchId === 'sector-85' ? 'nav__mobile-branch-btn--active' : 'nav__mobile-branch-btn--inactive'}`}
              onClick={() => setBranch('sector-85')}
            >
              SECTOR 85 FLAGSHIP
            </button>
            <button
              type="button"
              className={`nav__mobile-branch-btn ${branchId === 'sector-86' ? 'nav__mobile-branch-btn--active' : 'nav__mobile-branch-btn--inactive'}`}
              onClick={() => setBranch('sector-86')}
            >
              SECTOR 86 PERFORMANCE
            </button>
          </div>
        </div>

        {/* Primary Navigation Links */}
        <nav className="nav__mobile-links" aria-label="Mobile main navigation">
          <Link
            href="/training"
            className={`nav__mobile-link ${pathname === '/training' ? 'nav__mobile-link--active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">01</span>
            <span>Train</span>
          </Link>

          <Link
            href="/classes"
            className={`nav__mobile-link ${pathname === '/classes' ? 'nav__mobile-link--active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">02</span>
            <span>Classes</span>
          </Link>

          <Link
            href="/#experience"
            className="nav__mobile-link"
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">03</span>
            <span>Experience</span>
          </Link>

          <Link
            href="/locations"
            className={`nav__mobile-link ${pathname.startsWith('/locations') ? 'nav__mobile-link--active' : ''}`}
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">04</span>
            <span>Locations</span>
          </Link>

          <a
            href="https://www.instagram.com/nexusliftingclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__mobile-link"
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">05</span>
            <span>Instagram ↗</span>
          </a>

          <Link
            href="/locations#visit"
            className="nav__mobile-link"
            onClick={closeMenu}
          >
            <span className="nav__mobile-link-num">06</span>
            <span>Contact</span>
          </Link>
        </nav>

        {/* Bottom Actions: WhatsApp & Call */}
        <div className="nav__mobile-footer">
          <a
            href={getWhatsAppUrl(`Hi Nexus, I would like to inquire about membership at ${branch.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__mobile-btn-whatsapp"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WHATSAPP NEXUS</span>
          </a>

          <a
            href={`tel:${branch.contact.phone}`}
            className="nav__mobile-btn-call"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>CALL NEXUS: {branch.contact.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </>
  );
};
