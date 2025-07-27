import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialBubble {
  id: string;
  platform: string;
  url: string;
  icon: IconProp | null; // FontAwesome icon definition or null for custom SVG
  color: string;
  variant?: string;
  baseSize?: number;
  glow?: string;
  gradientType?: 'linear' | 'radial' | 'solid';
  pulseDelay?: number;
  pulseDuration?: number;
  x: number;
  y: number;
  animationDuration: number;
  animationDelay: number;
  isVisible: boolean;
  size?: number;
  animationType?: string;
  floatDelay?: number;
} 