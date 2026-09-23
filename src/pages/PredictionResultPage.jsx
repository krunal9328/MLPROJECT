import React from 'react';
import {
  ShieldCheck,
  RefreshCcw,
  BarChart2,
  Download,
  ShieldAlert
} from 'lucide-react';
import RiskGauge from '../components/common/RiskGauge';

export default function PredictionResultPage({ lastResult, formData, setActiveTab }) {
  const result = lastResult || {
    probability: 14.8,
    riskLevel: "Legitimate Claim",
    prediction: "No Fraud (N)",
    confidence: "94.2%",
    factors: [
      { name: "Form Defects Count", val: "0 defects", impact: "Clean Document", description: "Paperwork submitted with zero defect flags." },
      { name: "Total Claim vs Vehicle Value", val: "$6,200 vs $28,500", impact: "Normal Ratio", description: "Claim amount is well aligned with vehicle valuation." },
      { name: "Driver Safety Rating", val: "88 / 100", impact: "Low Risk", description: "High driver safety rating reduces overall fraud likelihood." },
      { name: "Evidence Verification", val: "Both Available", impact: "Verified Evidence", description: "Independent verification supporting the claim details." }
    ]
  };

  const isHighRisk = result.probability >= 50;
  const isMediumRisk = result.probability >= 25 && result.probability < 50;

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto pt-2">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6 pt-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2 leading-none">
            <span className="text-xs text-[#50d8e9] font-semibold uppercase tracking-wider mono-data">Inference Result</span>
            <span className="text-[#8f8fa1]">•</span>
            <span className="text-xs text-[#8f8fa1] mono-data">Claim #: {formData.claimNumber || '269568'}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-[#e5e2e3] pt-1">Fraud Risk Audit Report</h1>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveTab('fraud-prediction')}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-2 text-xs font-semibold text-[#e5e2e3] hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-sm"
          >
            <RefreshCcw className="h-3.5 w-3.5 text-[#8f8fa1]" />
            <span>New Claim Audit</span>
          </button>

          <button
            onClick={() => setActiveTab('model-dashboard')}
            className="flex items-center gap-2 rounded-xl border border-[#5E6BFF]/40 bg-[#5E6BFF]/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-[#5E6BFF] hover:bg-[#5E6BFF]/20 transition-all shadow-[0_0_15px_rgba(94,107,255,0.15)]"
          >
            <BarChart2 className="h-3.5 w-3.5" />
            <span>View Model Metrics</span>
          </button>

          <button
            onClick={handlePrintReport}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5E6BFF] to-[#7A87FF] px-4.5 py-2 text-xs font-bold text-[#070708] hover:brightness-110 transition-all shadow-lg shadow-[#5E6BFF]/25"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Audit PDF</span>
          </button>
        </div>
      </div>

      {/* MAIN RESULT GLASS CARD */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-2xl p-8 relative overflow-hidden shadow-2xl inner-glow-top">
        {/* Top Accent line based on risk */}
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 ${
            isHighRisk ? 'bg-gradient-to-r from-[#F87171] to-[#EF4444]' : isMediumRisk ? 'bg-gradient-to-r from-[#FACC15] to-[#f59e0b]' : 'bg-gradient-to-r from-[#4ADE80] to-[#22c55e]'
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Gauge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
            <RiskGauge probability={result.probability} riskLevel={result.riskLevel} />
          </div>

          {/* Right Column: Prediction Details & Model Confidence */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs text-[#8f8fa1] uppercase tracking-wider mono-data font-semibold">Classification Decision</span>
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-3xl font-bold text-[#e5e2e3]">
                  Status: <span className={isHighRisk ? 'text-[#F87171] drop-shadow-[0_0_12px_rgba(248,113,113,0.3)]' : 'text-[#4ADE80] drop-shadow-[0_0_12px_rgba(74,222,128,0.3)]'}>{result.prediction}</span>
                </h2>
              </div>
            </div>

            {/* Model Confidence Metric Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-2.5 space-y-0.5">
                <span className="text-[10px] text-[#8f8fa1] uppercase tracking-wider block font-semibold mono-data">Model Certainty</span>
                <span className="font-heading text-lg font-bold text-[#50d8e9] mono-data">{result.confidence}</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-2.5 space-y-0.5">
                <span className="text-[10px] text-[#8f8fa1] uppercase tracking-wider block font-semibold mono-data">Evaluated Algorithm</span>
                <span className="font-heading text-sm font-bold text-[#e5e2e3]">Random Forest Classifier</span>
              </div>
            </div>

            {/* Recommended Action Box */}
            <div className={`rounded-xl border p-4 backdrop-blur-md space-y-2 ${
              isHighRisk ? 'border-[#F87171]/40 bg-[#F87171]/10 text-[#F87171]' : isMediumRisk ? 'border-[#FACC15]/40 bg-[#FACC15]/10 text-[#FACC15]' : 'border-[#4ADE80]/40 bg-[#4ADE80]/10 text-[#4ADE80]'
            }`}>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                {isHighRisk ? <ShieldAlert className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                <span>SIU Recommendation: {isHighRisk ? 'Flag for Special Investigation Unit (SIU)' : isMediumRisk ? 'Secondary Claims Audit Required' : 'Auto-Approve Claim Settlement'}</span>
              </div>
              <p className="text-xs text-[#c6c5d8] leading-relaxed">
                {isHighRisk
                  ? 'High probability of fraudulent activity detected. Hold payout and escalate paperwork, witness credentials, and damage photos to SIU.'
                  : isMediumRisk
                  ? 'Moderate risk score observed due to documentation defects or missing witness testimony. Conduct standard secondary desk audit.'
                  : 'Low risk score verified across all 28 predictor features. Recommended for standard automated settlement processing.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE INFLUENCE BREAKDOWN */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-[#e5e2e3]">Claim Risk Factor Breakdown</h3>
            <p className="text-xs text-[#8f8fa1]">
              Impact of key driver, policy, documentation, and financial features on this fraud determination.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#50d8e9] mono-data bg-[#50d8e9]/10 border border-[#50d8e9]/30 rounded-full px-3 py-1">
            4 Primary Drivers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.factors.map((factor, idx) => {
            const isFactorRisk = factor.impact.toLowerCase().includes('risk') || factor.impact.toLowerCase().includes('indicator') || factor.impact.toLowerCase().includes('high');
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-4 space-y-2 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#e5e2e3]">{factor.name}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold mono-data border ${
                    isFactorRisk
                      ? 'bg-[#F87171]/15 text-[#F87171] border-[#F87171]/30'
                      : 'bg-[#4ADE80]/15 text-[#4ADE80] border-[#4ADE80]/30'
                  }`}>
                    {factor.impact}
                  </span>
                </div>
                <div className="text-xs text-[#50d8e9] font-semibold mono-data">
                  Value: {factor.val}
                </div>
                <p className="text-xs text-[#8f8fa1] leading-relaxed">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
