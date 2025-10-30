'use client';

export default function Research() {
  const researchAreas = [
    {
      id: 1,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Our AI research focuses on developing intelligent systems that can learn from data, adapt to new inputs, and perform human-like tasks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Cybersecurity & Network Defense',
      description: 'Our cybersecurity research addresses critical challenges in network security, cryptography, and defense against emerging cyber threats.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Big Data Analytics & Cloud Computing',
      description: 'We explore innovative approaches to handle massive datasets and develop scalable cloud-based solutions for complex computational problems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="research" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Research Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge research initiatives that are shaping the future of technology
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <div 
              key={area.id} 
              className="card p-6 text-center fade-up"
              style={{transitionDelay: `${0.1 * area.id}s`}}
            >
              <div className="flex justify-center mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
              <button className="mt-4 text-accent font-medium hover:underline flex items-center justify-center mx-auto">
                Explore Research
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto fade-up">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Research Opportunities for Students</h3>
              <p className="text-gray-700 mb-4">
                We offer various research opportunities for undergraduate and postgraduate students to work alongside faculty on cutting-edge projects.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Research Assistantships
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Summer Research Internships
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Undergraduate Research Program
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <button className="btn-primary w-full">Apply for Research Program</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}