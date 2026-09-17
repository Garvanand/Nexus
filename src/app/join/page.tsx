import React from 'react';
import { Metadata } from 'next';
import { LeadConversionForm } from '../../components/LeadConversionForm';

export const metadata: Metadata = {
  title: 'Start Your Nexus Journey — Membership Consultation & Batch Timings',
  description:
    'Two clubs in Greater Faridabad (Sector 85 Flagship & Sector 86 Studios + Turf). Select your branch and training focus to receive transparent membership details directly from our senior coaches.',
  keywords: [
    'nexus gym membership faridabad',
    'gym sector 85 joining',
    'fitness membership sector 86',
    'nexus lifting club consultation'
  ]
};

export default function JoinPage({
  searchParams
}: {
  searchParams?: { step?: string };
}) {
  const step = searchParams?.step ? parseInt(searchParams.step, 10) : 1;
  const validStep = step >= 1 && step <= 3 ? step : 1;

  return (
    <div className="join-page" style={{ paddingTop: '60px', backgroundColor: 'var(--surface-primary)', minHeight: '100vh' }}>
      <LeadConversionForm initialStep={validStep} key={validStep} />
    </div>
  );
}
