'use client';

import React from 'react';

interface NexusCoachTriggerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const NexusCoachTrigger: React.FC<NexusCoachTriggerProps> = ({
  isOpen,
  onClick,
}) => {
  if (isOpen) {
    return null; // Hidden while panel is open
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="nexus-coach-trigger"
      aria-label="Open Nexus AI Coach fitness assistant and club concierge"
      title="Open Nexus Coach (AI Concierge)"
      id="nexus-coach-trigger-btn"
    >
      <div className="coach-trigger-monogram">
        <span>N</span>
      </div>
      <div className="coach-trigger-info">
        <div className="coach-trigger-title">
          <span>NEXUS COACH</span>
          <span className="coach-trigger-badge">AI</span>
        </div>
        <div className="coach-trigger-sub">
          <span>TRAIN SMARTER</span>
          <span className="coach-trigger-arrow">→</span>
        </div>
      </div>
    </button>
  );
};
