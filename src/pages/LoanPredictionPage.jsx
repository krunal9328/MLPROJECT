import React, { useState } from 'react';
import {
  User,
  DollarSign,
  Car,
  FileText,
  ArrowRight,
  RefreshCw,
  Cpu,
  ShieldAlert
} from 'lucide-react';
import { APPLICANT_PRESETS, calculateFraudRisk } from '../data/mockData';

export default function LoanPredictionPage({ formData, setFormData, setLastResult, setActiveTab }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const applyPreset = (presetKey) => {
    if (APPLICANT_PRESETS[presetKey]) {
      setFormData(APPLICANT_PRESETS[presetKey]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setAnalysisStep('Ingesting 28 insurance claim features...');

    setTimeout(() => setAnalysisStep('Auditing documentation defect count & witness evidence...'), 600);
    setTimeout(() => setAnalysisStep('Executing Random Forest fraud classification...'), 1200);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const apiResult = await response.json();
      
      // Calculate factors and UI fields using existing mock function to keep UI intact
      const mockResult = calculateFraudRisk(formData);
      
      const probability = apiResult.fraudProbability * 100;
      
      let riskLevel = "Legitimate Claim";
      if (probability >= 60) riskLevel = "High Fraud Risk";
      else if (probability >= 30) riskLevel = "Moderate Suspicion";
      
      setLastResult({
        ...mockResult,
        probability: probability,
        prediction: apiResult.prediction === "Fraud" ? "Fraud (Y)" : "No Fraud (N)",
        riskLevel: riskLevel,
      });
    } catch (error) {
      console.error("Prediction API error:", error);
      // Fallback to mock if API fails
      setLastResult(calculateFraudRisk(formData));
    }

    setIsAnalyzing(false);
    setActiveTab('prediction-result');
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#e5e2e3]">Insurance Fraud Assessment</h1>
          <p className="text-xs text-[#8f8fa1] mt-1">
            Input driver profile, vehicle specifications, incident evidence, and financial claims to detect fraud risk.
          </p>
        </div>

        {/* Quick Presets for Demo */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-[#8f8fa1] font-medium mono-data">Demo Presets:</span>
          <button
            type="button"
            onClick={() => applyPreset('lowRisk')}
            className="rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#4ADE80] hover:bg-[#4ADE80]/20 transition-all shadow-[0_0_10px_rgba(74,222,128,0.15)]"
          >
            🟢 Legitimate Claim
          </button>
          <button
            type="button"
            onClick={() => applyPreset('mediumRisk')}
            className="rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#FACC15] hover:bg-[#FACC15]/20 transition-all shadow-[0_0_10px_rgba(250,204,21,0.15)]"
          >
            🟡 Suspicious Claim
          </button>
          <button
            type="button"
            onClick={() => applyPreset('highRisk')}
            className="rounded-full border border-[#F87171]/30 bg-[#F87171]/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#F87171] hover:bg-[#F87171]/20 transition-all shadow-[0_0_10px_rgba(248,113,113,0.15)]"
          >
            🔴 High Fraud Risk
          </button>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* SECTION 1: DRIVER & POLICYHOLDER INFORMATION */}
        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl inner-glow-top">
          <div className="flex items-center gap-2.5 text-[#5E6BFF] border-b border-white/10 pb-3">
            <div className="p-1.5 rounded-lg bg-[#5E6BFF]/15 border border-[#5E6BFF]/30">
              <User className="h-4 w-4 text-[#5E6BFF]" />
            </div>
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">1. Driver & Policyholder Demographics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Claim Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Claim Number</label>
              <input
                type="text"
                name="claimNumber"
                value={formData.claimNumber || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* Age of Driver */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Age of Driver</label>
              <input
                type="number"
                name="ageOfDriver"
                value={formData.ageOfDriver || ''}
                onChange={handleChange}
                required
                min="18"
                max="100"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Gender</label>
              <select
                name="gender"
                value={formData.gender || 'M'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              >
                <option value="M">Male (M)</option>
                <option value="F">Female (F)</option>
              </select>
            </div>

            {/* Marital Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus ?? 1}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              >
                <option value={1}>Married (1)</option>
                <option value={0}>Single / Unmarried (0)</option>
              </select>
            </div>

            {/* Safety Rating */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Safety Rating (0-100)</label>
              <input
                type="number"
                name="safetyRating"
                value={formData.safetyRating || ''}
                onChange={handleChange}
                required
                min="0"
                max="100"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* Annual Income */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Annual Income ($)</label>
              <input
                type="number"
                name="annualIncome"
                value={formData.annualIncome || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>

            {/* High Education */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">High Education</label>
              <select
                name="highEducation"
                value={formData.highEducation ?? 1}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              >
                <option value={1}>Yes (Higher Education)</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* Property Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Property Status</label>
              <select
                name="propertyStatus"
                value={formData.propertyStatus || 'Own'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              >
                <option value="Own">Own Home</option>
                <option value="Rent">Rent Property</option>
              </select>
            </div>

            {/* Address Change */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Recent Address Change</label>
              <select
                name="addressChange"
                value={formData.addressChange ?? 0}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              >
                <option value={0}>No Address Change (0)</option>
                <option value={1}>Address Changed Recently (1)</option>
              </select>
            </div>

            {/* Zip Code */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#5E6BFF] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: VEHICLE & POLICY SPECIFICATIONS */}
        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5 text-[#50d8e9] border-b border-white/10 pb-3">
            <div className="p-1.5 rounded-lg bg-[#50d8e9]/15 border border-[#50d8e9]/30">
              <Car className="h-4 w-4 text-[#50d8e9]" />
            </div>
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">2. Vehicle & Policy Specifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vehicle Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Vehicle Category</label>
              <select
                name="vehicleCategory"
                value={formData.vehicleCategory || 'Medium'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              >
                <option value="Compact">Compact</option>
                <option value="Medium">Medium Sedan/SUV</option>
                <option value="Large">Large / Luxury Truck</option>
              </select>
            </div>

            {/* Age of Vehicle */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Age of Vehicle (Years)</label>
              <input
                type="number"
                name="ageOfVehicle"
                value={formData.ageOfVehicle || ''}
                onChange={handleChange}
                required
                min="0"
                max="30"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              />
            </div>

            {/* Vehicle Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Vehicle Price ($)</label>
              <input
                type="number"
                name="vehiclePrice"
                value={formData.vehiclePrice || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              />
            </div>

            {/* Vehicle Color */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Vehicle Color</label>
              <select
                name="vehicleColor"
                value={formData.vehicleColor || 'black'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              >
                <option value="silver">Silver</option>
                <option value="black">Black</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Annual Premium */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Annual Premium ($)</label>
              <input
                type="number"
                name="annualPremium"
                value={formData.annualPremium || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              />
            </div>

            {/* Policy Deductible */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Policy Deductible ($)</label>
              <select
                name="policyDeductible"
                value={formData.policyDeductible || 1000}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#50d8e9] focus:outline-none"
              >
                <option value={500}>$500 Deductible</option>
                <option value={1000}>$1,000 Deductible</option>
                <option value={2000}>$2,000 Deductible</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 3: INCIDENT & DOCUMENTATION DETAILS */}
        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5 text-[#ffb689] border-b border-white/10 pb-3">
            <div className="p-1.5 rounded-lg bg-[#ffb689]/15 border border-[#ffb689]/30">
              <FileText className="h-4 w-4 text-[#ffb689]" />
            </div>
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">3. Incident & Documentation Audit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Claim Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Claim Date</label>
              <input
                type="text"
                name="claimDate"
                placeholder="YYYY-MM-DD"
                value={formData.claimDate || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              />
            </div>

            {/* Claim Day of Week */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Claim Day of Week</label>
              <select
                name="claimDayOfWeek"
                value={formData.claimDayOfWeek || 'Friday'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            {/* Accident Site */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Accident Site</label>
              <select
                name="accidentSite"
                value={formData.accidentSite || 'Local'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value="Local">Local Road</option>
                <option value="Highway">Highway</option>
                <option value="Parking Lot">Parking Lot</option>
              </select>
            </div>

            {/* Past Num of Claims */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Past Num of Claims</label>
              <select
                name="pastNumOfClaims"
                value={formData.pastNumOfClaims ?? 0}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value={0}>0 Claims</option>
                <option value={1}>1 Claim</option>
                <option value={2}>2 Claims</option>
                <option value={3}>3+ Claims</option>
              </select>
            </div>

            {/* Witness Present */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Witness Present?</label>
              <select
                name="witnessPresent"
                value={formData.witnessPresent ?? 0}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value={1}>Yes (Witness Available)</option>
                <option value={0}>No Witness</option>
              </select>
            </div>

            {/* Police Report */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Police Report Filed?</label>
              <select
                name="policeReport"
                value={formData.policeReport ?? 0}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value={1}>Yes (Report Available)</option>
                <option value={0}>No Police Report</option>
              </select>
            </div>

            {/* Liability Percentage */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Liability % ({formData.liabPrct || 50}%)</label>
              <input
                type="range"
                name="liabPrct"
                min="0"
                max="100"
                value={formData.liabPrct || 50}
                onChange={handleChange}
                className="w-full accent-[#ffb689]"
              />
            </div>

            {/* Channel */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Filing Channel</label>
              <select
                name="channel"
                value={formData.channel || 'Phone'}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#101112] px-3 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              >
                <option value="Phone">Phone</option>
                <option value="Online">Online Portal</option>
                <option value="Broker">Broker / Agent</option>
              </select>
            </div>

            {/* Days Open */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Days Claim Open</label>
              <input
                type="number"
                step="0.1"
                name="daysOpen"
                value={formData.daysOpen || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#ffb689] focus:outline-none"
              />
            </div>

            {/* Form Defects */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8] flex items-center gap-1.5">
                Form Defects Count
                <span className="text-[10px] text-[#F87171] font-bold">(Key Risk Driver)</span>
              </label>
              <input
                type="number"
                name="formDefects"
                value={formData.formDefects ?? 0}
                onChange={handleChange}
                required
                min="0"
                max="15"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#F87171] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: FINANCIAL CLAIM AMOUNTS */}
        <div className="rounded-2xl border border-white/10 bg-[#101112]/60 backdrop-blur-xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5 text-[#4ADE80] border-b border-white/10 pb-3">
            <div className="p-1.5 rounded-lg bg-[#4ADE80]/15 border border-[#4ADE80]/30">
              <DollarSign className="h-4 w-4 text-[#4ADE80]" />
            </div>
            <h2 className="font-heading text-base font-bold text-[#e5e2e3]">4. Financial Claim Totals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Claim Amount */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Total Claim Amount ($)</label>
              <input
                type="number"
                name="totalClaim"
                value={formData.totalClaim || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#4ADE80] focus:outline-none"
              />
            </div>

            {/* Injury Claim Amount */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#c6c5d8]">Injury Claim Component ($)</label>
              <input
                type="number"
                name="injuryClaim"
                value={formData.injuryClaim || ''}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-[#e5e2e3] focus:border-[#4ADE80] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON & ANALYSIS MODAL */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            type="submit"
            disabled={isAnalyzing}
            className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#5E6BFF] to-[#7A87FF] px-8 py-3.5 text-xs font-bold text-[#070708] hover:brightness-110 transition-all shadow-xl shadow-[#5E6BFF]/30 disabled:opacity-50 hover:scale-[1.01]"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin text-[#070708]" />
                <span>Analyzing Claim...</span>
              </>
            ) : (
              <>
                <ShieldAlert className="h-4 w-4 text-[#070708]" />
                <span>Execute Fraud Detection Model</span>
                <ArrowRight className="h-4 w-4 text-[#070708]" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Real-time ML Inference Processing Banner */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#101112] p-6 text-center space-y-4 shadow-2xl">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5E6BFF]/15 border border-[#5E6BFF]/40">
              <Cpu className="h-8 w-8 text-[#5E6BFF] animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#50d8e9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#50d8e9]"></span>
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-[#e5e2e3]">SIU Fraud Inference Engine</h3>
              <p className="text-xs text-[#50d8e9] mono-data animate-pulse">{analysisStep}</p>
            </div>

            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-[#5E6BFF] to-[#50d8e9] h-full animate-pulse w-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
