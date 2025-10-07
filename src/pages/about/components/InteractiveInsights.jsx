import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveInsights = () => {
  const [activeInsight, setActiveInsight] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const insights = [
    {
      id: 1,
      category: "Problem Solving",
      title: "Scientific Method in Code",
      preview: "How botanical research methodology enhances debugging and optimization",
      fullContent: `My background in botanical research has fundamentally shaped how I approach software problems. In botany, you learn to observe patterns, form hypotheses, and test systematically.\n\nWhen debugging complex applications, I apply the same methodology:\n\n1. **Observation**: Carefully document symptoms and patterns\n2. **Hypothesis Formation**: Develop theories about root causes\n3. **Controlled Testing**: Isolate variables and test systematically\n4. **Analysis**: Evaluate results and refine understanding\n\nThis scientific approach has helped me solve critical performance issues, identify subtle bugs, and optimize systems that others found challenging.`,
      icon: "Microscope",
      color: "primary",
      stats: {
        "Debug Success Rate": "96%",
        "Time to Resolution": "-40%",
        "Code Quality Score": "9.2/10"
      }
    },
    {
      id: 2,
      category: "System Design",
      title: "Ecosystem Architecture",
      preview: "Building software systems that mirror natural ecosystem principles",
      fullContent: `Natural ecosystems are incredibly efficient, resilient, and self-sustaining. I apply these principles to software architecture design.\n\n**Key Ecosystem Principles in Code:**\n\n• **Interdependence**: Components support each other without tight coupling\n• **Resource Efficiency**: Optimal use of memory, processing power, and network resources\n• **Adaptation**: Systems that gracefully handle changing requirements\n• **Resilience**: Fault tolerance and graceful degradation\n\nThis approach has led to architectures that scale naturally, require less maintenance, and adapt to changing business needs with minimal refactoring.`,
      icon: "Network",
      color: "success",
      stats: {
        "System Uptime": "99.8%",
        "Scalability Factor": "10x",
        "Maintenance Overhead": "-60%"
      }
    },
    {
      id: 3,
      category: "User Experience",
      title: "Organic Interface Design",
      preview: "Creating intuitive interfaces inspired by natural interaction patterns",
      fullContent: `Nature provides the best examples of intuitive interaction. Plants grow toward light, water flows along paths of least resistance, and organisms adapt to their environment.\n\n**Natural UX Principles:**\n\n• **Progressive Disclosure**: Information reveals itself as needed, like leaves unfurling\n• **Adaptive Layouts**: Interfaces that respond to user behavior and context\n• **Intuitive Navigation**: Paths that feel natural and predictable\n• **Feedback Systems**: Clear, immediate responses to user actions\n\nUsers consistently report that applications I design feel "natural" and "easy to learn" - often without formal training or documentation.`,
      icon: "Leaf",
      color: "cosmic-purple",
      stats: {
        "User Adoption Rate": "94%",
        "Training Time": "-70%",
        "User Satisfaction": "4.8/5"
      }
    },
    {
      id: 4,
      category: "Innovation",
      title: "Cross-Pollination Thinking",
      preview: "Bringing diverse perspectives to create breakthrough solutions",
      fullContent: `Just as cross-pollination creates stronger, more diverse plants, bringing perspectives from different fields creates more innovative solutions.\n\n**Cross-Disciplinary Innovation Examples:**\n\n• **Biological Algorithms**: Using plant growth patterns for UI animations\n• **Ecosystem Monitoring**: Applying field research techniques to application monitoring\n• **Adaptation Strategies**: Using plant survival mechanisms for error handling\n• **Resource Management**: Applying ecological principles to performance optimization\n\nThis unique perspective has led to solutions that competitors haven't considered, giving projects a distinctive edge in the market.`,
      icon: "Sparkles",
      color: "energetic-coral",
      stats: {
        "Innovation Score": "9.5/10",
        "Unique Solutions": "15+",
        "Patent Potential": "3 ideas"
      }
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

  const handleCardClick = (insightId) => {
    setActiveInsight(activeInsight === insightId ? null : insightId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-deep-space to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-energetic-coral/20 mb-6">
            <Icon name="Brain" size={16} className="text-energetic-coral" />
            <span className="text-sm font-medium text-energetic-coral">Deep Insights</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Diverse Thinking in Action</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover how my unique background creates innovative approaches to common development challenges. Click any card to explore deeper insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {insights?.map((insight) => (
              <div
                key={insight?.id}
                className={`group relative p-6 rounded-2xl glass-effect border cursor-pointer transition-all duration-500 ${
                  activeInsight === insight?.id
                    ? `border-${insight?.color}/50 shadow-2xl scale-105`
                    : hoveredCard === insight?.id
                    ? 'border-primary/30 shadow-lg scale-102'
                    : 'border-border hover:border-primary/20'
                }`}
                onClick={() => handleCardClick(insight?.id)}
                onMouseEnter={() => setHoveredCard(insight?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Glow */}
                <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${insight?.color} to-transparent blur-xl`}></div>

                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                        activeInsight === insight?.id || hoveredCard === insight?.id
                          ? getColorClasses(insight?.color)
                          : 'border-border bg-card'
                      }`}>
                        <Icon 
                          name={insight?.icon} 
                          size={24} 
                          className={activeInsight === insight?.id || hoveredCard === insight?.id ? '' : 'text-text-secondary'}
                        />
                      </div>
                      
                      <div>
                        <div className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">
                          {insight?.category}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {insight?.title}
                        </h3>
                      </div>
                    </div>

                    <Icon 
                      name={activeInsight === insight?.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className={`transition-all duration-300 ${
                        activeInsight === insight?.id ? `text-${insight?.color}` : 'text-text-secondary'
                      }`}
                    />
                  </div>

                  {/* Preview */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {insight?.preview}
                  </p>

                  {/* Stats Preview */}
                  <div className="flex items-center space-x-4 pt-2">
                    {Object.entries(insight?.stats)?.slice(0, 2)?.map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className={`text-lg font-bold ${
                          activeInsight === insight?.id || hoveredCard === insight?.id 
                            ? `text-${insight?.color}` 
                            : 'text-foreground'
                        }`}>
                          {value}
                        </div>
                        <div className="text-xs text-text-secondary">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeInsight === insight?.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-border/50 space-y-6">
                      {/* Full Content */}
                      <div className="prose prose-invert max-w-none">
                        {insight?.fullContent?.split('\n\n')?.map((paragraph, index) => {
                          if (paragraph?.startsWith('**') && paragraph?.endsWith(':**')) {
                            return (
                              <h4 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
                                {paragraph?.replace(/\*\*/g, '')}
                              </h4>
                            );
                          } else if (paragraph?.startsWith('•')) {
                            return (
                              <ul key={index} className="space-y-2 ml-4">
                                {paragraph?.split('\n')?.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-sm text-text-secondary flex items-start space-x-2">
                                    <Icon name="ArrowRight" size={14} className={`text-${insight?.color} mt-0.5 flex-shrink-0`} />
                                    <span>{item?.replace('• ', '')}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                          } else if (paragraph?.match(/^\d+\./)) {
                            return (
                              <ol key={index} className="space-y-2 ml-4">
                                {paragraph?.split('\n')?.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-sm text-text-secondary">
                                    {item}
                                  </li>
                                ))}
                              </ol>
                            );
                          } else {
                            return (
                              <p key={index} className="text-sm text-text-secondary leading-relaxed">
                                {paragraph}
                              </p>
                            );
                          }
                        })}
                      </div>

                      {/* Full Stats */}
                      <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-card/30 border border-border/50">
                        {Object.entries(insight?.stats)?.map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className={`text-xl font-bold text-${insight?.color} mb-1`}>
                              {value}
                            </div>
                            <div className="text-xs text-text-secondary">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${getColorClasses(insight?.color)}`}>
                          <Icon name="ExternalLink" size={16} />
                          <span className="text-sm font-medium">See Examples</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect border border-border hover:border-primary/30 text-text-secondary hover:text-foreground transition-all duration-300">
                          <Icon name="MessageCircle" size={16} />
                          <span className="text-sm font-medium">Discuss</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Click Indicator */}
                  {activeInsight !== insight?.id && (
                    <div className="flex items-center justify-center pt-2">
                      <div className="flex items-center space-x-2 text-xs text-text-secondary">
                        <Icon name="MousePointer" size={12} />
                        <span>Click to explore deeper insights</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-16 p-8 rounded-2xl glass-effect border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Power of <span className="text-gradient">Diverse Thinking</span>
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto mb-6">
              My unique journey from botanical sciences to software development isn't just a career change—it's a competitive advantage. 
              This diverse background enables me to see solutions that others miss and approach challenges from unexpected angles.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-success/30">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">40% Faster Problem Resolution</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-primary/30">
                <Icon name="Lightbulb" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">15+ Unique Solutions Developed</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-cosmic-purple/30">
                <Icon name="Users" size={16} className="text-cosmic-purple" />
                <span className="text-sm font-medium text-cosmic-purple">94% User Adoption Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveInsights;