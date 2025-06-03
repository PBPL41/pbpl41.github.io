
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-bfa-blue-dark text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/8d635ce6-d8ff-49b6-b9db-4e616cd26640.png" alt="Build for America Logo" className="h-10 w-auto bg-white p-1 rounded" />
              <span className="font-heading font-bold text-lg">Build for America</span>
            </Link>
            <p className="text-sm text-gray-300 mt-4">Advocating for zoning reform to create more affordable housing and stronger communities across America through a competitive federal grant program.</p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/why-it-matters" className="text-gray-300 hover:text-white transition-colors text-sm">Why It Matters</Link>
              </li>
              <li>
                <Link to="/about-policy" className="text-gray-300 hover:text-white transition-colors text-sm">About the Policy</Link>
              </li>
              <li>
                <Link to="/coalition" className="text-gray-300 hover:text-white transition-colors text-sm">Join the Coalition</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 transition-colors text-sm cursor-default">Podcast</span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors text-sm cursor-default">Dear Colleague Letter</span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors text-sm cursor-default">Policy Brief</span>
              </li>
              <li>
                <span className="text-gray-300 transition-colors text-sm cursor-default">FAQ for Local Governments</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <span className="text-white transition-colors cursor-default" aria-label="Facebook">
                <Facebook size={20} />
              </span>
              <span className="text-white transition-colors cursor-default" aria-label="Twitter">
                <Twitter size={20} />
              </span>
              <span className="text-white transition-colors cursor-default" aria-label="LinkedIn">
                <Linkedin size={20} />
              </span>
              <span className="text-white transition-colors cursor-default" aria-label="Email">
                <Mail size={20} />
              </span>
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {year} Build for America Coalition. All rights reserved.</p>
            <div className="flex space-x-8">
              <span className="transition-colors cursor-default">Privacy Policy</span>
              <span className="transition-colors cursor-default">Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
