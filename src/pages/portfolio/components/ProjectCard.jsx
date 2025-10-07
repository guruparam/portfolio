import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group relative"
    >
      <div className="glass-effect rounded-xl border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-neon-primary">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project?.status === 'Live' ?'bg-success/20 text-success border border-success/30' 
                : project?.status === 'In Development' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
            }`}>
              {project?.status}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project?.liveUrl && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconSize={14}
                className="bg-background/80 backdrop-blur-sm"
              >
                Live
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconSize={14}
                className="bg-background/80 backdrop-blur-sm"
              >
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {project?.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{project?.category}</p>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              {project?.metrics?.stars && (
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning" />
                  <span className="text-xs">{project?.metrics?.stars}</span>
                </div>
              )}
              {project?.metrics?.users && (
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} className="text-primary" />
                  <span className="text-xs">{project?.metrics?.users}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project?.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.technologies?.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs font-medium border border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics Bar */}
          {project?.metrics && (
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/20 rounded-lg">
              {project?.metrics?.performance && (
                <div className="text-center">
                  <div className="text-lg font-bold text-success">{project?.metrics?.performance}</div>
                  <div className="text-xs text-muted-foreground">Performance</div>
                </div>
              )}
              {project?.metrics?.uptime && (
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{project?.metrics?.uptime}</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              )}
              {project?.metrics?.loadTime && (
                <div className="text-center">
                  <div className="text-lg font-bold text-warning">{project?.metrics?.loadTime}</div>
                  <div className="text-xs text-muted-foreground">Load Time</div>
                </div>
              )}
            </div>
          )}

          {/* Expand Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
            className="w-full justify-between text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? 'Show Less' : 'Technical Details'}
          </Button>

          {/* Expanded Content */}
          <motion.div
            variants={expandVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border mt-4">
              {/* Challenges & Solutions */}
              {project?.challenges && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="mr-2 text-warning" />
                    Challenges & Solutions
                  </h4>
                  <div className="space-y-2">
                    {project?.challenges?.map((challenge, idx) => (
                      <div key={idx} className="text-sm">
                        <div className="text-muted-foreground mb-1">
                          <strong>Challenge:</strong> {challenge?.problem}
                        </div>
                        <div className="text-success">
                          <strong>Solution:</strong> {challenge?.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture */}
              {project?.architecture && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="Layers" size={16} className="mr-2 text-primary" />
                    Architecture
                  </h4>
                  <p className="text-sm text-muted-foreground">{project?.architecture}</p>
                </div>
              )}

              {/* Key Features */}
              {project?.features && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="Zap" size={16} className="mr-2 text-electric-cyan" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project?.features?.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <Icon name="Check" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                {project?.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="left"
                    iconSize={14}
                    className="flex-1"
                  >
                    View Live Demo
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={14}
                    className="flex-1"
                  >
                    View Source
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;