"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  Brain,
  Code2,
  Cpu,
  Users,
  MapPin,
  Sparkles,
  Award,
  Terminal,
  CheckCircle2,
  Building2,
  Briefcase,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      description: "Production software & AI systems",
      icon: Code2,
    },
    {
      label: "Team Members Led",
      value: "5",
      description: "Web scraping freelance team",
      icon: Users,
    },
    {
      label: "AI Accuracy",
      value: "90%+",
      description: "Extraction pipeline optimization",
      icon: Brain,
    },
    {
      label: "Education",
      value: "SLIIT",
      description: "BSc (Hons) Information Tech",
      icon: Award,
    },
  ];

  const focusAreas = [
    "Forward Deployed Engineering",
    "LLM & RAG Architectures",
    "FastAPI & Async Backends",
    "Production Rollouts & UAT",
    "Data Pipelines & ETL",
    "Cloud & DevOps (AWS/Azure)",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-blue uppercase tracking-wider mb-4">
            <Terminal size={13} />
            <span>01. Biography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Top Grid: Photo Card (Left) & Bio Card (Right) - Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative group h-full flex flex-col">
              {/* Glowing gradient backshadow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />

              <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-dark-800 shadow-2xl flex flex-col min-h-[460px] sm:min-h-[520px]">
                {/* Photo with optimized framing */}
                <div className="relative w-full h-full flex-1">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Bottom dark gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />

                  {/* Floating badges on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <Briefcase size={14} className="text-neon-blue" />
                        Forward Deployed Engineer
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5">
                      <Building2 size={13} className="text-neon-purple" />
                      Innodata Lanka • Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Card (Equal Height) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-dark-800/80 relative flex-1 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-3 text-neon-blue font-mono text-xs sm:text-sm mb-4">
                  <Sparkles size={16} />
                  <span>Forward Deployed & Production AI Engineering</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                  Deploying enterprise AI models directly into high-stakes customer workflows.
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {personalInfo.profile}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Beyond core development, I have experience leading and coordinating a
                  freelance team of five members to plan, manage, and deliver software projects.
                  I thrive at the intersection of client requirements, technical architecture, and
                  rapid production execution.
                </p>
              </div>

              <div>
                {/* Core Specializations Tabs */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-3">
                    Core Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700/90 border border-white/5 text-xs text-gray-200 hover:border-neon-blue/40 hover:text-white transition-all shadow-sm"
                      >
                        <CheckCircle2 size={13} className="text-neon-blue shrink-0" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location pill */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
                  <MapPin size={14} className="text-neon-pink shrink-0" />
                  <span>Based in {personalInfo.location} • Open to Global & Remote Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 4 Stats Cards Spanning Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.4)" }}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-white/5 bg-dark-800/60 shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1 leading-tight">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Engineering Philosophy Card Spanning Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 glass-card p-5 sm:p-6 rounded-2xl border border-neon-purple/20 bg-gradient-to-br from-neon-purple/5 to-transparent shadow-lg"
        >
          <div className="flex items-center gap-2 text-neon-purple text-xs font-mono uppercase tracking-wider mb-2">
            <Cpu size={14} />
            <span>Engineering Philosophy</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 italic">
            &ldquo;Taking an idea from whiteboard prototype to a scalable system that
            consistently delivers value in high-traffic production environments.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
