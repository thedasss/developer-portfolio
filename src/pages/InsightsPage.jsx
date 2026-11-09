import React, { useState } from 'react';
import { Clock, ArrowRight, X, Share2, Check } from 'lucide-react';
import { INSIGHTS } from '../data/portfolioData';

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
            ENGINEERING INSIGHTS & R&D
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
            Technical Write-Ups & Research
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Practical learnings, architectural patterns, and performance optimizations discovered while engineering production LLM systems and automation pipelines.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {INSIGHTS.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-[#859787] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight group-hover:text-[#6E8170] transition-colors">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6E8170] hover:underline"
                >
                  <span>READ ESSAY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setSelectedArticle(null)} />

          <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white dark:bg-[#111726] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-5">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 hover:text-slate-900"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-400">
                <span className="text-[#859787] font-bold uppercase">{selectedArticle.category}</span>
                <span> • {selectedArticle.readTime} • {selectedArticle.date}</span>
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line border-t border-slate-100 dark:border-white/5 pt-4">
              {selectedArticle.content}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#6E8170]"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Insight'}</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-full text-xs font-bold bg-[#859787] text-white hover:bg-[#748776]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
