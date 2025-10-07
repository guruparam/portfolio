import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsHeader = () => {
  const headerVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const statsVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
    }
  };

  const stats = [
    { label: 'Technologies', value: '25+', icon: 'Code' },
    { label: 'Years Experience', value: '3+', icon: 'Clock' },
    { label: 'Projects Built', value: '50+', icon: 'FolderOpen' },
    { label: 'Certifications', value: '8', icon: 'Award' }
  ];

  return (
    <div className="text-center mb-16">
      <motion.div
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-gradient">Skills</span>{' '}
          <span className="text-foreground">Laboratory</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Interactive showcase of technical expertise with modern frameworks, AI integration, 
          and full-stack development capabilities. Hover over skills to explore deeper insights 
          and real-world applications.
        </p>
      </motion.div>
      {/* Stats Grid */}
      <motion.div
        variants={statsVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {stats?.map((stat, index) => (
          <motion.div
            key={stat?.label}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-cosmic-purple shadow-lg group-hover:shadow-neon-primary transition-all duration-300">
                <Icon 
                  name={stat?.icon} 
                  size={24} 
                  className="text-white"
                />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat?.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-text-secondary">Explore Skills Below</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="ChevronDown" size={20} className="text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsHeader;