'use client';

import Image from 'next/image';

export default function Alumni() {
  const notableAlumni = [
    {
      name: 'Rajesh Kumar',
      batch: '2010',
      position: 'Senior Software Engineer',
      company: 'Google',
      image: '/images/alumni1.jpg',
      achievement: 'Leading AI/ML initiatives'
    },
    {
      name: 'Priya Sharma',
      batch: '2012',
      position: 'Tech Lead',
      company: 'Microsoft',
      image: '/images/alumni2.jpg',
      achievement: 'Cloud Architecture Expert'
    },
    {
      name: 'Amit Patel',
      batch: '2008',
      position: 'Founder & CEO',
      company: 'TechStart Solutions',
      image: '/images/alumni3.jpg',
      achievement: 'Successful Entrepreneur'
    },
    {
      name: 'Sneha Verma',
      batch: '2015',
      position: 'Data Scientist',
      company: 'Amazon',
      image: '/images/alumni4.jpg',
      achievement: 'Machine Learning Pioneer'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Alumni Worldwide' },
    { number: '85%', label: 'Placed in Top Companies' },
    { number: '50+', label: 'Countries' },
    { number: '200+', label: 'Entrepreneurs' }
  ];

  return (
    <section id="alumni" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Alumni</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni are making their mark across the globe in leading tech companies, startups, and research institutions
          </p>
        </div>

        {/* Alumni Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 fade-up">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Notable Alumni */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 fade-up">Notable Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {notableAlumni.map((alumni, index) => (
              <div 
                key={index} 
                className="card fade-up hover:transform hover:scale-105 transition-transform"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Alumni Photo</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-primary mb-1">{alumni.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">Batch of {alumni.batch}</p>
                  <p className="text-sm font-medium text-gray-800">{alumni.position}</p>
                  <p className="text-sm text-accent font-semibold mb-2">{alumni.company}</p>
                  <p className="text-xs text-gray-600 italic">{alumni.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Testimonials */}
        <div className="bg-gray-50 rounded-lg p-8 fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8">What Our Alumni Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-accent opacity-50 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;SoIT provided me with the perfect foundation for my career. The practical approach to learning and industry exposure prepared me for the challenges in the tech industry.&quot;
              </p>
              <p className="font-semibold text-primary">- Vikram Singh, Batch 2014</p>
              <p className="text-sm text-gray-600">Software Architect, IBM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-accent opacity-50 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;The faculty&apos;s dedication and the collaborative environment at SoIT helped me develop both technical and soft skills that are crucial in today&apos;s workplace.&quot;
              </p>
              <p className="font-semibold text-primary">- Ananya Desai, Batch 2016</p>
              <p className="text-sm text-gray-600">Product Manager, Flipkart</p>
            </div>
          </div>
        </div>

        {/* Alumni Network CTA */}
        <div className="text-center mt-12 fade-up">
          <h3 className="text-xl font-semibold mb-4">Join Our Alumni Network</h3>
          <p className="text-gray-600 mb-6">Stay connected with your alma mater and fellow alumni</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Register as Alumni</button>
            <button className="btn-outline">Alumni Portal</button>
          </div>
        </div>
      </div>
    </section>
  );
}
