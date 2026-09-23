import React from 'react';
import {
  CheckCircle2
} from 'lucide-react';

export default function MLPipelinePage() {
  const steps = [
    {
      num: "01",
      title: "Data Ingestion & Cleaning",
      tech: "Pandas & NumPy",
      desc: "Ingest 12,000 insurance claim records with 28 predictor columns. Parse claim dates, validate zip codes, and clean numeric fields.",
      details: ["Missing value imputation", "Outlier trimming on total claim amount", "Date & day-of-week feature extraction"]
    },
    {
      num: "02",
      title: "SMOTE Imbalance Handling",
      tech: "Imbalanced-Learn SMOTE",
      desc: "Apply Synthetic Minority Over-sampling Technique (SMOTE) to balance the 20.8% fraud minority class for unbiased model training.",
      details: ["K-Nearest Neighbor synthetic samples", "Preserves original class decision boundary", "Prevents false-negative bias"]
    },
    {
      num: "03",
      title: "Feature Engineering & Encoding",
      tech: "Scikit-Learn Preprocessing",
      desc: "Transform categorical variables (`accident_site`, `vehicle_category`, `property_status`) via OneHot Encoding and scale numeric features.",
      details: ["StandardScaler on total claim & vehicle price", "OneHot & Label encoding categorical strings", "Ratio feature derivation (Claim / Vehicle Price)"]
    },
    {
      num: "04",
      title: "Ensemble Model Training",
      tech: "Random Forest",
      desc: "Train Random Forest (100 Decision Trees) Classifiers using 5-fold cross-validation.",
      details: ["Hyperparameter tuning (max_depth, n_estimators)", "Gini Impurity feature importance tracking", "5-fold Cross-Validation verification"]
    },
    {
      num: "05",
      title: "Real-Time Inference Engine",
      tech: "Vite React Frontend + Heuristic API",
      desc: "Evaluate input claims in <1.5ms, generating fraud probability %, risk tiers, and Special Investigation Unit (SIU) recommendations.",
      details: ["Instant risk gauge rendering", "Custom factor influence breakdown", "Printable SIU audit PDF export"]
    }
  ];

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] dark:border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider mono-data bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">Architecture</span>
          <span className="text-[#CBD5E1] dark:text-[#8f8fa1]">•</span>
          <span className="text-xs text-[#64748B] dark:text-[#8f8fa1] mono-data">Insurance Fraud ML Pipeline</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-[#111827] dark:text-[#e5e2e3] mt-1">End-to-End Machine Learning Pipeline</h1>
        <p className="text-sm text-[#475569] dark:text-[#8f8fa1] mt-1">
          Detailed walkthrough of the data engineering, SMOTE balancing, feature scaling, and model training workflow.
        </p>
      </div>

      {/* PIPELINE STEPS LIST */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-[#FFFFFF] dark:bg-[#101112]/60 p-6 space-y-4 shadow-sm hover:border-[#60A5FA] hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#E2E8F0] dark:border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-heading text-xl font-bold bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent mono-data">STEP {step.num}</span>
                <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-[#e5e2e3]">{step.title}</h2>
              </div>
              <span className="text-xs font-semibold text-[#2563EB] dark:text-[#50d8e9] mono-data bg-[#EFF6FF] dark:bg-[#50d8e9]/10 border border-[#60A5FA]/30 dark:border-[#50d8e9]/30 rounded-full px-3 py-1">
                {step.tech}
              </span>
            </div>

            <p className="text-sm text-[#475569] dark:text-[#c6c5d8] leading-relaxed">{step.desc}</p>

            <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#64748B] dark:text-[#8f8fa1]">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#2563EB] dark:text-[#4ADE80]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
