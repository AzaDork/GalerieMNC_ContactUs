import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import logo from '/GalerieMNC_logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center h-24">
            <img 
              src={logo}
              alt="Galerie MNC" 
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com/galeriemnc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/galeriemnc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="/artistes" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Artistes
                  </a>
                </li>
                <li>
                  <a href="/oeuvres" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Oeuvres
                  </a>
                </li>
                <li>
                  <a href="/encadrement" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Encadrement
                  </a>
                </li>
                <li>
                  <a href="/nous-contacter" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    Nous Contacter
                  </a>
                </li>
                <li>
                  <a href="/a-propos" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
                    À Propos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '72px' }}
      >
        <nav className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://instagram.com/galeriemnc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com/galeriemnc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-500 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
          <ul className="space-y-6">
            <li>
              <a 
                href="/artistes" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Artistes
              </a>
            </li>
            <li>
              <a 
                href="/oeuvres" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Oeuvres
              </a>
            </li>
            <li>
              <a 
                href="/encadrement" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Encadrement
              </a>
            </li>
            <li>
              <a 
                href="/nous-contacter" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Nous Contacter
              </a>
            </li>
            <li>
              <a 
                href="/a-propos" 
                className="text-2xl font-light block py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                À Propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;