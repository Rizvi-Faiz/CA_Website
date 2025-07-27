import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">About Our Firm</h1>
        
        {/* Main content container with photo and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accounting team at work" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              {/* Optional overlay with company info */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded">
                <p className="text-sm font-semibold">Serving clients since 2010</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Founded in 2010, our Chartered Accountancy firm has been providing exceptional 
              financial services to businesses and individuals across the country. With a team of 
              qualified professionals and extensive experience in the field, we are committed to 
              delivering accurate, timely, and valuable financial solutions.
            </p>
            
            <p>
              Our expertise spans across various domains including tax planning and compliance, 
              audit and assurance, financial advisory, corporate law consultation, GST services, 
              and business valuation. We pride ourselves on staying updated with the latest 
              regulatory changes and industry best practices to ensure our clients receive the 
              highest quality of service.
            </p>
            
            <p>
              What sets us apart is our personalized approach. We believe in building long-term 
              relationships with our clients, understanding their unique requirements, and 
              tailoring our solutions accordingly. Whether you're a small business owner, a large 
              corporation, or an individual seeking tax guidance, our team is dedicated to helping 
              you achieve your financial goals with confidence.
            </p>

            {/* Key highlights */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Qualified Professionals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Personalized Service</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Latest Compliance Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;