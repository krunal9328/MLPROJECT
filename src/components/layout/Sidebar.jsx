import React from 'react';
import {
  Home,
  ShieldAlert,
  BarChart3,
  Database,
  GitMerge,
  Code2,
  Scale,
  History,
  Info,
  Sliders,
  UserCheck,
  Shield,
  X
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, isDarkMode }) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'loan-prediction', label: 'Fraud Detection', icon: ShieldAlert, badge: 'Main' },
    { id: 'prediction-result', label: 'Assessment Result', icon: UserCheck },
    { id: 'model-dashboard', label: 'Model Dashboard', icon: BarChart3 },
    { id: 'dataset-eda', label: 'Dataset & EDA', icon: Database },
    { id: 'ml-pipeline', label: 'ML Pipeline', icon: GitMerge },
    { id: 'scratch-algorithm', label: 'Scratch Algorithm', icon: Code2, badge: 'SOP' },
    { id: 'model-comparison', label: 'Model Comparison', icon: Scale },
    { id: 'prediction-history', label: 'Claim Audit History', icon: History },
    { id: 'about-project', label: 'About Project', icon: Info },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 border-r border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF]/90 dark:bg-[#070708]/85 backdrop-blur-2xl flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Top Brand Logo */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-white/10 px-5 transition-colors">
            <div className="flex items-center gap-2.5">
              {isDarkMode ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#5E6BFF]/50 bg-[#5E6BFF]/20 text-[#5E6BFF] shadow-[0_0_15px_rgba(94,107,255,0.3)]">
                  <Shield className="h-4 w-4" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5E6BFF] text-white shadow-md">
                  <ShieldAlert className="h-4 w-4" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-heading text-base font-bold tracking-tight text-slate-900 dark:text-[#e5e2e3]">
                  FRAUD<span className="text-[#5E6BFF]">.AI</span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-[#8f8fa1] mono-data uppercase tracking-wider">Insurance Audit</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-500 dark:text-[#8f8fa1] hover:text-slate-900 dark:text-[#e5e2e3] md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)]">
            <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-500 dark:text-[#8f8fa1] uppercase tracking-wider mono-data">
              Core Navigation
            </div>

            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id || (activeTab === 'fraud-prediction' && item.id === 'loan-prediction');

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#5E6BFF]/20 to-[#50d8e9]/10 text-slate-900 dark:text-[#e5e2e3] border border-[#5E6BFF]/40 shadow-[0_0_20px_rgba(94,107,255,0.15)] font-semibold'
                      : 'text-slate-700 dark:text-[#c6c5d8] hover:bg-slate-100 dark:bg-white/[0.04] hover:text-slate-900 dark:text-[#e5e2e3]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`h-4 w-4 transition-colors ${
                        isActive ? 'text-[#5E6BFF]' : 'text-slate-500 dark:text-[#8f8fa1]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-semibold mono-data backdrop-blur-md ${
                        item.badge === 'SOP'
                          ? 'bg-[#50d8e9]/15 text-[#50d8e9] border border-[#50d8e9]/30'
                          : 'bg-[#5E6BFF]/15 text-[#5E6BFF] border border-[#5E6BFF]/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Metadata */}
        <div className="border-t border-slate-200 dark:border-white/10 p-4 bg-slate-50/60 dark:bg-[#070708]/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03]">
              <Sliders className="h-4 w-4 text-slate-500 dark:text-[#8f8fa1]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-900 dark:text-[#e5e2e3] font-medium">Dataset: Insurance Fraud</span>
              <span className="text-[10px] text-slate-500 dark:text-[#8f8fa1] mono-data">12K Claims Record Sample</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
