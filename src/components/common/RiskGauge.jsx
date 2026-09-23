import React from 'react';

export default function RiskGauge({ probability, riskLevel }) {
  // Semi-circle SVG Arc Geometry
  const radius = 78;
  const circumference = Math.PI * radius; // Approx 245.04
  const strokeDashoffset = circumference - (probability / 100) * circumference;

  let gaugeColor = "#4ADE80"; // Green
  let shadowGlow = "rgba(74, 222, 128, 0.4)";
  let badgeBg = "rgba(74, 222, 128, 0.12)";
  let badgeBorder = "rgba(74, 222, 128, 0.3)";

  if (probability >= 50) {
    gaugeColor = "#F87171"; // Red
    shadowGlow = "rgba(248, 113, 113, 0.5)";
    badgeBg = "rgba(248, 113, 113, 0.12)";
    badgeBorder = "rgba(248, 113, 113, 0.3)";
  } else if (probability >= 25) {
    gaugeColor = "#FACC15"; // Amber/Yellow
    shadowGlow = "rgba(250, 204, 21, 0.4)";
    badgeBg = "rgba(250, 204, 21, 0.12)";
    badgeBorder = "rgba(250, 204, 21, 0.3)";
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#101112]/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group w-full max-w-sm">
      {/* Background ambient radial glow matching gauge color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-20 group-hover:opacity-35"
        style={{ backgroundColor: gaugeColor }}
      />

      {/* Gauge Container */}
      <div className="relative w-64 h-36 flex flex-col items-center justify-end">
        <svg
          className="w-64 h-36 overflow-visible"
          viewBox="0 0 200 120"
        >
          <defs>
            {/* Gradient for Filled Arc */}
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gaugeColor} stopOpacity="0.85" />
              <stop offset="100%" stopColor={gaugeColor} stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Background Arc Track */}
          <path
            d="M 18 108 A 78 78 0 0 1 182 108"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Dynamic Filled Risk Arc */}
          <path
            d="M 18 108 A 78 78 0 0 1 182 108"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.5s ease',
              filter: `drop-shadow(0px 0px 14px ${shadowGlow})`
            }}
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute top-[54px] flex flex-col items-center text-center select-none">
          <span className="font-heading text-4xl font-extrabold text-[#e5e2e3] mono-data tracking-tight leading-none drop-shadow-md">
            {probability}%
          </span>
          <span className="text-[10px] text-[#8f8fa1] uppercase tracking-widest mono-data mt-2 font-medium">
            FRAUD PROBABILITY
          </span>
        </div>
      </div>

      {/* Risk Level Badge */}
      <div
        className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105"
        style={{
          borderColor: badgeBorder,
          backgroundColor: badgeBg,
          color: gaugeColor,
          boxShadow: `0 4px 20px ${shadowGlow}`
        }}
      >
        <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: gaugeColor }} />
        <span>{riskLevel}</span>
      </div>
    </div>
  );
}
