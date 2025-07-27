import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeServices = () => {
  const navigate = useNavigate();

  const services = [
    { 
      name: 'GST', 
      description: 'Goods and Services Tax expertise and advisory',
      icon: 'shopping-cart',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Value Added Tax (VAT)', 
      description: 'Expert assistance with VAT compliance and planning',
      icon: 'calculator',
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Corporate Services', 
      description: 'Full-range corporate service solutions',
      icon: 'building',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Audit', 
      description: 'Professional audit services to ensure compliance',
      icon: 'check-circle',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Accounting Services', 
      description: 'Reliable accounting solutions for your business',
      icon: 'book-open',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      name: 'TDS', 
      description: 'Tax Deducted at Source compliance and management',
      icon: 'document-text',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const renderIcon = (iconName) => {
    const icons = {
      calculator: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      building: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'check-circle': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'book-open': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'document-text': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'shopping-cart': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    };

    return icons[iconName] || icons.calculator;
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'slategray' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services That We Offer
          </h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Comprehensive tax and financial solutions tailored to meet your business needs with expert guidance and professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-200"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {renderIcon(service.icon)}
              </div>
              
              {/* Service Name */}
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {service.name}
              </h3>
              
              {/* Service Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover effect indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <button 
            onClick={handleViewAllServices}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;