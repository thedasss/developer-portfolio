import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Workflow,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  SPORTS_LEADERSHIP, 
  CERTIFICATIONS 
} from '../data/portfolioData';

export default function AboutPage({ onOpenCV }) {
  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
              ABOUT THE ENGINEER
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
              Architecting Production AI & High-Throughput Backends
            </h1>

            <div className="flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 text-[10px] sm:text-[11px] font-mono font-bold text-[#5A6B5C] dark:text-[#B6CBB9] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#859787]" />
                <span>Forward Deployed Engineer • Production AI Specialist</span>
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I am an AI-focused Software Engineer and Forward Deployed Engineer at Innodata Lanka, specializing in production LLMs, RAG systems, and distributed web automation. My passion lies in taking ambitious research concepts and engineering them into robust, sub-millisecond, production-ready software directly embedded into operational enterprise workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#859787] hover:bg-[#748776] shadow-sm transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD COMPLETE CV</span>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-[#859787] transition-colors"
              >
                <span>LET'S CONNECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#111726] shadow-xl bg-slate-200">
                <img 
                  src="/images/thedas-silva.jpg" 
                  alt="Thedas Silva" 
                  className="w-full h-full object-cover object-[center_16%]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Forward Deployed Engineering Philosophy */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-white to-[#E8EFEA]/40 dark:from-[#111726] dark:to-[#859787]/10 border border-[#D3E0D6] dark:border-[#859787]/30 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/10 pb-5">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#6E8170] dark:text-[#9BB49F] block">
                ENGINEERING PHILOSOPHY & CAPABILITY
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-0.5">
                The Forward Deployed Advantage
              </h2>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 w-fit">
              Client-Facing • Production-Hardened
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-400">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#859787]/20 text-[#5A6B5C] dark:text-[#B6CBB9] flex items-center justify-center font-bold">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Embedded Client Delivery
              </h3>
              <p className="leading-relaxed">
                Embedding directly with client teams and stakeholders to transform abstract AI requirements into tangible, working software with rapid feedback loops.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#859787]/20 text-[#5A6B5C] dark:text-[#B6CBB9] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Prototype to Production
              </h3>
              <p className="leading-relaxed">
                Bridging the chasm between experimental Jupyter notebooks and sub-millisecond, multi-tenant async backends with Redis task queues and vector indexes.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#859787]/20 text-[#5A6B5C] dark:text-[#B6CBB9] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Enterprise Reliability
              </h3>
              <p className="leading-relaxed">
                Deploying with production-grade security, JWT authentication, RBAC-filtered vector retrieval, and automated fallback logic for 99.8%+ uptime.
              </p>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block mb-1">
              CAREER TRACK RECORD
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Work Experience & Milestones
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6E8170] dark:text-[#9BB49F] font-semibold mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 font-normal">{exp.location}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EBEEF2] dark:bg-[#0A0E17] text-slate-600 dark:text-slate-300 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8170] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#EBEEF2] dark:bg-white/5 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#859787]" />
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{edu.period}</span>
                    <span className="text-[#6E8170] font-bold">{edu.status}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#6E8170] dark:text-[#9BB49F] font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#859787]" />
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 space-y-1 shadow-sm"
                >
                  <span className="text-[9px] font-mono uppercase font-bold text-[#859787]">
                    {cert.category}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sports & Rugby Leadership */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block mb-1">
              ATHLETIC DISCIPLINE & LEADERSHIP
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Competitive Rugby & Team Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPORTS_LEADERSHIP.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#6E8170] font-semibold">
                    {item.organization}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 mt-3 border-t border-slate-100 dark:border-white/5 text-[9px] font-mono text-slate-400 font-bold">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
