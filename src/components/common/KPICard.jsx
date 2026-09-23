import React from 'react';

export default function KPICard({ title, value, subtitle, trend, icon: Icon, color = "#5E6BFF" }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-4 transition-all duration-300 hover:border-[#5E6BFF]/40 hover:bg-[#151617]/80 hover:shadow-[0_8px_30px_rgba(94,107,255,0.12)] hover:-translate-y-0.5 inner-glow-top">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#8f8fa1] font-medium uppercase tracking-wider mono-data">{title}</span>
        {Icon && (
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg border backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
            style={{
              borderColor: `${color}35`,
              backgroundColor: `${color}15`,
              color: color,
              boxShadow: `0 0 12px ${color}20`
            }}
          >
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="font-heading text-2xl font-bold text-[#e5e2e3] mono-data tracking-tight drop-shadow-sm">
          {value}
        </span>
        {trend && (
          <span
            className={`text-[10px] font-semibold mono-data rounded-full px-2 py-0.5 border backdrop-blur-md ${
              trend.startsWith('+') || trend.includes('Best') || trend.includes('Clean')
                ? 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/30 shadow-[0_0_10px_rgba(74,222,128,0.15)]'
                : 'bg-[#50d8e9]/10 text-[#50d8e9] border-[#50d8e9]/30 shadow-[0_0_10px_rgba(80,216,233,0.15)]'
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-1.5 text-[11px] text-[#8f8fa1] line-clamp-1">{subtitle}</p>
      )}
    </div>
  );
}
