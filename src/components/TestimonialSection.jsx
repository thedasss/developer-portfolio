import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIAL } from '../data/portfolioData';

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid matching Ethan Cole reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Sage Green Testimonial Card (matching Ethan Cole reference card) */}
          <div className="lg:col-span-8 bg-[#859787] text-white rounded-3xl p-8 sm:p-12 relative flex flex-col justify-between shadow-md">
            
            {/* Quote Icon */}
            <div className="opacity-40 text-4xl font-serif font-bold mb-4 select-none">
              “
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl font-normal leading-relaxed text-white max-w-2xl">
              "{TESTIMONIAL.quote}"
            </p>

            {/* Author row & pagination dots */}
            <div className="pt-8 mt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/25 border border-white/40 flex items-center justify-center font-bold text-xs text-white">
                  IL
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                    {TESTIMONIAL.author}
                  </h4>
                  <p className="text-[11px] text-white/80">
                    {TESTIMONIAL.role}
                  </p>
                </div>
              </div>

              {/* 3 Pagination Dots from reference */}
              <div className="flex items-center gap-1.5 self-center sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>

          </div>

          {/* White Card with Circular Satisfaction Gauge (matching reference) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
            
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 dark:text-slate-500 mb-6">
              CLIENT SATISFACTION
            </span>

            {/* Circular Gauge */}
            <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {/* Background Track */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-slate-200 dark:text-slate-800"
                />
                {/* Progress Ring: 98% filled */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#859787"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="314.16"
                  strokeDashoffset="6.28"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                  98%
                </span>
              </div>
            </div>

            <p className="text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-500 dark:text-slate-400">
              BASED ON 20+ PRODUCTION PIPELINES
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
