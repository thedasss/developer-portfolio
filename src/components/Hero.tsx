"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  ChevronDown,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  Activity,
  Server,
  Database,
  ArrowRight,
  Layers,
  Code2,
  Play,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const FloatingOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-25 ${className}`}
    animate={{
      x: [0, 40, -30, 20, 0],
      y: [0, -30, 20, -15, 0],
      scale: [1, 1.15, 0.9, 1.05, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
  />
);

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "metrics" | "console">("pipeline");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "[08:41:02] INITIALIZING fde-core-pipeline v2.4...",
    "[08:41:03] CONNECTED to Qdrant Vector Cluster (154,200 points)",
    "[08:41:03] LOADED model: all-MiniLM-L6-v2 embeddings",
    "[08:41:04] FASTAPI async workers spawned (4 workers, uvloop)",
    "[08:41:05] UAT HEALTHCHECK: 200 OK (latency: 0.82ms)",
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const liveEvents = [
        `[${new Date().toLocaleTimeString()}] INGESTION: Processed 42 conference PDFs (accuracy: 94.6%)`,
        `[${new Date().toLocaleTimeString()}] RAG QUERY: Hybrid search query executed in 1.12ms`,
        `[${new Date().toLocaleTimeString()}] CACHE HIT: Redis semantic cache served 200 OK`,
        `[${new Date().toLocaleTimeString()}] SYSTEM HEALTH: CPU 14% | MEM 1.8GB | 0 error count`,
      ];
      const randomEvent = liveEvents[Math.floor(Math.random() * liveEvents.length)];
      setConsoleLogs((prev) => [...prev.slice(-4), randomEvent]);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: personalInfo.instagram,
      label: "Instagram",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070c] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Dynamic Background Atmosphere */}
      <FloatingOrb
        className="w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 top-1/4 -left-32"
        delay={0}
      />
      <FloatingOrb
        className="w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/20 to-pink-600/20 bottom-10 right-[-10%]"
        delay={4}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 top-12 right-1/4"
        delay={8}
      />

      {/* Cyberpunk Grid with Radial Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07070c_80%)] pointer-events-none" />

      {/* Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HIGH-IMPACT COMMAND & EDITORIAL CONTENT     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Live Operational Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wide text-gray-200">
                FORWARD DEPLOYED ENGINEER • <span className="text-neon-blue">INNODATA LANKA</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-sm font-mono text-neon-blue flex items-center gap-2 tracking-wider">
                <Terminal size={14} />
                <span>$ whoami</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,212,255,0.3)]">
                  Thedas Silva
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Interactive Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-gray-300 min-h-[44px]"
            >
              <span className="text-gray-500 select-none">&gt;</span>
              <TypeAnimation
                sequence={[
                  "Forward Deployed Engineer (FDE)",
                  2400,
                  "Enterprise LLM & RAG Architect",
                  2200,
                  "FastAPI & Async Systems Specialist",
                  2200,
                  "Autonomous Agent Pipeline Builder",
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-semibold"
              />
            </motion.div>

            {/* Core Mission Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light"
            >
              Deploying production AI systems, LLM architectures, and scalable data pipelines directly into enterprise client workflows. Turning complex research into dependable, high-throughput software.
            </motion.p>

            {/* Quick Impact Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-mono text-neon-blue">
                  90%+
                </div>
                <div className="text-[11px] text-gray-400 font-medium">
                  AI Extraction Accuracy
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-mono text-neon-purple">
                  &lt;1ms
                </div>
                <div className="text-[11px] text-gray-400 font-medium">
                  Async Backend Latency
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-mono text-neon-cyan">
                  5+
                </div>
                <div className="text-[11px] text-gray-400 font-medium">
                  Engineers Guided
                </div>
              </div>
            </motion.div>

            {/* CTAs and Direct Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Primary Work Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative group px-7 py-3.5 rounded-xl font-semibold text-sm text-dark-900 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 font-mono flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Featured Work</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Download CV */}
              <a
                href="/Thedas_Silva_CV.pdf"
                download="Thedas_Silva_CV.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 border border-white/10 bg-white/[0.03] hover:border-neon-blue/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300 font-mono flex items-center gap-2"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              {/* Social Channels Row */}
              <div className="flex items-center gap-2 pl-2">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/40 hover:bg-neon-blue/10 transition-all duration-300"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE LIVE FDE CONSOLE & TELEMETRY   */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Neon Backlight Halo */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan opacity-30 blur-2xl pointer-events-none" />

            {/* Floating Tech Chips around Terminal */}
            <div className="hidden xl:flex items-center gap-2 absolute -top-5 -right-3 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-neon-blue/40 shadow-xl backdrop-blur-md text-[11px] font-mono text-neon-blue animate-float">
              <Database size={13} />
              <span>Qdrant Vector DB • 154K</span>
            </div>

            <div className="hidden xl:flex items-center gap-2 absolute -bottom-4 -left-4 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md text-[11px] font-mono text-emerald-400 animate-float" style={{ animationDelay: "2s" }}>
              <Activity size={13} />
              <span>FastAPI Sub-ms Engine</span>
            </div>

            {/* Terminal Window Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0c14]/95 backdrop-blur-xl shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-gray-400">
                    fde-node-01:~ / production-rag
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400">LIVE</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex items-center border-b border-white/[0.06] bg-black/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors border-r border-white/[0.06] ${
                    activeTab === "pipeline"
                      ? "text-neon-blue bg-white/[0.04] border-b-2 border-b-neon-blue"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Code2 size={13} />
                  <span>pipeline.py</span>
                </button>

                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors border-r border-white/[0.06] ${
                    activeTab === "metrics"
                      ? "text-neon-purple bg-white/[0.04] border-b-2 border-b-neon-purple"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Server size={13} />
                  <span>telemetry.json</span>
                </button>

                <button
                  onClick={() => setActiveTab("console")}
                  className={`flex items-center gap-1.5 px-4 py-2.5 transition-colors ${
                    activeTab === "console"
                      ? "text-emerald-400 bg-white/[0.04] border-b-2 border-b-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Terminal size={13} />
                  <span>logs.sh</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-5 font-mono text-xs text-gray-300 min-h-[300px] flex flex-col justify-between">
                
                {activeTab === "pipeline" && (
                  <div className="space-y-2 leading-relaxed">
                    <p className="text-gray-500"># Production-grade RAG deployment pipeline</p>
                    <p>
                      <span className="text-neon-purple font-semibold">from</span>{" "}
                      <span className="text-white">fastapi</span>{" "}
                      <span className="text-neon-purple font-semibold">import</span>{" "}
                      <span className="text-neon-blue">FastAPI, BackgroundTasks</span>
                    </p>
                    <p>
                      <span className="text-neon-purple font-semibold">from</span>{" "}
                      <span className="text-white">qdrant_client</span>{" "}
                      <span className="text-neon-purple font-semibold">import</span>{" "}
                      <span className="text-neon-blue">QdrantClient</span>
                    </p>
                    <p>
                      <span className="text-neon-purple font-semibold">from</span>{" "}
                      <span className="text-white">langchain.embeddings</span>{" "}
                      <span className="text-neon-purple font-semibold">import</span>{" "}
                      <span className="text-neon-blue">HuggingFaceEmbeddings</span>
                    </p>
                    <br />
                    <p className="text-neon-green">
                      @app.post(<span className="text-amber-300">&quot;/api/v1/fde/inference&quot;</span>)
                    </p>
                    <p>
                      <span className="text-neon-purple font-semibold">async def</span>{" "}
                      <span className="text-neon-blue font-semibold">deploy_inference_query</span>
                      (payload: <span className="text-amber-300">EnterprisePayload</span>):
                    </p>
                    <p className="pl-4 text-gray-300">
                      embeddings = <span className="text-neon-purple">await</span> vector_encoder.embed(payload.query)
                    </p>
                    <p className="pl-4 text-gray-300">
                      context = <span className="text-neon-purple">await</span> qdrant.search_async(embeddings, limit=<span className="text-amber-300">5</span>)
                    </p>
                    <p className="pl-4 text-emerald-400">
                      <span className="text-neon-purple font-semibold">return</span> {`{`}&quot;status&quot;: &quot;DEPLOYED&quot;, &quot;latency_ms&quot;: 0.82{`}`}
                    </p>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-gray-400">System Environment:</span>
                      <span className="text-neon-blue font-bold">AWS ECS + Docker (Linux)</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-gray-400">Vector Search Engine:</span>
                      <span className="text-neon-purple font-bold">Qdrant & ChromaDB (HNSW)</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-gray-400">Inference Queue:</span>
                      <span className="text-neon-cyan font-bold">Redis Async Task Manager</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-gray-400">Extraction Benchmark:</span>
                      <span className="text-emerald-400 font-bold">90%+ Verified UAT</span>
                    </div>
                  </div>
                )}

                {activeTab === "console" && (
                  <div className="space-y-2 text-[11px] leading-relaxed">
                    {consoleLogs.map((log, index) => (
                      <p
                        key={index}
                        className={
                          index === consoleLogs.length - 1
                            ? "text-emerald-400 font-semibold"
                            : "text-gray-400"
                        }
                      >
                        {log}
                      </p>
                    ))}
                  </div>
                )}

                {/* Terminal Status Bar at Bottom */}
                <div className="pt-3 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <Cpu size={12} className="text-neon-blue" />
                    <span>Python 3.11 • FastAPI • LLM/RAG</span>
                  </span>
                  <span className="text-emerald-400 font-mono">0 ERRORS • READY</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-neon-blue transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
