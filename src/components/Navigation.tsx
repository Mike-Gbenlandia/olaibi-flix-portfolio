import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-netflix-bg/90 backdrop-blur-md border-b border-netflix-red/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bebas text-netflix-text hover:text-netflix-red transition-colors">
            Gbenga Michael Olaibi
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-netflix-text-muted hover:text-netflix-red transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('scriptwriting')}
              className="text-netflix-text-muted hover:text-netflix-red transition-colors"
            >
              Scriptwriting
            </button>
            <button
              onClick={() => scrollToSection('copywriting')}
              className="text-netflix-text-muted hover:text-netflix-red transition-colors"
            >
              Website Copy
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-netflix-text hover:text-netflix-red transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-netflix-red/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-netflix-text-muted hover:text-netflix-red transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('scriptwriting')}
                className="text-left text-netflix-text-muted hover:text-netflix-red transition-colors"
              >
                Scriptwriting
              </button>
              <button
                onClick={() => scrollToSection('copywriting')}
                className="text-left text-netflix-text-muted hover:text-netflix-red transition-colors"
              >
                Website Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};