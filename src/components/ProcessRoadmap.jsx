import React from 'react';
import { Search, Compass, Pencil, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    name: "DISCOVER",
    desc: "Understanding business goals, data sources, and system constraints."
  },
  {
    icon: Compass,
    name: "DEFINE",
    desc: "Research, analysis, model benchmarking, and strategic framing."
  },
  {
    icon: Pencil,
    name: "DESIGN",
    desc: "Vector schemas, async API contracts, and pipeline blueprints."
  },
  {
    icon: Code2,
    name: "DEVELOP",
    desc: "Prompt engineering, embedding fine-tuning, and automated validation."
  },
  {
    icon: Rocket,
    name: "DELIVER",
    desc: "Dockerization, CI/CD workflows, and deploying with confidence."
  }
];

export default function ProcessRoadmap() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Ethan Cole reference */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-12">
          <h2 className="font-display font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-slate-900 dark:text-white">
            MY PROCESS
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            A clear roadmap to success.
          </span>
        </div>

        {/* Stepper with connecting line and Robot Hand graphic */}
        <div className="relative">
          
          {/* Horizontal Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-6 left-8 right-32 h-[1px] bg-slate-300 dark:bg-slate-700 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.name}
                  className="bg-white/90 dark:bg-[#111726]/90 border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 shadow-sm space-y-3 relative group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Step Icon Node */}
                  <div className="w-10 h-10 rounded-full bg-[#EBEEF2] dark:bg-[#0A0E17] border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:border-[#859787] group-hover:text-[#6E8170] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="font-display font-extrabold text-xs tracking-wider uppercase text-slate-900 dark:text-white">
                    {step.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Futuristic Robot Hand SVG Accent (from Ethan Cole inspiration) */}
          <div className="hidden xl:block absolute -right-8 -top-16 w-44 h-44 opacity-25 dark:opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-600">
              <circle cx="85" cy="50" r="3" fill="#859787" />
              <path d="M10 60 Q40 50 60 48 T85 50" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3"/>
              <path d="M50 45 L70 35 M55 52 L75 50 M50 60 L68 65" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
