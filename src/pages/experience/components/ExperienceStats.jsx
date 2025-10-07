import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceStats = () => {
  const stats = [
    {
      icon: "Calendar",
      value: "2+",
      label: "Years Experience",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: "Code",
      value: "15+",
      label: "Projects Delivered",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    },
    {
      icon: "Users",
      value: "5+",
      label: "Team Collaborations",
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20"
    },
    {
      icon: "Award",
      value: "100%",
      label: "Project Success Rate",
      color: "text-energetic-coral",
      bgColor: "bg-energetic-coral/10",
      borderColor: "border-energetic-coral/20"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats?.map((stat, index) => (
        <div 
          key={index}
          className={`glass-effect rounded-xl p-6 border ${stat?.borderColor} hover:border-opacity-50 transition-all duration-300 hover:shadow-lg group text-center`}
        >
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className={`text-2xl font-bold ${stat?.color} mb-1`}>
            {stat?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceStats;