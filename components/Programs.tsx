'use client';

import { useState } from 'react';

const programsData = [
  {
    id: 1,
    level: 'undergraduate',
    title: 'B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
    duration: '4 Years',
    description: 'Specialized program focusing on AI/ML technologies, deep learning, computer vision, and intelligent systems development.',
    eligibility: '10+2 with PCM'
  },
  {
    id: 2,
    level: 'undergraduate',
    title: 'B.Tech in Computer Science and Business Systems',
    duration: '4 Years',
    description: 'Interdisciplinary program combining computer science with business systems, enterprise solutions, and management principles.',
    eligibility: '10+2 with PCM'
  },
  {
    id: 3,
    level: 'undergraduate',
    title: 'B.Tech in Computer Science and Data Science',
    duration: '4 Years',
    description: 'Specialized program focusing on data analytics, big data technologies, statistical modeling, and data-driven decision making.',
    eligibility: '10+2 with PCM'
  }
];

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredPrograms = activeFilter === 'all' 
    ? programsData 
    : programsData.filter(program => program.level === activeFilter);

  return (
    <section id="programs" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Academic Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of programs designed to prepare you for success in the technology sector
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 fade-up">
          {['all', 'undergraduate', 'postgraduate', 'doctoral', 'certificate'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id} 
              className="card p-6 fade-up"
              style={{transitionDelay: `${0.1 * (program.id % 3)}s`}}
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{program.title}</h3>
                  <span className="text-sm text-gray-500">{program.duration}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <div className="text-sm text-gray-600">
                <strong>Eligibility:</strong> {program.eligibility}
              </div>
              <button className="mt-4 text-accent font-medium hover:underline flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}