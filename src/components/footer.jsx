import React from 'react';
import { Twitter, Mail, MapPin, Phone, FacebookIcon, InstagramIcon, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Tax Planning', href: '#' },
    { name: 'Audit & Assurance', href: '#' },
    { name: 'GST Services', href: '#' },
    { name: 'Business Advisory', href: '#' },
    { name: 'Financial Reporting', href: '#' },
  ];

  const resources = [
    { name: 'Tax Calculators', href: '#' },
    { name: 'Forms & Downloads', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const company = [
    { name: 'About Us', href: '#About' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Client Testimonials', href: '#' },
  ];

  const legal = [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', color: 'text-blue-600' },
    { icon: InstagramIcon, href: '#', color: 'text-pink-500' },
    { icon: Linkedin, href: '#', color: 'text-blue-700' },
    { icon: Twitter, href: '#', color: 'text-blue-400' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@caservices.com', href: 'mailto:contact@caservices.com' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, text: '123 Financial District, Mumbai 400001, India', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo, description and social media */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full mr-3" />
              <span className="text-xl font-bold">CA SERVICES</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Providing expert financial guidance and comprehensive accounting solutions to help businesses and individuals navigate the complexities of taxation and financial management.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:opacity-80 transition-opacity`}
                  aria-label={`Visit our ${social.icon.name} page`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg text-white mb-6">Services</h3>
                <ul className="space-y-4">
                  {services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-white mb-6">Resources</h3>
                <ul className="space-y-4">
                  {resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-white mb-6">Company</h3>
                <ul className="space-y-4">
                  {company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-white mb-6">Legal</h3>
                <ul className="space-y-4">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info section */}
        <div className="border-t border-gray-800 pt-10 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CA Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-blue-400 text-sm">
                Terms of Service
              </a>
              <a href="/disclaimer" className="text-gray-500 hover:text-blue-400 text-sm">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
