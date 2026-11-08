"use client";

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
      label: "Undergrad",
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
          className="text-center mb-16"
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl relative group"
          >
            <div className="flex items-center gap-3 text-neon-blue font-mono text-sm mb-4">
              <Sparkles size={18} />
              <span>Engineering Intelligent Solutions</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Bridging the gap between AI research and production software.
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              {personalInfo.profile}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Beyond individual contributor development, I have experience leading and
              coordinating a freelance team of five members to plan, architect, and deliver
              complex data scraping and workflow automation projects under strict timelines.
            </p>

            {/* Quick tags */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">
                Core Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700/80 border border-white/5 text-xs text-gray-200 hover:border-neon-blue/40 transition-colors"
                  >
                    <CheckCircle2 size={12} className="text-neon-blue" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Location pill */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-400">
              <MapPin size={14} className="text-neon-pink" />
              <span>Based in {personalInfo.location} • Open to Remote & Global Roles</span>
            </div>
          </motion.div>

          {/* Right Column: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.4)" }}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-white/5 bg-dark-800/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
                    <Icon size={20} />
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

            {/* Quote / Highlight card full width */}
            <div className="col-span-2 glass-card p-5 rounded-2xl border border-neon-purple/20 bg-gradient-to-br from-neon-purple/5 to-transparent">
              <div className="flex items-center gap-2 text-neon-purple text-xs font-mono uppercase tracking-wider mb-2">
                <Cpu size={14} />
                <span>Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 italic">
                &ldquo;Taking an idea from whiteboard prototype to a scalable system that
                consistently delivers value in high-traffic production environments.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

