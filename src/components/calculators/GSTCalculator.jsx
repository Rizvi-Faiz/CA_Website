import React, { useState } from 'react';

const GSTCalculator = () => {
  const [rows, setRows] = useState([
    { id: 1, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 2, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 3, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 4, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 5, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 6, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
  ]);

  const typeOptions = ['Inter State Sale', 'Intra State Sale'];
  const taxRateOptions = ['select...', '5%', '12%', '18%', '28%'];

  const handleChange = (id, field, value) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        const updatedRow = { ...row, [field]: value };
        
        // Calculate taxes based on input values
        if (field === 'taxableAmount' || field === 'rateOfTax') {
          const taxableAmount = parseFloat(updatedRow.taxableAmount) || 0;
          const taxRate = parseFloat(updatedRow.rateOfTax) || 0;
          
          if (updatedRow.typeOfSale === 'Inter State Sale') {
            const igstAmount = (taxableAmount * taxRate / 100).toFixed(2);
            updatedRow.igst = igstAmount;
            updatedRow.cgst = '0.00';
            updatedRow.sgst = '0.00';
            updatedRow.totalTaxAmount = igstAmount;
          } else {
            const halfTaxRate = taxRate / 2;
            const cgstAmount = (taxableAmount * halfTaxRate / 100).toFixed(2);
            const sgstAmount = cgstAmount;
            updatedRow.igst = '0.00';
            updatedRow.cgst = cgstAmount;
            updatedRow.sgst = sgstAmount;
            updatedRow.totalTaxAmount = (parseFloat(cgstAmount) + parseFloat(sgstAmount)).toFixed(2);
          }
          
          // Calculate cess if rate is provided
          const cessRate = parseFloat(updatedRow.rateOfCess) || 0;
          if (cessRate > 0) {
            updatedRow.cess = (taxableAmount * cessRate / 100).toFixed(2);
          }
        }
        
        if (field === 'rateOfCess') {
          const taxableAmount = parseFloat(updatedRow.taxableAmount) || 0;
          const cessRate = parseFloat(value) || 0;
          updatedRow.cess = (taxableAmount * cessRate / 100).toFixed(2);
        }
        
        return updatedRow;
      }
      return row;
    });
    
    setRows(updatedRows);
  };

  const calculateTotals = () => {
    return rows.reduce(
      (totals, row) => {
        return {
          totalAmount: totals.totalAmount + (parseFloat(row.taxableAmount) || 0),
          totalTax: totals.totalTax + (parseFloat(row.totalTaxAmount) || 0),
          totalIGST: totals.totalIGST + (parseFloat(row.igst) || 0),
          totalCGST: totals.totalCGST + (parseFloat(row.cgst) || 0),
          totalSGST: totals.totalSGST + (parseFloat(row.sgst) || 0),
          totalCESS: totals.totalCESS + (parseFloat(row.cess) || 0),
        };
      },
      { totalAmount: 0, totalTax: 0, totalIGST: 0, totalCGST: 0, totalSGST: 0, totalCESS: 0 }
    );
  };

  const totals = calculateTotals();

  const handleReset = () => {
    setRows(rows.map(row => ({
      ...row, 
      rateOfTax: '', 
      taxableAmount: '', 
      totalTaxAmount: '', 
      igst: '', 
      cgst: '', 
      sgst: '', 
      rateOfCess: '', 
      cess: ''
    })));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">GST Calculator</h2>
        <p className="text-gray-600">Calculate GST, CGST, SGST, IGST and Cess for your transactions</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">Type Of Sale</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">Rate OF Tax</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">Taxable Amount</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">Total Tax Amount</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">IGST</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">CGST</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">SGST</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">Rate of Cess</th>
              <th className="p-3 border border-gray-300 text-sm font-semibold text-gray-700">CESS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300">
                  <select 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={row.typeOfSale}
                    onChange={(e) => handleChange(row.id, 'typeOfSale', e.target.value)}
                  >
                    {typeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border border-gray-300">
                  <select 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={row.rateOfTax}
                    onChange={(e) => handleChange(row.id, 'rateOfTax', e.target.value.replace('%', ''))}
                  >
                    {taxRateOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={row.taxableAmount}
                    onChange={(e) => handleChange(row.id, 'taxableAmount', e.target.value)}
                    placeholder="0.00"
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    value={row.totalTaxAmount}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    value={row.igst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    value={row.cgst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    value={row.sgst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={row.rateOfCess}
                    onChange={(e) => handleChange(row.id, 'rateOfCess', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td className="p-2 border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                    value={row.cess}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-sm text-gray-600">Total Amount</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalAmount.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Total Tax</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalTax.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Total IGST</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalIGST.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Total CGST</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalCGST.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Total SGST</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalSGST.toFixed(2)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Total CESS</div>
          <div className="text-lg font-bold text-gray-800">₹{totals.totalCESS.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-600">
          <p>• Inter State Sale: IGST applicable</p>
          <p>• Intra State Sale: CGST + SGST applicable</p>
        </div>
        <button 
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          onClick={handleReset}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default GSTCalculator;
