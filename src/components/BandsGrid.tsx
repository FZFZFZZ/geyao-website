"use client";

import { useState, useMemo, useRef } from "react";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faCalendar, faUsers, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";



const BandsGrid = () => {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 清空筛选
  const clearFilters = () => {
    setSearch("");
    searchInputRef.current?.focus();
  };

  // 筛选乐队 - 支持模糊搜索所有内容
  const filteredBands = useMemo(() => {
    return bandsData.filter(band => {
      // 模糊搜索关键词筛选
      const keyword = search.trim().toLowerCase();
      if (!keyword) return true;
      
      // 搜索乐队名
      if (band.name.toLowerCase().includes(keyword)) return true;
      // 搜索描述
      if (band.description && band.description.toLowerCase().includes(keyword)) return true;
      // 搜索genre
      if (band.genre && band.genre.toLowerCase().includes(keyword)) return true;
      // 搜索tags
      if (band.tags && band.tags.some(tag => tag.toLowerCase().includes(keyword))) return true;
      // 搜索成员名
      const bandMembers = peopleData.filter(person => band.members && band.members.includes(person.id));
      if (bandMembers.some(member => member.name.toLowerCase().includes(keyword))) return true;

      
      return false;
    });
  }, [search]);



  const getBandMembers = (memberIds: string[] | undefined) => {
    if (!memberIds) return [];
    return peopleData.filter(person => memberIds.includes(person.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-postmodern-display text-white mb-4 tracking-tight">
            Our Bands
          </h1>
        </div>

        {/* 搜索区 */}
        <div className="mb-10">
          {/* 搜索框 */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-xl">
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="搜索乐队名、成员名、视频名、风格..."
                className="w-full px-6 py-4 bg-gradient-to-r from-primary/20 via-gray-900 to-primary/20 border-2 border-primary/60 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary shadow-xl font-postmodern-body transition-all duration-300 placeholder:whitespace-nowrap text-sm sm:text-xl tracking-wide"
                style={{ boxShadow: '0 4px 32px 0 rgba(80,80,180,0.10)' }}
              />
            </div>
          </div>
          {/* 重置按钮 */}
          {search && (
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors text-sm"
                title="重置"
              >
                <FontAwesomeIcon icon={faTimes} size="sm" />
                重置
              </button>
            </div>
          )}
        </div>

        {/* Bands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredBands.map((band) => {
            const bandMembers = getBandMembers(band.members);
            return (
              <Link
                key={band.id}
                href={`/bands/${band.id}`}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Band Photo and Info */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
                        {band.photo ? (
                          <Image
                            src={band.photo}
                            alt={band.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                            <FontAwesomeIcon icon={faMusic} size="2x" className="text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-postmodern-heading text-white mb-2 group-hover:text-primary transition-colors tracking-tight">{band.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCalendar} size="sm" className="text-primary" />
                          <span>Formed {band.formed}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUsers} size="sm" className="text-primary" />
                          <span>{bandMembers.length}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {band.tags && band.tags.map((tag, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-postmodern-caption">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faUsers} size="sm" className="text-primary" />
                      Members
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {bandMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            {member.photo ? (
                              <Image
                                src={member.photo}
                                alt={member.name}
                                width={24}
                                height={24}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                                <FontAwesomeIcon icon={faMusic} size="xs" className="text-gray-400" />
                              </div>
                            )}
                          </div>
                          <span className="text-gray-300">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>



                  {/* Social Links */}
                  <div className="flex gap-3">
                    {band.social?.instagram && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://instagram.com/${band.social?.instagram?.replace('@', '') || ''}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </button>
                    )}
                    {band.social?.youtube && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://youtube.com/@${band.social?.youtube || ''}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                      </button>
                    )}
                    {band.social?.spotify && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://open.spotify.com/artist/${band.social?.spotify || ''}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faMusic} size="lg" />
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredBands.length === 0 && (
          <div className="text-center py-12">
            <FontAwesomeIcon icon={faMusic} size="5x" className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No bands found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BandsGrid; 