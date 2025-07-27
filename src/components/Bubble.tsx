import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { getBubbleClass } from '../lib/bubbleStyles';
import type { SocialBubble } from '../types/socialBubble';

interface BubbleProps {
  bubble: SocialBubble;
  onClick: (bubble: SocialBubble) => void;
}

const Bubble: React.FC<BubbleProps> = ({ bubble, onClick }) => {
  const bubbleSize = bubble.size || 80;
  
  // Icon size is 45% of bubble size, with responsive limits
  // For small bubbles (3x3 grid), allow smaller icons
  const minIconSize = Math.max(16, bubbleSize * 0.25); // Minimum 25% of bubble size, at least 16px
  const maxIconSize = Math.max(24, bubbleSize * 0.6);  // Maximum 60% of bubble size, at least 24px
  const iconSize = Math.max(minIconSize, Math.min(maxIconSize, Math.round(bubbleSize * 0.45)));

  return (
    <motion.div
      className={`absolute cursor-pointer group ${bubble.isVisible ? 'opacity-100' : 'opacity-0 scale-150'}`}
      initial={{
        left: '50%',
        top: '90%', // Start from "Contact Us" text center (accounting for padding and text height)
        x: -bubbleSize / 2,
        y: -bubbleSize / 2,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        left: `${bubble.x}%`,
        top: `${bubble.y}%`,
        x: -bubbleSize / 2,
        y: -bubbleSize / 2,
        scale: bubble.isVisible ? 1 : 0,
        opacity: bubble.isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        delay: bubble.animationDelay || 0,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 120,
        damping: 12,
      }}
      style={{
        width: bubbleSize,
        height: bubbleSize,
        zIndex: 10,
      }}
      onClick={() => onClick(bubble)}
      onMouseEnter={(e) => {
        // 停止float动画 - 找到内层的动画元素
        const animatedDiv = e.currentTarget.querySelector('.float-animation') as HTMLElement;
        if (animatedDiv) {
          animatedDiv.style.animationPlayState = 'paused';
        }
      }}
      onMouseLeave={(e) => {
        // 恢复float动画 - 找到内层的动画元素
        const animatedDiv = e.currentTarget.querySelector('.float-animation') as HTMLElement;
        if (animatedDiv) {
          animatedDiv.style.animationPlayState = 'running';
        }
      }}
    >
      {/* Actual bubble with animation */}
      <div
        className="absolute float-animation"
        style={{
          left: '0px', // No offset needed since container matches bubble size
          top: '0px',
          width: bubbleSize,
          height: bubbleSize,
          animation: bubble.isVisible ? `float ${bubble.animationDuration}s ease-in-out ${(bubble.animationDelay || 0) + 0.6}s infinite alternate` : 'none',
        }}
      >
        <div
          className={`relative flex items-center justify-center hover:scale-105 transition-all duration-200 ease-out ${getBubbleClass(bubble)}`}
          style={{ 
            width: bubbleSize, 
            height: bubbleSize, 
            opacity: 0.85,
          }}
        >
        {/* Bubble shine/highlight */}
        <div
          className="absolute left-[10%] top-[10%] w-[80%] h-[45%] rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 100%)',
            filter: 'blur(12px)',
            opacity: 0.5,
          }}
        />
        {/* Bubble glow/illuminance */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 80%, transparent 100%)',
            opacity: 0.7,
            filter: 'blur(2px)',
          }}
        />
        {/* Bubble Content */}
        {bubble.id === 'bilibili' ? (
          <img
            src="/icons/bilibili.svg"
            alt="Bilibili"
            style={{ width: iconSize, height: iconSize }}
            className="icon-vibrate"
          />
        ) : bubble.id === 'xiaohongshu' ? (
          <img
            src="/icons/xiaohongshu.svg"
            alt="Xiaohongshu"
            style={{ width: iconSize, height: iconSize }}
            className="icon-vibrate"
          />
        ) : bubble.icon ? (
          <FontAwesomeIcon icon={bubble.icon} style={{ width: iconSize, height: iconSize }} className="text-white icon-vibrate" />
        ) : null}
        {/* Platform Name */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out whitespace-nowrap z-50">
          {bubble.platform}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bubble; 