import React from 'react';

const EVisitingCard = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      <div 
        className="relative z-10 h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Hide scrollbar for Chrome, Safari and Opera */}
        <style jsx>{`
          .relative.z-10::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-8 gap-6 p-6">
          {/* Left Side: Contact Details and Buttons */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 animate-fadeIn">
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 text-2xl font-bold">
                  CA
                </div>
                <div className="ml-4">
                  <h1 className="text-xl font-semibold text-black">VINAY NAVEEN & CO.</h1>
                  <p className="text-gray-500 text-sm">CHARTERED ACCOUNTANTS</p>
                </div>
              </div>
              <div className="mt-4 rounded-full overflow-hidden border-4 border-blue-400">
                <img src="/api/placeholder/120/120" alt="Profile of CA. (Dr) Vinay Mittal" className="w-24 h-24 object-cover" />
              </div>
              <h2 className="mt-2 text-black font-semibold text-lg">CA. (Dr) Vinay Mittal</h2>
            </div>

            {/* Basic Contact Details */}
            <div className="text-gray-500 mb-6 space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-black mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p>F-7 Nehru Nagar III, 2nd Floor, Ghaziabad, Uttar Pradesh, India-201001</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-black mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p>vncgzb@gmail.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-black mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 009-9m0 18a9 9 0 01-9-9"></path>
                </svg>
                <p>cavinaymittal.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-black mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p>+91 9910691575</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                className="flex items-center px-4 py-2 bg-gray-900 text-blue-400 rounded-lg hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300" 
                aria-label="Call CA. (Dr) Vinay Mittal"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call
              </button>
              <button 
                className="flex items-center px-4 py-2 bg-gray-900 text-blue-400 rounded-lg hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300" 
                aria-label="Message CA. (Dr) Vinay Mittal on WhatsApp"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z"></path>
                </svg>
                WhatsApp
              </button>
              <button 
                className="flex items-center px-4 py-2 bg-gray-900 text-blue-400 rounded-lg hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300" 
                aria-label="Get directions to Vinay Naveen & Co."
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Direction
              </button>
              <button 
                className="flex items-center px-4 py-2 bg-gray-900 text-blue-400 rounded-lg hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300" 
                aria-label="Email Vinay Naveen & Co."
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Mail
              </button>
            </div>
          </div>

          {/* Right Side: About Me */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-black border-b border-gray-300 pb-3 mb-4">About Me</h2>
            <p className="font-semibold text-black mb-2">
              CA. (Dr) Vinay Mittal, Managing Partner
            </p>
            <p className="text-sm text-gray-500 mb-2">
              B Com FCA, Cert Forensic Auditor (ICAI), Cert Concurrent Auditor (ICAI), PhD, Pursuing DISA
            </p>
            <p className="text-gray-500 mb-4">
              Vinay Naveen & Co. is a professionally managed firm of distinguished Chartered Accountants, Corporate Financial Advisers, and Tax Consultants. We offer sound financial advice and personalized services, keeping pace with industry developments to meet our clients' needs.
            </p>
            <div className="flex justify-center">
              <button 
                className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300" 
                aria-label="Read more about Vinay Naveen & Co."
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVisitingCard;