import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [expandedServices, setExpandedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { name: 'Value Added Tax (VAT)', description: 'Expert assistance with VAT compliance and planning', href: '#', icon: 'TaxIcon', 
      details: [
        'VAT registration and filing assistance',
        'VAT audit support',
        'Input tax credit optimization',
        'VAT compliance reviews',
        'Cross-border VAT advisory'
      ]
    },
    { name: 'Service Tax', description: 'Comprehensive service tax solutions for businesses', href: '#', icon: 'ServiceIcon',
      details: [
        'Service tax applicability assessment',
        'Service tax filing and compliance',
        'Service tax exemptions and benefits',
        'Service tax reconciliations',
        'Service tax audits'
      ]
    },
    { name: 'Corporate Services', description: 'Full-range corporate service solutions for your business', href: '#', icon: 'CorporateIcon',
      details: [
        'Company incorporation',
        'Corporate restructuring',
        'Annual compliance management',
        'Corporate secretarial services',
        'Business advisory'
      ]
    },
    { name: 'Audit', description: 'Professional audit services to ensure compliance', href: '#', icon: 'AuditIcon',
      details: [
        'Statutory audits',
        'Internal audits',
        'Compliance audits',
        'Risk assessments',
        'Process improvement recommendations'
      ]
    },
    { name: 'Corporate Finance', description: 'Strategic financial planning and management', href: '#', icon: 'FinanceIcon',
      details: [
        'Financial modeling',
        'Valuation services',
        'Mergers and acquisitions',
        'Capital restructuring',
        'Investment analysis'
      ]
    },
    { name: 'Services for Non-Residents', description: 'Specialized tax services for non-residents', href: '#', icon: 'GlobalIcon',
      details: [
        'Non-resident tax compliance',
        'Double taxation avoidance',
        'Repatriation planning',
        'Foreign investment advisory',
        'Cross-border transaction structuring'
      ]
    },
    { name: 'Accounting Services', description: 'Reliable accounting solutions for your business', href: '#', icon: 'AccountingIcon',
      details: [
        'Bookkeeping services',
        'Financial statement preparation',
        'Accounts receivable/payable management',
        'Bank reconciliations',
        'Financial reporting'
      ]
    },
    { name: 'Payroll', description: 'Efficient payroll management and processing', href: '#', icon: 'PayrollIcon',
      details: [
        'Payroll processing',
        'Statutory compliance',
        'Employee tax management',
        'Salary structuring',
        'Payroll audits'
      ]
    },
    { name: 'Benefits of Outsourcing', description: 'Discover the advantages of outsourcing your tax needs', href: '#', icon: 'OutsourceIcon',
      details: [
        'Cost optimization',
        'Access to specialized expertise',
        'Focus on core business activities',
        'Improved compliance',
        'Scalable solutions'
      ]
    },
    { name: 'TDS', description: 'Tax Deducted at Source compliance and management', href: '#', icon: 'TdsIcon',
      details: [
        'TDS return filing',
        'TDS certificate issuance',
        'TDS reconciliations',
        'Lower deduction certificate assistance',
        'TDS assessment support'
      ]
    },
    { name: 'Corporate Governance', description: 'Best practices for effective corporate governance', href: '#', icon: 'GovernanceIcon',
      details: [
        'Governance structure design',
        'Compliance framework development',
        'Risk management advisory',
        'Board advisory services',
        'Corporate governance audits'
      ]
    },
    { name: 'GST', description: 'Goods and Services Tax expertise and advisory', href: '#', icon: 'GstIcon',
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
          // If there's a match in details or a strong match in name, auto-expand
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

  const renderIcon = (iconName) => {
    // This is a placeholder for actual icon implementation
    return (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {iconName.replace('Icon', '').charAt(0)}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Tax & Financial Services</h1>
      
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setSearchQuery('')}
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        {filteredProducts.length === 0 && (
          <p className="mt-2 text-sm text-gray-500 text-center">No services found matching "{searchQuery}"</p>
        )}
        {searchQuery && filteredProducts.length > 0 && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            Found {filteredProducts.length} {filteredProducts.length === 1 ? 'service' : 'services'} matching "{searchQuery}"
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((service) => {
          // Find the original index in the products array
          const originalIndex = products.findIndex(p => p.name === service.name);
          const isExpanded = expandedServices.includes(originalIndex);
          
          // Check if the search term matches any detail
          const matchesInDetails = searchQuery ? 
            service.details.filter(detail => 
              detail.toLowerCase().includes(searchQuery.toLowerCase())
            ) : [];
          
          return (
            <div 
              key={service.name}
              className={`rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
                isExpanded ? 'bg-blue-50 transform scale-102' : 'bg-white hover:shadow-lg'
              } ${searchQuery && (service.name.toLowerCase().includes(searchQuery.toLowerCase()) || matchesInDetails.length > 0) ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(originalIndex)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">
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
                    
                    <div className="mt-2 flex items-center text-sm text-blue-600">
                      <span>
                        {isExpanded ? 'View less' : 'Learn more'}
                      </span>
                      <svg 
                        className={`ml-2 h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Our {service.name} Services Include:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => {
                      // Highlight search terms in details if they match
                      const shouldHighlight = searchQuery && detail.toLowerCase().includes(searchQuery.toLowerCase());
                      
                      return (
                        <li key={idx} className={`flex items-start ${shouldHighlight ? 'bg-yellow-50 rounded-md p-1' : ''}`}>
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <a 
                      href={service.href} 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Request Service
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
          ? <mark key={i} className="bg-yellow-200 rounded px-1">{part}</mark> 
          : part
      )}
    </>
  );
}

export default ServicesPage;