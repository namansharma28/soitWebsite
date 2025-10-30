'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-auto md:px-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Replace with actual campus image */}
          <div className="absolute inset-0 bg-primary opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-white fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Build the Future — Learn at SoIT, RGPV
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Empowering the next generation of tech innovators with cutting-edge education, 
              research opportunities, and industry connections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#apply" className="btn-primary bg-accent text-white">
                Apply Now
              </Link>
              <Link href="#prospectus" className="btn-outline border-white text-white">
                Download Prospectus
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
              <span className="font-semibold">Admissions Open:</span> Applications for 2023-24 academic year close on August 15th
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:col-span-5 fade-up" style={{transitionDelay: '0.2s'}}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Campus Photo */}
              <div className="relative h-48 w-full">
                {/* Replace with actual campus photo */}
                <Image src="/images/new_slide1.jpg" alt="RGPV Campus" fill style={{ objectFit: 'cover' }} />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}