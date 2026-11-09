import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121A2C] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#5A6B5C] dark:text-[#B6CBB9] bg-[#E8EFEA] dark:bg-[#859787]/20 px-2.5 py-1 rounded-full border border-[#D3E0D6] dark:border-[#859787]/40">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.year}
            </span>
            <span className="text-xs font-bold text-[#6E8170] font-mono ml-auto mr-10">
              {project.metric}
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#859787]" />
            <span>Architecture & Engineering Highlights</span>
          </h4>

          <ul className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6E8170] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System Flow Diagram */}
        {project.architecture && (
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#859787]" />
              <span>Production Pipeline Architecture</span>
            </h4>
            
            <div className="bg-[#0B101C] text-slate-200 rounded-2xl p-4 font-mono text-xs overflow-x-auto border border-slate-800">
              <pre className="leading-relaxed">{project.architecture}</pre>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
            Technologies Deployed
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
