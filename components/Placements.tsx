'use client';

export default function Placements() {
  const placementStats = [
    { label: 'Placement Rate', value: '92%' },
    { label: 'Average Package', value: '₹8.5 LPA' },
    { label: 'Highest Package', value: '₹32 LPA' },
    { label: 'Companies Visited', value: '120+' }
  ];

  const recruiters = [
    'Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 
    'Wipro', 'IBM', 'Accenture', 'Cognizant', 'Capgemini'
  ];

  return (
    <section id="placements" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Placements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students are placed in top companies across the globe with competitive packages
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md text-center fade-up"
              style={{transitionDelay: `${0.1 * index}s`}}
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md fade-up">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {recruiters.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-all"
                style={{transitionDelay: `${0.05 * index}s`}}
              >
                <div className="text-gray-800 font-medium">{company}</div>
                {/* Replace with actual company logos */}
                {/* <img src={`/images/recruiters/${company.toLowerCase()}.svg`} alt={`${company} logo`} className="h-12" /> */}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center fade-up">
          <a href="#" className="btn-primary inline-flex items-center">
            View Placement Report
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}