"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Trophy,
  Award,
  Medal,
  BadgeCheck,
  Calendar,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 – 2026",
    description:
      "Specializing in Information Technology with a focus on AI/ML, software engineering, and full-stack development.",
  },
  {
    degree: "GCE Advanced Level – Commerce Stream",
    institution: "Ananda College, Colombo",
    period: "2019 – 2021",
    description:
      "Completed Advanced Level studies in the Commerce stream with a strong academic foundation.",
  },
];

const achievements = [
  {
    icon: Medal,
    title: "SLIIT Rugby Team",
    subtitle: "Member",
    year: "2023",
  },
  {
    icon: Trophy,
    title: "SLIIT Inter Faculty Sports Meet (Tag Rugby)",
    subtitle: "Captain & Man of the Match",
    year: "2023",
  },
  {
    icon: Award,
    title: "Aquinas College",
    subtitle: "English Level 3",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Ananda College Prefect Team",
    subtitle: "Member",
    year: "2020 – 2021",
  },
  {
    icon: Trophy,
    title: "Ananda College Rugby Team",
    subtitle: "Vice Captain",
    year: "2013 – 2021",
  },
];

const certifications = [
  {
    title: "Scrape the Web with Python",
    issuer: "Le Wagon",
  },
  {
    title: "AI/ML Engineer – Stage 1",
    issuer: "SLIIT",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id="achievements"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
              Education & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and notable accomplishments.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Education */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-[#00d4ff]" />
              Education
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.06] to-purple-500/[0.04] backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm text-[#00d4ff] mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <Trophy className="w-6 h-6 text-[#a855f7]" />
              Achievements
            </motion.h3>
            <div className="space-y-3">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title + achievement.year}
                    variants={itemVariants}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-md hover:shadow-purple-500/5"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#00d4ff]/10 border border-white/[0.08]">
                      <IconComponent className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm sm:text-base truncate">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {achievement.subtitle}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-xs sm:text-sm text-gray-500 font-mono">
                      {achievement.year}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <BadgeCheck className="w-6 h-6 text-[#22d3ee]" />
              Certifications
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.15)",
                  }}
                  className="group relative flex items-center gap-3 rounded-xl border border-white/[0.08] bg-gradient-to-r from-cyan-500/[0.06] to-blue-500/[0.04] backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:border-[#22d3ee]/30 cursor-default"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#22d3ee]/10">
                    <BadgeCheck className="w-4.5 h-4.5 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
