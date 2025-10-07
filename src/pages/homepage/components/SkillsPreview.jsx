import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SkillsPreview = () => {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'Monitor',
      color: 'from-primary to-electric-cyan',
      skills: [
        { name: 'React', level: 95, icon: 'Code' },
        { name: 'Next.js', level: 90, icon: 'Zap' },
        { name: 'TypeScript', level: 85, icon: 'FileCode' },
        { name: 'Tailwind CSS', level: 92, icon: 'Palette' }
      ]
    },
    {
      title: 'Backend',
      icon: 'Server',
      color: 'from-success to-emerald-400',
      skills: [
        { name: 'Django', level: 88, icon: 'Database' },
        { name: 'Python', level: 90, icon: 'Code2' },
        { name: 'REST APIs', level: 85, icon: 'Globe' },
        { name: 'PostgreSQL', level: 80, icon: 'HardDrive' }
      ]
    },
    {
      title: 'Mobile',
      icon: 'Smartphone',
      color: 'from-cosmic-purple to-purple-400',
      skills: [
        { name: 'Flutter', level: 87, icon: 'Smartphone' },
        { name: 'Dart', level: 85, icon: 'Code' },
        { name: 'Firebase', level: 82, icon: 'Cloud' },
        { name: 'App Store', level: 78, icon: 'Store' }
      ]
    },
    {
      title: 'AI & Tools',
      icon: 'Brain',
      color: 'from-energetic-coral to-red-400',
      skills: [
        { name: 'Machine Learning', level: 75, icon: 'Brain' },
        { name: 'Git', level: 92, icon: 'GitBranch' },
        { name: 'Docker', level: 80, icon: 'Package' },
        { name: 'AWS', level: 75, icon: 'Cloud' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="Code" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Technical Skills</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My <span className="text-gradient">Tech Stack</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Mastering modern technologies to build scalable, efficient, and innovative solutions 
            across web, mobile, and AI domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories?.map((category, categoryIndex) => (
            <motion.div
              key={category?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="p-6 rounded-xl glass-effect border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category?.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={category?.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category?.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category?.skills?.map((skill, skillIndex) => (
                    <motion.div
                      key={skill?.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill?.icon} size={14} className="text-text-secondary group-hover/skill:text-primary transition-colors duration-300" />
                          <span className="text-sm font-medium text-foreground">{skill?.name}</span>
                        </div>
                        <span className="text-xs text-text-secondary">{skill?.level}%</span>
                      </div>
                      
                      <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill?.level}%` }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category?.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Years Experience', value: '3+', icon: 'Calendar' },
            { label: 'Projects Completed', value: '50+', icon: 'FolderOpen' },
            { label: 'Technologies', value: '20+', icon: 'Code' },
            { label: 'Happy Clients', value: '25+', icon: 'Users' }
          ]?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl glass-effect border border-border hover:border-primary/30 transition-all duration-300 group hover-lift"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/skills')}
            className="btn-morph border-primary text-primary hover:bg-primary/10"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={18}
          >
            Explore All Skills
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;