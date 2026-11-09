import React from 'react';
import { 
  BrainCircuit, 
  Server, 
  Bot, 
  Cpu 
} from 'lucide-react';

const PILLARS = [
  {
    icon: BrainCircuit,
    title: "AI & RAG ARCHITECTURE",
    desc: "Crafting enterprise semantic search, local LLMs, and high-accuracy RAG pipelines."
  },
  {
    icon: Server,
    title: "HIGH-PERFORMANCE BACKENDS",
    desc: "Building async FastAPI services, Redis task queues, and sub-millisecond API endpoints."
  },
  {
    icon: Bot,
    title: "WEB AUTOMATION & SCRAPING",
    desc: "Engineering resilient Playwright and Selenium clusters that extract dynamic data at scale."
  },
  {
    icon: Cpu,
    title: "PREDICTIVE ML & VISION",
    desc: "From concept to launch—deploying custom ML regressors and Vertex AI vision workflows."
  }
];

export default function WhatIDo() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Design. Build. Elevate. (matching Ethan Cole reference) */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
              WHAT I DO
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
              Design. Build. Elevate.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
              End-to-end intelligent engineering solutions tailored to mission-critical business systems.
            </p>
          </div>

          {/* Right Column: 4 Columns with Clean Outlined Minimalist Icons (matching reference) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="space-y-3 text-center sm:text-left p-2 rounded-xl"
                >
                  {/* Clean Minimalist Outlined Icon matching Ethan Cole */}
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#121A2C] border border-slate-300/80 dark:border-white/10 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-200 mx-auto sm:mx-0">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>

                  <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
