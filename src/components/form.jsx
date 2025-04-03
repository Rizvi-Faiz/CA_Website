import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Query Form</h2>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            Form submitted successfully! Your query has been recorded.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            There was an error submitting your form. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Office Address</label>
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telephone No.</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile *</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Other professional updates</label>
            <textarea
              name="professionalUpdates"
              value={formData.professionalUpdates}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="3"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Subject of Query *</label>
            <input
              type="text"
              name="subjectOfQuery"
              value={formData.subjectOfQuery}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Query *</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="5"
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
        <Link to="/#">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Back
          </button>
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-4 py-2 rounded-md`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;