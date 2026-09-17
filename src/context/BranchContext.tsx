'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BranchId, Branch } from '../types';
import { NEXUS_BRANCHES } from '../data/branches';

interface BranchContextType {
  branchId: BranchId;
  branch: Branch;
  setBranch: (id: BranchId) => void;
  getWhatsAppUrl: (contextMessage?: string) => string;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export const BranchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branchId, setBranchId] = useState<BranchId>('sector-85');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nexus_selected_branch') as BranchId | null;
      if (saved && (saved === 'sector-85' || saved === 'sector-86')) {
        setBranchId(saved);
      }
    } catch {
      // ignore localStorage errors in private browsing
    }
  }, []);

  const setBranch = (id: BranchId) => {
    setBranchId(id);
    try {
      localStorage.setItem('nexus_selected_branch', id);
    } catch {
      // ignore
    }
  };

  const currentBranch = NEXUS_BRANCHES[branchId] || NEXUS_BRANCHES['sector-85'];

  const getWhatsAppUrl = (contextMessage?: string) => {
    const text = contextMessage || currentBranch.contact.whatsappMessage;
    return `https://wa.me/919582333003?text=${encodeURIComponent(text)}`;
  };

  return (
    <BranchContext.Provider
      value={{
        branchId,
        branch: currentBranch,
        setBranch,
        getWhatsAppUrl,
      }}
    >
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
};
