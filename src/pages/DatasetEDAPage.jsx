import React, { useState } from 'react';
import {
  Search,
  Database,
  ChevronLeft,
  ChevronRight,
  Layers,
  ShieldAlert,
  FileCheck
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import KPICard from '../components/common/KPICard';
import { MOCK_DATASET_TABLE, DATASET_STATS } from '../data/mockData';

export default function DatasetEDAPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter Data
  const filteredData = MOCK_DATASET_TABLE.filter((row) => {
    const matchesSearch =
      row.claimNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.vehicleCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.accidentSite.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'FRAUD') return matchesSearch && row.fraudReported === 'Y';
    if (filterStatus === 'LEGITIMATE') return matchesSearch && row.fraudReported === 'N';
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentRecords = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // EDA Charts Data
  const fraudRatioData = [
    { name: 'Legitimate (N)', value: 79.2, color: '#4ADE80' },
    { name: 'Fraud (Y)', value: 20.8, color: '#F87171' }
  ];

  const accidentSiteFraudData = [
    { site: 'Parking Lot', fraudRate: 38.4 },
    { site: 'Local Road', fraudRate: 22.1 },
    { site: 'Highway', fraudRate: 16.5 }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#50d8e9] font-medium uppercase tracking-wider mono-data">Data Engineering</span>
            <span className="text-[#8f8fa1]">•</span>
            <span className="text-xs text-[#8f8fa1] mono-data">Insurance Fraud Dataset (12,000 Records)</span>
          </div>
          <h1 className="font-heading text-3xl font-semibold text-[#e5e2e3] mt-1">Dataset Explorer & EDA</h1>
        </div>
      </div>

      {/* DATASET SUMMARY KPIS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Claims Records" value={DATASET_STATS.totalRecords} subtitle="Full dataset sample" icon={Database} color="#5E6BFF" />
        <KPICard title="Predictor Features" value={DATASET_STATS.featuresCount} subtitle="Ingested predictor columns" icon={Layers} color="#50d8e9" />
        <KPICard title="Dataset Fraud Rate" value={DATASET_STATS.fraudRate} subtitle="Imbalanced target ratio (Y/N)" icon={ShieldAlert} color="#F87171" />
        <KPICard title="Missing Values" value={DATASET_STATS.missingValues} subtitle="StandardScaler & Encoded" icon={FileCheck} color="#4ADE80" />
      </div>

      {/* INTERACTIVE DATASET TABLE SECTION */}
      <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 inner-glow-top shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-heading text-base font-semibold text-[#e5e2e3]">Sample Data Explorer</h2>
            <p className="text-xs text-[#8f8fa1]">Previewing ingested tabular features from insurance claims repository</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8f8fa1]" />
              <input
                type="text"
                placeholder="Search claim #, site, vehicle..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-xl border border-white/10 bg-white/[0.04] py-1.5 pl-8 pr-3 text-xs text-[#e5e2e3] placeholder-[#8f8fa1] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 border border-white/10 bg-white/[0.02] p-1 rounded-xl">
              <button
                onClick={() => { setFilterStatus('ALL'); setCurrentPage(1); }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterStatus === 'ALL' ? 'bg-[#5E6BFF] text-[#070708]' : 'text-[#8f8fa1] hover:text-[#e5e2e3]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => { setFilterStatus('FRAUD'); setCurrentPage(1); }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterStatus === 'FRAUD' ? 'bg-[#F87171] text-[#070708]' : 'text-[#8f8fa1] hover:text-[#e5e2e3]'
                }`}
              >
                Fraud (Y)
              </button>
              <button
                onClick={() => { setFilterStatus('LEGITIMATE'); setCurrentPage(1); }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterStatus === 'LEGITIMATE' ? 'bg-[#4ADE80] text-[#070708]' : 'text-[#8f8fa1] hover:text-[#e5e2e3]'
                }`}
              >
                Legitimate (N)
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#c6c5d8]">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] uppercase font-bold tracking-wider text-[#8f8fa1] mono-data">
              <tr>
                <th className="py-3 px-4">Claim #</th>
                <th className="py-3 px-4">Driver Age</th>
                <th className="py-3 px-4">Safety Rating</th>
                <th className="py-3 px-4">Accident Site</th>
                <th className="py-3 px-4">Vehicle Category</th>
                <th className="py-3 px-4">Total Claim ($)</th>
                <th className="py-3 px-4">Form Defects</th>
                <th className="py-3 px-4 text-center">Fraud Reported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {currentRecords.map((row) => (
                <tr key={row.claimNumber} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#e5e2e3] mono-data">{row.claimNumber}</td>
                  <td className="py-3 px-4">{row.ageOfDriver} yrs</td>
                  <td className="py-3 px-4 mono-data">{row.safetyRating} / 100</td>
                  <td className="py-3 px-4">{row.accidentSite}</td>
                  <td className="py-3 px-4">{row.vehicleCategory}</td>
                  <td className="py-3 px-4 font-semibold text-[#e5e2e3] mono-data">${row.totalClaim.toLocaleString()}</td>
                  <td className="py-3 px-4 mono-data">{row.formDefects} defects</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold mono-data border ${
                        row.fraudReported === 'Y'
                          ? 'bg-[#F87171]/15 text-[#F87171] border-[#F87171]/30'
                          : 'bg-[#4ADE80]/15 text-[#4ADE80] border-[#4ADE80]/30'
                      }`}
                    >
                      {row.fraudReported === 'Y' ? 'Fraud (Y)' : 'Legit (N)'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#8f8fa1] mono-data">
          <span>Showing {filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.02] disabled:opacity-30 hover:bg-white/[0.05]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span>Page {currentPage} of {totalPages || 1}</span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.02] disabled:opacity-30 hover:bg-white/[0.05]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* EXPLORATORY DATA ANALYSIS (EDA) CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Fraud Class Distribution Pie */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-heading text-base font-semibold text-[#e5e2e3]">Fraud Target Distribution</h3>
            <p className="text-xs text-[#8f8fa1]">Binary classification split (Fraud Y vs Legitimate N)</p>
          </div>

          <div className="h-56 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={fraudRatioData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={4} dataKey="value">
                  {fraudRatioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-6 text-xs mono-data">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#4ADE80]" />
              <span className="text-[#c6c5d8]">Legitimate (79.2%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F87171]" />
              <span className="text-[#c6c5d8]">Fraud (20.8%)</span>
            </div>
          </div>
        </div>

        {/* Fraud Rate by Accident Site */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-heading text-base font-semibold text-[#e5e2e3]">Fraud Rate by Accident Site</h3>
            <p className="text-xs text-[#8f8fa1]">Incidents in parking lots show significantly higher fraud probability</p>
          </div>

          <div className="h-60 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accidentSiteFraudData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="site" stroke="#8f8fa1" fontSize={11} />
                <YAxis stroke="#8f8fa1" fontSize={11} unit="%" />
                <Tooltip />
                <Bar dataKey="fraudRate" fill="#50d8e9" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
