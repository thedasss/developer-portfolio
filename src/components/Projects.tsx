"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Terminal,
  Layers,
  Sparkles,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "automation">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-blue uppercase tracking-wider mb-4">
            <Terminal size={13} />
            <span>03. Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Architected and engineered for performance, reliability, and real-world intelligence.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {(
            [
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & RAG" },
              { id: "fullstack", label: "Full-Stack & Cloud" },
              { id: "automation", label: "DevOps & Automation" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl border border-white/10 bg-dark-800/80 p-6 flex flex-col justify-between group hover:border-neon-blue/50 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                {/* Top glow hover effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar with folder & year badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                      <FolderGit2 size={20} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {project.year}
                      </span>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-neon-blue transition-colors p-1"
                          aria-label={`GitHub Repository for ${project.title}`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-neon-blue transition-colors p-1"
                          aria-label={`Live Demo for ${project.title}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neon-cyan mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-gray-300"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-neon-purple shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags at bottom */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-700/90 text-gray-300 border border-white/5 group-hover:border-neon-blue/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

