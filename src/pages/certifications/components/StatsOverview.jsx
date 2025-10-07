import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ certifications }) => {
  const totalCertifications = certifications?.length;
  const activeCertifications = certifications?.filter(cert => cert?.status === 'active')?.length;
  const verifiedCertifications = certifications?.filter(cert => cert?.isVerified)?.length;
  const currentYear = new Date()?.getFullYear();
  const thisYearCertifications = certifications?.filter(cert => 
    new Date(cert.issueDate)?.getFullYear() === currentYear
  )?.length;

  const stats = [
    {
      id: 1,
      label: "Total Certifications",
      value: totalCertifications,
      icon: "Award",
      color: "primary",
      description: "Professional certifications earned"
    },
    {
      id: 2,
      label: "Active Credentials",
      value: activeCertifications,
      icon: "CheckCircle",
      color: "success",
      description: "Currently valid certifications"
    },
    {
      id: 3,
      label: "Verified Badges",
      value: verifiedCertifications,
      icon: "Shield",
      color: "cosmic-purple",
      description: "Verified by issuing authorities"
    },
    {
      id: 4,
      label: "This Year",
      value: thisYearCertifications,
      icon: "TrendingUp",
      color: "energetic-coral",
      description: "Certifications earned in 2025"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'success':
        return 'from-success/20 to-success/5 border-success/20 text-success';
      case 'cosmic-purple':
        return 'from-cosmic-purple/20 to-cosmic-purple/5 border-cosmic-purple/20 text-cosmic-purple';
      case 'energetic-coral':
        return 'from-energetic-coral/20 to-energetic-coral/5 border-energetic-coral/20 text-energetic-coral';
      default:
        return 'from-primary/20 to-primary/5 border-primary/20 text-primary';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats?.map((stat, index) => (
        <div
          key={stat?.id}
          className={`glass-effect rounded-xl p-6 border hover:border-opacity-50 transition-all duration-300 hover-lift stagger-animation bg-gradient-to-br ${getColorClasses(stat?.color)}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
              stat?.color === 'success' ? 'from-success to-success/70' :
              stat?.color === 'cosmic-purple' ? 'from-cosmic-purple to-cosmic-purple/70' :
              stat?.color === 'energetic-coral'? 'from-energetic-coral to-energetic-coral/70' : 'from-primary to-primary/70'
            } flex items-center justify-center`}>
              <Icon name={stat?.icon} size={20} className="text-white" />
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${
                stat?.color === 'success' ? 'text-success' :
                stat?.color === 'cosmic-purple' ? 'text-cosmic-purple' :
                stat?.color === 'energetic-coral'? 'text-energetic-coral' : 'text-primary'
              }`}>
                {stat?.value}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{stat?.label}</h3>
            <p className="text-xs text-text-secondary">{stat?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;