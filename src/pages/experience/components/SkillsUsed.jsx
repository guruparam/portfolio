import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsUsed = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "Monitor",
      color: "text-primary",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      category: "Backend Development", 
      icon: "Server",
      color: "text-success",
      skills: ["Django", "Python", "REST APIs", "PostgreSQL", "MySQL", "Redis", "Celery"]
    },
    {
      category: "Mobile Development",
      icon: "Smartphone",
      color: "text-warning",
      skills: ["Flutter", "Dart", "Firebase", "SQLite", "Provider", "Bloc Pattern"]
    },
    {
      category: "DevOps & Tools",
      icon: "Settings",
      color: "text-energetic-coral",
      skills: ["Git", "Docker", "AWS", "Linux", "Nginx", "CI/CD", "Postman"]
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Technologies & Skills Applied
        </h3>
        <p className="text-text-secondary">
          Core technologies and tools used across professional projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories?.map((category, index) => (
          <div 
            key={index}
            className="glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-neon-primary group"
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={category?.icon} size={20} className={category?.color} />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {category?.category}
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category?.skills?.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1.5 bg-accent/20 text-foreground text-sm rounded-lg border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsUsed;