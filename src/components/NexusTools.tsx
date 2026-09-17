'use client';

import React, { useState } from 'react';
import { GoalSelectorTool } from './tools/GoalSelectorTool';
import { CalorieMacroTool } from './tools/CalorieMacroTool';
import { BmiTool } from './tools/BmiTool';
import { HydrationTool } from './tools/HydrationTool';
import { StarterGuideTool } from './tools/StarterGuideTool';
import { TOOL_DISCLAIMERS } from '../data/tools';

export type ToolTab = 'goal' | 'calories' | 'bmi' | 'hydration' | 'starter';

export const NexusTools: React.FC<{ initialTab?: ToolTab }> = ({ initialTab = 'goal' }) => {
  const [activeTab, setActiveTab] = useState<ToolTab>(initialTab);

  return (
    <section className="tools-section" id="tools" aria-label="Nexus Tools">
      <div className="tools-container">
        {/* Section Header */}
        <div className="tools-header">
          <span className="tools-eyebrow">PRACTICAL ATHLETIC INTELLIGENCE</span>
          <h2 className="tools-title">NEXUS TOOLS.</h2>
          <p className="tools-desc">
            Zero gimmicks. Zero false health claims. Interactive athletic utilities designed to benchmark your nutrition, calculate training output, and recommend your starting path.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tools-tabs-nav" role="tablist" aria-label="Nexus Tools Tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'goal'}
            className={`tools-tab-btn ${activeTab === 'goal' ? 'tools-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('goal')}
          >
            <span className="tools-tab-num">01</span>
            <span>Goal Matcher</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'calories'}
            className={`tools-tab-btn ${activeTab === 'calories' ? 'tools-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('calories')}
          >
            <span className="tools-tab-num">02</span>
            <span>Calories &amp; Macros</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'bmi'}
            className={`tools-tab-btn ${activeTab === 'bmi' ? 'tools-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('bmi')}
          >
            <span className="tools-tab-num">03</span>
            <span>Athletic BMI</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'hydration'}
            className={`tools-tab-btn ${activeTab === 'hydration' ? 'tools-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('hydration')}
          >
            <span className="tools-tab-num">04</span>
            <span>Hydration</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'starter'}
            className={`tools-tab-btn ${activeTab === 'starter' ? 'tools-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('starter')}
          >
            <span className="tools-tab-num">05</span>
            <span>Starter Guide</span>
          </button>
        </div>

        {/* Tool Content Container */}
        <div className="tools-card" role="tabpanel">
          {activeTab === 'goal' && <GoalSelectorTool />}
          {activeTab === 'calories' && <CalorieMacroTool />}
          {activeTab === 'bmi' && <BmiTool />}
          {activeTab === 'hydration' && <HydrationTool />}
          {activeTab === 'starter' && <StarterGuideTool />}
        </div>

        {/* Scientific & Medical Disclaimer */}
        <div className="tool-legal-disclaimer">
          <p style={{ marginBottom: '6px' }}>
            <strong>Scientific Reference:</strong> {TOOL_DISCLAIMERS.scientificNotice}
          </p>
          <p>
            <strong>Disclaimer:</strong> {TOOL_DISCLAIMERS.noHealthClaims}
          </p>
        </div>
      </div>
    </section>
  );
};
