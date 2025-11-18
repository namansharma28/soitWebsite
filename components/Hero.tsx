'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/new_slide1.jpg',
      title: 'Build the Future with Technology',
      subtitle: 'Leading IT education for over 25 years'
    },
    {
      image: '/images/campus2.jpg',
      title: 'Innovation Meets Excellence',
      subtitle: 'State-of-the-art labs and research facilities'
    },
    {
      image: '/images/campus3.jpg',
      title: 'Shape Your Career',
      subtitle: '95% placement rate with top tech companies'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary-dark to-primary">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary-dark/95 to-primary/90"></div>
            </div>
          </div>
        ))}

        {/* Animated geometric shapes and particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float-slow"></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid-pattern"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-particle-1"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-accent/30 rounded-full animate-particle-3"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-particle-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-gray-500">
            <div className="mb-4 fade-up">
              <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎓 Ranked Among Top IT Institutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-up leading-tight">
              School of Information Technology
              <span className="block text-secondary mt-2">RGPV Bhopal</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-2xl fade-up text-gray-700" style={{ transitionDelay: '0.1s' }}>
              Empowering the next generation of tech innovators with cutting-edge education,
              world-class research opportunities, and strong industry connections.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-sm">AICTE Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm">NBA Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">ISO Certified</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 fade-up" style={{ transitionDelay: '0.3s' }}>
              <Link href="#admissions" className="btn-primary bg-accent text-white hover:bg-accent-dark transform hover:scale-105 transition-all shadow-lg">
                Apply Now for 2024-25
              </Link>
              <Link href="#programs" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
                Explore Programs
              </Link>
              <Link href="#virtual-tour" className="flex items-center space-x-2 text-white hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="underline">Virtual Campus Tour</span>
              </Link>
            </div>

            <div className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 text-sm border border-white/20 fade-up" style={{ transitionDelay: '0.4s' }}>
              <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span><span className="font-semibold">Admissions Open:</span> Applications for 2024-25 academic year</span>
            </div>
          </div>

          {/* Right Column - Enhanced Stats Card */}
          <div className="lg:col-span-5 fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Campus Photo */}
              <div className="relative h-56 w-full">
                <Image
                  src="/images/new_slide1.jpg"
                  alt="RGPV Campus"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Est. 1998
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">Why Choose SoIT?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-primary mb-1">25+</div>
                    <div className="text-xs text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-accent mb-1">50+</div>
                    <div className="text-xs text-gray-600">Expert Faculty</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-primary mb-1">95%</div>
                    <div className="text-xs text-gray-600">Placement Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-accent mb-1">2000+</div>
                    <div className="text-xs text-gray-600">Active Students</div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Link href="#programs" className="flex items-center justify-center space-x-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      <span>Programs</span>
                    </Link>
                    <Link href="#placements" className="flex items-center justify-center space-x-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Placements</span>
                    </Link>
                    <Link href="#research" className="flex items-center justify-center space-x-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Research</span>
                    </Link>
                    <Link href="#contact" className="flex items-center justify-center space-x-2 text-primary hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Contact</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" className="flex flex-col items-center text-white hover:text-secondary transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}