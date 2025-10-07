import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 0,
      title: "Systems Thinking",
      subtitle: "Holistic Architecture Approach",
      description: `My botanical background taught me to see systems as interconnected ecosystems. In software development, I apply this same holistic thinking to create architectures that are resilient, scalable, and maintainable.\n\nEvery component serves a purpose and interacts harmoniously with others, just like organisms in a balanced ecosystem.`,
      icon: "Network",
      color: "primary",
      principles: [
        "Component interdependency analysis",
        "Scalable system design",
        "Performance optimization",
        "Maintainable code structures"
      ],
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      approach: "Design systems that grow and adapt naturally with changing requirements."
    },
    {
      id: 1,
      title: "User-Centric Design",
      subtitle: "Empathy-Driven Development",
      description: `Just as plants adapt to serve their environment, great software adapts to serve its users. I prioritize understanding user needs and creating intuitive experiences that feel natural and effortless.\n\nEvery interface decision is made with the end user in mind, ensuring accessibility and usability across all platforms.`,
      icon: "Users",
      color: "success",
      principles: [
        "User experience research",
        "Accessibility-first design",
        "Responsive interfaces",
        "Performance optimization"
      ],
      technologies: ["React", "Flutter", "TailwindCSS", "Framer Motion"],
      approach: "Build interfaces that users love and find intuitive to navigate."
    },
    {
      id: 2,
      title: "Continuous Evolution",
      subtitle: "Adaptive Development Methodology",
      description: `Nature constantly evolves and adapts. Similarly, I believe in iterative development, continuous learning, and staying current with emerging technologies while maintaining backward compatibility.\n\nEvery project is an opportunity to learn, improve, and apply new techniques that enhance both functionality and maintainability.`,
      icon: "RefreshCw",
      color: "cosmic-purple",
      principles: [
        "Agile development practices",
        "Continuous integration/deployment",
        "Code review and refactoring",
        "Technology stack evolution"
      ],
      technologies: ["Git", "Docker", "CI/CD", "Testing Frameworks"],
      approach: "Embrace change while maintaining stability through robust testing and documentation."
    },
    {
      id: 3,
      title: "Problem-First Solutions",
      subtitle: "Scientific Method in Code",
      description: `My scientific training emphasizes understanding the problem before jumping to solutions. I apply rigorous analysis to identify root causes and design elegant solutions that address core issues.\n\nThis methodical approach ensures that solutions are not just functional, but optimal and future-proof.`,
      icon: "Search",
      color: "energetic-coral",
      principles: [
        "Problem analysis and research",
        "Solution validation and testing",
        "Performance measurement",
        "Iterative improvement"
      ],
      technologies: ["Analytics Tools", "Testing Libraries", "Monitoring", "Documentation"],
      approach: "Understand deeply, solve elegantly, measure continuously, improve systematically."
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'primary': 'text-primary border-primary/30 bg-primary/10',
      'success': 'text-success border-success/30 bg-success/10',
      'cosmic-purple': 'text-cosmic-purple border-cosmic-purple/30 bg-cosmic-purple/10',
      'energetic-coral': 'text-energetic-coral border-energetic-coral/30 bg-energetic-coral/10'
    };
    return colorMap?.[color] || colorMap?.['primary'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-deep-space">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-cosmic-purple/20 mb-6">
            <Icon name="Code" size={16} className="text-cosmic-purple" />
            <span className="text-sm font-medium text-cosmic-purple">Technical Philosophy</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Code with Purpose</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            How scientific thinking and botanical insights shape my approach to building scalable, user-focused applications.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Philosophy Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {philosophies?.map((philosophy) => (
              <button
                key={philosophy?.id}
                onClick={() => setActivePhilosophy(philosophy?.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activePhilosophy === philosophy?.id
                    ? `${getColorClasses(philosophy?.color)} shadow-lg transform scale-105`
                    : 'glass-effect border border-border hover:border-primary/30 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name={philosophy?.icon} size={24} />
                  <h3 className="font-bold text-lg">{philosophy?.title}</h3>
                </div>
                <p className="text-sm text-text-secondary">{philosophy?.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Active Philosophy Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl glass-effect border border-border">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center ${getColorClasses(philosophies?.[activePhilosophy]?.color)}`}>
                    <Icon name={philosophies?.[activePhilosophy]?.icon} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {philosophies?.[activePhilosophy]?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {philosophies?.[activePhilosophy]?.subtitle}
                    </p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  {philosophies?.[activePhilosophy]?.description?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-card/30 border border-border/50">
                  <h4 className="text-lg font-semibold text-foreground mb-2">My Approach</h4>
                  <p className="text-text-secondary italic">
                    "{philosophies?.[activePhilosophy]?.approach}"
                  </p>
                </div>
              </div>

              {/* Core Principles */}
              <div className="p-8 rounded-2xl glass-effect border border-border">
                <h4 className="text-xl font-bold text-foreground mb-6">Core Principles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {philosophies?.[activePhilosophy]?.principles?.map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="p-6 rounded-xl glass-effect border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Wrench" size={20} className="text-primary" />
                  <span>Key Technologies</span>
                </h4>
                <div className="space-y-3">
                  {philosophies?.[activePhilosophy]?.technologies?.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-card/30 border border-border/50"
                    >
                      <Icon name="Zap" size={16} className="text-primary" />
                      <span className="text-sm text-text-secondary">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy Stats */}
              <div className="p-6 rounded-xl glass-effect border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="BarChart3" size={20} className="text-success" />
                  <span>Impact Metrics</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Code Quality</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-card rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-success to-primary"></div>
                      </div>
                      <span className="text-xs font-medium text-success">95%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">User Satisfaction</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-card rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-gradient-to-r from-primary to-cosmic-purple"></div>
                      </div>
                      <span className="text-xs font-medium text-primary">92%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Performance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-card rounded-full overflow-hidden">
                        <div className="w-11/12 h-full bg-gradient-to-r from-energetic-coral to-success"></div>
                      </div>
                      <span className="text-xs font-medium text-energetic-coral">98%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-xl glass-effect border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">Explore More</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-2 p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300">
                    <Icon name="Code" size={16} />
                    <span className="text-sm font-medium">View Projects</span>
                  </button>
                  
                  <button className="w-full flex items-center space-x-2 p-3 rounded-lg bg-success/10 border border-success/30 text-success hover:bg-success/20 transition-all duration-300">
                    <Icon name="Download" size={16} />
                    <span className="text-sm font-medium">Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;