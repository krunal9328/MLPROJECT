import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MOCK_PREDICTION_HISTORY } from '../data/mockData';

export default function PredictionHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');

  const filteredHistory = MOCK_PREDICTION_HISTORY.filter((item) => {
    const matchesSearch =
      item.claimNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.accidentSite.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (riskFilter === 'LEGITIMATE') return matchesSearch && item.prediction.includes('No Fraud');
    if (riskFilter === 'HIGH') return matchesSearch && item.riskLevel.includes('High');
    return matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5E6BFF] font-semibold uppercase tracking-wider mono-data">Audit History Log</span>
            <span className="text-[#8f8fa1]">•</span>
            <span className="text-xs text-[#8f8fa1] mono-data">Claims Audit Register</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-[#e5e2e3] mt-1">Claim Evaluation Audit History</h1>
        </div>
      </div>

      {/* FILTER TOOLBAR & TABLE */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 inner-glow-top shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-heading text-base font-semibold text-[#e5e2e3]">Historical Evaluations</h2>
            <p className="text-xs text-[#8f8fa1]">All evaluated insurance claims with risk scores and SIU action status</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8f8fa1]" />
              <input
                type="text"
                placeholder="Search claim #, site..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/[0.04] py-1.5 pl-8 pr-3 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* Filter */}
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#101112] px-3 py-1.5 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
            >
              <option value="ALL">All Risk Levels</option>
              <option value="LEGITIMATE">Legitimate Claims</option>
              <option value="HIGH">High Fraud Risk</option>
            </select>
          </div>
        </div>

        {/* History Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#c6c5d8]">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase font-bold tracking-wider text-[#8f8fa1] mono-data">
              <tr>
                <th className="p-3.5 px-4">Audit ID</th>
                <th className="p-3.5 px-4">Timestamp</th>
                <th className="p-3.5 px-4">Claim #</th>
                <th className="p-3.5 px-4">Driver Age</th>
                <th className="p-3.5 px-4">Accident Site</th>
                <th className="p-3.5 px-4">Total Claim ($)</th>
                <th className="p-3.5 px-4">Fraud Prob %</th>
                <th className="p-3.5 px-4">Risk Level</th>
                <th className="p-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredHistory.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="p-3.5 px-4 font-semibold text-[#5E6BFF] mono-data">{item.id}</td>
                  <td className="p-3.5 px-4 text-[#8f8fa1] mono-data">{item.date}</td>
                  <td className="p-3.5 px-4 font-semibold text-[#e5e2e3] mono-data">{item.claimNumber}</td>
                  <td className="p-3.5 px-4">{item.driverAge} yrs</td>
                  <td className="p-3.5 px-4">{item.accidentSite}</td>
                  <td className="p-3.5 px-4 font-semibold text-[#e5e2e3] mono-data">{item.totalClaim}</td>
                  <td className="p-3.5 px-4 font-bold mono-data text-[#50d8e9]">{item.fraudProbability}%</td>
                  <td className="p-3.5 px-4">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold mono-data border ${
                        item.riskLevel.includes('High')
                          ? 'bg-[#F87171]/15 text-[#F87171] border-[#F87171]/30'
                          : 'bg-[#4ADE80]/15 text-[#4ADE80] border-[#4ADE80]/30'
                      }`}
                    >
                      {item.riskLevel}
                    </span>
                  </td>
                  <td className="p-3.5 px-4 text-center font-semibold text-[#8f8fa1]">
                    {item.status}
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
