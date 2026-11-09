import React from 'react';
import { Layers, Users, Calendar, Award } from 'lucide-react';
import { STATS } from '../data/portfolioData';

const STAT_ICONS = [
  Layers,
  Users,
  Calendar,
  Award
];

export default function StatsBanner() {
  return (
    <section className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sage Green Stats Banner matching Ethan Cole reference */}
        <div className="bg-[#859787] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx] || Layers;

            return (
              <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/85 mt-0.5 font-bold">
                    {stat.label.replace(' & Pipelines', '')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
