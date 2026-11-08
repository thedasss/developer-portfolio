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
  Download,
  Calendar,
  Mail,
  ArrowRight,
  Globe,
  Zap,
  Target,
  ShieldCheck,
  ChevronRight,
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
      description: "Engineering & scraping team",
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
    "Vector Databases (Qdrant/Chroma)",
    "Data Pipelines & ETL",
    "Cloud & DevOps (AWS/Azure)",
  ];

  const pillars = [
    {
      icon: Zap,
      title: "Production-First AI Architecture",
      subtitle: "Moving beyond notebook prototypes",
      description:
        "AI models in isolated Jupyter notebooks don't deliver enterprise value. I engineer resilient async FastAPI microservices, vector search indexing with Qdrant and ChromaDB, and asynchronous Redis queues to ensure sub-millisecond API responses under heavy production loads.",
      gradient: "from-cyan-500/10 to-blue-500/10",
      accent: "text-neon-blue",
    },
    {
      icon: ShieldCheck,
      title: "Rapid Deployment & UAT Synergy",
      subtitle: "Bridging client needs and live code",
      description:
        "Forward Deployed Engineering is about closing the feedback loop between client stakeholders and backend code. I embed directly with customer workflows to conduct User Acceptance Testing (UAT), diagnose live edge cases, and deploy stable solutions directly into production.",
      gradient: "from-purple-500/10 to-pink-500/10",
      accent: "text-neon-purple",
    },
    {
      icon: Target,
      title: "Metric-Driven Accuracy Rigor",
      subtitle: "Measurable outcomes that scale",
      description:
        "Every deployment is measured by quantifiable benchmarks. Whether elevating PDF article extraction accuracy from 40% to 90%+ through prompt optimization or building fault-tolerant data pipelines with automated health checks, reliability is non-negotiable.",
      gradient: "from-emerald-500/10 to-cyan-500/10",
      accent: "text-emerald-400",
    },
  ];

  const footprint = [
    {
      flag: "🇱🇰",
      region: "Sri Lanka (HQ & Base)",
      type: "Primary Engineering Hub",
      role: "Forward Deployed Engineer @ Innodata Lanka",
      description:
        "Driving R&D on LLM and RAG systems, architecting internal tooling, and deploying intelligent data-processing pipelines for global enterprise operations.",
    },
    {
      flag: "🌍",
      region: "Global Remote Engagements",
      type: "Cross-Border Delivery",
      role: "Freelance Technical Lead",
      description:
        "Led a 5-member engineering team delivering custom web scraping frameworks, data pipelines, and automation tools across international client deadlines.",
    },
    {
      flag: "✈️",
      region: "Global Mobility & Relocation",
      type: "Worldwide Availability",
      role: "On-Site & Hybrid Ready",
      description:
        "Open to on-site, hybrid, and international Forward Deployed Engineering opportunities across APAC, Europe, North America, and the Middle East.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Executive Breadcrumb & Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Breadcrumb inspired by executive layout */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4">
            <span className="text-gray-500">Home</span>
            <ChevronRight size={12} className="text-gray-500" />
            <span className="text-neon-blue font-semibold">About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Behind The <span className="gradient-text">Strategy & Deployment</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Forward Deployed Engineering. Large Language Models & RAG Systems. Scalable Cloud & Automation Infrastructure.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* TOP ROW: EXECUTIVE BIOGRAPHY CARD (Photo + Bio Aligned) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Portrait Photo Card with Overlay Badges */}
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

              <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-dark-800 shadow-2xl flex flex-col min-h-[480px] sm:min-h-[540px]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

                  {/* Floating badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-white/10 shadow-xl">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div>
                        <div className="text-sm font-bold text-white tracking-wide">
                          {personalInfo.name}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          {personalInfo.location} • Global Mobility
                        </div>
                      </div>
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active FDE
                      </span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={13} className="text-neon-purple" />
                        Innodata Lanka
                      </span>
                      <span className="font-mono text-neon-blue">Python / AI R&D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-dark-800/80 relative flex-1 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-xs font-mono text-neon-blue uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                  <span>Professional Biography</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                  A Bridge Between <span className="gradient-text">AI Research</span> & Enterprise Execution
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {personalInfo.profile}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Beyond individual technical delivery, I have experience leading and coordinating a freelance team of five members to plan, architect, and deliver mission-critical software solutions. I thrive at the critical intersection of customer business requirements, scalable architecture, and hands-on deployment.
                </p>

                {/* Core Specializations */}
                <div className="pt-4 border-t border-white/10 mb-6">
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
              </div>

              {/* Three Executive Action Buttons (Inspired by Vishmi Perera portfolio) */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 items-center">
                <a
                  href="/Thedas_Silva_CV.pdf"
                  download="Thedas_Silva_CV.pdf"
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-dark-900 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all flex items-center gap-2 font-mono"
                >
                  <Download size={15} />
                  <span>Download Executive CV</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 font-mono"
                >
                  <Calendar size={15} className="text-neon-purple" />
                  <span>Schedule a Call</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 font-mono"
                >
                  <Mail size={15} className="text-neon-cyan" />
                  <span>Email Direct</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* STATS COUNTER ROW (Full Width) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.4)" }}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between border border-white/5 bg-dark-800/60 shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
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

        {/* ========================================================= */}
        {/* CORE PHILOSOPHY: THREE FOUNDATIONAL PILLARS (Vishmi-style) */}
        {/* ========================================================= */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-xs font-mono text-neon-purple uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              <span>Core Philosophy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              How I Approach <span className="gradient-text">Forward Deployed Engineering</span>
            </h3>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-xs sm:text-sm">
              Three foundational pillars that guide my work deploying AI systems into client environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`glass-card p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden flex flex-col justify-between group shadow-xl`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={24} className={pillar.accent} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {pillar.title}
                    </h4>
                    <p className={`text-xs font-mono mb-4 ${pillar.accent}`}>
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERNATIONAL FOOTPRINT & MOBILITY (Vishmi-style) */}
        {/* ========================================================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <Globe size={13} />
              <span>Global Mobility & Reach</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              International <span className="gradient-text">Delivery Footprint</span>
            </h3>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-xs sm:text-sm">
              Proven ability to adapt quickly, navigate diverse client requirements, and deploy seamlessly across time zones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footprint.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 bg-dark-800/80 shadow-lg relative group"
              >
                <div className="text-3xl mb-3">{item.flag}</div>
                <h4 className="text-base font-bold text-white mb-1">
                  {item.region}
                </h4>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neon-blue border border-white/10 mb-2">
                  {item.type}
                </div>
                <p className="text-xs font-semibold text-gray-300 mb-2">
                  {item.role}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
