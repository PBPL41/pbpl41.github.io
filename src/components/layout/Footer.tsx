import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-bfa-blue-dark text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/8d635ce6-d8ff-49b6-b9db-4e616cd26640.png" alt="Build for America Logo" className="h-10 w-auto bg-white p-1 rounded" />
              <span className="font-heading font-bold text-lg">Build for America</span>
            </Link>
            <p className="text-sm text-gray-300 mt-4">Advocating for zoning reform to create more affordable housing and stronger communities across America.</p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-policy" className="text-gray-300 hover:text-white transition-colors text-sm">About the Policy</Link>
              </li>
              <li>
                <Link to="/why-it-matters" className="text-gray-300 hover:text-white transition-colors text-sm">Why It Matters</Link>
              </li>
              <li>
                <Link to="/maps" className="text-gray-300 hover:text-white transition-colors text-sm">Interactive Maps</Link>
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
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors text-sm">Podcast</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors text-sm">Dear Colleague Letter</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Policy Brief</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ for Local Government</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-bfa-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-bfa-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-bfa-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-bfa-red transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {year} Build for America Coalition. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;