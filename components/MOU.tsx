'use client';

import Image from 'next/image';

export default function MOU() {
  const mous = [
    {
      organization: 'Microsoft Corporation',
      type: 'Industry Partnership',
      year: '2023',
      focus: 'Cloud Computing & AI Training',
      logo: '/images/microsoft-logo.png',
      benefits: ['Azure Credits', 'Faculty Training', 'Student Certifications']
    },
    {
      organization: 'IBM India',
      type: 'Technology Collaboration',
      year: '2022',
      focus: 'Quantum Computing & Data Science',
      logo: '/images/ibm-logo.png',
      benefits: ['Research Grants', 'Internship Programs', 'Guest Lectures']
    },
    {
      organization: 'Google for Education',
      type: 'Academic Partnership',
      year: '2023',
      focus: 'Machine Learning & Android Development',
      logo: '/images/google-logo.png',
      benefits: ['Developer Resources', 'Workshop Series', 'Mentorship Program']
    },
    {
      organization: 'Amazon Web Services',
      type: 'Cloud Partnership',
      year: '2022',
      focus: 'Cloud Infrastructure & DevOps',
      logo: '/images/aws-logo.png',
      benefits: ['AWS Educate', 'Cloud Credits', 'Technical Training']
    },
    {
      organization: 'Intel Technology India',
      type: 'Research Collaboration',
      year: '2021',
      focus: 'IoT & Edge Computing',
      logo: '/images/intel-logo.png',
      benefits: ['Hardware Support', 'Research Funding', 'Innovation Labs']
    },
    {
      organization: 'Infosys Limited',
      type: 'Industry Partnership',
      year: '2023',
      focus: 'Software Engineering & Campus Connect',
      logo: '/images/infosys-logo.png',
      benefits: ['Campus Recruitment', 'Training Programs', 'Industry Projects']
    }
  ];

  const categories = [
    { name: 'Industry Partners', count: 15, icon: '🏢' },
    { name: 'Academic Institutions', count: 8, icon: '🎓' },
    { name: 'Research Organizations', count: 6, icon: '🔬' },
    { name: 'International Collaborations', count: 4, icon: '🌍' }
  ];

  return (
    <section id="mou" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Memorandums of Understanding
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SoIT has established strategic partnerships with leading organizations to enhance academic excellence, 
            research opportunities, and industry exposure for our students
          </p>
        </div>

        {/* MOU Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 fade-up">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-1">{category.count}</h3>
              <p className="text-sm text-gray-600">{category.name}</p>
            </div>
          ))}
        </div>

        {/* Featured MOUs */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 fade-up">Featured Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mous.map((mou, index) => (
              <div 
                key={index} 
                className="card fade-up"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="p-6">
                  {/* Logo Placeholder */}
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-sm">Logo</span>
                  </div>
                  
                  <h4 className="font-semibold text-lg text-primary mb-2">{mou.organization}</h4>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-accent text-white px-3 py-1 rounded-full">
                      {mou.type}
                    </span>
                    <span className="text-xs text-gray-500">Est. {mou.year}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 font-medium">{mou.focus}</p>
                  
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {mou.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8">Benefits for Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Internship Opportunities</h4>
              <p className="text-sm text-gray-600">
                Direct access to internships and training programs with partner organizations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Industry Certifications</h4>
              <p className="text-sm text-gray-600">
                Free or subsidized certifications from leading technology companies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Research Collaboration</h4>
              <p className="text-sm text-gray-600">
                Opportunities to work on cutting-edge research projects with industry experts
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-up">
          <h3 className="text-xl font-semibold mb-4">Interested in Partnership?</h3>
          <p className="text-gray-600 mb-6">
            We welcome collaborations with organizations that share our vision for excellence in education
          </p>
          <button className="btn-primary">Contact Us for Partnerships</button>
        </div>
      </div>
    </section>
  );
}
