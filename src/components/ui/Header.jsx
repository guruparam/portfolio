import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills', icon: 'Code' },
    { name: 'Experience', path: '/experience', icon: 'Briefcase' },
    { name: 'Portfolio', path: '/portfolio', icon: 'FolderOpen' }
  ];

  const secondaryItems = [
    { name: 'Certifications', path: '/certifications', icon: 'Award' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleHireMe = () => {
    // Scroll to contact section or navigate to contact page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-glass border-b border-border shadow-elevation-2' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('/homepage')}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cosmic-purple flex items-center justify-center group-hover:shadow-neon-primary transition-all duration-300">
                <span className="text-lg font-bold text-primary-foreground">P</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-cosmic-purple rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">Paramaguru</h1>
              <p className="text-xs text-text-secondary -mt-1">Tech Sage</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item?.path) ? 'text-primary' : 'group-hover:text-foreground'
                  }`}
                />
                <span>{item?.name}</span>
              </button>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-foreground hover:bg-accent/50 transition-all duration-300 flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-lg border border-border shadow-elevation-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {secondaryItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`w-full px-4 py-3 text-left text-sm transition-all duration-300 flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-foreground hover:bg-accent/30'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Availability Badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-success/10 border border-success/20">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
              <span className="text-xs font-medium text-success">Available</span>
            </div>

            {/* Hire Me CTA */}
            <Button
              variant="default"
              size="sm"
              onClick={handleHireMe}
              className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white border-0 shadow-neon-coral hidden sm:flex"
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Hire Me
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-accent/50 transition-all duration-300"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 bg-card/95 backdrop-blur-glass border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
                  <span className="text-sm font-medium text-success">Available for Hire</span>
                </div>
              </div>
              
              <Button
                variant="default"
                size="default"
                onClick={handleHireMe}
                className="w-full btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white border-0 shadow-neon-coral"
                iconName="Mail"
                iconPosition="left"
                iconSize={18}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;