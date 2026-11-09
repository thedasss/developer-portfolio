import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileDown, 
  Globe, 
  Linkedin, 
  Github, 
  Mail, 
  Phone 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function HeroSection({ onOpenCV }) {
  return (
    <section className="relative min-h-[88vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left z-10">
            
            {/* Tagline / Eyebrow (No overlap, clean alignment) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                Hello, I'm
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 text-[9px] font-mono font-bold tracking-[0.2em] text-[#5A6B5C] dark:text-[#B6CBB9] uppercase">
                ENGINEERING TOMORROW. TODAY.
              </span>
            </div>

            {/* Giant Title matching Ethan Cole reference */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Spaced Uppercase Subtitle */}
            <div className="space-y-1.5">
              <div className="font-display font-bold text-xs sm:text-sm lg:text-base tracking-[0.24em] text-slate-700 dark:text-slate-300 uppercase">
                {PERSONAL_INFO.title}
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 text-[10px] sm:text-[11px] font-mono font-bold text-[#5A6B5C] dark:text-[#B6CBB9] tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#859787] animate-pulse" />
                  <span>Forward Deployed Engineer • Production AI Specialist</span>
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.shortPitch}
            </p>

            {/* Buttons: Sage Green Solid Pill + Ghost Circle Button + CV Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#859787] hover:bg-[#748776] shadow-md shadow-[#859787]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#6E8170] dark:hover:text-[#9BB49F] transition-colors"
              >
                <span>ABOUT ME</span>
                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px]">⊙</span>
              </Link>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-bold text-[#5A6B5C] dark:text-[#B6CBB9] bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-[#859787] transition-all shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5 text-[#859787]" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>

            {/* "AVAILABLE FOR PROJECTS" with overlapping avatars */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-[#EBEEF2] dark:border-[#0A0E17] flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">
                  TS
                </div>
                <div className="w-7 h-7 rounded-full bg-[#859787] border-2 border-[#EBEEF2] dark:border-[#0A0E17] flex items-center justify-center text-[10px] font-bold text-white">
                  AI
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-400 border-2 border-[#EBEEF2] dark:border-[#0A0E17] flex items-center justify-center text-[10px] font-bold text-white">
                  SE
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-[#EBEEF2] dark:border-[#0A0E17] flex items-center justify-center text-[9px] font-bold text-slate-500">
                  +
                </div>
              </div>

              <div className="text-left text-xs">
                <span className="font-bold text-[11px] tracking-wider text-slate-900 dark:text-white uppercase block">
                  AVAILABLE FOR PROJECTS • 
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Trusted by forward-thinking engineering teams worldwide.
                </span>
              </div>
            </div>

            {/* Mobile Social Bar */}
            <div className="lg:hidden flex items-center justify-center gap-3 pt-2">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#859787] text-xs font-bold"
              >
                in
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#859787]"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#859787]"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Futuristic HUD Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* HUD Outer Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Subtle Robot Profile Silhouette */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[95%] h-[95%] text-slate-400 dark:text-slate-600">
                  <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.6"/>
                  <path d="M70 65 Q95 45 125 55 T145 90 Q150 120 135 140 T90 150 Q65 145 60 120 Z" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" fill="none"/>
                  <circle cx="115" cy="85" r="8" stroke="currentColor" strokeWidth="0.8"/>
                  <path d="M115 85 L140 85" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              </div>

              {/* Orbit Arc Ring in Sage Green */}
              <div className="absolute inset-2 sm:inset-0 rounded-full border border-[#859787]/40 dark:border-[#859787]/30 animate-hud-spin pointer-events-none" />

              {/* Glowing Orbit Node Marker in Sage Green */}
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#859787] shadow-lg shadow-[#859787]/50" />

              {/* Circular Portrait Frame */}
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white dark:border-[#121A2C] shadow-xl group">
                <img 
                  src="/images/thedas-silva.jpg" 
                  alt="Thedas Silva - Software Engineer & AI Engineer" 
                  className="w-full h-full object-cover object-[center_16%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Technical Callout Card */}
              <div className="absolute -top-3 -right-2 sm:top-6 sm:-right-6 bg-white/95 dark:bg-[#121A2C]/95 border border-slate-200 dark:border-white/10 rounded-xl p-3 shadow-md backdrop-blur-sm text-left max-w-[130px] sm:max-w-[150px]">
                <span className="block text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  BASED IN
                </span>
                <span className="block text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight mt-0.5">
                  Colombo,<br />Sri Lanka •
                </span>
                <div className="flex items-center gap-1 mt-2 text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                  <Globe className="w-2.5 h-2.5 text-[#859787]" />
                  <span className="uppercase tracking-wider">AVAILABLE WORLDWIDE</span>
                </div>
              </div>

            </div>

            {/* Pinned Vertical Social Icons on Far Right with Correct Links */}
            <div className="hidden lg:flex flex-col gap-3 absolute -right-10 top-1/2 -translate-y-1/2 z-20">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-[#121A2C] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#859787] hover:border-[#859787] shadow-sm transition-all hover:scale-110 text-xs font-bold"
                title="LinkedIn"
              >
                in
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white dark:bg-[#121A2C] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#859787] hover:border-[#859787] shadow-sm transition-all hover:scale-110 text-xs"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="w-8 h-8 rounded-full bg-white dark:bg-[#121A2C] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#859787] hover:border-[#859787] shadow-sm transition-all hover:scale-110 text-xs"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
