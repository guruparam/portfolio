import React from 'react';
import Icon from '../../../components/AppIcon';

const CertificationTimeline = ({ certifications }) => {
  const sortedCertifications = [...certifications]?.sort((a, b) => 
    new Date(b.issueDate) - new Date(a.issueDate)
  );

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cosmic-purple to-transparent"></div>
      <div className="space-y-8">
        {sortedCertifications?.map((cert, index) => (
          <div key={cert?.id} className="relative flex items-start space-x-6">
            {/* Timeline Node */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cosmic-purple p-0.5">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-primary" />
                </div>
              </div>
              {cert?.isVerified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="Check" size={12} className="text-background" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="glass-effect rounded-lg p-4 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{cert?.name}</h3>
                    <p className="text-sm text-text-secondary">{cert?.issuer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{cert?.issueDate}</p>
                    {cert?.expiryDate && (
                      <p className="text-xs text-text-secondary">Expires: {cert?.expiryDate}</p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-3">{cert?.description}</p>

                {cert?.skills && cert?.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium bg-accent/30 text-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationTimeline;