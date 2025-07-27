"use client";

import { notFound } from "next/navigation";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { Instagram, Youtube, Music, Users, Calendar, Play, ExternalLink, Guitar, Mic, Piano, Drum, FolderOpen, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import JoinUsButton from "@/components/JoinUsButton";

interface BandPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BandPage = ({ params }: BandPageProps) => {
  const { id } = React.use(params);
  const band = bandsData.find(b => b.id === id);
  
  if (!band) {
    notFound();
  }

  const bandMembers = peopleData.filter(person => band.members && band.members.includes(person.id));

  // Function to get instrument icon
  const getInstrumentIcon = (instrument: string) => {
    const iconProps = { size: 16, className: "text-primary" };
    switch (instrument.toLowerCase()) {
      case 'guitar':
        return <Guitar {...iconProps} />;
      case 'vocals':
        return <Mic {...iconProps} />;
      case 'piano':
        return <Piano {...iconProps} />;
      case 'drums':
        return <Drum {...iconProps} />;
      case 'bass':
        return <Guitar {...iconProps} />; // Using guitar icon for bass
      default:
        return <Music {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Band Photo */}
            <div className="relative lg:w-1/3">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-700/50">
                {band.photo ? (
                  <Image
                    src={band.photo}
                    alt={band.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                    <Music size={80} className="text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            {/* Band Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{band.name}</h1>
              
              {/* 风格 tags section */}
              {band.tags && band.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {band.tags.map((tag, idx) => (
                    <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {band.formed && (
                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span>Formed {band.formed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{bandMembers.length} members</span>
                  </div>
                </div>
              )}

              {band.description && (
                <p className="text-xl text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
                  {band.description}
                </p>
              )}

              {/* Social Links */}
              {band.social && (band.social.instagram || band.social.youtube || band.social.spotify) && (
                <div className="flex gap-4">
                  {band.social.instagram && (
                    <a
                      href={`https://instagram.com/${band.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <Instagram size={24} />
                    </a>
                  )}
                  {band.social.youtube && (
                    <a
                      href={`https://youtube.com/@${band.social.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <Youtube size={24} />
                    </a>
                  )}
                  {band.social.spotify && (
                    <a
                      href={`https://open.spotify.com/artist/${band.social.spotify}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      <Music size={24} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Users size={32} />
            Band Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandMembers.map((member) => (
              <Link
                key={member.id}
                href={`/people/${member.id}`}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                        <Music size={24} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
                  </div>
                </div>
                
                {/* Hover Effect - Roles with Icons */}
                <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white mb-3">{member.name}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.roles && member.roles.map((role, index) => (
                        <div key={index} className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-2 rounded-lg text-sm font-medium">
                          {getInstrumentIcon(role)}
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 作品集 Section */}
        {(band.googleDrive?.url || band.youtubeVideos?.length || band.bilibiliVideos?.length || band.xiaohongshuVideos?.length) && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <FolderOpen size={32} />
                作品集
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Google Drive */}
              {band.googleDrive?.url && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <FolderOpen size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Google Drive</h3>
                  </div>
                  <a
                    href={band.googleDrive.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-black font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Download size={16} />
                    访问
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}

              {/* Youtube Videos */}
              {band.youtubeVideos && band.youtubeVideos.length > 0 && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Youtube</h3>
                  </div>
                  <div className="space-y-2">
                    {band.youtubeVideos.map((video, index) => (
                      <a
                        key={index}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-200 text-sm group"
                        title={video.title}
                      >
                        <span className="truncate hover:underline decoration-primary/50 underline-offset-2">
                          {video.title}
                        </span>
                        <ExternalLink size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Bilibili Videos */}
              {band.bilibiliVideos && band.bilibiliVideos.length > 0 && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.267.573-.4.92-.4.347 0 .653.133.92.4L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.267.573-.4.92-.4.347 0 .653.133.92.4.267.267.4.573.4.92 0 .347-.133.653-.4.92L17.813 4.653zm-.854 2.747v8.053c0 .356-.133.658-.4.92-.267.267-.573.4-.92.4-.347 0-.653-.133-.92-.4-.267-.267-.4-.573-.4-.92V7.4c0-.356.133-.658.4-.92.267-.267.573-.4.92-.4.347 0 .653.133.92.4.267.267.4.573.4.92z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Bilibili</h3>
                  </div>
                  <div className="space-y-2">
                    {band.bilibiliVideos.map((video, index) => (
                      <a
                        key={index}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-200 text-sm group"
                        title={video.title}
                      >
                        <span className="truncate hover:underline decoration-primary/50 underline-offset-2">
                          {video.title}
                        </span>
                        <ExternalLink size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* 小红书 Videos */}
              {band.xiaohongshuVideos && band.xiaohongshuVideos.length > 0 && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">小红书</h3>
                  </div>
                  <div className="space-y-2">
                    {band.xiaohongshuVideos.map((video, index) => (
                      <a
                        key={index}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-200 text-sm group"
                        title={video.title}
                      >
                        <span className="truncate hover:underline decoration-primary/50 underline-offset-2">
                          {video.title}
                        </span>
                        <ExternalLink size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 固定位置的Join Us按钮 */}
        <JoinUsButton 
          customContent={
            band.recruitmentNeeds && band.recruitmentNeeds.trim() ? (
              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">{band.name} 的招聘需求</h3>
                <p className="text-gray-300 text-sm">{band.recruitmentNeeds}</p>
              </div>
            ) : (
              <div className="bg-gray-700/20 rounded-lg p-6 border border-gray-600/30 mb-6">
                <h3 className="text-xl font-bold text-gray-400 mb-3">{band.name} 的招聘需求</h3>
                <p className="text-gray-500 text-sm italic">暂无特定招聘需求</p>
              </div>
            )
          }
        />

      </div>
    </div>
  );
};

export default BandPage;