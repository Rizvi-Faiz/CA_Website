const ActsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tax Acts & Legislations</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Major Tax Acts</h2>
        
        <div className="space-y-4">
          <div className="p-4 border rounded hover:bg-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Income Tax Act, 1961</h3>
              <p className="text-sm text-gray-600">Comprehensive legislation governing income taxation in India</p>
            </div>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Goods and Services Tax Act, 2017</h3>
              <p className="text-sm text-gray-600">Law governing the goods and services tax in India</p>
            </div>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Companies Act, 2013</h3>
              <p className="text-sm text-gray-600">Regulates incorporation and management of companies in India</p>
            </div>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Limited Liability Partnership Act, 2008</h3>
              <p className="text-sm text-gray-600">Legislation governing LLPs in India</p>
            </div>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Foreign Exchange Management Act, 1999</h3>
              <p className="text-sm text-gray-600">Law governing foreign exchange transactions in India</p>
            </div>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search Acts by Keyword</h2>
        <div className="flex">
          <input type="text" placeholder="Enter keyword" className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Search</button>
        </div>
      </div>
    </div>
  );

export default ActsPage;