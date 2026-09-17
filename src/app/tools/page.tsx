import React from 'react';
import { Metadata } from 'next';
import { NexusTools } from '../../components/NexusTools';

export const metadata: Metadata = {
  title: 'NEXUS TOOLS — Athletic Fitness Calculators & Goal Selector',
  description:
    'Evidence-based fitness calculators: What Are You Training For goal matcher, Mifflin-St Jeor daily calories & macro breakdown, athletic BMI context, hydration target, and beginner starter guide.',
  keywords: [
    'gym calorie calculator',
    'macro calculator faridabad',
    'workout goal selector',
    'nexus lifting club tools',
    'athletic bmi calculator',
    'gym beginner guide'
  ]
};

export default function ToolsPage({
  searchParams
}: {
  searchParams?: { tab?: string };
}) {
  const validTabs = ['goal', 'calories', 'bmi', 'hydration', 'starter'];
  const tab =
    searchParams?.tab && validTabs.includes(searchParams.tab)
      ? (searchParams.tab as any)
      : 'goal';

  return (
    <div style={{ paddingTop: '80px' }}>
      <NexusTools initialTab={tab} key={tab} />
    </div>
  );
}
