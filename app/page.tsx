'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import DirectorNote from '../components/DirectorNote';
import Programs from '../components/Programs';
import Admissions from '../components/Admissions';
import Faculty from '../components/Faculty';
import Research from '../components/Research';
import Placements from '../components/Placements';
import Alumni from '../components/Alumni';
import MOU from '../components/MOU';
import NewsEvents from '../components/NewsEvents';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Setup intersection observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with fade-up class
    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <DirectorNote />
        <Programs />
        <Admissions />
        <Faculty />
        <Research />
        <Placements />
        <Alumni />
        <MOU />
        <NewsEvents />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
