import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedName, setTypedName] = useState('');
  const nameRef = useRef('MAXWELL');
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
        setTimeout(typeName, 150); // Typing speed
      }
    };

    // Start typing after mount
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
    
    // Optional: Add a toast notification instead of alert
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
                      className={`inline-block w-[2px] h-8 ml-1 bg-cyan-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}
                      ref={cursorRef}
                    />
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
                      className={`relative group px-3 py-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === item.path
                          ? 'text-cyan-300'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center whitespace-nowrap">
                        <span className={`text-cyan-400 mr-2 transition-all duration-300 ${
                          activeSection === item.path ? 'opacity-100' : 'opacity-0'
                        }`}>
                          //
                        </span>
                        {item.label}
                      </span>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent transition-all duration-300 ${
                        activeSection === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative z-10 flex items-center whitespace-nowrap">
                  <Download className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">GET PORTFOLIO</span>
                  <span className="sm:hidden">CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    className={`px-2 py-1 text-sm font-medium rounded transition-all duration-200 ${
                      activeSection === item.path
                        ? 'text-cyan-300 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={handleDownloadCV}
                className="px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
              >
                <span className="flex items-center">
                  <Download className="w-4 h-4" />
                </span>
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5 text-cyan-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-cyan-500/20 animate-slideDown">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    activeSection === item.path
                      ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
                    {activeSection === item.path && (
                      <span className="text-cyan-400 mr-3">//</span>
                    )}
                    {item.label}
                  </div>
                  {activeSection === item.path && (
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  )}
                </Link>
              ))}
              
              <div className="pt-4 mt-2 border-t border-gray-800">
                <button
                  onClick={handleDownloadCV}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>DOWNLOAD PORTFOLIO</span>
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