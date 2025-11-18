'use client';

import Image from 'next/image';

export default function DirectorNote() {
  return (
    <section id="director" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Director&apos;s Note</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Director's Photo */}
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm text-center">Director Photo</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary">Dr. [Director Name]</h3>
                <p className="text-gray-600 text-sm">Director, SoIT</p>
                <p className="text-gray-500 text-xs mt-1">Ph.D., M.Tech</p>
              </div>
              
              {/* Director's Message */}
              <div className="md:col-span-2">
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-accent opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="pl-10">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Welcome to the School of Information Technology at RGPV. It gives me immense pleasure to address you as the Director of this esteemed institution that has been at the forefront of technology education for over two decades.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      In today&apos;s rapidly evolving digital landscape, we are committed to providing our students with not just theoretical knowledge, but practical skills that prepare them for real-world challenges. Our state-of-the-art infrastructure, experienced faculty, and strong industry partnerships ensure that our graduates are industry-ready from day one.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      We encourage innovation, research, and entrepreneurship among our students. Our focus extends beyond academics to holistic development, ensuring that our students emerge as well-rounded professionals ready to make meaningful contributions to society.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      I invite you to explore the opportunities that SoIT offers and join us in our journey towards excellence in technology education.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-primary font-semibold">Best wishes,</p>
                  <p className="text-gray-700 italic">Dr. [Director Name]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
