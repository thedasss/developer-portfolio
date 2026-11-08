"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Brain,
  GitBranch,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGlow: "hover:shadow-blue-500/20",
    skills: ["Python", "SQL", "Bash", "JavaScript", "Java", "PHP", "Dart", "C++", "C"],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderGlow: "hover:shadow-purple-500/20",
    skills: ["FastAPI", "Laravel", "Node.js", "React", "Redux", "Flutter", "Docker"],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderGlow: "hover:shadow-emerald-500/20",
    skills: ["MySQL", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    gradient: "from-sky-500/10 to-blue-500/10",
    borderGlow: "hover:shadow-sky-500/20",
    skills: ["AWS", "Azure"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    borderGlow: "hover:shadow-violet-500/20",
    skills: [
      "LLMs",
      "RAG",
      "Generative AI",
      "LangChain",
      "HuggingFace",
      "Google Vertex AI",
      "Ollama",
      "ChromaDB",
      "Qdrant",
      "Scikit-Learn",
      "TensorFlow",
      "OpenCV",
    ],
  },
  {
    title: "DevOps & Automation",
    icon: GitBranch,
    gradient: "from-orange-500/10 to-amber-500/10",
    borderGlow: "hover:shadow-orange-500/20",
    skills: ["Docker", "CI/CD", "Git", "Linux", "n8n"],
  },
  {
    title: "Web Scraping",
    icon: Globe,
    gradient: "from-cyan-500/10 to-teal-500/10",
    borderGlow: "hover:shadow-cyan-500/20",
    skills: ["Selenium", "Playwright", "BeautifulSoup", "Requests", "Cloudscraper"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br ${category.gradient} backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg ${category.borderGlow} hover:-translate-y-1`}
              >
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] group-hover:border-[#00d4ff]/30 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        variants={pillVariants}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: "0 0 16px rgba(0, 212, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-300 cursor-default transition-all duration-200 hover:text-white hover:bg-white/[0.1] hover:border-[#00d4ff]/40"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
