const BulletinsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tax Bulletins</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Latest Updates</h2>
        
        <div className="divide-y">
          <div className="py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-blue-600">Income Tax Return Filing Deadline Extended</h3>
                <p className="mt-1 text-sm">The CBDT has extended the due date for filing Income Tax Returns for AY 2025-26...</p>
              </div>
              <span className="text-sm text-gray-500">April 1, 2025</span>
            </div>
          </div>
          
          <div className="py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-blue-600">New GST Circular on E-invoicing</h3>
                <p className="mt-1 text-sm">The GST Council has issued a new circular regarding e-invoicing requirements...</p>
              </div>
              <span className="text-sm text-gray-500">March 28, 2025</span>
            </div>
          </div>
          
          <div className="py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-blue-600">Changes in TDS Provisions</h3>
                <p className="mt-1 text-sm">Important amendments to TDS provisions have been announced in the Finance Act...</p>
              </div>
              <span className="text-sm text-gray-500">March 15, 2025</span>
            </div>
          </div>
          
          <div className="py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-blue-600">Updated Form 16 Format Released</h3>
                <p className="mt-1 text-sm">The Income Tax Department has released an updated format for Form 16...</p>
              </div>
              <span className="text-sm text-gray-500">March 10, 2025</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Subscribe to Bulletins</h2>
        <p className="mb-4">Stay updated with the latest tax notifications and circulars directly in your inbox.</p>
        
        <div className="flex">
          <input type="email" placeholder="Your email address" className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Subscribe</button>
        </div>
      </div>
    </div>
  );

  export default BulletinsPage;