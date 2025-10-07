import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ experience, isLast, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.round((end - start) / (1000 * 60 * 60 * 24 * 30));
    
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return `${years} year${years !== 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}`;
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
      )}
      {/* Timeline Node */}
      <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-neon-primary animate-pulse-glow"></div>
      {/* Content Card */}
      <div className="ml-16 mb-12">
        <div className="glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-neon-primary group">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                {experience?.position}
              </h3>
              <div className="flex items-center space-x-2 text-text-secondary mb-2">
                <Icon name="Building" size={16} />
                <span className="font-medium">{experience?.company}</span>
                <span className="text-primary">•</span>
                <span>{experience?.location}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{formatDate(experience?.startDate)} - {experience?.endDate ? formatDate(experience?.endDate) : 'Present'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{calculateDuration(experience?.startDate, experience?.endDate)}</span>
                </div>
              </div>
            </div>
            
            {/* Employment Type Badge */}
            <div className="mt-3 lg:mt-0">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                experience?.type === 'Full-time' ?'bg-success/10 text-success border-success/20' :'bg-primary/10 text-primary border-primary/20'
              }`}>
                {experience?.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 leading-relaxed">
            {experience?.description}
          </p>

          {/* Key Achievements Preview */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
              <Icon name="Trophy" size={16} className="mr-2 text-warning" />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {experience?.achievements?.slice(0, 2)?.map((achievement, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
              <Icon name="Code" size={16} className="mr-2 text-primary" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience?.technologies?.slice(0, 6)?.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-accent/30 text-foreground text-xs rounded-md border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {experience?.technologies?.length > 6 && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">
                  +{experience?.technologies?.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </Button>

          {/* Expanded Content */}
          <div className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}>
            {/* All Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Award" size={18} className="mr-2 text-warning" />
                Complete Achievement List
              </h4>
              <div className="space-y-2">
                {experience?.achievements?.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-accent/20 rounded-lg border border-border">
                    <Icon name="Star" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            {experience?.projects && experience?.projects?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="FolderOpen" size={18} className="mr-2 text-primary" />
                  Key Projects
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {experience?.projects?.map((project, idx) => (
                    <div key={idx} className="p-4 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                      <h5 className="font-semibold text-foreground mb-2">{project?.name}</h5>
                      <p className="text-sm text-text-secondary mb-3">{project?.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project?.technologies?.map((tech, techIdx) => (
                          <span 
                            key={techIdx}
                            className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project?.impact && (
                        <div className="flex items-center space-x-2 text-xs text-success">
                          <Icon name="TrendingUp" size={12} />
                          <span>{project?.impact}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Layers" size={18} className="mr-2 text-cosmic-purple" />
                Complete Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience?.technologies?.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-accent/30 text-foreground text-sm rounded-lg border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            {experience?.metrics && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="BarChart3" size={18} className="mr-2 text-energetic-coral" />
                  Impact Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {experience?.metrics?.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-card/30 rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                      <div className="text-sm text-text-secondary">{metric?.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;