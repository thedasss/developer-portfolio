"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06060a] border-t border-white/[0.06]">
      {/* Top gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Name & Tagline */}
          <div className="space-y-3">
            <a href="#hero" className="inline-block">
              <Logo size="sm" showText={true} />
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
              Forward Deployed Engineer (FDE) & Software Engineer bridging AI
              research and enterprise production systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#00d4ff] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
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
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Thedas Silva. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1.5">
              Built with
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
