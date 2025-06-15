import React, { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">US</span>
            </div>
            <span className="text-white font-semibold text-lg">Udaya Shankhi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeItem === item 
                    ? 'text-white border-b-2 border-purple-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => {
                  setActiveItem(item);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
