import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import ExperienceEducation from './components/ExperienceEducation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PrintResume from './components/PrintResume';

export default function App() {
  const [showResume, setShowResume] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  const [activeSection, setActiveSection] = useState('About');

  // Simple intersection observer to highlight active page section in header
  useEffect(() => {
    if (showResume) return;

    const sections = ['Hero', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Check if this is the active section
            setActiveSection(secId);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px', // Trigger when section is half way on the viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [showResume]);

  const handleSelectProjectForInquiry = (projectName: string) => {
    setInquiryPreFill(`Hi! I am interested in collaborating or learning more about the "${projectName}" project. Let's arrange a time to talk!`);
  };

  const handleClearPreFill = () => {
    setInquiryPreFill('');
  };

  if (showResume) {
    return <PrintResume onBack={() => setShowResume(false)} />;
  }

  return (
    <div className="bg-surface-lowest text-on-surface flex flex-col min-h-screen">
      {/* Upper Navigation bar */}
      <Navbar
        onPrintResume={() => setShowResume(true)}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* Hero Section Banner */}
        <Hero onPrintResume={() => setShowResume(true)} />

        {/* Descriptive Biography Block */}
        <Biography />

        {/* Experience Timeline and Credentials */}
        <ExperienceEducation />

        {/* Technical Proficiency stats bar & toolsets */}
        <Skills />

        {/* Dynamic Project Cases with Detail Dialog overlays */}
        <Projects onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* Working Form for inquires on local state */}
        <Contact
          preFilledMessage={inquiryPreFill}
          onClearPreFill={handleClearPreFill}
        />
      </main>

      {/* Styled Footer */}
      <footer className="bg-white py-12 border-t border-outline-variant/30 text-xs sm:text-sm">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-lg text-on-surface tracking-tight">Portfolio</div>
          
          <div className="flex gap-8 text-on-surface-variant font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <div className="text-on-surface-variant font-medium">
            &copy; 2026 Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
