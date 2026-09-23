import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Cell
} from 'recharts';
import KPICard from '../components/common/KPICard';
import {
  MODEL_METRICS,
  ALGORITHM_COMPARISON,
  CONFUSION_MATRIX,
  FEATURE_IMPORTANCE,
  ROC_CURVE_POINTS
} from '../data/mockData';

export default function ModelDashboardPage() {

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5E6BFF] font-semibold uppercase tracking-wider mono-data">ML Analytics</span>
            <span className="text-[#8f8fa1]">•</span>
            <span className="text-xs text-[#8f8fa1] mono-data">Trained on Insurance Fraud Dataset (12K rows)</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-[#e5e2e3] mt-1">Model Performance Dashboard</h1>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 text-xs text-[#8f8fa1] mono-data">
          <span>Test Evaluation: 2,400 Claim Records</span>
        </div>
      </div>

      {/* KPI CARDS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          title="Accuracy"
          value={`${MODEL_METRICS.accuracy}%`}
          subtitle="Overall correct predictions"
          trend="Best"
          color="#5E6BFF"
        />
        <KPICard
          title="Precision"
          value={`${MODEL_METRICS.precision}%`}
          subtitle="Low false fraud flags"
          trend="+1.8%"
          color="#50d8e9"
        />
        <KPICard
          title="Recall"
          value={`${MODEL_METRICS.recall}%`}
          subtitle="High fraud detection"
          trend="+2.4%"
          color="#ffb689"
        />
        <KPICard
          title="F1 Score"
          value={`${MODEL_METRICS.f1Score}%`}
          subtitle="Harmonic mean balance"
          trend="Optimal"
          color="#4ADE80"
        />
        <KPICard
          title="ROC-AUC"
          value={MODEL_METRICS.rocAuc}
          subtitle="Discriminative power"
          trend="0.958"
          color="#bec2ff"
        />
      </div>

      {/* CHARTS ROW 1: MODEL COMPARISON & CONFUSION MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Model Comparison Bar Chart */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl inner-glow-top">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Algorithm Performance Comparison</h2>
              <p className="text-xs text-[#8f8fa1]">Accuracy across 5 trained fraud classifiers</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#50d8e9] mono-data bg-[#50d8e9]/10 border border-[#50d8e9]/30 rounded-full px-3 py-0.5">
              <span>Random Forest Top</span>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ALGORITHM_COMPARISON}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#8f8fa1" fontSize={10} tickLine={false} />
                <YAxis stroke="#8f8fa1" fontSize={10} domain={[70, 100]} unit="%" />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#5E6BFF" radius={[6, 6, 0, 0]}>
                  {ALGORITHM_COMPARISON.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.recommended ? '#5E6BFF' : 'rgba(94,107,255,0.35)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confusion Matrix Card */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="border-b border-white/10 pb-3">
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Confusion Matrix</h2>
            <p className="text-xs text-[#8f8fa1]">Test evaluation results (2,400 claims sample)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {/* True Negative */}
            <div className="rounded-xl border border-[#4ADE80]/30 bg-[#4ADE80]/10 p-4 text-center space-y-1">
              <span className="text-[10px] text-[#4ADE80] font-bold uppercase tracking-wider mono-data block">True Legitimate (TN)</span>
              <span className="font-heading text-2xl font-extrabold text-[#e5e2e3] mono-data">{CONFUSION_MATRIX.trueNegative.toLocaleString()}</span>
              <span className="text-[10px] text-[#8f8fa1] block">Correctly Approved</span>
            </div>

            {/* False Positive */}
            <div className="rounded-xl border border-[#FACC15]/30 bg-[#FACC15]/10 p-4 text-center space-y-1">
              <span className="text-[10px] text-[#FACC15] font-bold uppercase tracking-wider mono-data block">False Alarm (FP)</span>
              <span className="font-heading text-2xl font-extrabold text-[#e5e2e3] mono-data">{CONFUSION_MATRIX.falsePositive.toLocaleString()}</span>
              <span className="text-[10px] text-[#8f8fa1] block">Audit Overflag</span>
            </div>

            {/* False Negative */}
            <div className="rounded-xl border border-[#F87171]/30 bg-[#F87171]/10 p-4 text-center space-y-1">
              <span className="text-[10px] text-[#F87171] font-bold uppercase tracking-wider mono-data block">Missed Fraud (FN)</span>
              <span className="font-heading text-2xl font-extrabold text-[#e5e2e3] mono-data">{CONFUSION_MATRIX.falseNegative.toLocaleString()}</span>
              <span className="text-[10px] text-[#8f8fa1] block">False Approval</span>
            </div>

            {/* True Positive */}
            <div className="rounded-xl border border-[#5E6BFF]/30 bg-[#5E6BFF]/10 p-4 text-center space-y-1">
              <span className="text-[10px] text-[#5E6BFF] font-bold uppercase tracking-wider mono-data block">True Fraud (TP)</span>
              <span className="font-heading text-2xl font-extrabold text-[#e5e2e3] mono-data">{CONFUSION_MATRIX.truePositive.toLocaleString()}</span>
              <span className="text-[10px] text-[#8f8fa1] block">Correctly Intercepted</span>
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS ROW 2: FEATURE IMPORTANCE & ROC CURVE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Feature Importance Bar Chart */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="border-b border-white/10 pb-3">
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Feature Importance (Random Forest Gini Impurity)</h2>
            <p className="text-xs text-[#8f8fa1]">Form defects & safety rating drive over 50% of model weight</p>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={FEATURE_IMPORTANCE} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis type="number" stroke="#8f8fa1" fontSize={10} unit="%" />
                <YAxis dataKey="feature" type="category" stroke="#8f8fa1" fontSize={10} width={150} />
                <Tooltip />
                <Bar dataKey="importance" fill="#50d8e9" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROC Curve Chart */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="font-heading text-base font-bold text-[#e5e2e3]">ROC Curve Analysis</h2>
              <p className="text-xs text-[#8f8fa1]">Receiver Operating Characteristic (AUC = 0.958)</p>
            </div>
            <span className="text-xs font-bold text-[#4ADE80] mono-data">AUC 0.958</span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ROC_CURVE_POINTS}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="fpr" stroke="#8f8fa1" fontSize={10} label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -5 }} />
                <YAxis stroke="#8f8fa1" fontSize={10} label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="tpr" stroke="#4ADE80" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
