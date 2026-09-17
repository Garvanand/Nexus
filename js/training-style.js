/**
 * NEXUS — THE LIFTING CLUB
 * Training Style Recommendation Engine (/training)
 * 
 * Interactively recommends training protocols, primary Nexus zones,
 * weekly cadence, and matching branch based on visitor intent.
 */

(function () {
  'use strict';

  const TRAINING_STYLES = {
    'stronger': {
      title: 'Maximum Strength & Progressive Overload',
      protocol: 'A structured regimen centered around compound barbell movements—squats, bench press, deadlifts, and overhead presses—leveraging progressive overload, calibrated steel discs, and drop platforms to build raw functional power.',
      primaryZones: 'Olympic Power Cages · Deadlift Bays · Free Weight Floor',
      cadence: '3 to 4 days weekly (60–75 minutes per session)',
      branchMatch: 'Sector 85 (Flagship Lifting Arena) or Sector 86',
      whatsappText: "Hi Nexus! I chose 'Get Stronger' on your training page. Can you share details on strength floor access and coaching?"
    },

    'fat-loss': {
      title: 'Metabolic Conditioning & Resistance',
      protocol: 'High-density resistance workouts that protect lean muscle tissue while maximizing caloric expenditure through turf sled pushes, prowler sprints, and high-cadence metabolic circuits.',
      primaryZones: 'Synthetic Turf Sled Track · Free Weights · Aerobic Studio',
      cadence: '4 sessions per week (45–60 minutes per session)',
      branchMatch: 'Sector 85 (Turf Track) or Sector 86 (Studios & Turf)',
      whatsappText: "Hi Nexus! My goal is 'Lose Fat' and build athletic conditioning. What membership and training plan do you recommend?"
    },

    'fitness': {
      title: 'All-Round Athletic Hybrid Performance',
      protocol: 'A balanced hybrid methodology integrating heavy iron 2 days a week, functional conditioning 2 days a week, and weekend athletic play under the open sky on the rooftop cricket arena.',
      primaryZones: 'Cardio Suite · Free Weight Floor · Rooftop Cricket Turf',
      cadence: '4 to 5 days weekly balanced athletic schedule',
      branchMatch: 'Sector 86 (Studios & Rooftop Cricket Arena)',
      whatsappText: "Hi Nexus! I want to 'Improve All-Round Fitness'. Can you tell me about the hybrid training and club facilities?"
    },

    'consistency': {
      title: 'Sustainable Habit & Routine Building',
      protocol: 'A supportive, low-intimidation entry path focused on consistent weekly attendance, coach form-audits, private digital lockers, and a comfortable recovery routine that makes discipline feel automatic.',
      primaryZones: 'Resistance Floor · Certified Coach Cadre · Member Lounge',
      cadence: '3 scheduled days per week (same time daily for habit formation)',
      branchMatch: 'Choose your nearest branch (Sector 85 or Sector 86)',
      whatsappText: "Hi Nexus! My goal is 'Build Consistency'. Can I schedule a personal walkthrough and consultation to get started?"
    },

    'move-better': {
      title: 'Joint Mobility, Decompression & Flow',
      protocol: 'Deep myofascial mobility, low-lux Vinyasa flow, pranayama breathwork, and kinetic core stabilization designed to unglue tight hips, align the spine, and eradicate chronic desk posture.',
      primaryZones: 'Yoga Sanctuary · Functional Mobility Zone · Studio Floor',
      cadence: '3 to 4 sessions weekly (morning or evening decompression)',
      branchMatch: 'Sector 86 Studio Arena (Mindfulness Sanctuary)',
      whatsappText: "Hi Nexus! I want to 'Move Better' and improve my mobility and posture. Please share Yoga & flow class schedules."
    },

    'group': {
      title: 'Collective Energy & Studio Cadence',
      protocol: 'High-energy cohort training in acoustic mirrored studios featuring 60-minute licensed Zumba dance workouts, athletic Aerobics HIIT circuits, and weekend cricket matches under night floodlights.',
      primaryZones: 'Acoustic Zumba Studio · Aerobics Studio · Rooftop Turf',
      cadence: '3 to 5 group classes weekly with licensed leads',
      branchMatch: 'Sector 86 (Group Fitness Hub & Rooftop Arena)',
      whatsappText: "Hi Nexus! I want to 'Train With A Group' in Zumba and Aerobics. Can you share the weekly studio schedule?"
    }
  };

  const TrainingStyleFinder = {
    pills: [],
    card: null,
    titleEl: null,
    protocolEl: null,
    zonesEl: null,
    cadenceEl: null,
    branchEl: null,
    whatsappBtn: null,

    init: function () {
      this.pills = document.querySelectorAll('.style-goal-pill');
      this.card = document.getElementById('style-result-card');
      this.titleEl = document.getElementById('style-title');
      this.protocolEl = document.getElementById('style-protocol');
      this.zonesEl = document.getElementById('style-zones');
      this.cadenceEl = document.getElementById('style-cadence');
      this.branchEl = document.getElementById('style-branch');
      this.whatsappBtn = document.getElementById('style-whatsapp-btn');

      if (!this.pills.length || !this.card) return;

      this.bindEvents();
      // Initialize with default
      this.selectGoal('stronger');
    },

    bindEvents: function () {
      this.pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          const goal = e.currentTarget.getAttribute('data-goal');
          this.selectGoal(goal);
        });
      });
    },

    selectGoal: function (goalKey) {
      const data = TRAINING_STYLES[goalKey];
      if (!data) return;

      // Update pills
      this.pills.forEach(p => {
        if (p.getAttribute('data-goal') === goalKey) {
          p.classList.add('style-goal-pill--active');
          p.setAttribute('aria-selected', 'true');
        } else {
          p.classList.remove('style-goal-pill--active');
          p.setAttribute('aria-selected', 'false');
        }
      });

      // Smooth opacity animation
      this.card.style.opacity = '0.4';
      this.card.style.transform = 'translateY(4px)';

      setTimeout(() => {
        if (this.titleEl) this.titleEl.textContent = data.title;
        if (this.protocolEl) this.protocolEl.textContent = data.protocol;
        if (this.zonesEl) this.zonesEl.textContent = data.primaryZones;
        if (this.cadenceEl) this.cadenceEl.textContent = data.cadence;
        if (this.branchEl) this.branchEl.textContent = data.branchMatch;

        if (this.whatsappBtn) {
          const encoded = encodeURIComponent(data.whatsappText);
          this.whatsappBtn.href = `https://wa.me/919582333003?text=${encoded}`;
        }

        this.card.style.opacity = '1';
        this.card.style.transform = 'translateY(0)';
      }, 120);
    }
  };

  window.NexusTrainingStyleFinder = TrainingStyleFinder;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TrainingStyleFinder.init());
  } else {
    TrainingStyleFinder.init();
  }
})();
