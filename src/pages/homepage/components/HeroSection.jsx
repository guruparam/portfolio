import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Building scalable apps with React, Django, Flutter & modern AI',
    'Full-Stack Developer with AI Integration Expertise',
    'Creating Digital Experiences That Solve Real Problems'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts?.[currentIndex];
      
      if (!isDeleting) {
        if (currentText?.length < current?.length) {
          setCurrentText(current?.substring(0, currentText?.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText?.length > 0) {
          setCurrentText(current?.substring(0, currentText?.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts?.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/paramaguru-resume.pdf';
    link.download = 'Paramaguru_Resume.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Background */}
      <div className="absolute inset-0 particle-field">
        {[...Array(50)]?.map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-success/20"
          >
            <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
            <span className="text-sm font-medium text-success">Available for Hire</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-gradient neon-text">Paramaguru</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary font-medium"
            >
              <span className="text-text-primary">Tech Sage</span> • Full-Stack Developer
            </motion.div>
          </div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem]">
              {currentText}
              <span className="animate-pulse text-primary">|</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-text-secondary leading-relaxed"
          >
            Crafting digital experiences that solve real-world problems with elegance and innovation. 
            Specializing in React, Django, Flutter, and AI integration for scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white border-0 shadow-neon-coral px-8 py-4 text-lg"
              iconName="Mail"
              iconPosition="left"
              iconSize={20}
            >
              Hire Me Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="btn-morph border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
              iconName="Download"
              iconPosition="left"
              iconSize={20}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            {[
              { name: 'GitHub', icon: 'Github', url: 'https://github.com/paramaguru' },
              { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/paramaguru' },
              { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/paramaguru' },
              { name: 'Email', icon: 'Mail', url: 'mailto:paramaguru@example.com' }
            ]?.map((social, index) => (
              <motion.a
                key={social?.name}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-effect border border-border hover:border-primary/50 transition-all duration-300 group hover-lift"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <Icon 
                  name={social?.icon} 
                  size={24} 
                  className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-text-secondary"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <Icon name="ChevronDown" size={24} className="animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;