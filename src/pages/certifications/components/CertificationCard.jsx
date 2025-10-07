import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CertificationCard = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleVerify = (verificationUrl) => {
    if (verificationUrl) {
      window.open(verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCredential = (credentialUrl) => {
    if (credentialUrl) {
      window.open(credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`group relative glass-effect rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover-lift stagger-animation ${
        isHovered ? 'neon-glow-primary' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-cosmic-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
      <div className="relative z-10">
        {/* Header with Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-cosmic-purple p-0.5">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center overflow-hidden">
                  <Image
                    src={certification?.badgeImage}
                    alt={`${certification?.name} Badge`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              {certification?.isVerified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="Check" size={12} className="text-background" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {certification?.name}
              </h3>
              <p className="text-sm text-text-secondary mb-1">{certification?.issuer}</p>
              <div className="flex items-center space-x-2 text-xs text-text-secondary">
                <Icon name="Calendar" size={12} />
                <span>{certification?.issueDate}</span>
                {certification?.expiryDate && (
                  <>
                    <span>•</span>
                    <span>Expires: {certification?.expiryDate}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            certification?.status === 'active' ?'bg-success/10 text-success border border-success/20'
              : certification?.status === 'expired' ?'bg-warning/10 text-warning border border-warning/20' :'bg-text-secondary/10 text-text-secondary border border-text-secondary/20'
          }`}>
            {certification?.status === 'active' ? 'Active' : 
             certification?.status === 'expired' ? 'Expired' : 'Pending'}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4 leading-relaxed">
          {certification?.description}
        </p>

        {/* Skills Tags */}
        {certification?.skills && certification?.skills?.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {certification?.skills?.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 text-xs font-medium bg-accent/30 text-foreground rounded-md border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Credential Details */}
        <div className="space-y-2 mb-4">
          {certification?.credentialId && (
            <div className="flex items-center space-x-2 text-xs text-text-secondary">
              <Icon name="Hash" size={12} />
              <span>ID: {certification?.credentialId}</span>
            </div>
          )}
          {certification?.score && (
            <div className="flex items-center space-x-2 text-xs text-text-secondary">
              <Icon name="Award" size={12} />
              <span>Score: {certification?.score}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {certification?.verificationUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleVerify(certification?.verificationUrl)}
              className="flex-1 btn-morph"
              iconName="Shield"
              iconPosition="left"
              iconSize={14}
            >
              Verify
            </Button>
          )}
          
          {certification?.credentialUrl && (
            <Button
              variant="default"
              size="sm"
              onClick={() => handleViewCredential(certification?.credentialUrl)}
              className="flex-1 btn-morph bg-primary hover:bg-primary/90"
              iconName="ExternalLink"
              iconPosition="left"
              iconSize={14}
            >
              View
            </Button>
          )}
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-cosmic-purple/5 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default CertificationCard;