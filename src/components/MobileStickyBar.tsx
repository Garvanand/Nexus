'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const MobileStickyBar: React.FC = () => {
  const { branch, getWhatsAppUrl } = useBranch();

  return (
    <div className="mobile-sticky-bar" aria-label="Mobile Quick Action Bar">
      <a
        href={getWhatsAppUrl(`Hi Nexus, I'd like to visit the ${branch.shortName} club.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        WhatsApp {branch.shortName}
      </a>
      <Link href="/join" className="btn btn-primary">
        Start Journey
      </Link>
    </div>
  );
};
