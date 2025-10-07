import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className="glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-neon-primary group">
      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon name="Quote" size={24} className="text-primary" />
        </div>
      </div>
      {/* Testimonial Text */}
      <blockquote className="text-text-secondary text-center mb-6 leading-relaxed italic">
        "{testimonial?.content}"
      </blockquote>
      {/* Author Info */}
      <div className="flex items-center justify-center space-x-3">
        <div className="relative">
          <Image 
            src={testimonial?.avatar}
            alt={testimonial?.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
        </div>
        
        <div className="text-center">
          <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
          <p className="text-sm text-text-secondary">{testimonial?.position}</p>
          <p className="text-xs text-primary">{testimonial?.company}</p>
        </div>
      </div>
      {/* Rating */}
      <div className="flex justify-center mt-4 space-x-1">
        {[...Array(5)]?.map((_, i) => (
          <Icon 
            key={i}
            name="Star" 
            size={16} 
            className={`${i < testimonial?.rating ? 'text-warning' : 'text-border'} transition-colors duration-300`}
          />
        ))}
      </div>
      {/* Relationship */}
      <div className="text-center mt-3">
        <span className="text-xs text-text-secondary bg-accent/20 px-2 py-1 rounded-full">
          {testimonial?.relationship}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;