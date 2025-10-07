import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'challenges', label: 'Challenges', icon: 'AlertTriangle' },
    { id: 'metrics', label: 'Metrics', icon: 'BarChart3' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">Featured Project</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dive deep into my most impactful project showcasing full-stack expertise, 
          innovative solutions, and scalable architecture.
        </p>
      </div>
      <div className="glass-effect rounded-2xl border border-border overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Project Image & Quick Info */}
          <div className="relative">
            <div className="h-80 lg:h-full overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project?.status === 'Live' ?'bg-success/20 text-success border border-success/30' :'bg-warning/20 text-warning border border-warning/30'
                }`}>
                  {project?.status}
                </span>
                <div className="flex space-x-2">
                  {project?.liveUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                      iconName="ExternalLink"
                      iconSize={16}
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project?.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                      iconName="Github"
                      iconSize={16}
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      Source
                    </Button>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{project?.title}</h3>
              <p className="text-muted-foreground mb-4">{project?.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.slice(0, 4)?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs font-medium border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 4 && (
                  <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs">
                    +{project?.technologies?.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="p-6 lg:p-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-muted/20 p-1 rounded-lg">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab?.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project?.longDescription || project?.description}
                    </p>
                  </div>
                  
                  {project?.features && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project?.features?.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">System Architecture</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project?.architecture}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2 flex items-center">
                        <Icon name="Server" size={16} className="mr-2 text-primary" />
                        Backend
                      </h5>
                      <div className="space-y-1">
                        {project?.technologies?.filter(tech => 
                          ['Django', 'Python', 'PostgreSQL', 'Redis', 'API']?.some(backend => 
                            tech?.toLowerCase()?.includes(backend?.toLowerCase())
                          )
                        )?.map((tech, index) => (
                          <span key={index} className="block text-sm text-muted-foreground">• {tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2 flex items-center">
                        <Icon name="Monitor" size={16} className="mr-2 text-electric-cyan" />
                        Frontend
                      </h5>
                      <div className="space-y-1">
                        {project?.technologies?.filter(tech => 
                          ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Flutter']?.some(frontend => 
                            tech?.toLowerCase()?.includes(frontend?.toLowerCase())
                          )
                        )?.map((tech, index) => (
                          <span key={index} className="block text-sm text-muted-foreground">• {tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-4">Challenges & Solutions</h4>
                  {project?.challenges?.map((challenge, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="mb-3">
                        <h5 className="font-medium text-foreground flex items-center mb-2">
                          <Icon name="AlertTriangle" size={16} className="mr-2 text-warning" />
                          Challenge {index + 1}
                        </h5>
                        <p className="text-sm text-muted-foreground">{challenge?.problem}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground flex items-center mb-2">
                          <Icon name="CheckCircle" size={16} className="mr-2 text-success" />
                          Solution
                        </h5>
                        <p className="text-sm text-muted-foreground">{challenge?.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-6">
                  <h4 className="font-semibold text-foreground mb-4">Performance Metrics</h4>
                  
                  {project?.metrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project?.metrics?.performance && (
                        <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                          <div className="text-2xl font-bold text-success mb-1">
                            {project?.metrics?.performance}
                          </div>
                          <div className="text-sm text-muted-foreground">Performance Score</div>
                        </div>
                      )}
                      {project?.metrics?.uptime && (
                        <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {project?.metrics?.uptime}
                          </div>
                          <div className="text-sm text-muted-foreground">Uptime</div>
                        </div>
                      )}
                      {project?.metrics?.loadTime && (
                        <div className="text-center p-4 bg-warning/10 rounded-lg border border-warning/20">
                          <div className="text-2xl font-bold text-warning mb-1">
                            {project?.metrics?.loadTime}
                          </div>
                          <div className="text-sm text-muted-foreground">Load Time</div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">GitHub Stars</span>
                        <Icon name="Star" size={16} className="text-warning" />
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {project?.metrics?.stars || 0}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Active Users</span>
                        <Icon name="Users" size={16} className="text-primary" />
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {project?.metrics?.users || '0'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;