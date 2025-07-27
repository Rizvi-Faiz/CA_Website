import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Social media links - Replace these with your actual profile URLs
  const socialLinks = {
    whatsapp: "https://wa.me/919784306503", // WhatsApp with your phone number
    instagram: "https://instagram.com/your-instagram-handle", // Replace with your Instagram handle
    linkedin: "https://linkedin.com/company/your-company", // Replace with your LinkedIn company page
    facebook: "https://facebook.com/your-facebook-page", // Replace with your Facebook page
    twitter: "https://twitter.com/your-twitter-handle" // Replace with your Twitter handle
  };

  // Function to handle social media link clicks
  const handleSocialClick = (platform, url) => {
    // Open the social media link in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="relative isolate overflow-hidden bg-gray-900 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Text */}
        <Link to="/" className="block">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
            />
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
              VINAY NAVEEN & CO.
              <br />
              Chartered Accountants
            </div>
          </div>
        </Link>

        {/* Social Media Icons and Contact Info */}
        <div className="relative flex flex-col items-center">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mb-4">
            {/* WhatsApp */}
            <button
              onClick={() => handleSocialClick('whatsapp', socialLinks.whatsapp)}
              className="text-green-400 hover:text-green-300 transform hover:scale-110 transition-all duration-200"
              aria-label="Contact us on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleSocialClick('instagram', socialLinks.instagram)}
              className="text-pink-400 hover:text-pink-300 transform hover:scale-110 transition-all duration-200"
              aria-label="Follow us on Instagram"
              title="Instagram"
            >
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleSocialClick('linkedin', socialLinks.linkedin)}
              className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-200"
              aria-label="Connect with us on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleSocialClick('facebook', socialLinks.facebook)}
              className="text-blue-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-200"
              aria-label="Like us on Facebook"
              title="Facebook"
            >
              <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Twitter */}
            <button
              onClick={() => handleSocialClick('twitter', socialLinks.twitter)}
              className="text-sky-400 hover:text-sky-300 transform hover:scale-110 transition-all duration-200"
              aria-label="Follow us on Twitter"
              title="Twitter"
            >
              <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Phone Number and Email with Icons */}
          <div className="flex items-center text-white font-semibold text-sm sm:text-base">
            {/* Phone */}
            <div className="flex items-center mr-6">
              <FaPhoneAlt className="mr-2 text-blue-400" />
              <a 
                href="tel:+919784306503" 
                className="hover:text-blue-400 transition-colors duration-200"
              >
                +91-9784306503
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a 
                href="mailto:vncgzb@gmail.com" 
                className="hover:text-blue-400 transition-colors duration-200"
              >
                vncgzb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;