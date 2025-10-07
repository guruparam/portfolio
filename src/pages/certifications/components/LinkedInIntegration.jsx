import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LinkedInIntegration = () => {
  const handleLinkedInProfile = () => {
    window.open('https://linkedin.com/in/paramaguru-dev', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInCertifications = () => {
    window.open('https://linkedin.com/in/paramaguru-dev/details/certifications/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="glass-effect rounded-xl p-6 border border-border mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-professional-blue to-professional-blue/70 flex items-center justify-center">
            <Icon name="Linkedin" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">LinkedIn Verification</h3>
            <p className="text-sm text-text-secondary">
              View verified certifications on my LinkedIn profile
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLinkedInCertifications}
            className="btn-morph"
            iconName="Award"
            iconPosition="left"
            iconSize={16}
          >
            Certifications
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={handleLinkedInProfile}
            className="btn-morph bg-professional-blue hover:bg-professional-blue/90"
            iconName="ExternalLink"
            iconPosition="left"
            iconSize={16}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkedInIntegration;