import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  BarChart,
  UserCheck,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

export default function LandingPage({ setActiveTab }) {
  return (
    <div className="space-y-12 pb-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] dark:border-white/10 bg-gradient-to-br from-[#DBEAFE] via-[#EFF6FF] to-[#F8FAFC] dark:bg-none dark:bg-[#101112]/60 backdrop-blur-2xl p-6 md:p-12 shadow-md inner-glow-top">
        {/* Ambient background glows */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#5E6BFF]/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#50d8e9]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 dark:border-[#5E6BFF]/40 dark:bg-[#5E6BFF]/15 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-[#2563EB] dark:text-[#5E6BFF] shadow-[0_0_15px_rgba(94,107,255,0.2)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Academic ML Engineering Project</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#111827] dark:text-[#e5e2e3] leading-[1.1]">
              AI-Powered Insurance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA] dark:from-[#5E6BFF] dark:via-[#50d8e9] dark:to-[#bec2ff]">
                Fraud Detection
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#475569] dark:text-[#c6c5d8] max-w-xl leading-relaxed">
              Detect fraudulent claims, audit driver profiles, analyze incident evidence, and make data-driven claim settlement decisions with Machine Learning. Engineered for auto insurance Special Investigation Units (SIU).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('fraud-prediction')}
                className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] dark:from-[#5E6BFF] dark:to-[#7A87FF] px-6 py-3 text-xs font-bold text-[#FFFFFF] dark:text-[#070708] hover:brightness-110 transition-all shadow-md dark:shadow-xl shadow-[#2563EB]/30 hover:scale-[1.02]"
              >
                <span>Evaluate Claim Fraud</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActiveTab('model-dashboard')}
                className="flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-white/[0.04] backdrop-blur-md px-6 py-3 text-xs font-bold text-[#111827] dark:text-[#e5e2e3] hover:bg-[#F8FAFC] dark:hover:bg-white/[0.08] hover:border-[#60A5FA]/50 transition-all shadow-sm"
              >
                <BarChart className="h-4 w-4 text-[#2563EB] dark:text-[#50d8e9]" />
                <span>Explore Model Metrics</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 border-t border-[#E2E8F0] dark:border-white/10 flex flex-wrap gap-6 text-xs text-[#64748B] dark:text-[#8f8fa1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] dark:text-[#4ADE80]" />
                <span>12,000 Insurance Dataset</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] dark:text-[#4ADE80]" />
                <span>Scratch Decision Tree / RF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] dark:text-[#4ADE80]" />
                <span>Real-Time Anomaly Audit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic AI Visual Diagram */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-[#E2E8F0] dark:border-white/15 bg-[#FFFFFF]/90 dark:bg-[#070708]/75 p-6 backdrop-blur-2xl shadow-lg dark:shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-white/10 pb-3 mb-4">
                <span className="text-xs font-semibold text-[#111827] dark:text-[#e5e2e3] flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#2563EB] dark:text-[#5E6BFF]" />
                  Fraud Inference Node Network
                </span>
                <span className="text-[10px] text-[#2563EB] dark:text-[#4ADE80] mono-data bg-[#EFF6FF] dark:bg-[#4ADE80]/15 border border-[#60A5FA]/30 dark:border-[#4ADE80]/30 rounded-full px-2.5 py-0.5 font-semibold shadow-sm">
                  ACTIVE
                </span>
              </div>

              {/* Node Graph Steps */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-white/[0.03] backdrop-blur-md p-3 text-xs">
                  <div className="flex items-center gap-2.5 text-[#475569] dark:text-[#c6c5d8]">
                    <Database className="h-4 w-4 text-[#3B82F6] dark:text-[#50d8e9]" />
                    <span>Insurance Claim Ingestion</span>
                  </div>
                  <span className="mono-data text-[10px] text-[#64748B] dark:text-[#8f8fa1]">28 Features Ingested</span>
                </div>

                <div className="w-0.5 h-3 bg-[#60A5FA]/40 dark:bg-[#5E6BFF]/40 mx-auto" />

                <div className="flex items-center justify-between rounded-xl border border-[#60A5FA]/40 dark:border-[#5E6BFF]/40 bg-[#EFF6FF] dark:bg-[#5E6BFF]/15 backdrop-blur-md p-3 text-xs shadow-sm dark:shadow-[0_0_15px_rgba(94,107,255,0.15)]">
                  <div className="flex items-center gap-2.5 text-[#111827] dark:text-[#e5e2e3] font-semibold">
                    <Zap className="h-4 w-4 text-[#2563EB] dark:text-[#5E6BFF] animate-pulse" />
                    <span>Random Forest Classifier</span>
                  </div>
                  <span className="mono-data text-[10px] text-[#2563EB] dark:text-[#5E6BFF] font-bold">94.2% Accuracy</span>
                </div>

                <div className="w-0.5 h-3 bg-[#60A5FA]/40 dark:bg-[#50d8e9]/40 mx-auto" />

                <div className="flex items-center justify-between rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-white/[0.03] backdrop-blur-md p-3 text-xs">
                  <div className="flex items-center gap-2.5 text-[#475569] dark:text-[#c6c5d8]">
                    <ShieldCheck className="h-4 w-4 text-[#2563EB] dark:text-[#4ADE80]" />
                    <span>SIU Anomaly Audit</span>
                  </div>
                  <span className="mono-data text-[10px] text-[#2563EB] dark:text-[#4ADE80] font-bold">0.958 ROC-AUC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STATS GRID */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-5 text-center hover:border-[#60A5FA] dark:hover:border-[#5E6BFF]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
          <span className="font-heading text-3xl font-bold text-[#2563EB] dark:text-[#5E6BFF] mono-data drop-shadow-sm">94.2%</span>
          <p className="text-xs text-[#475569] dark:text-[#8f8fa1] mt-1 font-semibold">Model Accuracy</p>
          <span className="text-[10px] text-[#64748B] dark:text-[#8f8fa1] mono-data">Random Forest Classifier</span>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-5 text-center hover:border-[#3B82F6] dark:hover:border-[#50d8e9]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
          <span className="font-heading text-3xl font-bold text-[#3B82F6] dark:text-[#50d8e9] mono-data drop-shadow-sm">12,000</span>
          <p className="text-xs text-[#475569] dark:text-[#8f8fa1] mt-1 font-semibold">Claims Dataset</p>
          <span className="text-[10px] text-[#64748B] dark:text-[#8f8fa1] mono-data">Cleaned Insurance Records</span>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-5 text-center hover:border-[#2563EB] dark:hover:border-[#ffb689]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
          <span className="font-heading text-3xl font-bold text-[#1D4ED8] dark:text-[#ffb689] mono-data drop-shadow-sm">28</span>
          <p className="text-xs text-[#475569] dark:text-[#8f8fa1] mt-1 font-semibold">Predictor Features</p>
          <span className="text-[10px] text-[#64748B] dark:text-[#8f8fa1] mono-data">Demographic, Policy, Incident</span>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-5 text-center hover:border-[#60A5FA] dark:hover:border-[#4ADE80]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
          <span className="font-heading text-3xl font-bold text-[#60A5FA] dark:text-[#4ADE80] mono-data drop-shadow-sm">&lt; 1.5ms</span>
          <p className="text-xs text-[#475569] dark:text-[#8f8fa1] mt-1 font-semibold">Real-Time Risk Scoring</p>
          <span className="text-[10px] text-[#64748B] dark:text-[#8f8fa1] mono-data">Instant Claim Audit</span>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-[#111827] dark:text-[#e5e2e3]">How It Works</h2>
          <p className="text-xs text-[#64748B] dark:text-[#8f8fa1]">
            4-step end-to-end Machine Learning pipeline for evaluating insurance fraud risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 hover:border-[#60A5FA] dark:hover:border-[#5E6BFF]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2563EB] dark:text-[#5E6BFF] mono-data">STEP 01</span>
              <UserCheck className="h-5 w-5 text-[#64748B] dark:text-[#8f8fa1]" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#111827] dark:text-[#e5e2e3]">1. Ingest Claim Data</h3>
            <p className="text-xs text-[#475569] dark:text-[#c6c5d8] leading-relaxed">
              Input driver safety rating, vehicle specs, incident location, form defect count, and financial totals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 hover:border-[#3B82F6] dark:hover:border-[#50d8e9]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#3B82F6] dark:text-[#50d8e9] mono-data">STEP 02</span>
              <Layers className="h-5 w-5 text-[#64748B] dark:text-[#8f8fa1]" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#111827] dark:text-[#e5e2e3]">2. SMOTE & Pipeline</h3>
            <p className="text-xs text-[#475569] dark:text-[#c6c5d8] leading-relaxed">
              Handle imbalanced fraud class with SMOTE oversampling, feature scaling, and categorical encoding.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 hover:border-[#2563EB] dark:hover:border-[#ffb689]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1D4ED8] dark:text-[#ffb689] mono-data">STEP 03</span>
              <Cpu className="h-5 w-5 text-[#64748B] dark:text-[#8f8fa1]" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#111827] dark:text-[#e5e2e3]">3. ML Prediction</h3>
            <p className="text-xs text-[#475569] dark:text-[#c6c5d8] leading-relaxed">
              Evaluate against trained Random Forest and custom Scratch Decision Tree models.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 hover:border-[#60A5FA] dark:hover:border-[#4ADE80]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#60A5FA] dark:text-[#4ADE80] mono-data">STEP 04</span>
              <ShieldAlert className="h-5 w-5 text-[#64748B] dark:text-[#8f8fa1]" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#111827] dark:text-[#e5e2e3]">4. Fraud Audit Report</h3>
            <p className="text-xs text-[#475569] dark:text-[#c6c5d8] leading-relaxed">
              Generate fraud probability %, anomaly flags breakdown, risk classification, and SIU recommendations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
