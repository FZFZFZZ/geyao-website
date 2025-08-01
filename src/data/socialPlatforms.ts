import { faInstagram, faYoutube, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialPlatforms = [
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/nusgeyao', icon: faInstagram, color: 'from-pink-500 to-purple-600', variant: 'pulse', baseSize: 95, glow: 'shadow-pink-400/60', gradientType: 'linear', pulseDelay: 0, pulseDuration: 2 },
  { id: 'bilibili', platform: 'Bilibili', url: 'https://b23.tv/cArs6d6', icon: null, color: 'from-pink-400 to-pink-600', variant: 'pulse', baseSize: 85, glow: 'shadow-pink-300/50', gradientType: 'radial', pulseDelay: 0.3, pulseDuration: 2.5 },
  { id: 'xiaohongshu', platform: 'Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/600e8a780000000001001246?xsec_token=YBVEVoQHx4oTJRLq1WO7MqLZtq7svYHnr8jfiFv-iwsBE=&xsec_source=app_share&xhsshare=CopyLink&appuid=60dab21800000000010008b1&apptime=1751461120&share_id=95d76212c5ba4d62981080bfffb0fee9', icon: null, color: 'bg-[#FF2442]', variant: 'pulse', baseSize: 75, glow: 'shadow-red-500/60', gradientType: 'solid', pulseDelay: 0.6, pulseDuration: 1.8 },
  { id: 'tiktok', platform: 'TikTok', url: 'https://www.tiktok.com/@nusgeyao', icon: faTiktok, color: 'from-black to-gray-700', variant: 'pulse', baseSize: 105, glow: 'shadow-black/70', gradientType: 'linear', pulseDelay: 0.9, pulseDuration: 2.2 },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@nusgeyao5810?si=rN27DsNcF6J5rT9v', icon: faYoutube, color: 'from-red-500 to-red-700', variant: 'pulse', baseSize: 105, glow: 'shadow-red-600/70', gradientType: 'radial', pulseDelay: 1.2, pulseDuration: 3 },
  { id: 'email', platform: 'Email', url: 'mailto:fzfzfzz3304802@gmail.com', icon: faEnvelope, color: 'bg-[#22c55e]', variant: 'pulse', baseSize: 70, glow: 'shadow-green-400/60', gradientType: 'solid', pulseDelay: 1.8, pulseDuration: 1.9 },
  { id: 'music', platform: 'Spotify', url: 'https://open.spotify.com/user/31xsiwv3hjrjmexib3x5ntlatizm', icon: faSpotify, color: 'from-green-400 to-green-600', variant: 'pulse', baseSize: 90, glow: 'shadow-green-400/60', gradientType: 'radial', pulseDelay: 2.4, pulseDuration: 2.8 },
];

export default socialPlatforms;
