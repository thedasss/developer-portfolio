"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Mail, Download, ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const FloatingOrb = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      x: [0, 30, -20, 10, 0],
      y: [0, -25, 15, -10, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
  />
);

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
      color: "hover:text-white hover:shadow-white/25",
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:shadow-blue-400/25",
    },
    {
      icon: Instagram,
      href: personalInfo.instagram,
      label: "Instagram",
      color: "hover:text-pink-400 hover:shadow-pink-400/25",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-neon-blue hover:shadow-neon-blue/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Animated Background Orbs */}
      <FloatingOrb
        className="w-[500px] h-[500px] bg-neon-blue top-1/4 -left-20"
        delay={0}
      />
      <FloatingOrb
        className="w-[400px] h-[400px] bg-neon-purple bottom-1/4 right-0"
        delay={5}
      />
      <FloatingOrb
        className="w-[350px] h-[350px] bg-neon-green top-10 right-1/3"
        delay={10}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12"
      >
        {/* Profile Avatar */}
        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-6"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full p-1 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-cyan shadow-[0_0_35px_rgba(0,212,255,0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-dark-900 bg-dark-800">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={144}
                height={144}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Status pill badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/95 border border-emerald-500/40 text-[11px] font-mono text-emerald-400 backdrop-blur-md shadow-xl whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Forward Deployed Engineer</span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-neon-blue font-mono text-sm sm:text-base mb-4 tracking-wider"
        >
          &lt;Hello, I&apos;m /&gt;
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent bg-300% animate-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Type Animation */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 h-10 flex items-center justify-center"
        >
          <span className="text-gray-500 mr-2">I&apos;m a</span>
          <TypeAnimation
            sequence={[
              "Forward Deployed Engineer (FDE)",
              2500,
              "AI & LLM Solutions Engineer",
              2000,
              "Software Engineer",
              2000,
              "Production Systems Architect",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-semibold"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* View My Work Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative group px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-300% animate-gradient overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">View My Work</span>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
          </motion.button>

          {/* Download CV Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Thedas_Silva_CV.pdf"
            download
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-neon-blue/50 hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={18} />
              Download CV
            </span>
            {/* Hover fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:shadow-lg ${social.color}`}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => {
            const el = document.getElementById("about");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors duration-300"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
