import React from 'react';
import { 
  Search, 
  Compass, 
  Pencil, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Terminal 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const STEP_ICONS = {
  "01": Search,
  "02": Compass,
  "03": Pencil,
  "04": Code2,
  "05": Rocket
};

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
            METHODOLOGY & RIGOR
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
            From Prototype to Production AI
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Building reliable AI is not just about prompt templates or demo notebooks. It demands disciplined system architecture, latency benchmarking, tenant isolation, and automated validation.
          </p>
        </div>

        {/* 5 Deep-Dive Steps */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step) => {
            const Icon = STEP_ICONS[step.step] || Search;

            return (
              <div
                key={step.step}
                className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#859787] text-white flex items-center justify-center font-display font-bold text-sm shadow-sm">
                      {step.step}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#859787] dark:text-[#9BB49F]">
                        PHASE {step.step} • {step.phase}
                      </span>
                      <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#EBEEF2] dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {step.summary}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Engineering Standards Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block mb-1">
              QUALITY ASSURANCE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Core Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Sub-Millisecond Async Core
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Critical paths remain unblocked by offloading vector embeddings and heavy inference to Redis background queues.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#E8EFEA] text-[#6E8170] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Multi-Tenant Data Privacy
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                RBAC and JWT policies cascade directly into vector search index queries, preventing cross-tenant leakage.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Strict Schema Enforcement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                LLM outputs are bounded by rigid Pydantic models and JSON schemas, eliminating hallucinations and parsing crashes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
