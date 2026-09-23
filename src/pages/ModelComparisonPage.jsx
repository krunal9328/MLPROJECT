import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ALGORITHM_COMPARISON } from '../data/mockData';

export default function ModelComparisonPage() {
  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#5E6BFF] font-semibold uppercase tracking-wider mono-data">Benchmark</span>
          <span className="text-[#8f8fa1]">•</span>
          <span className="text-xs text-[#8f8fa1] mono-data">5 Supervised ML Algorithms</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-[#e5e2e3] mt-1">Model Comparison & Evaluation</h1>
        <p className="text-xs text-[#8f8fa1] mt-1">
          Comparative performance evaluation across accuracy, precision, recall, F1-score, ROC-AUC, training time, and inference latency.
        </p>
      </div>

      {/* COMPARISON TABLE */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl inner-glow-top">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">Algorithm Benchmark Table</h2>
            <p className="text-xs text-[#8f8fa1]">Evaluated on 2,400 holdout insurance claim records</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#c6c5d8]">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase font-bold tracking-wider text-[#8f8fa1] mono-data">
              <tr>
                <th className="py-3.5 px-4">Algorithm Name</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Accuracy</th>
                <th className="py-3.5 px-4">Precision</th>
                <th className="py-3.5 px-4">Recall</th>
                <th className="py-3.5 px-4">F1 Score</th>
                <th className="py-3.5 px-4">ROC-AUC</th>
                <th className="py-3.5 px-4">Latency</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {ALGORITHM_COMPARISON.map((algo) => (
                <tr
                  key={algo.name}
                  className={`hover:bg-white/[0.03] transition-colors ${
                    algo.recommended ? 'bg-[#5E6BFF]/10 font-semibold' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-bold text-[#e5e2e3] flex items-center gap-2">
                    {algo.name}
                    {algo.recommended && (
                      <span className="rounded-full bg-[#5E6BFF]/20 border border-[#5E6BFF]/40 text-[#5E6BFF] px-2 py-0.5 text-[9px] mono-data font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-[#8f8fa1]">{algo.type}</td>
                  <td className="py-4 px-4 font-bold text-[#5E6BFF] mono-data">{algo.accuracy}%</td>
                  <td className="py-4 px-4 mono-data">{algo.precision}%</td>
                  <td className="py-4 px-4 mono-data">{algo.recall}%</td>
                  <td className="py-4 px-4 font-bold text-[#4ADE80] mono-data">{algo.f1}%</td>
                  <td className="py-4 px-4 mono-data">{algo.rocAuc}</td>
                  <td className="py-4 px-4 text-[#50d8e9] mono-data">{algo.latency}</td>
                  <td className="py-4 px-4 text-center">
                    {algo.recommended ? (
                      <span className="inline-flex items-center gap-1 text-[#4ADE80] font-bold text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Optimal
                      </span>
                    ) : (
                      <span className="text-[#8f8fa1] text-[11px]">Baseline</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
