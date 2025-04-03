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
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold bg-blue-800 text-white py-2 px-4 rounded inline-block">GST Calculator</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 border text-sm font-medium">Type Of Sale</th>
              <th className="p-2 border text-sm font-medium">Rate OF Tax</th>
              <th className="p-2 border text-sm font-medium">Taxable Amount</th>
              <th className="p-2 border text-sm font-medium">Total Tax Amount</th>
              <th className="p-2 border text-sm font-medium">IGST</th>
              <th className="p-2 border text-sm font-medium">CGST</th>
              <th className="p-2 border text-sm font-medium">SGST</th>
              <th className="p-2 border text-sm font-medium">Rate of Cess</th>
              <th className="p-2 border text-sm font-medium">CESS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-1 border">
                  <select 
                    className="w-full p-1 border rounded"
                    value={row.typeOfSale}
                    onChange={(e) => handleChange(row.id, 'typeOfSale', e.target.value)}
                  >
                    {typeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-1 border">
                  <select 
                    className="w-full p-1 border rounded"
                    value={row.rateOfTax}
                    onChange={(e) => handleChange(row.id, 'rateOfTax', e.target.value.replace('%', ''))}
                  >
                    {taxRateOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-1 border">
                  <input 
                    type="number" 
                    className="w-full p-1 border rounded"
                    value={row.taxableAmount}
                    onChange={(e) => handleChange(row.id, 'taxableAmount', e.target.value)}
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100"
                    value={row.totalTaxAmount}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100"
                    value={row.igst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100"
                    value={row.cgst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100"
                    value={row.sgst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="number" 
                    className="w-full p-1 border rounded"
                    value={row.rateOfCess}
                    onChange={(e) => handleChange(row.id, 'rateOfCess', e.target.value)}
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100"
                    value={row.cess}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="col-span-1">Total Amount: <span className="font-bold">{totals.totalAmount.toFixed(2)}</span></div>
        <div className="col-span-1">Total Tax: <span className="font-bold">{totals.totalTax.toFixed(2)}</span></div>
        <div className="col-span-1">Total IGST: <span className="font-bold">{totals.totalIGST.toFixed(2)}</span></div>
        <div className="col-span-1">Total CGST: <span className="font-bold">{totals.totalCGST.toFixed(2)}</span></div>
        <div className="col-span-1">Total SGST: <span className="font-bold">{totals.totalSGST.toFixed(2)}</span></div>
        <div className="col-span-1">Total CESS: <span className="font-bold">{totals.totalCESS.toFixed(2)}</span></div>
      </div>
      
      <div className="text-right mt-4">
        <button 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default GSTCalculator;