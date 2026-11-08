import React, { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-rag', label: 'AI & RAG Systems' },
  { id: 'automation', label: 'Automation & Scraping' }
];

export default function WorkPage({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
            PORTFOLIO & CASE STUDIES
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
            Selected Systems & Case Studies
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A comprehensive look at enterprise AI solutions, local RAG architectures, prompt-engineered extraction systems, and distributed automation frameworks.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#859787] text-white shadow-sm'
                  : 'bg-white dark:bg-[#111726] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-[#859787]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Mockup Preview Bar */}
                <div className="h-48 bg-[#0D121F] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-[#859787]" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.id}.service
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8FA091]">
                      {project.metric}
                    </span>
                  </div>

                  <div className="space-y-1.5 py-2">
                    <div className="text-xs font-mono text-[#8FA091]">
                      $ init_service --arch={project.category}
                    </div>
                    <div className="text-xs font-mono text-slate-300">
                      &gt; Stack: {project.techStack.slice(0, 4).join(', ')}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      &gt; Status: Production verified. Zero regressions.
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{project.categoryLabel}</span>
                    <span>Year: {project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#859787]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#5A6B5C] bg-[#E8EFEA] dark:bg-[#859787]/20 px-2.5 py-0.5 rounded-full border border-[#D3E0D6] dark:border-[#859787]/40">
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8170] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Tags & Case Study Button */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#EBEEF2] dark:bg-[#0B101C] text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#859787] hover:bg-[#748776] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <span>VIEW FULL ARCHITECTURE & CASE STUDY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
