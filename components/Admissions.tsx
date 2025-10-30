'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Admissions() {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    { id: 1, title: 'Check Eligibility', description: 'Review program requirements and ensure you meet the criteria.' },
    { id: 2, title: 'Online Application', description: 'Complete the application form and upload required documents.' },
    { id: 3, title: 'Entrance Exam', description: 'Appear for the entrance examination as per the schedule.' },
    { id: 4, title: 'Interview', description: 'Shortlisted candidates will be called for an interview.' },
    { id: 5, title: 'Admission Offer', description: 'Successful candidates will receive an admission offer.' }
  ];

  return (
    <section id="admissions" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Admissions Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these steps to join our prestigious programs at the School of Information Technology
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        {/* Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${(activeStep - 1) * 25}%` }}
              ></div>
            </div>
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center fade-up"
                  style={{transitionDelay: `${0.1 * step.id}s`}}
                >
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all ${
                      step.id <= activeStep
                        ? 'bg-accent text-white'
                        : 'bg-white text-gray-500 border border-gray-300'
                    }`}
                  >
                    {step.id}
                  </button>
                  <div className="text-center mt-2">
                    <h4 className={`text-sm font-medium ${
                      step.id <= activeStep ? 'text-primary' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Step Details */}
          <div className="bg-gray-50 p-6 rounded-lg mt-8 fade-up">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Step {activeStep}: {steps[activeStep - 1].title}
            </h3>
            <p className="text-gray-700 mb-4">
              {steps[activeStep - 1].description}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeStep === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Previous
              </button>
              {activeStep < steps.length ? (
                <button
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90"
                >
                  Next
                </button>
              ) : (
                <Link href="#apply" className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90">
                  Apply Now
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center max-w-3xl mx-auto fade-up">
          <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Apply?</h3>
          <p className="text-gray-700 mb-6">
            Applications for the 2023-24 academic year are now open. Don't miss the opportunity to be part of our prestigious institution.
          </p>
          <Link href="#apply" className="btn-primary inline-block">
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  );
}