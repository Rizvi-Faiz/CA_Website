"use client";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're on the home page, scroll smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-200 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8"
      >
        {/* Mobile menu button - moved to left side */}
        <div className="absolute left-4 flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex lg:gap-x-8 justify-center">
          <Link 
            to="/" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
            aria-label="Go to home page"
          >
            <HomeIcon className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
            Home
          </Link>

          <Link 
            to="/services" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Services
          </Link>

          <Link 
            to="/knowledge-bank" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Knowledge Bank
          </Link>

          {/* Fixed About Us with smooth scrolling */}
          <button
            onClick={() => handleScrollToSection('about')}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            About Us
          </button>
          
          <Link 
            to="/EVisitingCard" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            E-Visiting Card
          </Link>
          
          <Link 
            to="/news" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            News and Updates
          </Link>
          
          <Link 
            to="/tax-deadline-alerts" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Tax Deadlines
          </Link>
          <Link 
            to="/query" 
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out bg-blue-500 text-white"
          >
            Query
          </Link>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Go to home page"
                >
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
                    Home
                  </div>
                </Link>

                <Link
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/knowledge-bank"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Knowledge Bank
                </Link>

                {/* Fixed About Us for mobile */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection('about');
                  }}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </button>
                
                <Link
                  to="/EVisitingCard"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-Visiting Card
                </Link>
                
                <Link
                  to="/news"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News and Updates
                </Link>
                
                <Link
                  to="/tax-deadline-alerts"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tax Deadlines
                </Link>
                <Link
                  to="/query"
                  className="block rounded-lg px-3 py-2 text-base font-semibold transition duration-150 ease-in-out bg-blue-500 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Query
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
