import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/8d635ce6-d8ff-49b6-b9db-4e616cd26640.png" alt="Build for America Logo" className="h-10 w-auto" />
            <span className="font-heading font-bold text-xl hidden sm:inline">Build for America</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/about-policy" className="text-foreground hover:text-bfa-blue font-medium transition-colors">About the Policy</Link>
          <Link to="/why-it-matters" className="text-foreground hover:text-bfa-blue font-medium transition-colors">Why It Matters</Link>
          
          <Link to="/coalition" className="text-foreground hover:text-bfa-blue font-medium transition-colors">Join the Coalition</Link>
          
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

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="lg:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <nav className="container-wide flex flex-col py-4 space-y-4">
            <Link to="/about-policy" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>About the Policy</Link>
            <Link to="/why-it-matters" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Why It Matters</Link>
            <Link to="/maps" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Interactive Maps</Link>
            <Link to="/coalition" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Join the Coalition</Link>
            <Link to="/media" className="text-foreground hover:text-bfa-blue font-medium transition-colors" onClick={toggleMenu}>Campaign Media</Link>
            <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white w-full mt-4">Support Now</Button>
          </nav>
        </div>}
    </header>;
};
export default Header;