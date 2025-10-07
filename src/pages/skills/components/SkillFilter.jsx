import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsFilter = ({ categories, activeFilter, onFilterChange, searchTerm, onSearchChange }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  const filterOptions = [
    { key: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { key: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { key: 'backend', label: 'Backend', icon: 'Server' },
    { key: 'mobile', label: 'Mobile', icon: 'Smartphone' },
    { key: 'ai', label: 'AI & ML', icon: 'Brain' },
    { key: 'database', label: 'Database', icon: 'Database' },
    { key: 'devops', label: 'DevOps', icon: 'Settings' },
    { key: 'tools', label: 'Tools', icon: 'Wrench' }
  ];

  const proficiencyFilters = [
    { key: 'expert', label: 'Expert (90%+)', color: 'text-success' },
    { key: 'advanced', label: 'Advanced (75%+)', color: 'text-primary' },
    { key: 'intermediate', label: 'Intermediate (60%+)', color: 'text-warning' }
  ];

  return (
    <motion.div
      variants={filterVariants}
      initial="initial"
      animate="animate"
      className="mb-12"
    >
      <div className="glass-effect rounded-xl p-6 border border-border">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
              isSearchFocused ? 'text-primary' : 'text-text-secondary'
            }`}>
              <Icon name="Search" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e?.target?.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {filterOptions?.map((option) => (
              <Button
                key={option?.key}
                variant={activeFilter === option?.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => onFilterChange(option?.key)}
                iconName={option?.icon}
                iconPosition="left"
                iconSize={16}
                className="btn-morph"
              >
                {option?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Proficiency Quick Filters */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            {proficiencyFilters?.map((filter) => (
              <button
                key={filter?.key}
                onClick={() => onFilterChange(filter?.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter?.key
                    ? 'bg-primary/10 border-primary/30 text-primary' :'bg-transparent border-border text-text-secondary hover:text-foreground hover:border-primary/20'
                }`}
              >
                {filter?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">
              {searchTerm ? `Searching for "${searchTerm}"` : `Showing ${activeFilter === 'all' ? 'all' : activeFilter} skills`}
            </span>
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-text-secondary" />
              <span className="text-text-secondary">
                {categories?.reduce((total, cat) => total + cat?.skills?.length, 0)} total skills
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsFilter;