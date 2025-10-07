import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';
import CertificationCard from './components/CertificationCard.jsx';
import CertificationTimeline from './components/CertificationTimeline.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import StatsOverview from './components/StatsOverview.jsx';
import LinkedInIntegration from './components/LinkedInIntegration.jsx';

const CertificationsPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredCertifications, setFilteredCertifications] = useState([]);

  // Mock certifications data
  const certifications = [
    {
      id: 1,
      name: "Python Programming",
      issuer: "Guvi Geek Networks",
      issueDate: "March 2024",
      expiryDate: null,
      status: "active",
      isVerified: true,
      credentialId: "GUV12345678",
      score: "95%",
      badgeImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center",
      description: `Comprehensive Python programming certification covering core concepts, data structures, object-oriented programming, and practical application development. Demonstrates proficiency in Python syntax, libraries, and best practices for software development.`,
      skills: ["Python", "Data Structures", "OOP", "Algorithms", "Problem Solving"],
      category: "programming",
      verificationUrl: "https://www.guvi.in/verify-certificate?id=GUV12345678",
      credentialUrl: "https://www.guvi.in/certificate/GUV12345678"
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      issueDate: "January 2024",
      expiryDate: null,
      status: "active",
      isVerified: true,
      credentialId: "FCC-WD-2024-001",
      score: "100%",
      badgeImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      description: `Complete full-stack web development certification covering HTML5, CSS3, JavaScript, React, Node.js, Express, and MongoDB. Includes hands-on projects demonstrating end-to-end application development capabilities.`,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      category: "web-development",
      verificationUrl: "https://freecodecamp.org/certification/paramaguru/full-stack",
      credentialUrl: "https://freecodecamp.org/certification/paramaguru/full-stack"
    },
    {
      id: 3,
      name: "React Advanced Patterns",
      issuer: "React Training",
      issueDate: "February 2024",
      expiryDate: "February 2026",
      status: "active",
      isVerified: true,
      credentialId: "RT-ADV-2024-789",
      score: "92%",
      badgeImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      description: `Advanced React certification focusing on complex state management, performance optimization, custom hooks, and architectural patterns. Covers advanced concepts like render props, higher-order components, and context patterns.`,
      skills: ["React", "Redux", "Context API", "Custom Hooks", "Performance Optimization"],
      category: "frontend",
      verificationUrl: "https://reacttraining.com/verify/RT-ADV-2024-789",
      credentialUrl: "https://reacttraining.com/certificate/RT-ADV-2024-789"
    },
    {
      id: 4,
      name: "Django REST Framework",
      issuer: "Django Software Foundation",
      issueDate: "December 2023",
      expiryDate: null,
      status: "active",
      isVerified: true,
      credentialId: "DSF-DRF-2023-456",
      score: "88%",
      badgeImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center",
      description: `Django REST Framework certification demonstrating expertise in building robust APIs, authentication systems, serialization, and database integration. Covers advanced topics like permissions, throttling, and API versioning.`,
      skills: ["Django", "REST API", "Python", "Database Design", "Authentication"],
      category: "backend",
      verificationUrl: "https://djangoproject.com/verify/DSF-DRF-2023-456",
      credentialUrl: "https://djangoproject.com/certificate/DSF-DRF-2023-456"
    },
    {
      id: 5,
      name: "Flutter Mobile Development",
      issuer: "Google Developers",
      issueDate: "November 2023",
      expiryDate: "November 2025",
      status: "active",
      isVerified: true,
      credentialId: "GD-FLUTTER-2023-321",
      score: "90%",
      badgeImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop&crop=center",
      description: `Google-certified Flutter development course covering cross-platform mobile app development, state management, UI/UX design principles, and deployment strategies for both iOS and Android platforms.`,
      skills: ["Flutter", "Dart", "Mobile Development", "State Management", "UI/UX"],
      category: "mobile",
      verificationUrl: "https://developers.google.com/verify/GD-FLUTTER-2023-321",
      credentialUrl: "https://developers.google.com/certificate/GD-FLUTTER-2023-321"
    },
    {
      id: 6,
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "October 2023",
      expiryDate: "October 2026",
      status: "active",
      isVerified: true,
      credentialId: "AWS-CP-2023-987",
      score: "85%",
      badgeImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center",
      description: `AWS Cloud Practitioner certification validating foundational cloud knowledge, AWS services understanding, security best practices, and cost optimization strategies for cloud infrastructure management.`,
      skills: ["AWS", "Cloud Computing", "DevOps", "Security", "Cost Optimization"],
      category: "cloud",
      verificationUrl: "https://aws.amazon.com/verification/AWS-CP-2023-987",
      credentialUrl: "https://aws.amazon.com/certificate/AWS-CP-2023-987"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Certifications', icon: 'Award', count: certifications?.length },
    { id: 'programming', name: 'Programming', icon: 'Code', count: certifications?.filter(c => c?.category === 'programming')?.length },
    { id: 'web-development', name: 'Web Development', icon: 'Globe', count: certifications?.filter(c => c?.category === 'web-development')?.length },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: certifications?.filter(c => c?.category === 'frontend')?.length },
    { id: 'backend', name: 'Backend', icon: 'Server', count: certifications?.filter(c => c?.category === 'backend')?.length },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', count: certifications?.filter(c => c?.category === 'mobile')?.length },
    { id: 'cloud', name: 'Cloud', icon: 'Cloud', count: certifications?.filter(c => c?.category === 'cloud')?.length }
  ];

  // Filter certifications based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredCertifications(certifications);
    } else {
      setFilteredCertifications(certifications?.filter(cert => cert?.category === activeCategory));
    }
  }, [activeCategory]);

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/Paramaguru_Resume.pdf';
    link.download = 'Paramaguru_Resume.pdf';
    link?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Certifications - Paramaguru Portfolio</title>
        <meta name="description" content="Professional certifications and achievements showcasing continuous learning and technical expertise in full-stack development, Python, React, Django, Flutter, and cloud technologies." />
        <meta name="keywords" content="certifications, python certification, react certification, django certification, flutter certification, aws certification, professional development" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cosmic-purple/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Icon name="Award" size={16} />
              <span>Professional Certifications</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Certification
              <span className="text-gradient"> Gallery</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Showcasing verified credentials and professional achievements that demonstrate continuous learning, 
              technical expertise, and commitment to excellence in modern software development.
            </p>

            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleDownloadResume}
                className="btn-morph bg-primary hover:bg-primary/90 shadow-neon-primary"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-morph"
                iconName="ArrowDown"
                iconPosition="left"
                iconSize={20}
              >
                View Certifications
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StatsOverview certifications={certifications} />
          </div>
        </section>

        {/* LinkedIn Integration */}
        <section className="py-6 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <LinkedInIntegration />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professional <span className="text-gradient">Credentials</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Verified certifications from leading technology companies and educational platforms
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
              {/* Category Filter */}
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-accent/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    viewMode === 'timeline' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name="Clock" size={16} />
                  <span>Timeline</span>
                </button>
              </div>
            </div>

            {/* Certifications Display */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCertifications?.map((certification, index) => (
                  <CertificationCard
                    key={certification?.id}
                    certification={certification}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <CertificationTimeline certifications={filteredCertifications} />
              </div>
            )}

            {/* Empty State */}
            {filteredCertifications?.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/30 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No Certifications Found</h3>
                <p className="text-text-secondary mb-6">
                  No certifications match the selected category. Try selecting a different category.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveCategory('all')}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Show All Certifications
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect rounded-2xl p-12 border border-border">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cosmic-purple flex items-center justify-center">
                <Icon name="Handshake" size={24} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to <span className="text-gradient">Collaborate?</span>
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                These certifications represent my commitment to continuous learning and technical excellence. 
                Let's discuss how my verified skills can contribute to your next project.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:paramaguru.dev@gmail.com'}
                  className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 shadow-neon-coral"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={20}
                >
                  Start a Conversation
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="btn-morph"
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={20}
                >
                  View Full Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Floating Resume Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={handleDownloadResume}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-neon-primary btn-morph"
          iconName="Download"
          iconSize={20}
        />
      </div>
    </div>
  );
};

export default CertificationsPage;