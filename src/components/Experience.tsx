"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import {
  Briefcase,
  Calendar,
  Building2,
  Terminal,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-purple uppercase tracking-wider mb-4">
            <Terminal size={13} />
            <span>02. Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            From data extraction pipelines and team leadership to production AI systems and LLM research.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan/40" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-9 h-9 rounded-full bg-dark-900 border-2 border-neon-blue shadow-[0_0_15px_rgba(0,212,255,0.5)] flex items-center justify-center text-neon-blue">
                      <Briefcase size={16} />
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    } w-[calc(100%-3rem)]`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-card p-6 rounded-2xl border border-white/5 bg-dark-800/80 hover:border-neon-blue/40 transition-all duration-300 relative group shadow-lg"
                    >
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                          <Building2 size={12} />
                          {item.company}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-gray-400">
                          <Calendar size={12} />
                          {item.duration}
                        </span>
                      </div>

                      {/* Role title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neon-blue transition-colors mb-2">
                        {item.role}
                      </h3>

                      {/* Tag for employment type & Key Metric */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                          {item.type}
                        </span>
                        {item.keyMetric && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            <Zap size={11} className="text-emerald-400" />
                            <span>{item.keyMetric}</span>
                          </span>
                        )}
                      </div>

                      {/* Description list */}
                      <ul className="space-y-2.5 mb-4">
                        {item.description.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-neon-cyan shrink-0 mt-0.5"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack pills */}
                      {item.techStack && item.techStack.length > 0 && (
                        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-700/80 text-gray-300 border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

