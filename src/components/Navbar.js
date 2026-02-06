import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedName, setTypedName] = useState('');
  const nameRef = useRef('MAXWEL');
  const cursorRef = useRef(null);

  const navItems = [
    { id: '/', label: 'Home', path: '/' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  // Typewriter effect for logo
  useEffect(() => {
    let index = 0;
    const typeName = () => {
      if (index < nameRef.current.length) {
        setTypedName(nameRef.current.substring(0, index + 1));
        index++;
        setTimeout(typeName, 150);
      }
    };

    setTimeout(typeName, 500);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Update active section based on route
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Maxwell_Kiprotich_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Portfolio download initiated');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20' 
            : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with Typewriter Effect */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-chakra tracking-wider">
                    {typedName}
                    <span 
                      className={`ml-1 text-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}
                      ref={cursorRef}
                    >_</span>
                  </h1>
                  <div className="hidden sm:block">
                    <span className="text-xs text-emerald-400 font-mono tracking-widest bg-gray-800/50 px-2 py-1 rounded">
                      DIGITAL ARCHITECT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <div className="flex space-x-6 xl:space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`relative group px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        activeSection === item.path
                          ? 'text-white'
                          : 'text-gray-400 hover:text-cyan-300'
                      }`}
                    >
                      <div className="relative z-10 flex items-center whitespace-nowrap">
                        <span className={`relative mr-3 transition-all duration-300 ${
                          activeSection === item.path ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100'
                        }`}>
                          {activeSection === item.path && (
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-lg rounded-full"></div>
                          )}
                          <span className="relative">
                            <Sparkles className={`w-3 h-3 ${activeSection === item.path ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'}`} />
                          </span>
                        </span>
                        {item.label}
                      </div>
                      
                      {/* Animated underline effect */}
                      <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                        activeSection === item.path 
                          ? 'w-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400' 
                          : 'w-0 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full'
                      }`} />
                      
                      {/* Glow effect for active item */}
                      {activeSection === item.path && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-sm"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Download CV Button - Enhanced with similar design */}
              <button
                onClick={handleDownloadCV}
                className="relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95 border border-gray-700"
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg p-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <div className="relative">
                    <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="hidden sm:inline bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold tracking-wide">
                    GET PORTFOLIO
                  </span>
                  <span className="sm:hidden bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
                    CV
                  </span>
                </div>
                
                {/* Sparkle effect */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-2 h-2 text-cyan-400" />
                </div>
              </button>
            </div>

            {/* Tablet Navigation (simplified) */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <div className="flex space-x-4">
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.path
                        ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.path && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-sm"></div>
                    )}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="relative px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-white rounded-lg border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={handleDownloadCV}
                className="relative px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 border border-gray-700"
              >
                <div className="relative z-10 flex items-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 rounded-lg bg-gray-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400 relative z-10" />
                ) : (
                  <Menu className="w-5 h-5 text-cyan-400 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-cyan-500/20 animate-slideDown">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative w-full text-left px-4 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                    activeSection === item.path
                      ? 'bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  {/* Active indicator */}
                  {activeSection === item.path && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-r-full"></div>
                  )}
                  
                  <div className="flex items-center">
                    <div className={`mr-3 transition-transform duration-300 ${
                      activeSection === item.path ? 'scale-125' : 'group-hover:scale-110'
                    }`}>
                      <Sparkles className={`w-3 h-3 ${activeSection === item.path ? 'text-cyan-400' : 'text-gray-600 group-hover:text-cyan-400'}`} />
                    </div>
                    <span className={`font-medium ${activeSection === item.path ? 'text-cyan-300' : ''}`}>
                      {item.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    {activeSection === item.path ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                      </div>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all duration-300" />
                    )}
                  </div>
                </Link>
              ))}
              
              <div className="pt-4 mt-3 border-t border-gray-800">
                <button
                  onClick={handleDownloadCV}
                  className="relative w-full px-6 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 border border-gray-700 group"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg p-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <Download className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
                    DOWNLOAD PORTFOLIO
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;