import React, { useState } from 'react';

const TDSCalculator = () => {
  const [formData, setFormData] = useState({
    incomeType: 'salary',
    amount: '',
    panAvailable: 'yes',
    customRate: ''
  });

  const [result, setResult] = useState(null);

  // TDS rates for different income types
  const tdsRates = {
    salary: { withPAN: 0, withoutPAN: 0, description: 'Salary income (TDS as per tax slab)' },
    interest: { withPAN: 10, withoutPAN: 20, description: 'Interest on securities, deposits' },
    dividend: { withPAN: 10, withoutPAN: 20, description: 'Dividend income' },
    rent: { withPAN: 10, withoutPAN: 20, description: 'Rent payments' },
    professionalFees: { withPAN: 10, withoutPAN: 20, description: 'Professional/technical services' },
    commission: { withPAN: 5, withoutPAN: 20, description: 'Commission and brokerage' },
    contractorPayment: { withPAN: 1, withoutPAN: 20, description: 'Payments to contractors' },
    winnings: { withPAN: 30, withoutPAN: 30, description: 'Winnings from lottery, crossword puzzles' },
    insurance: { withPAN: 5, withoutPAN: 20, description: 'Insurance commission' },
    nsr: { withPAN: 30, withoutPAN: 30, description: 'Non-resident payments' },
    royalty: { withPAN: 10, withoutPAN: 20, description: 'Royalty payments' },
    buyback: { withPAN: 20, withoutPAN: 20, description: 'Buy-back of shares' }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTDS = () => {
    const amount = parseFloat(formData.amount) || 0;
    if (amount <= 0) return;

    let tdsRate = 0;
    let applicableThreshold = 0;

    // Get TDS rate based on income type and PAN availability
    if (formData.incomeType === 'custom' && formData.customRate) {
      tdsRate = parseFloat(formData.customRate) || 0;
    } else {
      const rateInfo = tdsRates[formData.incomeType];
      if (rateInfo) {
        tdsRate = formData.panAvailable === 'yes' ? rateInfo.withPAN : rateInfo.withoutPAN;
      }
    }

    // Set thresholds for different income types
    const thresholds = {
      salary: 0, // No threshold for salary
      interest: 40000, // Section 194A
      dividend: 5000, // Section 194
      rent: 240000, // Section 194I
      professionalFees: 30000, // Section 194J
      commission: 15000, // Section 194H
      contractorPayment: 30000, // Section 194C
      winnings: 10000, // Section 194B
      insurance: 15000, // Section 194D
      nsr: 0, // No threshold for NR
      royalty: 30000, // Section 194J
      buyback: 0, // No threshold
      custom: 0
    };

    applicableThreshold = thresholds[formData.incomeType] || 0;

    // Calculate TDS
    let tdsAmount = 0;

    if (amount > applicableThreshold) {
      if (formData.incomeType === 'salary') {
        // For salary, TDS is calculated based on projected annual income and tax slabs
        // This is a simplified calculation
        tdsAmount = 0; // Would need more complex calculation for salary TDS
      } else {
        tdsAmount = (amount * tdsRate) / 100;
      }
    }

    const netAmount = amount - tdsAmount;

    setResult({
      grossAmount: amount,
      tdsRate,
      applicableThreshold,
      tdsAmount,
      netAmount,
      incomeType: formData.incomeType,
      panStatus: formData.panAvailable
    });
  };

  const handleReset = () => {
    setFormData({
      incomeType: 'salary',
      amount: '',
      panAvailable: 'yes',
      customRate: ''
    });
    setResult(null);
  };

  const getSectionInfo = (incomeType) => {
    const sections = {
      salary: '192',
      interest: '194A',
      dividend: '194',
      rent: '194I',
      professionalFees: '194J',
      commission: '194H',
      contractorPayment: '194C',
      winnings: '194B',
      insurance: '194D',
      nsr: '195',
      royalty: '194J',
      buyback: '194LBA'
    };
    return sections[incomeType] || '';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800 mb-2">TDS Calculator</h2>
        <p className="text-gray-600">Calculate Tax Deducted at Source for various income types</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Income Type
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.incomeType}
              onChange={(e) => handleInputChange('incomeType', e.target.value)}
            >
              <option value="salary">Salary</option>
              <option value="interest">Interest on Securities/Deposits</option>
              <option value="dividend">Dividend</option>
              <option value="rent">Rent</option>
              <option value="professionalFees">Professional/Technical Fees</option>
              <option value="commission">Commission & Brokerage</option>
              <option value="contractorPayment">Contractor Payments</option>
              <option value="winnings">Winnings (Lottery, etc.)</option>
              <option value="insurance">Insurance Commission</option>
              <option value="nsr">Non-Resident Payments</option>
              <option value="royalty">Royalty</option>
              <option value="buyback">Buy-back of Shares</option>
              <option value="custom">Custom Rate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              placeholder="Enter the payment amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PAN Available
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.panAvailable}
              onChange={(e) => handleInputChange('panAvailable', e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.incomeType === 'custom' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom TDS Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.customRate}
                onChange={(e) => handleInputChange('customRate', e.target.value)}
                placeholder="Enter custom TDS rate"
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={calculateTDS}
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Calculate TDS
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Reset
            </button>
          </div>

          {/* TDS Rate Information */}
          {formData.incomeType !== 'custom' && tdsRates[formData.incomeType] && (
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">
                Section {getSectionInfo(formData.incomeType)} - {tdsRates[formData.incomeType].description}
              </h4>
              <div className="text-sm text-purple-700">
                <p>• With PAN: {tdsRates[formData.incomeType].withPAN}%</p>
                <p>• Without PAN: {tdsRates[formData.incomeType].withoutPAN}%</p>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div>
          {result ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">TDS Calculation Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross Amount:</span>
                  <span className="font-semibold">₹{result.grossAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Applicable Threshold:</span>
                  <span className="font-semibold">₹{result.applicableThreshold.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TDS Rate:</span>
                  <span className="font-semibold">{result.tdsRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">PAN Status:</span>
                  <span className="font-semibold">{result.panStatus === 'yes' ? 'Available' : 'Not Available'}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-gray-800">TDS Amount:</span>
                    <span className="font-bold text-red-600">₹{result.tdsAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-gray-800">Net Amount:</span>
                    <span className="font-bold text-green-600">₹{result.netAmount.toLocaleString()}</span>
                  </div>
                </div>
                {result.applicableThreshold > 0 && result.grossAmount <= result.applicableThreshold && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
                    <p className="text-sm">
                      <strong>No TDS applicable:</strong> Amount is below the threshold limit of ₹{result.applicableThreshold.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-600">Enter payment details and click "Calculate TDS" to see the results</p>
            </div>
          )}
        </div>
      </div>

      {/* TDS Rate Table */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">TDS Rates Quick Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-50">
                <th className="border border-gray-300 p-3 text-left">Income Type</th>
                <th className="border border-gray-300 p-3 text-left">Section</th>
                <th className="border border-gray-300 p-3 text-left">With PAN</th>
                <th className="border border-gray-300 p-3 text-left">Without PAN</th>
                <th className="border border-gray-300 p-3 text-left">Threshold</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(tdsRates).map(([key, value]) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{value.description}</td>
                  <td className="border border-gray-300 p-3">{getSectionInfo(key)}</td>
                  <td className="border border-gray-300 p-3">{value.withPAN}%</td>
                  <td className="border border-gray-300 p-3">{value.withoutPAN}%</td>
                  <td className="border border-gray-300 p-3">
                    {key === 'salary' ? 'As per tax slab' :
                     key === 'interest' ? '₹40,000' :
                     key === 'dividend' ? '₹5,000' :
                     key === 'rent' ? '₹2,40,000' :
                     key === 'professionalFees' ? '₹30,000' :
                     key === 'commission' ? '₹15,000' :
                     key === 'contractorPayment' ? '₹30,000' :
                     key === 'winnings' ? '₹10,000' :
                     key === 'insurance' ? '₹15,000' :
                     key === 'royalty' ? '₹30,000' :
                     'No threshold'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• TDS rates are higher when PAN is not provided</li>
          <li>• Different income types have different threshold limits</li>
          <li>• TDS is deducted only if payment exceeds the threshold limit</li>
          <li>• Rates shown are as per current Income Tax Act provisions</li>
          <li>• For salary TDS, calculation depends on projected annual income and tax slabs</li>
        </ul>
      </div>
    </div>
  );
};

export default TDSCalculator;
