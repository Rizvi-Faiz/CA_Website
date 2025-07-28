import React, { useState } from 'react';

const EMICalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTenure: '',
    tenureType: 'years'
  });

  const [result, setResult] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEMI = () => {
    const principal = parseFloat(formData.loanAmount) || 0;
    const annualRate = parseFloat(formData.interestRate) || 0;
    const tenure = parseFloat(formData.loanTenure) || 0;

    if (principal <= 0 || annualRate <= 0 || tenure <= 0) return;

    // Convert annual rate to monthly rate
    const monthlyRate = annualRate / (12 * 100);
    
    // Convert tenure to months
    const tenureInMonths = formData.tenureType === 'years' ? tenure * 12 : tenure;

    // Calculate EMI using the formula: EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) / 
                (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

    const totalAmount = emi * tenureInMonths;
    const totalInterest = totalAmount - principal;

    // Generate amortization schedule
    const schedule = [];
    let remainingPrincipal = principal;
    
    for (let month = 1; month <= tenureInMonths; month++) {
      const interestPayment = remainingPrincipal * monthlyRate;
      const principalPayment = emi - interestPayment;
      remainingPrincipal -= principalPayment;

      schedule.push({
        month,
        emi: emi,
        principalPayment,
        interestPayment,
        remainingPrincipal: Math.max(0, remainingPrincipal)
      });
    }

    setResult({
      loanAmount: principal,
      interestRate: annualRate,
      tenure: tenureInMonths,
      emi,
      totalAmount,
      totalInterest,
      tenureInYears: tenureInMonths / 12
    });

    setAmortizationSchedule(schedule);
  };

  const handleReset = () => {
    setFormData({
      loanAmount: '',
      interestRate: '',
      loanTenure: '',
      tenureType: 'years'
    });
    setResult(null);
    setAmortizationSchedule([]);
    setShowSchedule(false);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-orange-800 mb-2">EMI Calculator</h2>
        <p className="text-gray-600">Calculate Equated Monthly Installments for your loan</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.loanAmount}
              onChange={(e) => handleInputChange('loanAmount', e.target.value)}
              placeholder="Enter loan amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (% per annum)
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.interestRate}
              onChange={(e) => handleInputChange('interestRate', e.target.value)}
              placeholder="Enter annual interest rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.loanTenure}
                onChange={(e) => handleInputChange('loanTenure', e.target.value)}
                placeholder="Enter tenure"
              />
              <select
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.tenureType}
                onChange={(e) => handleInputChange('tenureType', e.target.value)}
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateEMI}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Calculate EMI
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Quick Loan Types */}
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-3">Quick Loan Types</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => setFormData(prev => ({ ...prev, loanAmount: '2500000', interestRate: '8.5', loanTenure: '20', tenureType: 'years' }))}
                className="p-2 bg-white rounded border hover:bg-orange-100 text-left"
              >
                <div className="font-medium">Home Loan</div>
                <div className="text-gray-600">₹25L, 8.5%, 20Y</div>
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, loanAmount: '800000', interestRate: '10.5', loanTenure: '7', tenureType: 'years' }))}
                className="p-2 bg-white rounded border hover:bg-orange-100 text-left"
              >
                <div className="font-medium">Car Loan</div>
                <div className="text-gray-600">₹8L, 10.5%, 7Y</div>
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, loanAmount: '500000', interestRate: '12', loanTenure: '5', tenureType: 'years' }))}
                className="p-2 bg-white rounded border hover:bg-orange-100 text-left"
              >
                <div className="font-medium">Personal Loan</div>
                <div className="text-gray-600">₹5L, 12%, 5Y</div>
              </button>
              <button
                onClick={() => setFormData(prev => ({ ...prev, loanAmount: '1000000', interestRate: '9.5', loanTenure: '10', tenureType: 'years' }))}
                className="p-2 bg-white rounded border hover:bg-orange-100 text-left"
              >
                <div className="font-medium">Business Loan</div>
                <div className="text-gray-600">₹10L, 9.5%, 10Y</div>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          {result ? (
            <div className="space-y-6">
              {/* EMI Results */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">EMI Calculation Results</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {formatCurrency(result.emi)}
                    </div>
                    <div className="text-gray-600">Monthly EMI</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-lg font-semibold text-gray-800">
                        {formatCurrency(result.totalAmount)}
                      </div>
                      <div className="text-sm text-gray-600">Total Amount</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-lg font-semibold text-red-600">
                        {formatCurrency(result.totalInterest)}
                      </div>
                      <div className="text-sm text-gray-600">Total Interest</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-semibold">{formatCurrency(result.loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-semibold">{result.interestRate}% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Tenure:</span>
                      <span className="font-semibold">{result.tenureInYears} years ({result.tenure} months)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pie Chart Representation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Payment Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Principal Amount</span>
                        <span className="text-sm font-semibold">{formatCurrency(result.loanAmount)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(result.loanAmount / result.totalAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Interest Amount</span>
                        <span className="text-sm font-semibold">{formatCurrency(result.totalInterest)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${(result.totalInterest / result.totalAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amortization Schedule Button */}
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <p className="text-gray-600">Enter loan details and click "Calculate EMI" to see the results</p>
            </div>
          )}
        </div>
      </div>

      {/* Amortization Schedule */}
      {showSchedule && amortizationSchedule.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Amortization Schedule</h3>
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-orange-50">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Month</th>
                  <th className="border border-gray-300 p-3 text-left">EMI</th>
                  <th className="border border-gray-300 p-3 text-left">Principal</th>
                  <th className="border border-gray-300 p-3 text-left">Interest</th>
                  <th className="border border-gray-300 p-3 text-left">Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortizationSchedule.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{row.month}</td>
                    <td className="border border-gray-300 p-3">{formatCurrency(row.emi)}</td>
                    <td className="border border-gray-300 p-3 text-blue-600">{formatCurrency(row.principalPayment)}</td>
                    <td className="border border-gray-300 p-3 text-red-600">{formatCurrency(row.interestPayment)}</td>
                    <td className="border border-gray-300 p-3">{formatCurrency(row.remainingPrincipal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">EMI Formula & Tips:</h4>
        <div className="text-sm text-blue-700 space-y-2">
          <p><strong>EMI Formula:</strong> EMI = P × r × (1+r)^n / ((1+r)^n - 1)</p>
          <p>Where P = Principal, r = Monthly interest rate, n = Number of months</p>
          <ul className="mt-2 space-y-1">
            <li>• Lower interest rates result in lower EMIs</li>
            <li>• Longer tenure reduces EMI but increases total interest</li>
            <li>• Making prepayments can significantly reduce total interest</li>
            <li>• Consider your monthly income while choosing EMI amount</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
