const UtilitiesPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tax Utilities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">GST Calculator</h2>
          <p className="mb-4">Calculate GST amounts for your invoices with this easy-to-use tool.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Income Tax Calculator</h2>
          <p className="mb-4">Estimate your income tax liability under different taxation regimes.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open Calculator</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">TDS Rate Finder</h2>
          <p className="mb-4">Find applicable TDS rates for different types of payments.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Check TDS Rates</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Due Date Calendar</h2>
          <p className="mb-4">Track important tax filing and payment due dates.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Calendar</button>
        </div>
      </div>
    </div>
  );

export default UtilitiesPage;