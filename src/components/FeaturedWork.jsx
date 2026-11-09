import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function FeaturedWork({ onSelectProject }) {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching Ethan Cole reference image) */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="font-display font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-slate-900 dark:text-white">
            FEATURED WORK
          </h2>

          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase hover:text-[#6E8170] dark:hover:text-[#9BB49F] transition-colors group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Project Cards Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              
              {/* Card Preview Mockup Box matching Ethan Cole style */}
              <div className="h-52 bg-slate-100 dark:bg-[#0B101C] p-3 flex items-center justify-center relative overflow-hidden border-b border-slate-100 dark:border-white/5">
                
                {/* Specific Mockup Styles for each project */}
                {idx === 0 && (
                  /* 1. Dark Dashboard (matching Nexora Dashboard in reference) */
                  <div className="w-full h-full bg-[#0D121F] rounded-xl border border-slate-800 p-3 flex flex-col justify-between shadow-inner">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#859787]" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">smarterp.dashboard</span>
                    </div>

                    <div className="space-y-1.5 my-auto">
                      <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                        <span>Latency</span>
                        <span className="text-[#8FA091] font-bold">&lt; 1ms</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#859787] w-[85%]" />
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-[#A3B8A5] w-[65%]" />
                      </div>
                    </div>

                    <div className="flex justify-between text-[8px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                      <span>Qdrant + Ollama</span>
                      <span className="text-[#8FA091]">RAG READY</span>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  /* 2. Autonomous Agent & LangChain UI */
                  <div className="w-full h-full bg-[#0D121F] rounded-xl border border-slate-800 p-3 flex flex-col justify-between shadow-inner">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                      <span className="text-[9px] font-mono text-slate-300">agent_research.py</span>
                      <span className="text-[#8FA091] bg-[#859787]/20 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold">MULTI-TOOL</span>
                    </div>
                    
                    <div className="space-y-1 my-auto">
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-[#A3B8A5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#859787]" />
                        <span>Tool: Web Search + Wikipedia</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>LangChain OpenAI Router</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>ChromaDB Vector Memory</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-[8px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                      <span>Autonomous Execution</span>
                      <span className="text-[#8FA091]">READY</span>
                    </div>
                  </div>
                )}

                {idx === 2 && (
                  /* 3. Mobile UI (matching Finovo Mobile in reference) */
                  <div className="w-full h-full flex items-center justify-center gap-2 p-1">
                    <div className="w-20 h-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow p-1.5 flex flex-col justify-between">
                      <div className="w-4 h-1 bg-slate-300 dark:bg-slate-600 mx-auto rounded-full" />
                      <div className="space-y-1 my-auto">
                        <div className="h-1.5 bg-[#859787] rounded w-full" />
                        <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                      </div>
                      <span className="text-[7px] text-[#5A6B5C] font-bold text-center block">Try-On</span>
                    </div>

                    <div className="w-20 h-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow p-1.5 flex flex-col justify-between">
                      <div className="w-4 h-1 bg-slate-300 dark:bg-slate-600 mx-auto rounded-full" />
                      <div className="space-y-1 my-auto">
                        <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                        <div className="h-1.5 bg-[#6E8170] rounded w-5/6" />
                      </div>
                      <span className="text-[7px] text-[#6E8170] font-bold text-center block">Sizing AI</span>
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  /* 4. Tech Product preview (matching Audiomi in reference) */
                  <div className="w-full h-full bg-white rounded-xl border border-slate-200 p-3 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EFEA] flex items-center justify-center text-[#6E8170] mb-2">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 block">Web Automation</span>
                    <span className="text-[8px] text-slate-500 font-mono">Distributed ETL Engine</span>
                  </div>
                )}

              </div>

              {/* Title & Category Caption below image (matching Ethan Cole reference) */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider group-hover:text-[#6E8170] transition-colors">
                    {project.title.split('–')[0].trim()}
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {project.categoryLabel} • {project.year}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-[#6E8170] dark:text-[#9BB49F] font-semibold">
                  <span>Explore Case Study</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
