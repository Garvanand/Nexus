'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const MobileStickyBar: React.FC = () => {
  const { branch, getWhatsAppUrl } = useBranch();

  return (
    <div className="mobile-sticky-bar" aria-label="Mobile Quick Action Bar">
      <a
        href="tel:+919582333003"
        className="btn btn-secondary mobile-sticky-call"
        title="Call Nexus Club"
        style={{ flex: '0 0 46px', padding: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="Call Nexus Concierge"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
      <a
        href={getWhatsAppUrl(`Hi Nexus, I'd like to visit the ${branch.shortName} club.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        WhatsApp
      </a>
      <Link href="/join" className="btn btn-primary">
        Start Journey
      </Link>
    </div>
  );
};
