import React, { useState } from 'react';
import { Search, Bell, Menu, ShieldCheck, AlertTriangle, Moon, Sun } from 'lucide-react';

export default function Header({ activeTab, _setActiveTab, mobileMenuOpen, setMobileMenuOpen, isDarkMode, setIsDarkMode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF]/90 dark:bg-[#070708]/75 px-4 md:px-6 backdrop-blur-xl transition-all">
      {/* Left section: Mobile menu & Section title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-[#c6c5d8] hover:bg-slate-200 dark:bg-white/[0.08] hover:text-slate-900 dark:text-[#e5e2e3] transition-colors md:hidden backdrop-blur-md"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-[#8f8fa1] mono-data">
          <span>FRAUD.AI PLATFORM</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-[#e5e2e3] font-semibold uppercase tracking-wider">{activeTab.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Center section: Global Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 dark:text-[#8f8fa1]" />
          <input
            type="text"
            placeholder="Search claim #, driver age, model metrics, datasets, or fraud rules..."
            className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] backdrop-blur-md py-1.5 pl-9 pr-4 text-xs text-slate-900 dark:text-[#e5e2e3] placeholder-[#8f8fa1] focus:border-[#5E6BFF] focus:bg-slate-200 dark:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#5E6BFF]/40 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Right section: Model Status, Notifications, Avatar */}
      <div className="flex items-center gap-3">
        {/* Model Online Badge */}
        <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] backdrop-blur-md px-3.5 py-1 text-xs shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
          </span>
          <span className="font-medium text-slate-900 dark:text-[#e5e2e3] hidden lg:inline">Fraud Model Active</span>
          <span className="text-[10px] text-slate-500 dark:text-[#8f8fa1] mono-data hidden xl:inline">v2.1.0</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-[#c6c5d8] hover:bg-slate-200 dark:bg-white/[0.08] hover:text-slate-900 dark:text-[#e5e2e3] transition-colors"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] backdrop-blur-md text-slate-700 dark:text-[#c6c5d8] hover:bg-slate-200 dark:bg-white/[0.08] hover:text-slate-900 dark:text-[#e5e2e3] transition-colors"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#5E6BFF] animate-pulse"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-300 dark:border-white/15 bg-white/95 dark:bg-[#101112]/95 backdrop-blur-2xl p-4 shadow-2xl z-50">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2 mb-3">
                <span className="text-xs font-semibold text-slate-900 dark:text-[#e5e2e3]">Audit Alerts</span>
                <span className="text-[10px] text-[#5E6BFF] mono-data font-semibold">2 New</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="rounded-lg p-2.5 bg-slate-100 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-[#4ADE80]/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#4ADE80] font-medium">
                    <ShieldCheck className="h-3.5 w-3.5" /> Random Forest Model Validated
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-[#c6c5d8] mt-1">
                    Achieved 94.2% accuracy & 0.958 ROC-AUC on 12,000 claim records dataset.
                  </p>
                  <span className="text-[9px] text-slate-500 dark:text-[#8f8fa1] mono-data mt-1 block">5 mins ago</span>
                </div>
                <div className="rounded-lg p-2.5 bg-slate-100 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-[#F87171]/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-[#F87171] font-medium">
                    <AlertTriangle className="h-3.5 w-3.5" /> High Form Defects Flagged
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-[#c6c5d8] mt-1">
                    Claim #2343168 escalated to Special Investigation Unit (SIU).
                  </p>
                  <span className="text-[9px] text-slate-500 dark:text-[#8f8fa1] mono-data mt-1 block">42 mins ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <div className="flex items-center gap-2.5 border-l border-slate-200 dark:border-white/10 pl-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#5E6BFF]/50 bg-[#5E6BFF]/20 text-[#5E6BFF] font-semibold text-xs shadow-[0_0_12px_rgba(94,107,255,0.25)]">
            SIU
          </div>
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-900 dark:text-[#e5e2e3] leading-tight">Fraud Assessor</span>
            <span className="text-[10px] text-slate-500 dark:text-[#8f8fa1] mono-data">Claims Audit Portal</span>
          </div>
        </div>
      </div>
    </header>
  );
}
