// Centralized Mock Data & Prediction Engine for Auto Insurance Fraud Detection ML Project

export const MODEL_METRICS = {
  accuracy: 94.2,
  precision: 91.8,
  recall: 89.5,
  f1Score: 90.6,
  rocAuc: 0.958,
  datasetSize: "12,000 Records",
  testSplit: "80% Train / 20% Test",
  lastTrained: "2026-09-20 10:15 UTC"
};

export const ALGORITHM_COMPARISON = [
  {
    name: "Random Forest (Best)",
    accuracy: 94.2,
    precision: 91.8,
    recall: 89.5,
    f1: 90.6,
    rocAuc: 0.958,
    trainTime: "8.4s",
    latency: "1.1ms",
    type: "Ensemble Scikit-Learn",
    recommended: true
  },

  {
    name: "Decision Tree",
    accuracy: 87.4,
    precision: 82.5,
    recall: 81.1,
    f1: 81.8,
    rocAuc: 0.869,
    trainTime: "2.1s",
    latency: "0.5ms",
    type: "Tree Based",
    recommended: false
  },
  {
    name: "Logistic Regression",
    accuracy: 85.1,
    precision: 79.8,
    recall: 78.4,
    f1: 79.1,
    rocAuc: 0.842,
    trainTime: "1.2s",
    latency: "0.3ms",
    type: "Linear Model",
    recommended: false
  },
  {
    name: "K-Nearest Neighbors",
    accuracy: 82.8,
    precision: 76.2,
    recall: 75.0,
    f1: 75.6,
    rocAuc: 0.815,
    trainTime: "1.5s",
    latency: "6.2ms",
    type: "Distance Based",
    recommended: false
  }
];

export const CONFUSION_MATRIX = {
  trueNegative: 9120,
  falsePositive: 380,
  falseNegative: 260,
  truePositive: 2240
};

export const FEATURE_IMPORTANCE = [
  { feature: "Form Defects Count", importance: 28.4, category: "Documentation" },
  { feature: "Safety Rating", importance: 22.1, category: "Driver Profile" },
  { feature: "Total Claim vs Vehicle Price", importance: 18.6, category: "Financial" },
  { feature: "Past Num of Claims", importance: 12.3, category: "Claim History" },
  { feature: "Witness & Police Report", importance: 8.5, category: "Evidence" },
  { feature: "Liability Percentage", importance: 5.2, category: "Incident" },
  { feature: "Days Open / Vehicle Age", importance: 4.9, category: "Operational" }
];

export const ROC_CURVE_POINTS = [
  { fpr: 0.0, tpr: 0.0 },
  { fpr: 0.01, tpr: 0.42 },
  { fpr: 0.03, tpr: 0.75 },
  { fpr: 0.06, tpr: 0.88 },
  { fpr: 0.10, tpr: 0.94 },
  { fpr: 0.18, tpr: 0.97 },
  { fpr: 0.35, tpr: 0.99 },
  { fpr: 0.60, tpr: 1.0 },
  { fpr: 1.0, tpr: 1.0 }
];

export const DATASET_STATS = {
  totalRecords: "12,000",
  featuresCount: 28,
  fraudRate: "20.8%",
  missingValues: "0 (Cleaned)",
  trainSize: "9,600",
  testSize: "2,400"
};

// Kaggle / Real Dataset Samples from insurance_fraud_data.csv
export const MOCK_DATASET_TABLE = [
  { claimNumber: "414724", ageOfDriver: 39, gender: "M", maritalStatus: 1, safetyRating: 73, annualIncome: 58612.8, propertyStatus: "Own", zipCode: 50048, claimDate: "08/12/2023", claimDayOfWeek: "Saturday", accidentSite: "Highway", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 25, policeReport: 0, ageOfVehicle: 8, vehicleCategory: "Large", vehiclePrice: 24360.59, vehicleColor: "silver", totalClaim: 26633.28, injuryClaim: 5196.55, policyDeductible: 1000, annualPremium: 1406.91, daysOpen: 8.64, formDefects: 5, fraudReported: "N" },
  { claimNumber: "269568", ageOfDriver: 33, gender: "M", maritalStatus: 1, safetyRating: 72, annualIncome: 35936.0, propertyStatus: "Own", zipCode: 50006, claimDate: "10/18/2024", claimDayOfWeek: "Friday", accidentSite: "Local", pastNumOfClaims: 0, witnessPresent: 1, liabPrct: 45, policeReport: 0, ageOfVehicle: 2, vehicleCategory: "Medium", vehiclePrice: 23457.35, vehicleColor: "black", totalClaim: 26707.46, injuryClaim: 7957.27, policyDeductible: 2000, annualPremium: 1415.74, daysOpen: 10.01, formDefects: 5, fraudReported: "Y" },
  { claimNumber: "974592", ageOfDriver: 31, gender: "M", maritalStatus: 1, safetyRating: 76, annualIncome: 84940.8, propertyStatus: "Own", zipCode: 15021, claimDate: "12/23/2023", claimDayOfWeek: "Saturday", accidentSite: "Local", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 100, policeReport: 0, ageOfVehicle: 7, vehicleCategory: "Medium", vehiclePrice: 19752.43, vehicleColor: "gray", totalClaim: 15279.39, injuryClaim: 3014.11, policyDeductible: 1000, annualPremium: 1199.44, daysOpen: 8.26, formDefects: 3, fraudReported: "N" },
  { claimNumber: "995328", ageOfDriver: 53, gender: "F", maritalStatus: 1, safetyRating: 93, annualIncome: 73526.4, propertyStatus: "Own", zipCode: 85027, claimDate: "02/25/2024", claimDayOfWeek: "Sunday", accidentSite: "Parking Lot", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 100, policeReport: 0, ageOfVehicle: 1, vehicleCategory: "Medium", vehiclePrice: 32910.34, vehicleColor: "red", totalClaim: 20909.28, injuryClaim: 5671.60, policyDeductible: 500, annualPremium: 708.64, daysOpen: 9.24, formDefects: 4, fraudReported: "N" },
  { claimNumber: "1140480", ageOfDriver: 41, gender: "M", maritalStatus: 1, safetyRating: 87, annualIncome: 59403.2, propertyStatus: "Own", zipCode: 80046, claimDate: "09/04/2024", claimDayOfWeek: "Wednesday", accidentSite: "Local", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 25, policeReport: 0, ageOfVehicle: 6, vehicleCategory: "Medium", vehiclePrice: 28570.38, vehicleColor: "red", totalClaim: 34493.98, injuryClaim: 4064.57, policyDeductible: 1000, annualPremium: 1187.96, daysOpen: 10.26, formDefects: 2, fraudReported: "N" },
  { claimNumber: "1244160", ageOfDriver: 42, gender: "F", maritalStatus: 0, safetyRating: 68, annualIncome: 29779.2, propertyStatus: "Own", zipCode: 80042, claimDate: "05/26/2024", claimDayOfWeek: "Sunday", accidentSite: "Local", pastNumOfClaims: 0, witnessPresent: 1, liabPrct: 84, policeReport: 1, ageOfVehicle: 4, vehicleCategory: "Medium", vehiclePrice: 12689.88, vehicleColor: "white", totalClaim: 6535.97, injuryClaim: 2812.37, policyDeductible: 2000, annualPremium: 972.18, daysOpen: 9.44, formDefects: 2, fraudReported: "Y" },
  { claimNumber: "1700352", ageOfDriver: 50, gender: "M", maritalStatus: 1, safetyRating: 89, annualIncome: 62611.2, propertyStatus: "Rent", zipCode: 20151, claimDate: "05/23/2024", claimDayOfWeek: "Thursday", accidentSite: "Parking Lot", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 10, policeReport: 0, ageOfVehicle: 6, vehicleCategory: "Large", vehiclePrice: 53451.42, vehicleColor: "silver", totalClaim: 7131.38, injuryClaim: 5712.28, policyDeductible: 2000, annualPremium: 1104.50, daysOpen: 8.59, formDefects: 3, fraudReported: "N" },
  { claimNumber: "1804032", ageOfDriver: 42, gender: "F", maritalStatus: 1, safetyRating: 68, annualIncome: 79776.0, propertyStatus: "Own", zipCode: 80015, claimDate: "08/31/2023", claimDayOfWeek: "Thursday", accidentSite: "Parking Lot", pastNumOfClaims: 1, witnessPresent: 0, liabPrct: 77, policeReport: 1, ageOfVehicle: 2, vehicleCategory: "Large", vehiclePrice: 17740.70, vehicleColor: "black", totalClaim: 28271.74, injuryClaim: 9218.58, policyDeductible: 1000, annualPremium: 1088.34, daysOpen: 10.21, formDefects: 2, fraudReported: "N" },
  { claimNumber: "2135808", ageOfDriver: 30, gender: "F", maritalStatus: 1, safetyRating: 79, annualIncome: 34419.0, propertyStatus: "Own", zipCode: 50041, claimDate: "09/27/2024", claimDayOfWeek: "Friday", accidentSite: "Parking Lot", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 61, policeReport: 0, ageOfVehicle: 7, vehicleCategory: "Medium", vehiclePrice: 28091.43, vehicleColor: "silver", totalClaim: 15488.99, injuryClaim: 3973.69, policyDeductible: 1000, annualPremium: 988.45, daysOpen: 7.04, formDefects: 3, fraudReported: "Y" },
  { claimNumber: "2198016", ageOfDriver: 49, gender: "F", maritalStatus: 0, safetyRating: 57, annualIncome: 62248.0, propertyStatus: "Own", zipCode: 80015, claimDate: "07/24/2023", claimDayOfWeek: "Monday", accidentSite: "Local", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 18, policeReport: 1, ageOfVehicle: 10, vehicleCategory: "Large", vehiclePrice: 23264.33, vehicleColor: "blue", totalClaim: 33770.80, injuryClaim: 4264.40, policyDeductible: 2000, annualPremium: 1155.55, daysOpen: 9.49, formDefects: 5, fraudReported: "N" },
  { claimNumber: "2343168", ageOfDriver: 28, gender: "F", maritalStatus: 1, safetyRating: 49, annualIncome: 53307.2, propertyStatus: "Rent", zipCode: 15057, claimDate: "06/24/2023", claimDayOfWeek: "Saturday", accidentSite: "Parking Lot", pastNumOfClaims: 1, witnessPresent: 0, liabPrct: 50, policeReport: 1, ageOfVehicle: 5, vehicleCategory: "Compact", vehiclePrice: 23876.17, vehicleColor: "silver", totalClaim: 32074.03, injuryClaim: 3456.68, policyDeductible: 500, annualPremium: 1737.66, daysOpen: 10.67, formDefects: 8, fraudReported: "Y" },
  { claimNumber: "2592000", ageOfDriver: 42, gender: "F", maritalStatus: 0, safetyRating: 92, annualIncome: 39814.4, propertyStatus: "Own", zipCode: 50009, claimDate: "09/03/2023", claimDayOfWeek: "Sunday", accidentSite: "Highway", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 72, policeReport: 1, ageOfVehicle: 4, vehicleCategory: "Compact", vehiclePrice: 12006.56, vehicleColor: "red", totalClaim: 12427.00, injuryClaim: 3388.57, policyDeductible: 2000, annualPremium: 1273.70, daysOpen: 9.97, formDefects: 4, fraudReported: "Y" },
  { claimNumber: "3525120", ageOfDriver: 23, gender: "M", maritalStatus: 1, safetyRating: 82, annualIncome: 20164.8, propertyStatus: "Rent", zipCode: 15015, claimDate: "03/21/2024", claimDayOfWeek: "Thursday", accidentSite: "Highway", pastNumOfClaims: 0, witnessPresent: 0, liabPrct: 80, policeReport: 1, ageOfVehicle: 6, vehicleCategory: "Compact", vehiclePrice: 12224.55, vehicleColor: "white", totalClaim: 24375.06, injuryClaim: 5335.46, policyDeductible: 500, annualPremium: 1848.81, daysOpen: 9.41, formDefects: 4, fraudReported: "Y" },
  { claimNumber: "4748544", ageOfDriver: 27, gender: "M", maritalStatus: 0, safetyRating: 36, annualIncome: 32728.0, propertyStatus: "Rent", zipCode: 50023, claimDate: "12/28/2024", claimDayOfWeek: "Saturday", accidentSite: "Parking Lot", pastNumOfClaims: 2, witnessPresent: 0, liabPrct: 71, policeReport: 1, ageOfVehicle: 5, vehicleCategory: "Large", vehiclePrice: 7879.24, vehicleColor: "black", totalClaim: 41443.38, injuryClaim: 6794.78, policyDeductible: 2000, annualPremium: 769.95, daysOpen: 9.06, formDefects: 2, fraudReported: "Y" },
  { claimNumber: "5101056", ageOfDriver: 34, gender: "M", maritalStatus: 1, safetyRating: 82, annualIncome: 16429.0, propertyStatus: "Own", zipCode: 20106, claimDate: "03/20/2023", claimDayOfWeek: "Monday", accidentSite: "Parking Lot", pastNumOfClaims: 0, witnessPresent: 1, liabPrct: 0, policeReport: 1, ageOfVehicle: 5, vehicleCategory: "Large", vehiclePrice: 20504.51, vehicleColor: "black", totalClaim: 44689.78, injuryClaim: 3431.85, policyDeductible: 2000, annualPremium: 1136.83, daysOpen: 8.16, formDefects: 4, fraudReported: "Y" }
];

// Presets for quick UI testing
export const APPLICANT_PRESETS = {
  lowRisk: {
    claimNumber: "CLM-99201",
    ageOfDriver: 45,
    gender: "F",
    maritalStatus: 1,
    safetyRating: 88,
    annualIncome: 78500,
    highEducation: 1,
    addressChange: 0,
    propertyStatus: "Own",
    zipCode: "80046",
    claimDate: "2024-08-15",
    claimDayOfWeek: "Wednesday",
    accidentSite: "Local",
    pastNumOfClaims: 0,
    witnessPresent: 1,
    liabPrct: 20,
    channel: "Phone",
    policeReport: 1,
    ageOfVehicle: 3,
    vehicleCategory: "Medium",
    vehiclePrice: 28500,
    vehicleColor: "silver",
    totalClaim: 6200,
    injuryClaim: 1200,
    policyDeductible: 1000,
    annualPremium: 1180,
    daysOpen: 4.5,
    formDefects: 0
  },
  mediumRisk: {
    claimNumber: "CLM-77412",
    ageOfDriver: 32,
    gender: "M",
    maritalStatus: 1,
    safetyRating: 65,
    annualIncome: 42000,
    highEducation: 0,
    addressChange: 1,
    propertyStatus: "Rent",
    zipCode: "50006",
    claimDate: "2024-10-18",
    claimDayOfWeek: "Friday",
    accidentSite: "Parking Lot",
    pastNumOfClaims: 1,
    witnessPresent: 0,
    liabPrct: 55,
    channel: "Online",
    policeReport: 0,
    ageOfVehicle: 6,
    vehicleCategory: "Compact",
    vehiclePrice: 18500,
    vehicleColor: "black",
    totalClaim: 14800,
    injuryClaim: 4500,
    policyDeductible: 1000,
    annualPremium: 1350,
    daysOpen: 9.8,
    formDefects: 3
  },
  highRisk: {
    claimNumber: "CLM-23431",
    ageOfDriver: 27,
    gender: "M",
    maritalStatus: 0,
    safetyRating: 38,
    annualIncome: 31000,
    highEducation: 0,
    addressChange: 1,
    propertyStatus: "Rent",
    zipCode: "15057",
    claimDate: "2024-06-24",
    claimDayOfWeek: "Saturday",
    accidentSite: "Parking Lot",
    pastNumOfClaims: 3,
    witnessPresent: 0,
    liabPrct: 85,
    channel: "Phone",
    policeReport: 0,
    ageOfVehicle: 8,
    vehicleCategory: "Large",
    vehiclePrice: 12500,
    vehicleColor: "red",
    totalClaim: 38500,
    injuryClaim: 9800,
    policyDeductible: 500,
    annualPremium: 1750,
    daysOpen: 12.4,
    formDefects: 8
  }
};

// Initial History Records
export const MOCK_PREDICTION_HISTORY = [
  {
    id: "CLM-2026-901",
    date: "2026-09-20 09:42",
    claimNumber: "269568",
    driverAge: 33,
    accidentSite: "Local",
    totalClaim: "$26,707.46",
    fraudProbability: 84.8,
    riskLevel: "High Fraud Risk",
    prediction: "Fraud (Y)",
    confidence: "94.2%",
    status: "Flagged - SIU"
  },
  {
    id: "CLM-2026-902",
    date: "2026-09-20 08:15",
    claimNumber: "414724",
    driverAge: 39,
    accidentSite: "Highway",
    totalClaim: "$26,633.28",
    fraudProbability: 12.4,
    riskLevel: "Legitimate Claim",
    prediction: "No Fraud (N)",
    confidence: "96.1%",
    status: "Verified & Approved"
  },
  {
    id: "CLM-2026-903",
    date: "2026-09-19 16:50",
    claimNumber: "2343168",
    driverAge: 28,
    accidentSite: "Parking Lot",
    totalClaim: "$32,074.03",
    fraudProbability: 91.5,
    riskLevel: "High Fraud Risk",
    prediction: "Fraud (Y)",
    confidence: "93.8%",
    status: "Under Audit"
  },
  {
    id: "CLM-2026-904",
    date: "2026-09-19 11:20",
    claimNumber: "974592",
    driverAge: 31,
    accidentSite: "Local",
    totalClaim: "$15,279.39",
    fraudProbability: 24.1,
    riskLevel: "Low Suspicion",
    prediction: "No Fraud (N)",
    confidence: "91.4%",
    status: "Verified & Approved"
  }
];

// Heuristic Risk Calculation Engine for Dynamic Insurance Fraud Evaluation
export function calculateFraudRisk(formData) {
  const safetyRating = Number(formData.safetyRating || 70);
  const formDefects = Number(formData.formDefects || 0);
  const totalClaim = Number(formData.totalClaim || 15000);
  const vehiclePrice = Number(formData.vehiclePrice || 20000);
  const pastClaims = Number(formData.pastNumOfClaims || 0);
  const witnessPresent = Number(formData.witnessPresent) === 1;
  const policeReport = Number(formData.policeReport) === 1;
  const addressChange = Number(formData.addressChange) === 1;
  const liabPrct = Number(formData.liabPrct || 50);
  const daysOpen = Number(formData.daysOpen || 5);

  let baseScore = 20; // Default baseline risk

  // Form defects penalty (huge indicator)
  if (formDefects >= 6) baseScore += 35;
  else if (formDefects >= 4) baseScore += 22;
  else if (formDefects >= 2) baseScore += 10;

  // Safety rating impact
  if (safetyRating < 45) baseScore += 18;
  else if (safetyRating < 65) baseScore += 10;
  else if (safetyRating > 85) baseScore -= 12;

  // Claim vs Vehicle Price anomaly
  const claimRatio = totalClaim / (vehiclePrice || 1);
  if (claimRatio > 1.4) baseScore += 24;
  else if (claimRatio > 1.0) baseScore += 14;
  else if (claimRatio < 0.3) baseScore -= 8;

  // Past claims history
  if (pastClaims >= 3) baseScore += 22;
  else if (pastClaims >= 1) baseScore += 10;

  // Evidence presence (Witness & Police report)
  if (!witnessPresent && !policeReport) baseScore += 14;
  if (witnessPresent && policeReport) baseScore -= 15;

  // Address change recently
  if (addressChange) baseScore += 8;

  // High liability percentage with high claim
  if (liabPrct > 75) baseScore += 8;

  // Days open anomaly (> 9 days)
  if (daysOpen > 9.5) baseScore += 7;

  // Clamp probability between 3.5% and 97.5%
  let probability = Math.min(Math.max(baseScore, 3.5), 97.5);
  probability = Number(probability.toFixed(1));

  let riskLevel = "Legitimate Claim";
  let prediction = "No Fraud (N)";
  
  if (probability >= 60) {
    riskLevel = "High Fraud Risk";
    prediction = "Fraud (Y)";
  } else if (probability >= 30) {
    riskLevel = "Moderate Suspicion";
    prediction = "No Fraud (N)";
  }

  // Calculate factor influences
  const factors = [
    {
      name: "Form Defects Count",
      val: `${formDefects} defects detected`,
      impact: formDefects >= 4 ? "High Fraud Indicator" : formDefects >= 2 ? "Moderate Risk" : "Clean Document",
      description: formDefects >= 4 ? "Multiple documentation defects and missing paperwork detected." : "Paperwork submitted with minimal or zero defect flags."
    },
    {
      name: "Total Claim vs Vehicle Value",
      val: `$${totalClaim.toLocaleString()} vs $${vehiclePrice.toLocaleString()} (${(claimRatio * 100).toFixed(0)}%)`,
      impact: claimRatio > 1.1 ? "High Fraud Indicator" : claimRatio > 0.7 ? "Moderate Risk" : "Normal Ratio",
      description: claimRatio > 1.1 ? "Requested claim amount significantly exceeds estimated vehicle market value." : "Claim amount is well aligned with vehicle valuation."
    },
    {
      name: "Driver Safety Rating",
      val: `${safetyRating} / 100`,
      impact: safetyRating < 55 ? "High Risk" : safetyRating < 75 ? "Moderate" : "Low Risk",
      description: safetyRating < 55 ? "Low safety score driver with frequent risk flags." : "High driver safety rating reduces overall fraud likelihood."
    },
    {
      name: "Evidence Verification (Witness/Police)",
      val: witnessPresent && policeReport ? "Both Available" : policeReport ? "Police Report Only" : witnessPresent ? "Witness Only" : "Neither Present",
      impact: !witnessPresent && !policeReport ? "High Risk Flag" : "Verified Evidence",
      description: !witnessPresent && !policeReport ? "Unverified incident without independent police report or eyewitness testimony." : "Independent verification supporting the claim details."
    }
  ];

  const confidence = (89 + (Math.abs(probability - 50) / 50) * 8.5).toFixed(1) + "%";

  return {
    probability,
    riskLevel,
    prediction,
    confidence,
    factors
  };
}
