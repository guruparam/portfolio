import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PersonalValues = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const coreValues = [
    {
      id: 1,
      title: "Diverse Thinking",
      subtitle: "Cross-Disciplinary Innovation",
      description: `My background in Botany brings unique perspectives to software development. I approach technical challenges with the same systematic observation and pattern recognition skills used in biological research.\n\nThis diverse thinking helps me see solutions that others might miss and creates more innovative approaches to complex problems.`,
      icon: "Lightbulb",
      color: "primary",
      principles: [
        "Scientific methodology in code",
        "Pattern recognition across domains",
        "Systematic problem analysis",
        "Creative solution synthesis"
      ]
    },
    {
      id: 2,
      title: "Continuous Growth",
      subtitle: "Lifelong Learning Philosophy",
      description: `Just as plants continuously adapt and grow, I believe in constant evolution and learning. My transition from Botany to tech demonstrates this commitment to growth.\n\nI stay current with emerging technologies while building on fundamental principles, ensuring both innovation and reliability in my work.`,
      icon: "TrendingUp",
      color: "success",
      principles: [
        "Embrace new technologies",
        "Build on solid fundamentals",
        "Learn from every project",
        "Share knowledge with others"
      ]
    },
    {
      id: 3,
      title: "Elegant Solutions",
      subtitle: "Simplicity in Complexity",
      description: `Nature teaches us that the most effective solutions are often the most elegant. I strive to write clean, maintainable code that solves complex problems with simple, intuitive approaches.\n\nEvery line of code should serve a purpose, just like every element in a well-designed ecosystem.`,
      icon: "Zap",
      color: "cosmic-purple",
      principles: [
        "Clean, readable code",
        "Intuitive user experiences",
        "Efficient architectures",
        "Purposeful design choices"
      ]
    },
    {
      id: 4,
      title: "Collaborative Impact",
      subtitle: "Building Together",
      description: `Great software, like healthy ecosystems, thrives on collaboration and mutual support. I believe in building not just applications, but also relationships and communities.\n\nMy goal is to create solutions that empower others while fostering an environment of shared learning and growth.`,
      icon: "Users",
      color: "energetic-coral",
      principles: [
        "Team-first mentality",
        "Knowledge sharing culture",
        "Mentorship and guidance",
        "Community contribution"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'primary': 'text-primary border-primary/30 bg-primary/10 shadow-neon-primary',
      'success': 'text-success border-success/30 bg-success/10 shadow-neon-success',
      'cosmic-purple': 'text-cosmic-purple border-cosmic-purple/30 bg-cosmic-purple/10',
      'energetic-coral': 'text-energetic-coral border-energetic-coral/30 bg-energetic-coral/10 shadow-neon-coral'
    };
    return colorMap?.[color] || colorMap?.['primary'];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-deep-space to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-success/20 mb-6">
            <Icon name="Heart" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Core Values</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Philosophy & Principles</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The values that guide my approach to technology, collaboration, and continuous growth in the ever-evolving world of software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coreValues?.map((value) => (
            <div
              key={value?.id}
              className={`group relative p-8 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer hover:scale-105 ${
                hoveredValue === value?.id
                  ? `border-${value?.color}/50 ${getColorClasses(value?.color)?.split(' ')?.slice(-1)?.[0]}`
                  : 'border-border hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredValue(value?.id)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${value?.color} to-transparent blur-xl`}></div>

              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                    hoveredValue === value?.id
                      ? getColorClasses(value?.color)
                      : 'border-border bg-card'
                  }`}>
                    <Icon 
                      name={value?.icon} 
                      size={28} 
                      className={hoveredValue === value?.id ? '' : 'text-text-secondary'}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {value?.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {value?.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-invert max-w-none">
                  {value?.description?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Principles */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Principles
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {value?.principles?.map((principle, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                          hoveredValue === value?.id
                            ? 'bg-card/50 border border-border/50' :'hover:bg-card/30'
                        }`}
                      >
                        <Icon 
                          name="ArrowRight" 
                          size={14} 
                          className={`flex-shrink-0 transition-colors duration-300 ${
                            hoveredValue === value?.id ? `text-${value?.color}` : 'text-text-secondary'
                          }`}
                        />
                        <span className="text-xs text-text-secondary">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Element */}
                <div className={`pt-4 border-t border-border/50 transition-all duration-300 ${
                  hoveredValue === value?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center space-x-2 text-xs text-text-secondary">
                    <Icon name="Sparkles" size={14} className={`text-${value?.color}`} />
                    <span>Hover to explore this value in depth</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass-effect border border-primary/20">
            <blockquote className="text-2xl lg:text-3xl font-light text-foreground leading-relaxed mb-6">
              "Just as every plant adapts to its environment while maintaining its core nature, 
              <span className="text-gradient font-medium"> I bring my unique perspective to every project</span>, 
              creating solutions that are both innovative and deeply rooted in solid principles."
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="text-sm font-medium text-primary">Paramaguru</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalValues;