'use client';

import { useState } from 'react';
// Removed unused import

const facultyData = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Professor & Head of Department',
    specialization: 'Artificial Intelligence, Machine Learning',
    image: '/faculty1.jpg',
    email: 'rajesh.kumar@rgpv.ac.in',
    bio: 'Dr. Rajesh Kumar has over 20 years of experience in teaching and research. He has published numerous papers in international journals and conferences. His research interests include artificial intelligence, machine learning, and data mining.'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'Associate Professor',
    specialization: 'Computer Networks, Cybersecurity',
    image: '/faculty2.jpg',
    email: 'priya.sharma@rgpv.ac.in',
    bio: 'Dr. Priya Sharma specializes in computer networks and cybersecurity. She has worked on several government-funded projects and has published extensively in her field.'
  },
  {
    id: 3,
    name: 'Dr. Amit Verma',
    position: 'Assistant Professor',
    specialization: 'Database Systems, Big Data',
    image: '/faculty3.jpg',
    email: 'amit.verma@rgpv.ac.in',
    bio: 'Dr. Amit Verma is an expert in database systems and big data analytics. He has industry experience with major tech companies before joining academia.'
  },
  {
    id: 4,
    name: 'Dr. Sunita Patel',
    position: 'Associate Professor',
    specialization: 'Software Engineering, DevOps',
    image: '/faculty4.jpg',
    email: 'sunita.patel@rgpv.ac.in',
    bio: 'Dr. Sunita Patel focuses on software engineering methodologies and DevOps practices. She collaborates with industry partners to bring real-world projects to students.'
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    position: 'Professor',
    specialization: 'Computer Vision, Image Processing',
    image: '/faculty5.jpg',
    email: 'vikram.singh@rgpv.ac.in',
    bio: 'Dr. Vikram Singh has made significant contributions to the field of computer vision and image processing. He leads the Computer Vision Lab at SoIT.'
  },
  {
    id: 6,
    name: 'Dr. Neha Gupta',
    position: 'Assistant Professor',
    specialization: 'Human-Computer Interaction, UX Design',
    image: '/faculty6.jpg',
    email: 'neha.gupta@rgpv.ac.in',
    bio: 'Dr. Neha Gupta specializes in human-computer interaction and UX design. She brings a user-centered approach to technology development and education.'
  }
];

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyData[0] | null>(null);
  
  const openModal = (faculty: typeof facultyData[0]) => {
    setSelectedFaculty(faculty);
  };
  
  const closeModal = () => {
    setSelectedFaculty(null);
  };

  return (
    <section id="faculty" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Faculty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our distinguished faculty members who are experts in their respective fields
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((faculty) => (
            <div 
              key={faculty.id} 
              className="card overflow-hidden fade-up cursor-pointer"
              style={{transitionDelay: `${0.1 * (faculty.id % 3)}s`}}
              onClick={() => openModal(faculty)}
            >
              <div className="relative h-64 bg-gray-200">
                {/* Replace with actual faculty image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Faculty Photo
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{faculty.name}</h3>
                <p className="text-accent font-medium text-sm mb-2">{faculty.position}</p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-medium">Specialization:</span> {faculty.specialization}
                </p>
                <button 
                  className="text-primary font-medium text-sm flex items-center hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(faculty);
                  }}
                >
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Faculty Modal */}
        {selectedFaculty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-primary">{selectedFaculty.name}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="relative h-48 w-full bg-gray-200 rounded-lg">
                      {/* Replace with actual faculty image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Faculty Photo
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <p className="text-accent font-medium">{selectedFaculty.position}</p>
                      <p className="text-gray-700 text-sm">
                        <span className="font-medium">Specialization:</span><br />
                        {selectedFaculty.specialization}
                      </p>
                      <p className="text-gray-700 text-sm">
                        <span className="font-medium">Email:</span><br />
                        {selectedFaculty.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Biography</h4>
                    <p className="text-gray-700 mb-4">{selectedFaculty.bio}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Interests</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedFaculty.specialization.split(', ').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                      <li>Data Analytics</li>
                      <li>Cloud Computing</li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Recent Publications</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="text-sm">
                          <span className="font-medium">2022:</span> "Advances in Machine Learning for Healthcare Applications" - International Journal of Computer Science
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">2021:</span> "A Novel Approach to Secure Cloud Computing Environments" - IEEE Conference on Cloud Computing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}