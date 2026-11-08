import React, { useState } from 'react';
import { 
  Terminal, 
  Zap, 
  Network, 
  Database, 
  Cpu, 
  Eye, 
  Layers, 
  Bot, 
  Sparkles, 
  BarChart3, 
  Brain, 
  Camera, 
  HardDrive, 
  Cloud, 
  Box, 
  Workflow, 
  FileText, 
  FileCode, 
  Table, 
  GitMerge, 
  Layout, 
  Server, 
  GitBranch, 
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CORE_PLATFORMS } from '../data/portfolioData';

const ICON_MAP = {
  Terminal,
  Zap,
  Network,
  Database,
  Cpu,
  Eye,
  Layers,
  Bot,
  Sparkles,
  BarChart3,
  Brain,
  Camera,
  HardDrive,
  Cloud,
  Box,
  Workflow,
  FileText,
  FileCode,
  Table,
  GitMerge,
  Layout,
  Server,
  GitBranch
};

const CATEGORIES = [
  'All Platforms',
  'AI & RAG Systems',
  'Backend & Cloud',
  'Automation & Scraping',
  'ML & Data'
];

export default function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Platforms');

  const filteredPlatforms = selectedCategory === 'All Platforms'
    ? CORE_PLATFORMS
    : CORE_PLATFORMS.filter(item => item.category === selectedCategory || (selectedCategory === 'Core & Languages' && item.category === 'Core & Languages'));

  // Featured top-row brands directly mirroring Ethan Cole reference
  const topFeatured = CORE_PLATFORMS.filter(p => p.featured);

  return (
    <section className="py-14 sm:py-16 border-y border-slate-300/60 dark:border-white/10 bg-white/40 dark:bg-[#0A0E17]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Block matching Ethan Cole */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 text-[#5A6B5C] dark:text-[#B6CBB9] text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#859787] animate-pulse" />
            <span>FORWARD DEPLOYED & PRODUCTION TESTED</span>
          </div>
          
          <h2 className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.22em] uppercase text-slate-800 dark:text-slate-200">
            TRUSTED CORE TECHNOLOGIES & PLATFORMS
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            From low-latency async backends and vector engines to distributed scraping clusters and generative vision.
          </p>
        </div>

        {/* Featured Tier: Minimalist Geometric Brand Logo Row (Clean Ethan Cole reference style) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 pt-1">
          {topFeatured.map((brand, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 group cursor-default opacity-85 hover:opacity-100 transition-all hover:-translate-y-0.5"
              >
                {/* Sage green minimalist geometric mark */}
                <div className="w-2.5 h-2.5 rounded-sm bg-[#859787] group-hover:bg-[#6E8170] transition-colors shadow-sm" />
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider text-slate-800 dark:text-slate-200 uppercase group-hover:text-[#6E8170] dark:group-hover:text-[#9BB49F] transition-colors">
                  {brand.name}
                </span>
                <span className="hidden xl:inline text-[9px] font-mono text-slate-400 dark:text-slate-500">
                  [{brand.tag}]
                </span>
              </div>
            );
          })}
        </div>

        {/* Collapsible Trigger Toggle Button */}
        <div className="flex items-center justify-center pt-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#111726] border border-slate-300 dark:border-white/10 hover:border-[#859787] hover:text-[#6E8170] dark:hover:text-[#9BB49F] shadow-sm transition-all hover:-translate-y-0.5"
            aria-expanded={isExpanded}
          >
            <span>
              {isExpanded ? 'Collapse Full Tech Arsenal' : 'Explore Full Tech Arsenal (26 Technologies)'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#859787]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#859787]" />
            )}
          </button>
        </div>

        {/* Collapsible Content Area (makes page feel bigger when collapsed) */}
        {isExpanded && (
          <div className="space-y-8 pt-4 animate-in fade-in slide-in-from-top-4 duration-300">
            
            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                      active
                        ? 'bg-[#859787] text-white shadow-sm font-semibold'
                        : 'bg-white dark:bg-[#111726] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-[#859787]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Comprehensive Grid of Tech from his CV */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {filteredPlatforms.map((tech, idx) => {
                const Icon = ICON_MAP[tech.icon] || Cpu;
                return (
                  <div
                    key={idx}
                    className="group p-3.5 rounded-xl bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#859787] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[#E8EFEA] dark:bg-[#859787]/20 text-[#6E8170] dark:text-[#9BB49F] flex items-center justify-center group-hover:bg-[#859787] group-hover:text-white transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">
                        {tech.category === 'AI & RAG Systems' ? 'AI' : 
                         tech.category === 'Backend & Cloud' ? 'SYS' :
                         tech.category === 'Automation & Scraping' ? 'ETL' :
                         tech.category === 'ML & Data' ? 'ML' : 'DEV'}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white group-hover:text-[#6E8170] dark:group-hover:text-[#9BB49F] transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 line-clamp-1">
                        {tech.tag}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Forward Deployed Footnote Banner */}
            <div className="p-4 rounded-xl bg-[#E8EFEA]/60 dark:bg-[#859787]/10 border border-[#D3E0D6] dark:border-[#859787]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6E8170] shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Forward Deployed Engineering:</strong> Tested across on-premise clusters, Azure cloud, dynamic web targets, and high-throughput production workloads.
                </span>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="text-[10px] font-mono font-bold text-[#5A6B5C] dark:text-[#B6CBB9] shrink-0 uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                <span>Collapse Arsenal</span>
                <ChevronUp className="w-3 h-3" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
