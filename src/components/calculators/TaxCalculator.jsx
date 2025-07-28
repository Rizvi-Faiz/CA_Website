import React, { useState } from 'react';

const TaxCalculator = () => {
  const [formData, setFormData] = useState({
    annualIncome: '',
    age: 'below60',
    regime: 'new',
    deductions: {
      section80C: '',
      section80D: '',
      section80G: '',
      section80E: '',
      section80TTA: '',
      houseRent: '',
      homeLoanInterest: ''
    }
  });

  const [result, setResult] = useState(null);

  // Tax slabs for different regimes and age groups
  const taxSlabs = {
    new: {
      below60: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 5 },
        { min: 500000, max: 750000, rate: 10 },
        { min: 750000, max: 1000000, rate: 15 },
        { min: 1000000, max: 1250000, rate: 20 },
        { min: 1250000, max: 1500000, rate: 25 },
        { min: 1500000, max: Infinity, rate: 30 }
      ]
    },
    old: {
      below60: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 5 },
        { min: 500000, max: 1000000, rate: 20 },
        { min: 1000000, max: Infinity, rate: 30 }
      ],
      senior: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 500000, rate: 5 },
        { min: 500000, max: 1000000, rate: 20 },
        { min: 1000000, max: Infinity, rate: 30 }
      ],
      superSenior: [
        { min: 0, max: 500000, rate: 0 },
        { min: 500000, max: 1000000, rate: 20 },
        { min: 1000000, max: Infinity, rate: 30 }
      ]
    }
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateTax = () => {
    const income = parseFloat(formData.annualIncome) || 0;
    if (income <= 0) return;

    let taxableIncome = income;
    let totalDeductions = 0;

    // Calculate deductions for old regime
    if (formData.regime === 'old') {
      const deductions = Object.values(formData.deductions).reduce((sum, deduction) => {
        return sum + (parseFloat(deduction) || 0);
      }, 0);
      totalDeductions = Math.min(deductions, 150000); // Standard deduction limit
      taxableIncome = Math.max(0, income - totalDeductions);
    }

    // Get appropriate tax slab
    let slabs;
    if (formData.regime === 'new') {
      slabs = taxSlabs.new.below60;
    } else {
      const ageCategory = formData.age === 'senior' ? 'senior' : 
                         formData.age === 'superSenior' ? 'superSenior' : 'below60';
      slabs = taxSlabs.old[ageCategory];
    }

    // Calculate tax
    let tax = 0;
    let remainingIncome = taxableIncome;

    for (const slab of slabs) {
      if (remainingIncome <= 0) break;
      
      const taxableInThisSlab = Math.min(remainingIncome, slab.max - slab.min);
      tax += (taxableInThisSlab * slab.rate) / 100;
      remainingIncome -= taxableInThisSlab;
    }

    // Add cess (4% on tax)
    const cess = tax * 0.04;
    const totalTax = tax + cess;

    // Calculate effective tax rate
    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;

    setResult({
      grossIncome: income,
      totalDeductions,
      taxableIncome,
      incomeTax: tax,
      cess,
      totalTax,
      netIncome: income - totalTax,
      effectiveRate
    });
  };

  const handleReset = () => {
    setFormData({
      annualIncome: '',
      age: 'below60',
      regime: 'new',
      deductions: {
        section80C: '',
        section80D: '',
        section80G: '',
        section80E: '',
        section80TTA: '',
        houseRent: '',
        homeLoanInterest: ''
      }
    });
    setResult(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Income Tax Calculator</h2>
        <p className="text-gray-600">Calculate your income tax based on current tax slabs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Income (₹)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.annualIncome}
              onChange={(e) => handleInputChange('annualIncome', e.target.value)}
              placeholder="Enter your annual income"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age Category
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
            >
              <option value="below60">Below 60 years</option>
              <option value="senior">60-80 years (Senior Citizen)</option>
              <option value="superSenior">Above 80 years (Super Senior Citizen)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax Regime
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.regime}
              onChange={(e) => handleInputChange('regime', e.target.value)}
            >
              <option value="new">New Tax Regime</option>
              <option value="old">Old Tax Regime</option>
            </select>
          </div>

          {/* Deductions (only for old regime) */}
          {formData.regime === 'old' && (
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Deductions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Section 80C (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.deductions.section80C}
                    onChange={(e) => handleInputChange('deductions.section80C', e.target.value)}
                    placeholder="Max 1,50,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Section 80D (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.deductions.section80D}
                    onChange={(e) => handleInputChange('deductions.section80D', e.target.value)}
                    placeholder="Health Insurance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    House Rent (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.deductions.houseRent}
                    onChange={(e) => handleInputChange('deductions.houseRent', e.target.value)}
                    placeholder="HRA Exemption"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Loan Interest (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.deductions.homeLoanInterest}
                    onChange={(e) => handleInputChange('deductions.homeLoanInterest', e.target.value)}
                    placeholder="Section 24(b)"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={calculateTax}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Calculate Tax
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          {result ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Calculation Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross Annual Income:</span>
                  <span className="font-semibold">₹{result.grossIncome.toLocaleString()}</span>
                </div>
                {formData.regime === 'old' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Deductions:</span>
                    <span className="font-semibold text-green-600">-₹{result.totalDeductions.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxable Income:</span>
                  <span className="font-semibold">₹{result.taxableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Income Tax:</span>
                  <span className="font-semibold">₹{result.incomeTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Health & Education Cess (4%):</span>
                  <span className="font-semibold">₹{result.cess.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-gray-800">Total Tax:</span>
                    <span className="font-bold text-red-600">₹{result.totalTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-gray-800">Net Income:</span>
                    <span className="font-bold text-green-600">₹{result.netIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Tax Rate:</span>
                    <span className="font-semibold">{result.effectiveRate.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600">Enter your income details and click "Calculate Tax" to see the results</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• New Tax Regime: Lower tax rates but no deductions allowed</li>
          <li>• Old Tax Regime: Higher tax rates but various deductions available</li>
          <li>• Senior Citizens (60-80 years) get higher basic exemption limit</li>
          <li>• Super Senior Citizens (80+ years) get even higher exemption limit</li>
          <li>• Health & Education Cess is 4% of the calculated income tax</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxCalculator;
