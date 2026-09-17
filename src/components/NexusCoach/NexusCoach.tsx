'use client';

import React, { useState } from 'react';
import { NexusCoachTrigger } from './NexusCoachTrigger';
import { NexusCoachPanel } from './NexusCoachPanel';

export const NexusCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NexusCoachTrigger isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <NexusCoachPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
