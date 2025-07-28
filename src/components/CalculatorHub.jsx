import React, { useState } from 'react';
import GSTCalculator from './calculators/GSTCalculator';
import TaxCalculator from './calculators/TaxCalculator';
import TDSCalculator from './calculators/TDSCalculator';
import EMICalculator from './calculators/EMICalculator';

const CalculatorHub = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const calculators = [
    {
      id: 'gst',
      name: 'GST Calculator',
      description: 'Calculate GST, CGST, SGST, IGST and Cess',
      icon: '📊',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'tax',
      name: 'Income Tax Calculator',
      description: 'Calculate income tax based on different slabs',
      icon: '💰',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'tds',
      name: 'TDS Calculator',
      description: 'Calculate Tax Deducted at Source',
      icon: '🧾',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'emi',
      name: 'EMI Calculator',
      description: 'Calculate Equated Monthly Installments',
      icon: '🏠',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'gst':
        return <GSTCalculator />;
      case 'tax':
        return <TaxCalculator />;
      case 'tds':
        return <TDSCalculator />;
      case 'emi':
        return <EMICalculator />;
      default:
        return null;
    }
  };

  if (selectedCalculator) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <button
              onClick={() => setSelectedCalculator(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Calculator Hub
            </button>
          </div>
          {renderCalculator()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calculator Hub</h1>
          <p className="text-xl text-gray-600">Choose from our collection of financial calculators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calculator) => (
            <div
              key={calculator.id}
              onClick={() => setSelectedCalculator(calculator.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`${calculator.color} text-white p-6 text-center`}>
                <div className="text-4xl mb-3">{calculator.icon}</div>
                <h3 className="text-xl font-semibold">{calculator.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">{calculator.description}</p>
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    Open Calculator
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">All our calculators use the latest tax rates and formulas to ensure accurate results.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple and intuitive interface designed for both professionals and individuals.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive</h3>
              <p className="text-gray-600">Covers all major financial calculations you need for tax planning and compliance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free to Use</h3>
              <p className="text-gray-600">All calculators are completely free with no hidden charges or registration required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHub;
