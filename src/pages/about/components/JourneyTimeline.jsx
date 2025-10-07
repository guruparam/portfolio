import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const journeyPhases = [
    {
      id: 0,
      year: "2021",
      title: "Academic Foundation",
      subtitle: "Botany Studies Begin",
      description: `Started my journey in Botany at Annamalai University, developing analytical thinking and research methodologies.\n\nThis diverse academic background taught me to observe patterns, understand complex systems, and approach problems with scientific rigor.`,
      icon: "Seedling",
      color: "success",
      achievements: [
        "Scientific research methodology",
        "Data analysis and observation",
        "Complex system understanding",
        "Pattern recognition skills"
      ]
    },
    {
      id: 1,
      year: "2022",
      title: "Tech Discovery",
      subtitle: "First Lines of Code",
      description: `Discovered programming during my second year of Botany studies. The logical structure of code resonated with my scientific mindset.\n\nStarted with Python basics and immediately saw parallels between biological systems and software architecture.`,
      icon: "Code",
      color: "primary",
      achievements: [
        "Python programming basics",
        "Logical thinking development",
        "Problem-solving approach",
        "Self-directed learning"
      ]
    },
    {
      id: 2,
      year: "2023",
      title: "Skill Development",
      subtitle: "Full-Stack Journey",
      description: `Balanced academic studies with intensive coding practice. Learned React, Django, and mobile development with Flutter.\n\nThe discipline from botanical research helped me master complex technical concepts systematically.`,
      icon: "Layers",
      color: "cosmic-purple",
      achievements: [
        "React & Django mastery",
        "Flutter mobile development",
        "Database design skills",
        "API development expertise"
      ]
    },
    {
      id: 3,
      year: "2024",
      title: "Professional Transition",
      subtitle: "Career Transformation",
      description: `Graduated with Botany degree while simultaneously building a strong portfolio of web applications.\n\nJoined Mindreams Infotech as a Full-Stack Developer, proving that diverse academic backgrounds bring unique perspectives to tech.`,
      icon: "Rocket",
      color: "energetic-coral",
      achievements: [
        "Botany degree completion",
        "Professional developer role",
        "Real-world project delivery",
        "Team collaboration skills"
      ]
    },
    {
      id: 4,
      year: "2025",
      title: "Innovation Focus",
      subtitle: "AI Integration Era",
      description: `Currently expanding expertise in AI integration and modern development practices.\n\nBuilding scalable applications that solve real-world problems while mentoring others making similar career transitions.`,
      icon: "Brain",
      color: "primary",
      achievements: [
        "AI integration expertise",
        "Scalable architecture design",
        "Mentorship and guidance",
        "Continuous innovation"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'success': 'text-success border-success/30 bg-success/10',
      'primary': 'text-primary border-primary/30 bg-primary/10',
      'cosmic-purple': 'text-cosmic-purple border-cosmic-purple/30 bg-cosmic-purple/10',
      'energetic-coral': 'text-energetic-coral border-energetic-coral/30 bg-energetic-coral/10'
    };
    return colorMap?.[color] || colorMap?.['primary'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-deep-space">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-6">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Career Journey</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">From Botany to Bytes</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A unique transformation journey that brings diverse thinking patterns and scientific rigor to modern software development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {journeyPhases?.map((phase) => (
              <button
                key={phase?.id}
                onClick={() => setActivePhase(phase?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activePhase === phase?.id
                    ? `${getColorClasses(phase?.color)} shadow-lg`
                    : 'glass-effect border border-border hover:border-primary/30'
                }`}
              >
                <Icon name={phase?.icon} size={16} />
                <span className="font-medium">{phase?.year}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getColorClasses(journeyPhases?.[activePhase]?.color)}`}>
                    <Icon name={journeyPhases?.[activePhase]?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {journeyPhases?.[activePhase]?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {journeyPhases?.[activePhase]?.subtitle}
                    </p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {journeyPhases?.[activePhase]?.description?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {journeyPhases?.[activePhase]?.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-lg glass-effect border border-border"
                    >
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              <div className="space-y-6">
                {journeyPhases?.map((phase, index) => (
                  <div
                    key={phase?.id}
                    className={`relative flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 cursor-pointer ${
                      activePhase === phase?.id
                        ? 'glass-effect border border-primary/30 shadow-lg scale-105'
                        : 'opacity-50 hover:opacity-75'
                    }`}
                    onClick={() => setActivePhase(phase?.id)}
                  >
                    {/* Timeline Line */}
                    {index < journeyPhases?.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-border to-transparent"></div>
                    )}

                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${getColorClasses(phase?.color)}`}>
                      <Icon name={phase?.icon} size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg font-bold text-foreground">{phase?.year}</span>
                        <span className="text-sm text-text-secondary">•</span>
                        <span className="text-sm font-medium text-text-secondary">{phase?.title}</span>
                      </div>
                      <p className="text-sm text-text-secondary truncate">{phase?.subtitle}</p>
                    </div>

                    {activePhase === phase?.id && (
                      <Icon name="ChevronRight" size={20} className="text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;