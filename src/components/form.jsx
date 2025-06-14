import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Spinner component for loading state
const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    officeAddress: '',
    city: '',
    email: '',
    telephone: '',
    mobile: '',
    professionalUpdates: '',
    subjectOfQuery: '',
    query: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('submitting');
    
    try {
      const dataWithTimestamp = {
        ...formData,
        timestamp: new Date().toLocaleString()
      };
      
      const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_WEB_APP_URL;
      const formDataForSheet = new FormData();
      
      Object.keys(dataWithTimestamp).forEach(key => {
        formDataForSheet.append(key, dataWithTimestamp[key]);
      });
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataForSheet
      });
      
      if (response.ok) {
        setFormData({
          name: '',
          designation: '',
          organization: '',
          officeAddress: '',
          city: '',
          email: '',
          telephone: '',
          mobile: '',
          professionalUpdates: '',
          subjectOfQuery: '',
          query: '',
        });
        setSubmitStatus('success');
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-3xl animate-fadeIn border border-gray-300"
        aria-labelledby="form-title"
      >
        <h2 id="form-title" className="text-3xl font-semibold mb-8 text-white text-center">
          Query Form
        </h2>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div
            className="mb-6 p-4 bg-blue-100 border border-blue-200 text-blue-400 rounded-lg flex items-center animate-slideIn"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Form submitted successfully! Your query has been recorded.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div
            className="mb-6 p-4 bg-red-100 border border-red-200 text-red-600 rounded-lg flex items-center animate-slideIn"
            role="alert"
            aria-live="polite"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            There was an error submitting your form. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              required
              aria-required="true"
              aria-describedby="name-label"
            />
            <label
              htmlFor="name"
              id="name-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Name *
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="designation"
              id="designation"
              value={formData.designation}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              aria-describedby="designation-label"
            />
            <label
              htmlFor="designation"
              id="designation-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Designation
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="organization"
              id="organization"
              value={formData.organization}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              aria-describedby="organization-label"
            />
            <label
              htmlFor="organization"
              id="organization-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Organization
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="officeAddress"
              id="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              aria-describedby="officeAddress-label"
            />
            <label
              htmlFor="officeAddress"
              id="officeAddress-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Office Address
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              required
              aria-required="true"
              aria-describedby="city-label"
            />
            <label
              htmlFor="city"
              id="city-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              City *
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              required
              aria-required="true"
              aria-describedby="email-label"
            />
            <label
              htmlFor="email"
              id="email-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              E-mail address *
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              aria-describedby="telephone-label"
            />
            <label
              htmlFor="telephone"
              id="telephone-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Telephone No.
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              required
              aria-required="true"
              aria-describedby="mobile-label"
            />
            <label
              htmlFor="mobile"
              id="mobile-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Mobile *
            </label>
          </div>

          <div className="md:col-span-2 relative">
            <textarea
              name="professionalUpdates"
              id="professionalUpdates"
              value={formData.professionalUpdates}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100 resize-y"
              rows="3"
              aria-describedby="professionalUpdates-label"
            ></textarea>
            <label
              htmlFor="professionalUpdates"
              id="professionalUpdates-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Other professional updates
            </label>
          </div>

          <div className="md:col-span-2 relative">
            <input
              type="text"
              name="subjectOfQuery"
              id="subjectOfQuery"
              value={formData.subjectOfQuery}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100"
              required
              aria-required="true"
              aria-describedby="subjectOfQuery-label"
            />
            <label
              htmlFor="subjectOfQuery"
              id="subjectOfQuery-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Subject of Query *
            </label>
          </div>

          <div className="md:col-span-2 relative">
            <textarea
              name="query"
              id="query"
              value={formData.query}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 p-3 rounded-md focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-gray-100 resize-y"
              rows="5"
              required
              aria-required="true"
              aria-describedby="query-label"
            ></textarea>
            <label
              htmlFor="query"
              id="query-label"
              className="absolute top-3 left-2 text-blue-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500 peer-valid:-top-6 peer-valid:text-sm"
            >
              Query *
            </label>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link to="/#">
            <button
              type="button"
              className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-blue-400 rounded-lg hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              aria-label="Go back to previous page"
            >
              Back
            </button>
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center px-5 py-2.5 ${
              isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800 hover:scale-105'
            } text-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300`}
            aria-label={isSubmitting ? 'Submitting form' : 'Submit form'}
          >
            {isSubmitting && <Spinner />}
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;