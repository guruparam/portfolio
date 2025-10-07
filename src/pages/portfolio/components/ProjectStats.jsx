import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'Code',
      label: 'Total Projects',
      value: projects?.length,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'ExternalLink',
      label: 'Live Projects',
      value: projects?.filter(p => p?.status === 'Live')?.length,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Star',
      label: 'Total Stars',
      value: projects?.reduce((acc, p) => acc + (p?.metrics?.stars || 0), 0),
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Users',
      label: 'Active Users',
      value: projects?.reduce((acc, p) => acc + (parseInt(p?.metrics?.users?.replace('k', '000') || '0')), 0),
      color: 'text-electric-cyan',
      bgColor: 'bg-electric-cyan/10',
      suffix: '+'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
    >
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-3 rounded-lg ${stat?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">
                {stat?.value?.toLocaleString()}{stat?.suffix || ''}
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat?.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectStats;