'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = '/' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && currentPage === '/') return true;
    if (path !== '/' && currentPage.includes(path.slice(1))) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="PT BUKIT CENDANA MUKTI" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-green-800">PT BUKIT CENDANA MUKTI</h1>
              <p className="text-xs text-green-600">Premium Corn Agriculture</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Beranda
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Tentang
            </Link>
            <Link 
              href="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Layanan
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Kontak
            </Link>
            <Link 
              href="/contact" 
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Hubungi Kami</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`font-medium ${
                  isActive('/') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/about" 
                className={`font-medium ${
                  isActive('/about') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/services" 
                className={`font-medium ${
                  isActive('/services') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium ${
                  isActive('/contact') ? 'text-green-800' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <Link 
                href="/contact" 
                className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}