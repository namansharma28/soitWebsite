'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About SoIT</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-up">
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">SoIT building image</span>
              </div>
            </div>
          </div>
          
          <div className="fade-up" style={{transitionDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold mb-4">Excellence in Technology Education</h3>
            <p className="text-gray-700 mb-4">
              The School of Information Technology at RGPV was established in 1998 with a vision to produce world-class IT professionals. 
              Over the years, we have evolved into a center of excellence for computer science and information technology education.
            </p>
            <p className="text-gray-700 mb-6">
              Our curriculum is designed in collaboration with industry experts to ensure that our students are equipped with the latest skills and knowledge required in the rapidly evolving tech landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary">Our Vision</h4>
                <p className="text-sm text-gray-600">To be a globally recognized institution for excellence in IT education and research</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary">Our Mission</h4>
                <p className="text-sm text-gray-600">To nurture innovative minds through quality education and industry collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}