'use client';
import { useState } from 'react';

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('news');
  
  const newsItems = [
    {
      id: 1,
      title: 'SoIT Hosts International Conference on AI and Machine Learning',
      date: 'June 15, 2023',
      excerpt: 'The School of Information Technology successfully hosted a three-day international conference on Artificial Intelligence and Machine Learning with participants from 15 countries.',
      image: '/images/news/conference.jpg'
    },
    {
      id: 2,
      title: 'Students Win National Hackathon',
      date: 'May 8, 2023',
      excerpt: 'A team of four SoIT students secured first place at the National Coding Hackathon organized by the Ministry of Electronics and IT.',
      image: '/images/news/hackathon.jpg'
    },
    {
      id: 3,
      title: 'New Research Lab Inaugurated',
      date: 'April 22, 2023',
      excerpt: 'State-of-the-art Cybersecurity Research Laboratory inaugurated at SoIT in collaboration with leading industry partners.',
      image: '/images/news/lab.jpg'
    }
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop on Cloud Computing',
      date: 'July 10-12, 2023',
      time: '10:00 AM - 4:00 PM',
      venue: 'SoIT Seminar Hall'
    },
    {
      id: 2,
      title: 'Guest Lecture: Blockchain Technology',
      date: 'July 18, 2023',
      time: '2:00 PM - 4:00 PM',
      venue: 'Virtual (Zoom)'
    },
    {
      id: 3,
      title: 'Annual Technical Fest - TechnoVision 2023',
      date: 'August 5-7, 2023',
      time: 'All Day',
      venue: 'SoIT Campus'
    },
    {
      id: 4,
      title: 'Industry-Academia Meet',
      date: 'August 15, 2023',
      time: '11:00 AM - 3:00 PM',
      venue: 'SoIT Conference Center'
    }
  ];

  return (
    <section id="news-events" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">News & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings and upcoming events at SoIT
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-8 fade-up">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'news'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('news')}
            >
              Latest News
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'events'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Upcoming Events
            </button>
          </div>
        </div>
        
        {activeTab === 'news' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
            {newsItems.map((item) => (
              <div key={item.id} className="card overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  {/* Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span>News Image Placeholder</span>
                    {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> */}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-accent font-medium hover:underline flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden fade-up">
            <div className="divide-y divide-gray-200">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="text-accent font-semibold">{event.date}</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
                      <div className="text-gray-600">{event.venue}</div>
                    </div>
                    <div className="md:w-1/4 flex justify-start md:justify-end">
                      <button className="btn-outline-primary text-sm">Register</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center fade-up">
          <a href="#" className="btn-primary inline-flex items-center">
            View All {activeTab === 'news' ? 'News' : 'Events'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}