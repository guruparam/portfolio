import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${skill?.proficiency}%`,
      transition: { 
        duration: 1.5, 
        delay: (index * 0.1) + 0.3,
        ease: "easeOut"
      }
    }
  };

  const getProficiencyColor = (level) => {
    if (level >= 90) return 'from-success to-success/80';
    if (level >= 75) return 'from-primary to-electric-cyan';
    if (level >= 60) return 'from-warning to-warning/80';
    return 'from-error to-error/80';
  };

  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cosmic-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
      {/* Main Card */}
      <div className="relative glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${skill?.gradient} shadow-lg`}>
              <Icon 
                name={skill?.icon} 
                size={24} 
                className="text-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {skill?.name}
              </h3>
              <p className="text-sm text-text-secondary">
                {skill?.category}
              </p>
            </div>
          </div>
          
          {/* Proficiency Badge */}
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-text-secondary mb-1">
              {getProficiencyLabel(skill?.proficiency)}
            </span>
            <span className="text-sm font-bold text-primary">
              {skill?.proficiency}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              variants={progressVariants}
              initial="initial"
              animate="animate"
              className={`h-full bg-gradient-to-r ${getProficiencyColor(skill?.proficiency)} rounded-full relative`}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={14} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Experience</span>
          </div>
          <p className="text-sm font-medium text-foreground">
            {skill?.experience}
          </p>
        </div>

        {/* Projects Count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="FolderOpen" size={14} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Projects</span>
          </div>
          <span className="text-sm font-medium text-primary">
            {skill?.projectsCount}
          </span>
        </div>

        {/* Hover Content */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {skill?.achievements?.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={12} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-text-secondary">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
            
            {skill?.certifications && skill?.certifications?.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-1">
                  {skill?.certifications?.map((cert, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Endorsements */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="ThumbsUp" size={14} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Endorsements</span>
          </div>
          <span className="text-sm font-medium text-foreground">
            {skill?.endorsements}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;