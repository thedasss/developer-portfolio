import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const iconDimensions = {
    sm: { w: 32, h: 32 },
    md: { w: 40, h: 40 },
    lg: { w: 48, h: 48 },
  }[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Custom Vector Emblem */}
      <div className="relative shrink-0">
        {/* Ambient Neon Glow */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] opacity-40 blur-md group-hover:opacity-80 transition duration-300" />

        <svg
          width={iconDimensions.w}
          height={iconDimensions.h}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative rounded-xl border border-white/15 bg-[#0a0a10] p-1.5 shadow-xl transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background subtle hexagon/circuit grid */}
          <polygon
            points="50,8 90,30 90,70 50,92 10,70 10,30"
            stroke="url(#logoGrad)"
            strokeWidth="3.5"
            fill="none"
            opacity="0.9"
          />

          {/* Left code bracket < */}
          <path
            d="M 32 38 L 22 50 L 32 62"
            stroke="#00d4ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right code bracket > */}
          <path
            d="M 68 38 L 78 50 L 68 62"
            stroke="#ec4899"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center pulse point */}
          <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-blue transition-all">
              Thedas
            </span>
            <span className="text-base sm:text-lg font-light tracking-tight text-gray-300">
              Silva
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neon-blue uppercase mt-1">
            FORWARD DEPLOYED ENG
          </span>
        </div>
      )}
    </div>
  );
}

