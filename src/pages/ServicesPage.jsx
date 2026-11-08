import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Server, 
  Bot, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Workflow
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const SERVICE_ICONS = {
  BrainCircuit,
  Server,
  Bot,
  Cpu,
  Workflow
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
            ENGINEERING CAPABILITIES
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
            Specialized Engineering & AI Capabilities
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Bridging frontier large language models with enterprise-grade asynchronous backends, sub-millisecond vector retrieval, and automated ETL pipelines.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => {
            const IconComponent = SERVICE_ICONS[service.icon] || Cpu;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EFEA] dark:bg-[#859787]/20 text-[#6E8170] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#859787] block">
                      {service.tag}
                    </span>

                    <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6E8170] hover:underline"
                      >
                        <span>Discuss this solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Deliverables & Tech */}
                  <div className="lg:col-span-7 bg-[#EBEEF2]/50 dark:bg-[#0B101C] border border-slate-200/70 dark:border-white/5 rounded-xl p-6 space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#859787]" />
                        <span>Core Deliverables & Specifications</span>
                      </h3>

                      <ul className="space-y-2">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8170] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/5">
                      <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded bg-white dark:bg-[#121A2C] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Models */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block mb-1">
              COLLABORATION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#859787] uppercase">
                MODEL 01
              </span>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Full-Time Engineering Role
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Embed directly into your team to drive production AI systems, async backends, and data infrastructure.
              </p>
              <div className="pt-1">
                <Link to="/contact" className="text-xs font-bold text-[#6E8170] hover:underline">
                  Inquire Availability ➔
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111726] border-2 border-[#859787]/80 rounded-2xl p-6 space-y-3 shadow-md relative">
              <span className="absolute -top-2.5 right-4 text-[9px] font-bold uppercase tracking-wider bg-[#859787] text-white px-2.5 py-0.5 rounded-full">
                Popular
              </span>
              <span className="text-[10px] font-mono font-bold text-[#859787] uppercase">
                MODEL 02
              </span>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                RAG & Architecture Contract
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Turnkey development of custom RAG pipelines, FastAPI microservices, or local LLM deployments.
              </p>
              <div className="pt-1">
                <Link to="/contact" className="text-xs font-bold text-[#6E8170] hover:underline">
                  Request Scoping ➔
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#859787] uppercase">
                MODEL 03
              </span>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Automation & ETL Pipelines
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Design and deployment of robust Playwright/Selenium web scrapers and automated data pipelines.
              </p>
              <div className="pt-1">
                <Link to="/contact" className="text-xs font-bold text-[#6E8170] hover:underline">
                  Discuss Requirements ➔
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
