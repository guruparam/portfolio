import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FloatingResumeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 300; // Show after scrolling 300px
      
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/paramaguru-resume.pdf';
    link.download = 'Paramaguru_Resume.pdf';
    link?.click();
    
    // Show success feedback
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Main Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                onClick={handleDownload}
                variant="default"
                size="lg"
                className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white border-0 shadow-neon-coral px-6 py-4 rounded-full"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                <span className="hidden sm:inline">Resume</span>
              </Button>
              
              {/* Pulse Ring */}
              <div className="absolute -inset-1 bg-energetic-coral rounded-full opacity-20 animate-ping"></div>
            </motion.div>

            {/* Success Feedback */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 whitespace-nowrap"
                >
                  <div className="px-4 py-2 rounded-lg glass-effect border border-success/30 bg-success/10 text-success text-sm font-medium flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} />
                    <span>Resume Downloaded!</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tooltip */}
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-3 py-2 rounded-lg glass-effect border border-border text-foreground text-sm font-medium whitespace-nowrap">
                Download Resume
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-border"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingResumeButton;