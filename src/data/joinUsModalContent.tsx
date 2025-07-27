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
  return (
    <div className="space-y-6">
      {/* Custom content (e.g., person/band specific recruitment needs) */}
      {customContent && customContent}
      
      {/* General recruitment needs */}
      {showGeneralNeeds && (
        <div className="bg-gray-900/50 rounded-lg p-6">
          <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
            {GENERAL_RECRUITMENT_NEEDS}
          </pre>
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