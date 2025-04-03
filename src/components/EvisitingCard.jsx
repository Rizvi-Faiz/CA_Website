import React from 'react';

const EVisitingCard = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-800">
      <div 
        className="relative z-10 h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'none',  /* Firefox */
          msOverflowStyle: 'none',  /* IE and Edge */
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Hide scrollbar for Chrome, Safari and Opera */}
        <style jsx>{`
          .relative.z-10::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="flex flex-col items-center p-6 mx-auto my-8 max-w-md bg-gray-900 bg-opacity-90 rounded-lg shadow-xl border border-gray-700">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center mb-2">
              <div className="w-16 h-16 bg-blue-600 rounded-md flex items-center justify-center text-white text-2xl font-bold">
                CA
              </div>
              <div className="ml-4 text-white">
                <h1 className="text-xl font-bold">VINAY NAVEEN & CO.</h1>
                <p className="text-gray-300 text-sm">CHARTERED ACCOUNTANTS</p>
              </div>
            </div>
            <div className="mt-4 rounded-full overflow-hidden border-4 border-blue-500">
              <img src="/api/placeholder/120/120" alt="Profile" className="w-24 h-24 object-cover" />
            </div>
            <h2 className="mt-2 text-white font-bold">CA. (Dr) Vinay Mittal</h2>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
            <button className="flex items-center px-4 py-2 bg-yellow-500 rounded-full text-white">
              <span className="mr-1">📞</span> Call
            </button>
            <button className="flex items-center px-4 py-2 bg-green-500 rounded-full text-white">
              <span className="mr-1">💬</span> Whatsapp
            </button>
            <button className="flex items-center px-4 py-2 bg-orange-500 rounded-full text-white">
              <span className="mr-1">📍</span> Direction
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-500 rounded-full text-white">
              <span className="mr-1">📧</span> Mail
            </button>
          </div>
          
          <div className="w-full space-y-3 text-white">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">📍</div>
              <p className="ml-3">F-7 Nehru Nagar III, 2nd Floor, Ghaziabad, Uttar Pradesh, India-201001.</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">📧</div>
              <p className="ml-3">vncgzb@gmail.com</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">🌐</div>
              <p className="ml-3">cavinaymittal.com</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">📱</div>
              <p className="ml-3">+91 9910691575, +91 9310556351</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">☎️</div>
              <p className="ml-3">+91-120-4120140</p>
            </div>
          </div>
          
          {/* Social Media and Actions */}
          <div className="w-full mt-6">
            <button className="w-full py-2 bg-teal-600 rounded text-white font-bold mb-4">
              ⬇️ Add to Phone Book
            </button>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white">f</a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white">t</a>
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">in</a>
              </div>
              <div className="flex">
                <input type="text" placeholder="Enter whatsapp number" className="py-1 px-2 text-sm rounded-l" />
                <button className="bg-green-500 text-white py-1 px-2 text-sm rounded-r">Share on Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Card - About Us */}
        <div className="mx-auto my-8 max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
          <h2 className="text-xl font-bold p-4 border-b border-gray-200">ABOUT US</h2>
          
          <div className="p-4">
            <p className="font-bold mb-2">
              CA. (Dr) VINAY MITTAL, Managing Partner, B Com FCA, Cert Forensic Auditor (ICAI), Cert Concurrent Auditor (ICAI), Phd., Pursuing DISA
            </p>
            
            <p className="mb-4 text-gray-700">
              VINAY NAVEEN & CO. is a professionally managed firm. The team consists of distinguished Chartered Accountants, Corporate Financial Advisers and Tax Consultants. The firm represents a combination of specialized skills, which are geared to offers sound financial advice and personalized proactive services. Those associated with the firm have regular interaction with industry and other professionals which enables the firm to keep pace with contemporary developments and to meet the needs of its clients.
            </p>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">WE ARE COMMITTED TO:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Place the Interest of Clients before ours.</li>
                <li>Uphold High Standards of Honesty and Integrity.</li>
                <li>Endeavour to Improve the Quality of Services.</li>
                <li>Excellence in Professional Services.</li>
                <li>Continuous Education and Training of Staff and Clients.</li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">Read More</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EVisitingCard;