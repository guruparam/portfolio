import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 btn-morph ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-neon-primary'
              : 'bg-accent/30 text-text-secondary hover:text-foreground hover:bg-accent/50 border border-border hover:border-primary/30'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          <span>{category?.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-text-secondary/20 text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;