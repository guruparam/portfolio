import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import JourneyTimeline from './components/JourneyTimeline.jsx';
import PersonalValues from './components/PersonalValues.jsx';
import TechnicalPhilosophy from './components/TechnicalPhilosophy.jsx';
import InteractiveInsights from './components/InteractiveInsights.jsx';

const About = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Paramaguru - Full Stack Developer | Botanical Sciences to Tech</title>
        <meta 
          name="description" 
          content="Discover Paramaguru's unique journey from Botany graduate to Full Stack Developer. Learn how diverse thinking and scientific methodology enhance modern software development with React, Django, and Flutter." 
        />
        <meta name="keywords" content="Paramaguru, Full Stack Developer, Botany to Tech, React Developer, Django Developer, Flutter Developer, Career Transition, Scientific Programming, Diverse Thinking" />
        <meta property="og:title" content="About Paramaguru - From Botanical Sciences to Full Stack Development" />
        <meta property="og:description" content="Explore how a unique background in botanical sciences creates innovative approaches to modern software development challenges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section - Introduction and Visual Impact */}
          <HeroSection />
          
          {/* Journey Timeline - Career Transition Story */}
          <JourneyTimeline />
          
          {/* Personal Values - Core Principles and Philosophy */}
          <PersonalValues />
          
          {/* Technical Philosophy - Development Approach */}
          <TechnicalPhilosophy />
          
          {/* Interactive Insights - Deep Dive into Unique Perspectives */}
          <InteractiveInsights />
        </main>

        {/* Floating Resume Download */}
        <div className="fixed bottom-6 right-6 z-40">
          <button className="group w-14 h-14 rounded-full bg-energetic-coral hover:bg-energetic-coral/90 text-white shadow-neon-coral hover:shadow-lg transition-all duration-300 flex items-center justify-center">
            <svg 
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-card border border-border rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Download Resume
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;