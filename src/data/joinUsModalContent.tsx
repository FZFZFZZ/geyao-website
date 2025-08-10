import React from 'react';
import { GENERAL_RECRUITMENT_NEEDS } from './recruitmentNeeds';

interface JoinUsModalContentProps {
  customContent?: React.ReactNode;
  showGeneralNeeds?: boolean;
  showDirectChannelTip?: boolean;
}

const JoinUsModalContent: React.FC<JoinUsModalContentProps> = ({
  customContent,
  showGeneralNeeds = true,
  showDirectChannelTip = true
}) => {
  // Helper function to convert URLs to clickable links
  const renderClickableLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-6">
      {/* Custom content (e.g., person/band specific recruitment needs) */}
      {customContent && customContent}
      
      {/* General recruitment needs */}
      {showGeneralNeeds && (
        <div className="bg-gray-900/50 rounded-lg p-6">
          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
            {renderClickableLinks(GENERAL_RECRUITMENT_NEEDS)}
          </div>
        </div>
      )}
      
      {/* Direct channel tip */}
      {showDirectChannelTip && (
        <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-600/30">
          <p className="text-yellow-300 text-sm font-medium">
            💡 直选渠道请前往个人或乐队界面点击Join Us
          </p>
        </div>
      )}
    </div>
  );
};

export default JoinUsModalContent; 