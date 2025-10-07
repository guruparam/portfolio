import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectFilters = ({ 
  activeFilter, 
  setActiveFilter, 
  activeType, 
  setActiveType,
  activeComplexity,
  setActiveComplexity 
}) => {
  const techFilters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'react', label: 'React', icon: 'Code' },
    { id: 'django', label: 'Django', icon: 'Server' },
    { id: 'flutter', label: 'Flutter', icon: 'Smartphone' },
    { id: 'fullstack', label: 'Full Stack', icon: 'Layers' },
    { id: 'ai', label: 'AI/ML', icon: 'Brain' }
  ];

  const typeFilters = [
    { id: 'all', label: 'All Types' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'api', label: 'APIs' },
    { id: 'tool', label: 'Tools' }
  ];

  const complexityFilters = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ];

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={filterVariants}
      initial="hidden"
      animate="visible"
      className="mb-12"
    >
      <div className="glass-effect rounded-xl p-6 border border-border">
        {/* Technology Filters */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Filter" size={20} className="mr-2 text-primary" />
            Filter by Technology
          </h3>
          <div className="flex flex-wrap gap-2">
            {techFilters?.map((filter) => (
              <Button
                key={filter?.id}
                variant={activeFilter === filter?.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter?.id)}
                iconName={filter?.icon}
                iconPosition="left"
                iconSize={16}
                className={`transition-all duration-300 ${
                  activeFilter === filter?.id 
                    ? 'shadow-neon-primary' 
                    : 'hover:border-primary/50'
                }`}
              >
                {filter?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Secondary Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Type */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
              Project Type
            </h4>
            <div className="flex flex-wrap gap-2">
              {typeFilters?.map((type) => (
                <Button
                  key={type?.id}
                  variant={activeType === type?.id ? "secondary" : "ghost"}
                  size="xs"
                  onClick={() => setActiveType(type?.id)}
                  className={`text-xs ${
                    activeType === type?.id 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {type?.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Complexity Level */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
              Complexity Level
            </h4>
            <div className="flex flex-wrap gap-2">
              {complexityFilters?.map((complexity) => (
                <Button
                  key={complexity?.id}
                  variant={activeComplexity === complexity?.id ? "secondary" : "ghost"}
                  size="xs"
                  onClick={() => setActiveComplexity(complexity?.id)}
                  className={`text-xs ${
                    activeComplexity === complexity?.id 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {complexity?.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        {(activeFilter !== 'all' || activeType !== 'all' || activeComplexity !== 'all') && (
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Filter" size={16} />
                <span>Active filters:</span>
                <div className="flex space-x-2">
                  {activeFilter !== 'all' && (
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                      {techFilters?.find(f => f?.id === activeFilter)?.label}
                    </span>
                  )}
                  {activeType !== 'all' && (
                    <span className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs">
                      {typeFilters?.find(f => f?.id === activeType)?.label}
                    </span>
                  )}
                  {activeComplexity !== 'all' && (
                    <span className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs">
                      {complexityFilters?.find(f => f?.id === activeComplexity)?.label}
                    </span>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="xs"
                onClick={() => {
                  setActiveFilter('all');
                  setActiveType('all');
                  setActiveComplexity('all');
                }}
                iconName="X"
                iconSize={14}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectFilters;