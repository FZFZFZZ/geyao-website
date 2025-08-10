"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { GENERAL_RECRUITMENT_NEEDS } from '@/data/recruitmentNeeds';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const navLinks = [
    { href: "/bands", label: "Bands" },
    { href: "/people", label: "People" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="relative z-10 bg-gray-800/50 p-8 md:p-12 rounded-lg shadow-2xl backdrop-blur-sm border border-white/10">
        {/* Join Us 右上角斜着的彩色文字 */}
        <div className="absolute -top-2 -right-2 transform rotate-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="animate-ping-custom transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500/50 rounded-lg p-3"
          >
            <span className="font-join-us">
              Join Us
            </span>
          </button>
        </div>

        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-postmodern-display text-white tracking-tight">Welcome</h1>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              passHref
              className="group relative flex items-center justify-center h-24 w-24 md:h-28 md:w-28 rounded-full bg-gray-700/50 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-600/70 hover:scale-105"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 弹窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 relative border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4 font-postmodern-display">
                Join Us
              </h2>
              <p className="text-gray-300 font-postmodern-body">
                欢迎加入我们的音乐社团！
              </p>
            </div>
            
            <div className="space-y-6">
              {/* 总招聘需求 */}
              <div className="bg-gray-900/50 rounded-lg p-6">
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {renderClickableLinks(GENERAL_RECRUITMENT_NEEDS)}
                </div>
              </div>
              
              {/* 其他页面的提示 */}
              <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-600/30">
                <p className="text-yellow-300 text-sm font-medium">
                  💡 直选渠道请前往个人或乐队界面点击Join Us
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default HeroSection; 