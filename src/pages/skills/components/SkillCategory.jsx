import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import SkillCard from './SkillCard.jsx';

const SkillCategory = ({ category, skills, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const categoryVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    expanded: { 
      height: 'auto', 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    collapsed: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Frontend': 'Monitor',
      'Backend': 'Server',
      'Mobile': 'Smartphone',
      'AI & Machine Learning': 'Brain',
      'Database': 'Database',
      'DevOps': 'Settings',
      'Tools & Others': 'Wrench'
    };
    return iconMap?.[categoryName] || 'Code';
  };

  const getCategoryGradient = (categoryName) => {
    const gradientMap = {
      'Frontend': 'from-primary to-electric-cyan',
      'Backend': 'from-cosmic-purple to-primary',
      'Mobile': 'from-success to-primary',
      'AI & Machine Learning': 'from-energetic-coral to-cosmic-purple',
      'Database': 'from-warning to-primary',
      'DevOps': 'from-professional-blue to-cosmic-purple',
      'Tools & Others': 'from-neutral-gray to-primary'
    };
    return gradientMap?.[categoryName] || 'from-primary to-cosmic-purple';
  };

  const skillsCount = skills?.length;
  const avgProficiency = Math.round(skills?.reduce((sum, skill) => sum + skill?.proficiency, 0) / skillsCount);

  return (
    <motion.div
      variants={categoryVariants}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      {/* Category Header */}
      <div 
        className="flex items-center justify-between p-6 glass-effect rounded-xl border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer group mb-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryGradient(category?.name)} shadow-lg`}>
            <Icon 
              name={getCategoryIcon(category?.name)} 
              size={24} 
              className="text-white"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {category?.name}
            </h2>
            <p className="text-sm text-text-secondary">
              {category?.description}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Stats */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{skillsCount}</div>
              <div className="text-xs text-text-secondary">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-success">{avgProficiency}%</div>
              <div className="text-xs text-text-secondary">Avg Level</div>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon 
              name="ChevronDown" 
              size={20} 
              className="text-text-secondary group-hover:text-primary transition-colors duration-300"
            />
          </motion.div>
        </div>
      </div>
      {/* Skills Grid */}
      <motion.div
        variants={contentVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skill, skillIndex) => (
            <SkillCard 
              key={skill?.id} 
              skill={skill} 
              index={skillIndex}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;