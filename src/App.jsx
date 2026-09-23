import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import LandingPage from './pages/LandingPage';
import LoanPredictionPage from './pages/LoanPredictionPage';
import PredictionResultPage from './pages/PredictionResultPage';
import ModelDashboardPage from './pages/ModelDashboardPage';
import DatasetEDAPage from './pages/DatasetEDAPage';
import MLPipelinePage from './pages/MLPipelinePage';
import ScratchAlgorithmPage from './pages/ScratchAlgorithmPage';
import ModelComparisonPage from './pages/ModelComparisonPage';
import PredictionHistoryPage from './pages/PredictionHistoryPage';
import AboutProjectPage from './pages/AboutProjectPage';
import { calculateFraudRisk } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Form State initialized with sample insurance fraud claim attributes
  const [formData, setFormData] = useState({
    claimNumber: '269568',
    ageOfDriver: 33,
    gender: 'M',
    maritalStatus: 1,
    safetyRating: 72,
    annualIncome: 35936,
    highEducation: 0,
    addressChange: 1,
    propertyStatus: 'Own',
    zipCode: '50006',
    claimDate: '2024-10-18',
    claimDayOfWeek: 'Friday',
    accidentSite: 'Local',
    pastNumOfClaims: 0,
    witnessPresent: 1,
    liabPrct: 45,
    channel: 'Phone',
    policeReport: 0,
    ageOfVehicle: 2,
    vehicleCategory: 'Medium',
    vehiclePrice: 23457,
    vehicleColor: 'black',
    totalClaim: 26707,
    injuryClaim: 7957,
    policyDeductible: 2000,
    annualPremium: 1415,
    daysOpen: 10,
    formDefects: 5
  });

  // Last Evaluated Result State using insurance fraud engine
  const [lastResult, setLastResult] = useState(() => calculateFraudRisk(formData));

  const renderActivePage = () => {
    switch (activeTab) {
      case 'overview':
        return <LandingPage setActiveTab={setActiveTab} />;
      case 'loan-prediction':
      case 'fraud-prediction':
        return (
          <LoanPredictionPage
            formData={formData}
            setFormData={setFormData}
            setLastResult={setLastResult}
            setActiveTab={setActiveTab}
          />
        );
      case 'prediction-result':
        return (
          <PredictionResultPage
            lastResult={lastResult}
            formData={formData}
            setActiveTab={setActiveTab}
          />
        );
      case 'model-dashboard':
        return <ModelDashboardPage />;
      case 'dataset-eda':
        return <DatasetEDAPage />;
      case 'ml-pipeline':
        return <MLPipelinePage />;
      case 'scratch-algorithm':
        return <ScratchAlgorithmPage />;
      case 'model-comparison':
        return <ModelComparisonPage />;
      case 'prediction-history':
        return <PredictionHistoryPage />;
      case 'about-project':
        return <AboutProjectPage />;
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EFF6FF] to-[#F8FAFC] dark:from-[#070708] dark:to-[#070708] dark:bg-[#070708] text-[#475569] dark:text-[#e5e2e3] flex flex-col md:flex-row transition-colors duration-300">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isDarkMode={isDarkMode}
      />

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}
