'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const scrolled = scrollY > 50;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <div className="h-12 w-12 relative">
              <Image
                src="/images/logo.jpg"
                alt="School Crest"
                fill
                className="object-contain rounded-full"
              />
            </div>
            
            <div className="ml-3">
              <h1 className="text-primary font-poppins font-bold text-xl">SoIT</h1>
              <p className="text-gray-600 text-xs">School of Information Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Departments', 'Programs', 'Admissions', 'Faculty', 'Research', 'Events', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#portal" className="btn-outline">
              Student Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
      }`}>
        <div className="px-4 py-2 space-y-1">
          {['Home', 'About', 'Departments', 'Programs', 'Admissions', 'Faculty', 'Research', 'Events', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              href="#portal" 
              className="block w-full text-center btn-outline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}