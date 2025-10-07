import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import ProfileImage from '../../../../assets/images/profile-image.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-deep-space to-background">
      {/* Particle Background */}
      <div className="absolute inset-0 particle-field">
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse-glow"></div>
                <span className="text-sm font-medium text-success">About Paramaguru</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Ancient Wisdom</span>
                <br />
                <span className="text-foreground">Modern Code</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                From the botanical sciences to building scalable applications, my journey represents the fusion of diverse thinking with cutting-edge technology mastery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect">
                <Icon name="GraduationCap" size={20} className="text-primary" />
                <span className="text-sm font-medium">Annamalai University</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect">
                <Icon name="Calendar" size={20} className="text-cosmic-purple" />
                <span className="text-sm font-medium">2021 - 2024</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect">
                <Icon name="Leaf" size={20} className="text-success" />
                <span className="text-sm font-medium">Botany Graduate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-neon-primary">
                <Icon name="Download" size={20} />
                <span>Download Resume</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center space-x-2 px-6 py-3 rounded-lg glass-effect border border-border hover:border-primary/50 text-foreground font-medium transition-all duration-300">
                <Icon name="MessageCircle" size={20} />
                <span>Let's Connect</span>
                <Icon name="ExternalLink" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-cosmic-purple to-energetic-coral rounded-full opacity-20 blur-2xl animate-pulse-glow"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-effect border-2 border-primary/30">
                <Image
                  src={ProfileImage}
                  alt="Paramaguru - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full glass-effect border border-success/30 flex items-center justify-center animate-float">
                <Icon name="Code" size={24} className="text-success" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full glass-effect border border-cosmic-purple/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Icon name="Leaf" size={24} className="text-cosmic-purple" />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-full glass-effect border border-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                <Icon name="Lightbulb" size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;