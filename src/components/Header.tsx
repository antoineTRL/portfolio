import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Code, Heart, Award, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', icon: <Home size={16} />, href: '#home' },
  { name: 'À propos', icon: <User size={16} />, href: '#about' },
  { name: 'Parcours', icon: <Briefcase size={16} />, href: '#timeline' },
  { name: 'Compétences Tech.', icon: <Code size={16} />, href: '#tech-skills' },
  { name: 'Compétences H.', icon: <Heart size={16} />, href: '#soft-skills' },
  { name: 'Réalisations', icon: <Award size={16} />, href: '#projects' },
  { name: 'Contact', icon: <Mail size={16} />, href: '#contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            onClick={() => scrollToSection('#home')}
          >
            Portfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                <span className="opacity-70">{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-30 flex flex-col pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 py-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="flex items-center space-x-3 text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              <span className="opacity-70">{link.icon}</span>
              <span>{link.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;