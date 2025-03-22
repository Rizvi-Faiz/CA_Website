import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon
import { FaEnvelope} from "react-icons/fa"; // Import phone icon


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="relative isolate overflow-hidden bg-gray-900 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Text */}
        <div className="flex items-center space-x-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-200 lg:h-200" 
          />
          <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
            VINAY NAVEEN & CO.<br />Chartered Accountants
          </div>
        </div>

        {/* Search Bar and Phone Number */}
        <div className="relative flex items-center flex-col">

          <div className="flex-col">

          <div>
          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 pl-10 border rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 md:w-80 lg:w-96"
          />
          <span className="absolute left-3 top-2 text-gray-500">🔍</span>
          </div>

          {/* Phone Number with Icon */}
          
          <div className="ml-6 flex items-center text-white font-semibold">
            <FaPhoneAlt className="mr-2 text-blue-400" />  {/* Phone icon */}
            +91-9784306503
            <FaEnvelope className="mr-4 ml-4 text-blue-400" />  {/* Phone icon */}
            +91-9784306503
          </div>

          

          

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
