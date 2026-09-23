import React from 'react';
import {
  Cpu,
  ShieldAlert
} from 'lucide-react';

export default function AboutProjectPage() {
  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#5E6BFF] font-semibold uppercase tracking-wider mono-data">Academic Documentation</span>
          <span className="text-[#8f8fa1]">•</span>
          <span className="text-xs text-[#8f8fa1] mono-data">Insurance Fraud ML Project</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-[#e5e2e3] mt-1">About The Project</h1>
        <p className="text-xs text-[#8f8fa1] mt-1">
          Auto Insurance Fraud Detection platform engineered with supervised Machine Learning and custom algorithm implementations.
        </p>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 shadow-xl">
          <div className="flex items-center gap-2.5 text-[#5E6BFF]">
            <ShieldAlert className="h-5 w-5" />
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Project Rationale</h2>
          </div>
          <p className="text-xs text-[#c6c5d8] leading-relaxed">
            Insurance fraud costs property & casualty insurers over $40 Billion annually in non-health insurance claims alone. This system uses machine learning classification algorithms to identify suspicious patterns in claims, driver profiles, witness reports, and paperwork defects before claim settlement.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-3 shadow-xl">
          <div className="flex items-center gap-2.5 text-[#50d8e9]">
            <Cpu className="h-5 w-5" />
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Technical Stack</h2>
          </div>
          <ul className="text-xs text-[#c6c5d8] space-y-1.5 list-disc list-inside leading-relaxed">
            <li><strong className="text-[#e5e2e3]">Frontend UI:</strong> React 19, Tailwind CSS v4, Lucide Icons, Recharts</li>
            <li><strong className="text-[#e5e2e3]">Machine Learning Models:</strong> Random Forest Classifier, Decision Tree</li>
            <li><strong className="text-[#e5e2e3]">Scratch Implementation:</strong> Decision Tree Classifier built from scratch with NumPy</li>
            <li><strong className="text-[#e5e2e3]">Dataset:</strong> 12,000 cleaned insurance claim records with 28 predictor features</li>
          </ul>
        </div>
      </div>

      {/* FEATURES & METRICS GRID */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
        <h2 className="font-heading text-base font-bold text-[#e5e2e3] border-b border-white/10 pb-3">
          Key Dataset & Model Characteristics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
            <span className="text-[10px] text-[#8f8fa1] uppercase mono-data font-semibold">Dataset Size</span>
            <div className="font-heading text-xl font-bold text-[#5E6BFF] mono-data">12,000 Claims</div>
            <p className="text-[11px] text-[#8f8fa1]">Balanced via SMOTE oversampling</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
            <span className="text-[10px] text-[#8f8fa1] uppercase mono-data font-semibold">Predictor Features</span>
            <div className="font-heading text-xl font-bold text-[#50d8e9] mono-data">28 Variables</div>
            <p className="text-[11px] text-[#8f8fa1]">Demographic, incident, policy & financial</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
            <span className="text-[10px] text-[#8f8fa1] uppercase mono-data font-semibold">Model Performance</span>
            <div className="font-heading text-xl font-bold text-[#4ADE80] mono-data">94.2% Accuracy</div>
            <p className="text-[11px] text-[#8f8fa1]">0.958 ROC-AUC score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
