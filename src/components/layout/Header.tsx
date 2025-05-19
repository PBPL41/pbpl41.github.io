
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // City data for the dropdown menu
  const cityPages = [
    { name: "Boston, MA", path: "/cities/boston" },
    { name: "Los Angeles, CA", path: "/cities/los-angeles" },
    { name: "New York, NY", path: "/cities/new-york" },
    { name: "Portland, OR", path: "/cities/portland" },
    { name: "San Francisco, CA", path: "/cities/san-francisco" },
    { name: "Seattle, WA", path: "/cities/seattle" },
  ];

  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/8d635ce6-d8ff-49b6-b9db-4e616cd26640.png" alt="Build for America Logo" className="h-10 w-auto" />
            <span className="font-heading font-bold text-xl hidden sm:inline">Build for America</span>
          </Link>
        </div>

        {/* Desktop Navigation - Reordered as requested */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/why-it-matters" className="text-foreground hover:text-bfa-blue font-medium transition-colors">Why It Matters</Link>
          <Link to="/about-policy" className="text-foreground hover:text-bfa-blue font-medium transition-colors">About the Policy</Link>
          <Link to="/coalition" className="text-foreground hover:text-bfa-blue font-medium transition-colors">Join the Coalition</Link>
          
          {/* Zoning in Your Community Dropdown */}
          <Popover>
            <PopoverTrigger className="text-foreground hover:text-bfa-blue font-medium transition-colors flex items-center">
              Zoning in Your Community <ChevronDown className="ml-1 h-4 w-4" />
            </PopoverTrigger>
            <PopoverContent className="bg-white p-0 w-56">
              <div className="py-2">
                {cityPages.map((city) => (
                  <Link 
                    key={city.path} 
                    to={city.path} 
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-foreground hover:text-bfa-blue"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">Support Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Also reordered and including the dropdown items */}
      {isMenuOpen && <div className="lg:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <nav className="container-wide flex flex-col py-4 space-y-4">
            <Link to="/why-it-matters" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Why It Matters</Link>
            <Link to="/about-policy" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>About the Policy</Link>
            <Link to="/coalition" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Join the Coalition</Link>
            
            {/* Mobile dropdown section */}
            <div className="pl-0">
              <p className="text-foreground font-medium mb-2">Zoning in Your Community:</p>
              <div className="flex flex-col space-y-2 pl-4">
                {cityPages.map((city) => (
                  <Link 
                    key={city.path} 
                    to={city.path} 
                    className="text-foreground hover:text-bfa-blue text-sm transition-colors" 
                    onClick={toggleMenu}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white w-full mt-4">Support Now</Button>
          </nav>
        </div>}
    </header>;
};
export default Header;
