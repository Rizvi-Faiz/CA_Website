import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ServicesPage = () => {
  const [expandedServices, setExpandedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { name: 'Value Added Tax (VAT)', description: 'Expert assistance with VAT compliance and planning', icon: 'calculator', 
      details: [
        'VAT registration and filing assistance',
        'VAT audit support',
        'Input tax credit optimization',
        'VAT compliance reviews',
        'Cross-border VAT advisory'
      ]
    },
    { name: 'Service Tax', description: 'Comprehensive service tax solutions for businesses', icon: 'cash', 
      details: [
        'Service tax applicability assessment',
        'Service tax filing and compliance',
        'Service tax exemptions and benefits',
        'Service tax reconciliations',
        'Service tax audits'
      ]
    },
    { name: 'Corporate Services', description: 'Full-range corporate service solutions for your business', icon: 'building', 
      details: [
        'Company incorporation',
        'Corporate restructuring',
        'Annual compliance management',
        'Corporate secretarial services',
        'Business advisory'
      ]
    },
    { name: 'Audit', description: 'Professional audit services to ensure compliance', icon: 'check-circle', 
      details: [
        'Statutory audits',
        'Internal audits',
        'Compliance audits',
        'Risk assessments',
        'Process improvement recommendations'
      ]
    },
    { name: 'Corporate Finance', description: 'Strategic financial planning and management', icon: 'chart-bar', 
      details: [
        'Financial modeling',
        'Valuation services',
        'Mergers and acquisitions',
        'Capital restructuring',
        'Investment analysis'
      ]
    },
    { name: 'Services for Non-Residents', description: 'Specialized tax services for non-residents', icon: 'globe', 
      details: [
        'Non-resident tax compliance',
        'Double taxation avoidance',
        'Repatriation planning',
        'Foreign investment advisory',
        'Cross-border transaction structuring'
      ]
    },
    { name: 'Accounting Services', description: 'Reliable accounting solutions for your business', icon: 'book-open', 
      details: [
        'Bookkeeping services',
        'Financial statement preparation',
        'Accounts receivable/payable management',
        'Bank reconciliations',
        'Financial reporting'
      ]
    },
    { name: 'Payroll', description: 'Efficient payroll management and processing', icon: 'currency-rupee', 
      details: [
        'Payroll processing',
        'Statutory compliance',
        'Employee tax management',
        'Salary structuring',
        'Payroll audits'
      ]
    },
    { name: 'Benefits of Outsourcing', description: 'Discover the advantages of outsourcing your tax needs', icon: 'light-bulb', 
      details: [
        'Cost optimization',
        'Access to specialized expertise',
        'Focus on core business activities',
        'Improved compliance',
        'Scalable solutions'
      ]
    },
    { name: 'TDS', description: 'Tax Deducted at Source compliance and management', icon: 'document-text', 
      details: [
        'TDS return filing',
        'TDS certificate issuance',
        'TDS reconciliations',
        'Lower deduction certificate assistance',
        'TDS assessment support'
      ]
    },
    { name: 'Corporate Governance', description: 'Best practices for effective corporate governance', icon: 'shield-check', 
      details: [
        'Governance structure design',
        'Compliance framework development',
        'Risk management advisory',
        'Board advisory services',
        'Corporate governance audits'
      ]
    },
    { name: 'GST', description: 'Goods and Services Tax expertise and advisory', icon: 'shopping-cart', 
      details: [
        'GST registration',
        'GST return filing',
        'GST audits and reconciliations',
        'Input tax credit optimization',
        'GST refund management'
      ]
    }
  ];

  // Filter products based on search query and auto-expand matching services
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
      setExpandedServices([]); // Collapse all when search is cleared
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = [];
      const expandIndexes = [];
      
      products.forEach((service, index) => {
        const nameMatch = service.name.toLowerCase().includes(query);
        const descMatch = service.description.toLowerCase().includes(query);
        const detailsMatch = service.details.some(detail => detail.toLowerCase().includes(query));
        
        if (nameMatch || descMatch || detailsMatch) {
          filtered.push(service);
          if (detailsMatch || nameMatch) {
            expandIndexes.push(index);
          }
        }
      });
      
      setFilteredProducts(filtered);
      setExpandedServices(expandIndexes);
    }
  }, [searchQuery]);

  // Initialize filtered products with all products
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const toggleExpand = (index) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const handleRequestService = (serviceName) => {
    
    console.log(`Requesting service: ${serviceName}`);
    
    // Implement service request logic here (e.g., open a form, navigate to a page)
  };

  const renderIcon = (iconName) => {
    const icons = {
      calculator: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      cash: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      building: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'check-circle': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'chart-bar': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      globe: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      'book-open': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'currency-rupee': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 +[24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'light-bulb': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'document-text': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'shield-check': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      'shopping-cart': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    };

    return (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-black">
        {icons[iconName] || icons.calculator}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-white mb-10">Our Tax & Financial Services</h1>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-300"
              placeholder="Search for services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search for tax and financial services"
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                <svg className="h-5 w-5 text-blue-400 hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {filteredProducts.length === 0 && (
            <p className="mt-2 text-sm text-blue-200 text-center">No services found matching "{searchQuery}"</p>
          )}
          {searchQuery && filteredProducts.length > 0 && (
            <p className="mt-2 text-sm text-blue-200 text-center">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'service' : 'services'} matching "{searchQuery}"
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((service) => {
            const originalIndex = products.findIndex(p => p.name === service.name);
            const isExpanded = expandedServices.includes(originalIndex);
            
            const matchesInDetails = searchQuery ? 
              service.details.filter(detail => 
                detail.toLowerCase().includes(searchQuery.toLowerCase())
              ) : [];
            
            return (
              <div 
                key={service.name}
                className={`rounded-xl shadow-lg transition-all duration-300 overflow-hidden bg-white hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-400 ${
                  isExpanded ? 'bg-gray-100 transform scale-102' : ''
                } ${searchQuery && (service.name.toLowerCase().includes(searchQuery.toLowerCase()) || matchesInDetails.length > 0) ? 'ring-2 ring-blue-400' : ''}`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(originalIndex)}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={`Toggle details for ${service.name}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {renderIcon(service.icon)}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-black">
                        {searchQuery && service.name.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                          highlightText(service.name, searchQuery)
                        ) : (
                          service.name
                        )}
                      </h3>
                      <p className="mt-1 text-gray-500">
                        {searchQuery && service.description.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                          highlightText(service.description, searchQuery)
                        ) : (
                          service.description
                        )}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-blue-400">
                        <span>
                          {isExpanded ? 'View less' : 'Learn more'}
                        </span>
                        <svg 
                          className={`ml-2 h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-300">
                    <h4 className="text-lg font-semibold text-black mb-3">Our {service.name} Services Include:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => {
                        const shouldHighlight = searchQuery && detail.toLowerCase().includes(searchQuery.toLowerCase());
                        
                        return (
                          <li key={idx} className={`flex items-start ${shouldHighlight ? 'bg-blue-100 rounded-md p-1' : ''}`}>
                            <svg className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>
                              {shouldHighlight ? highlightText(detail, searchQuery) : detail}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-6">
                      <button 
                        onClick={() => handleRequestService(service.name)}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-blue-400 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                        aria-label={`Request ${service.name} service`}
                      >
                        Request Service
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function highlightText(text, query) {
  if (!query) return text;
  
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() 
          ? <mark key={i} className="bg-blue-200 rounded px-1">{part}</mark> 
          : part
      )}
    </>
  );
}

export default ServicesPage;