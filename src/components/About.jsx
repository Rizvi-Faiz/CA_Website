import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Our Firm</h1>
        
        <div className="text-left text-gray-700 leading-relaxed space-y-4">
          <p>
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
        </div>
      </div>
    </div>
  );
};

export default About;