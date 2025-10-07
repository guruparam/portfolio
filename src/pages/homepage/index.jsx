import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutPreview from './components/AboutPreview.jsx';
import SkillsPreview from './components/SkillsPreview.jsx';
import ProjectsPreview from './components/ProjectPreview.jsx';
import ContactSection from './components/ContactSection.jsx';
import FloatingResumeButton from './components/FloatingResumeButton.jsx';
import GalaxyBackground from '../../components/GalaxyBackground';
import Icon from '../../components/AppIcon.jsx';


const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const href = e?.currentTarget?.getAttribute('href');
      if (href && href?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      anchorLinks?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Paramaguru - Full Stack Developer | React, Django, Flutter & AI Expert</title>
        <meta 
          name="description" 
          content="Paramaguru - Elite Full Stack Developer specializing in React, Django, Flutter, and AI integration. Building scalable applications with modern technologies. Available for hire." 
        />
        <meta 
          name="keywords" 
          content="Full Stack Developer, React Developer, Django Developer, Flutter Developer, AI Integration, Web Development, Mobile App Development, Paramaguru, Tech Sage" 
        />
        <meta name="author" content="Paramaguru" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Paramaguru - Full Stack Developer | React, Django, Flutter & AI Expert" />
        <meta property="og:description" content="Elite Full Stack Developer crafting scalable applications with React, Django, Flutter, and AI integration. Available for hire." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paramaguru.dev" />
        <meta property="og:image" content="https://paramaguru.dev/assets/images/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paramaguru - Full Stack Developer" />
        <meta name="twitter:description" content="Building scalable apps with React, Django, Flutter & modern AI" />
        <meta name="twitter:image" content="https://paramaguru.dev/assets/images/twitter-card.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00D4FF" />
        <link rel="canonical" href="https://paramaguru.dev" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Paramaguru",
            "jobTitle": "Full Stack Developer",
            "description": "Elite Full Stack Developer specializing in React, Django, Flutter, and AI integration",
            "url": "https://paramaguru.dev",
            "sameAs": [
              "https://github.com/paramaguru",
              "https://linkedin.com/in/paramaguru",
              "https://twitter.com/paramaguru"
            ],
            "knowsAbout": [
              "React",
              "Django",
              "Flutter",
              "Python",
              "JavaScript",
              "TypeScript",
              "AI Integration",
              "Machine Learning",
              "Web Development",
              "Mobile App Development"
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Annamalai University"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Mindreams Infotech"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Galaxy Background Animation */}
        <GalaxyBackground />
        
        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="relative">
            {/* Hero Section */}
            <HeroSection />

            {/* About Preview */}
            <AboutPreview />

            {/* Skills Preview */}
            <SkillsPreview />

            {/* Projects Preview */}
            <ProjectsPreview />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Floating Resume Button */}
          <FloatingResumeButton />

          {/* Footer */}
          <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cosmic-purple flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">P</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient">Paramaguru</h3>
                      <p className="text-sm text-text-secondary">Tech Sage</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Building scalable applications with React, Django, Flutter & modern AI. 
                    Transforming ideas into digital reality.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'About', path: '/about' },
                      { name: 'Skills', path: '/skills' },
                      { name: 'Experience', path: '/experience' },
                      { name: 'Portfolio', path: '/portfolio' },
                      { name: 'Certifications', path: '/certifications' },
                      { name: 'Contact', path: '#contact' }
                    ]?.map((link) => (
                      <a
                        key={link?.name}
                        href={link?.path}
                        className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link?.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <span className="text-text-secondary">paramagurusrm@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <span className="text-text-secondary">+91 9344242785</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="text-text-secondary">Chennai, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-text-secondary">Available for remote work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-text-secondary text-sm">
                  © {new Date()?.getFullYear()} Paramaguru. All rights reserved.
                </div>
                
                <div className="flex items-center space-x-6">
                  {[
                    { name: 'GitHub', icon: 'Github', url: 'https://github.com/paramaguru' },
                    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/guruparama-m/' },
                    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/paramaguru' }
                  ]?.map((social) => (
                    <a
                      key={social?.name}
                      href={social?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors duration-300"
                    >
                      <Icon name={social?.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Homepage;