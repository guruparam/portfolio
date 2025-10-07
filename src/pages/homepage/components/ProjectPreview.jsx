import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      description: 'Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Django', 'PostgreSQL', 'AI/ML', 'Stripe'],
      category: 'Web Application',
      status: 'Live',
      gradient: 'from-primary to-electric-cyan',
      metrics: {
        users: '10K+',
        performance: '98%',
        uptime: '99.9%'
      }
    },
    {
      id: 2,
      title: 'Cross-Platform Fitness App',
      description: 'Flutter-based fitness tracking app with real-time workout monitoring, social features, and personalized training plans.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'Firebase', 'ML Kit', 'Charts'],
      category: 'Mobile App',
      status: 'In Development',
      gradient: 'from-success to-emerald-400',
      metrics: {
        downloads: '5K+',
        rating: '4.8★',
        retention: '85%'
      }
    },
    {
      id: 3,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with advanced data visualization, predictive analytics, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Python', 'AWS'],
      category: 'Data Visualization',
      status: 'Live',
      gradient: 'from-cosmic-purple to-purple-400',
      metrics: {
        dataPoints: '1M+',
        accuracy: '96%',
        speed: '2.3s'
      }
    }
  ];

  return (
    <section className="py-20 bg-card/30">
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
            <Icon name="FolderOpen" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recent <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise, 
            creative problem-solving, and real-world impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects?.map((project, index) => (
            <motion.div
              key={project?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group hover-lift"
            >
              <div className="relative overflow-hidden rounded-xl glass-effect border border-border hover:border-primary/30 transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project?.status === 'Live' ?'bg-success/20 text-success border border-success/30' :'bg-warning/20 text-warning border border-warning/30'
                    }`}>
                      {project?.status}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground border border-border">
                      {project?.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project?.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(project?.metrics)?.map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-foreground">{value}</div>
                        <div className="text-xs text-text-secondary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                      iconName="ExternalLink"
                      iconPosition="right"
                      iconSize={14}
                    >
                      View Live
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-text-secondary hover:text-foreground hover:bg-accent/50"
                      iconName="Github"
                      iconPosition="right"
                      iconSize={14}
                    >
                      Code
                    </Button>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project?.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Projects Delivered', value: '50+', icon: 'CheckCircle', color: 'text-success' },
            { label: 'Client Satisfaction', value: '98%', icon: 'Heart', color: 'text-energetic-coral' },
            { label: 'Code Quality', value: 'A+', icon: 'Code', color: 'text-primary' },
            { label: 'On-Time Delivery', value: '100%', icon: 'Clock', color: 'text-cosmic-purple' }
          ]?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl glass-effect border border-border hover:border-primary/30 transition-all duration-300 group hover-lift"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background/50 mb-3 group-hover:scale-110 transition-transform duration-300 ${stat?.color}`}>
                <Icon name={stat?.icon} size={24} />
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
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/portfolio')}
            className="btn-morph border-primary text-primary hover:bg-primary/10"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={18}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;