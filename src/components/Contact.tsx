"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ExternalLink,
  Loader2,
  Instagram,
  Briefcase,
  Brain,
  Cpu,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const inquiryTopics = [
  { label: "Full-Time FDE Role", icon: Briefcase },
  { label: "Enterprise AI & RAG", icon: Brain },
  { label: "Backend & Pipelines", icon: Cpu },
  { label: "Team Leadership", icon: Users },
  { label: "General Inquiry", icon: MessageSquare },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/thedas-silva",
    href: personalInfo.linkedin,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: personalInfo.linkedin,
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: personalInfo.instagram,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${personalInfo.email}`,
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: open mailto
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || "Portfolio Contact Message"
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.open(mailtoLink, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/25 transition-all duration-300 text-sm";

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s build something amazing together.
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Contact Info Side */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                if (info.href) {
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-4 py-3.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] cursor-pointer"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#a855f7]/10 border border-white/[0.08] group-hover:border-[#00d4ff]/30 transition-colors duration-300">
                        <IconComponent className="w-4.5 h-4.5 text-[#00d4ff]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                          {info.value}
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 ml-auto flex-shrink-0 transition-colors" />
                    </a>
                  );
                }

                return (
                  <div
                    key={info.label}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-4 py-3.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff]/15 to-[#a855f7]/10 border border-white/[0.08] group-hover:border-[#00d4ff]/30 transition-colors duration-300">
                      <IconComponent className="w-4.5 h-4.5 text-[#00d4ff]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Follow me
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-400 hover:text-white hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 transition-all duration-300"
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Interactive Inquiry Pills */}
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2.5">
                  What would you like to discuss?
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTopics.map((topic) => {
                    const Icon = topic.icon;
                    const isSelected = formState.subject === topic.label;
                    return (
                      <button
                        type="button"
                        key={topic.label}
                        onClick={() =>
                          setFormState((prev) => ({
                            ...prev,
                            subject: isSelected ? "" : topic.label,
                          }))
                        }
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white border border-neon-blue/60 shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                            : "bg-white/[0.03] text-gray-400 hover:text-gray-200 border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]"
                        }`}
                      >
                        <Icon
                          size={13}
                          className={isSelected ? "text-neon-blue" : "text-gray-500"}
                        />
                        <span>{topic.label}</span>
                        {isSelected && (
                          <CheckCircle2 size={12} className="text-neon-cyan ml-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Custom Subject Note */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5"
                >
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Forward Deployed Engineer Opportunity / Project Inquiry"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#22d3ee] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <Send className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-emerald-400"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
