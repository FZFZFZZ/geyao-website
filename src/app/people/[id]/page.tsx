"use client";

import { notFound } from "next/navigation";
import { peopleData } from "@/data/people";
import { bandsData } from "@/data/bands";
import { Instagram, Youtube, Music, Users, Calendar, Mail, Phone, Guitar, Mic, Drum, Piano, Music2, Play, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { GENERAL_RECRUITMENT_NEEDS } from "@/data/recruitmentNeeds";
import JoinUsButton from "@/components/JoinUsButton";

interface PageParams {
  id: string;
}

interface AlbumInfo {
  title: string;
  artist: string;
  artwork?: string;
  spotifyUrl?: string;
  loading: boolean;
  error?: string;
}

export default function PersonPage({ params }: { params: Promise<PageParams> }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);
  const [albumsInfo, setAlbumsInfo] = useState<AlbumInfo[]>([]);
  const { id } = React.use(params);
  const person = peopleData.find(p => p.id === id);
  
  if (!person) {
    notFound();
  }

  // 找到这个人所属的乐队
  const personBands = bandsData.filter(band => band.members && band.members.includes(id));

  // 解析专辑字符串 "专辑名 - 艺术家"
  const parseAlbum = (albumString: string): { title: string; artist: string } => {
    const parts = albumString.split(' - ');
    if (parts.length >= 2) {
      return {
        title: parts[0].trim(),
        artist: parts[1].trim()
      };
    }
    return {
      title: albumString.trim(),
      artist: ''
    };
  };

  // 生成Spotify搜索链接
  const generateSpotifyUrl = (title: string, artist: string): string => {
    const searchQuery = `${title} ${artist}`.trim();
    const encodedQuery = encodeURIComponent(searchQuery);
    return `https://open.spotify.com/search/${encodedQuery}`;
  };

  // 从iTunes API获取专辑封面，增强移动端兼容性
  const fetchAlbumArtwork = async (title: string, artist: string): Promise<string | undefined> => {
    // 创建AbortController用于超时控制
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 缩短为4秒超时
    
    try {
      // 尝试多种搜索策略
      const searchStrategies = [
        encodeURIComponent(`${title} ${artist}`),
        encodeURIComponent(title),
        encodeURIComponent(`${artist} ${title}`)
      ];
      
      for (const searchTerm of searchStrategies) {
        try {
          console.log(`Searching for: ${title} by ${artist}`);
          
          const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&limit=3`, {
            signal: controller.signal,
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
              'Cache-Control': 'max-age=3600',
            },
            mode: 'cors',
          });
          
          if (!response.ok) {
            console.warn(`Search failed with status: ${response.status}`);
            continue;
          }
          
          const data = await response.json();
          console.log(`Found ${data.results?.length || 0} results for: ${title}`);
          
          if (data.results && data.results.length > 0) {
            // 寻找最匹配的结果
            let bestMatch = data.results[0];
            for (const result of data.results) {
              if (result.collectionName?.toLowerCase().includes(title.toLowerCase()) ||
                  result.artistName?.toLowerCase().includes(artist.toLowerCase())) {
                bestMatch = result;
                break;
              }
            }
            
            // 获取合适分辨率的封面（降低分辨率提高加载速度）
            let artwork = bestMatch.artworkUrl100?.replace('100x100', '200x200');
            
            // 确保使用HTTPS
            if (artwork && artwork.startsWith('http://')) {
              artwork = artwork.replace('http://', 'https://');
            }
            
            if (artwork) {
              console.log(`Successfully found artwork for: ${title}`);
              clearTimeout(timeoutId);
              return artwork;
            }
          }
        } catch (strategyError) {
          console.warn(`Search strategy failed for ${searchTerm}:`, strategyError);
          continue;
        }
      }
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.warn(`Album artwork request timed out for: ${title} by ${artist}`);
      } else {
        console.error(`Error fetching album artwork for ${title}:`, error);
      }
    } finally {
      clearTimeout(timeoutId);
    }
    
    console.warn(`No artwork found for: ${title} by ${artist}`);
    return undefined;
  };

  // 获取所有专辑的封面信息，优化移动端体验
  useEffect(() => {
    if (person?.topAlbums && person.topAlbums.length > 0) {
      const loadAlbumInfo = async () => {
                  const albumsData: AlbumInfo[] = person.topAlbums!.map(albumString => {
          const { title, artist } = parseAlbum(albumString);
          return {
            title,
            artist,
            spotifyUrl: generateSpotifyUrl(title, artist),
            loading: true
          };
        });
        
        setAlbumsInfo(albumsData);

        // 逐个加载专辑封面，避免移动端过多并发请求
        const updatedAlbums = [...albumsData];
        
        // 限制同时显示的专辑数量，提高移动端性能
        const maxAlbums = Math.min(albumsData.length, 6);
        
        for (let i = 0; i < maxAlbums; i++) {
          try {
            const album = albumsData[i];
            console.log(`Loading album ${i + 1}/${maxAlbums}: ${album.title} by ${album.artist}`);
            
            const artwork = await fetchAlbumArtwork(album.title, album.artist);
            
            updatedAlbums[i] = {
              ...album,
              artwork,
              loading: false
            };
            
            // 实时更新UI，提供更好的用户体验
            setAlbumsInfo([...updatedAlbums]);
            
            // 在移动端添加较长延迟，减少网络压力
            if (i < maxAlbums - 1) {
              await new Promise(resolve => setTimeout(resolve, 500)); // 增加到500ms
            }
            
          } catch (error) {
            console.error(`Failed to load artwork for album ${i} (${albumsData[i].title} by ${albumsData[i].artist}):`, error);
            updatedAlbums[i] = {
              ...albumsData[i],
              loading: false,
              error: error instanceof Error ? error.message : 'Network error'
            };
            setAlbumsInfo([...updatedAlbums]);
          }
        }
      };

      loadAlbumInfo();
    }
  }, [person?.topAlbums]);

  const getRoleData = (role: string) => {
    const roleMap = {
      'Guitar': {
        icon: <Guitar className="w-4 h-4 mr-2" />,
        gradient: 'from-indigo-500 to-purple-500'
      },
      'Vocals': {
        icon: <Mic className="w-4 h-4 mr-2" />,
        gradient: 'from-pink-500 to-rose-500'
      },
      'Drums': {
        icon: <Drum className="w-4 h-4 mr-2" />,
        gradient: 'from-orange-500 to-red-500'
      },
      'Piano': {
        icon: <Piano className="w-4 h-4 mr-2" />,
        gradient: 'from-violet-500 to-indigo-500'
      },
      'Bass': {
        icon: <Guitar className="w-4 h-4 mr-2" />,
        gradient: 'from-emerald-500 to-teal-500'
      },
      'Violin': {
        icon: <Music2 className="w-4 h-4 mr-2" />,
        gradient: 'from-amber-500 to-orange-500'
      }
    };

    return roleMap[role as keyof typeof roleMap] || {
      icon: <Music2 className="w-4 h-4 mr-2" />,
      gradient: 'from-gray-500 to-slate-500'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Person Photo */}
            <div className="relative lg:w-1/3">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-700/50">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
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

            {/* Person Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-postmodern-display text-white mb-4 tracking-tight">{person.name}</h1>
              
              {person.department && (
                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(person.department) ? (
                        person.department.map((dept, index) => (
                          <span key={index} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                            {dept}
                          </span>
                        ))
                      ) : (
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                          {person.department}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {person.casualTalk && (
                <p className="text-xl text-gray-300 leading-relaxed mb-8 italic font-postmodern-body">
                  "{person.casualTalk}"
                </p>
              )}

              {/* Contact Button */}
              {person.social && (person.social.wechat || person.social.instagram || person.social.telegram) && (
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  Contact
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Musical Roles Section */}
        {person.roles && person.roles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-postmodern-heading text-white mb-8 flex items-center gap-3 tracking-tight">
              <Music2 size={32} />
              Musical Roles
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex justify-start gap-4 overflow-x-auto py-2 px-1">
                {person.roles.map((role, index) => {
                  const roleData = getRoleData(role);
                  return (
                    <div
                      key={index}
                      className={`
                        flex-shrink-0 rounded-full px-4 py-2 shadow-sm
                        bg-gradient-to-r ${roleData.gradient}
                        text-white text-sm font-medium
                        hover:scale-105 hover:z-10 transition-all duration-200 ease-out
                        cursor-pointer relative
                      `}
                    >
                      <div className="flex items-center">
                        {roleData.icon}
                        <span>{role}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Bands Section */}
        {person.bands && person.bands.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-postmodern-heading text-white mb-8 flex items-center gap-3 tracking-tight">
              <Users size={32} />
              所在乐队
            </h2>
            {personBands.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personBands.map((band) => (
                <Link
                  key={band.id}
                  href={`/bands/${band.id}`}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors">
                      {/* 乐队照片 */}
                      {band.photo ? (
                        <Image
                          src={band.photo}
                          alt={band.name}
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
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {band.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {band.description}
                  </p>
                  
                  {/* Genre tags */}
                  {band.tags && band.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {band.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>成立于 {band.formed}</span>
                    <span>{band.members?.length} 成员</span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
              <div className="text-gray-500 mb-4">
                <Users size={48} className="mx-auto mb-3 opacity-50" />
                <p className="text-lg font-medium">暂无乐队</p>
                <p className="text-sm mt-2">
                  {person.name} 目前还没有加入任何乐队
                </p>
              </div>
              <Link
                href="/bands"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <Music size={16} />
                浏览所有乐队
              </Link>
            </div>
          )}
        </div>
        )}

        {/* Top 6 Albums Section */}
        {person.topAlbums && person.topAlbums.length > 0 && albumsInfo.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-postmodern-heading text-white mb-8 flex items-center gap-3 tracking-tight">
              <Music size={32} />
              Top Albums
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {albumsInfo.slice(0, 6).map((album, index) => (
                  <div key={index} className="group">
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                      title={`Search "${album.title}" by ${album.artist} on Spotify`}
                    >
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-700/50 mb-3 group-hover:scale-105 transition-transform duration-200">
                        {/* 排名标签 */}
                        <div className="absolute top-2 left-2 z-10 w-6 h-6 bg-primary/90 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        
                        {album.loading ? (
                          /* 加载状态 */
                          <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                          </div>
                        ) : album.artwork ? (
                          /* 专辑封面 */
                          <Image
                            src={album.artwork}
                            alt={`${album.title} by ${album.artist}`}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-200"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ss9VhQdSrxnH7B8n7B8n7"
                            onError={(e) => {
                              console.warn('Failed to load album artwork, using fallback');
                              // 如果图片加载失败，显示默认图片
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent && !parent.querySelector('.fallback-icon')) {
                                const fallbackDiv = document.createElement('div');
                                fallbackDiv.className = 'w-full h-full bg-gray-600/50 flex items-center justify-center fallback-icon';
                                fallbackDiv.innerHTML = '<svg class="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zM11 8a1 1 0 112 0v4a1 1 0 11-2 0V8z" clip-rule="evenodd"></path></svg>';
                                parent.appendChild(fallbackDiv);
                              }
                            }}
                          />
                        ) : album.error ? (
                          /* 错误状态 */
                          <div className="w-full h-full bg-red-900/30 flex flex-col items-center justify-center p-2">
                            <X size={20} className="text-red-400 mb-1" />
                            <span className="text-xs text-red-400 text-center">
                              {album.error.includes('timeout') ? 'Network timeout' : 'Load failed'}
                            </span>
                          </div>
                        ) : (
                          /* 默认音乐图标 */
                          <div className="w-full h-full bg-gray-600/50 flex items-center justify-center">
                            <Music size={40} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                    </a>
                    
                    {/* 专辑信息 */}
                    <div className="text-center">
                      <h4 className="text-white text-sm font-medium mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {album.title}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-1">
                        {album.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* Recruitment Needs Section */}
        {person.recruitmentNeeds && (
          <div className="mb-12">
            <h2 className="text-3xl font-postmodern-heading text-white mb-8 flex items-center gap-3 tracking-tight">
              <Users size={32} />
              Recruitment Needs
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <p className="text-gray-300 text-sm">{person.recruitmentNeeds && person.recruitmentNeeds.trim() ? person.recruitmentNeeds : "暂无特定招聘需求"}</p>
            </div>
          </div>
        )}



        {/* Contact Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 relative">
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-6">Contact {person.name}</h3>
              
              <div className="space-y-4">
                {/* WeChat */}
                {person.social?.wechat && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <button
                      onClick={() => setIsQRCodeModalOpen(true)}
                      className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                    >
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 10.5C9.75 11.0523 9.30228 11.5 8.75 11.5C8.19772 11.5 7.75 11.0523 7.75 10.5C7.75 9.94772 8.19772 9.5 8.75 9.5C9.30228 9.5 9.75 9.94772 9.75 10.5Z" fill="currentColor"/>
                        <path d="M15.75 10.5C15.75 11.0523 15.3023 11.5 14.75 11.5C14.1977 11.5 13.75 11.0523 13.75 10.5C13.75 9.94772 14.1977 9.5 14.75 9.5C15.3023 9.5 15.75 9.94772 15.75 10.5Z" fill="currentColor"/>
                        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.25 8.5C16.25 6.42893 14.5711 4.75 12.5 4.75H11C8.92893 4.75 7.25 6.42893 7.25 8.5V9.25C7.25 11.3211 8.92893 13 11 13H12.5C14.5711 13 16.25 11.3211 16.25 9.25V8.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                      </svg>
                    </button>
                    <div>
                      <p className="font-medium text-white">WeChat</p>
                      <button 
                        onClick={() => setIsQRCodeModalOpen(true)}
                        className="text-sm hover:text-primary"
                      >
                        Scan QR Code
                      </button>
                    </div>
                  </div>
                )}

                {/* Instagram */}
                {person.social?.instagram && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <a
                      href={`https://instagram.com/${person.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                    >
                      <Instagram size={24} className="text-primary" />
                    </a>
                    <div>
                      <p className="font-medium text-white">Instagram</p>
                      <a href={`https://instagram.com/${person.social.instagram}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">
                        {person.social.instagram}
                      </a>
                    </div>
                  </div>
                )}

                {/* Telegram */}
                {person.social?.telegram && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <a
                      href={`https://t.me/${person.social.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors"
                    >
                      <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.0589 8.36957C10.9147 8.83002 8.63069 9.82413 5.20743 11.3519C4.71931 11.5478 4.46326 11.7399 4.43926 11.9283C4.39726 12.2598 4.81535 12.3863 5.38245 12.5659L5.61702 12.6419C6.17321 12.8249 6.92339 13.0353 7.31553 13.0449C7.67168 13.0536 8.06585 12.9085 8.49802 12.6095C11.6622 10.4433 13.2951 9.34941 13.3969 9.32778C13.4696 9.31262 13.5719 9.29441 13.6392 9.35296C13.7065 9.41151 13.6989 9.52786 13.6912 9.55786C13.6368 9.75006 11.9533 11.3069 11.0798 12.1126C10.8387 12.3368 10.6701 12.4936 10.6202 12.5461C10.5071 12.6651 10.3916 12.7772 10.2821 12.8835C9.73732 13.4061 9.32234 13.8067 10.3085 14.4455C10.7867 14.7641 11.1726 15.0303 11.5571 15.2953C11.9764 15.5825 12.394 15.8686 12.9354 16.2172C13.0629 16.3018 13.1843 16.3907 13.3023 16.4774C13.7829 16.8191 14.2161 17.1268 14.7576 17.0744C15.0676 17.0432 15.3887 16.7511 15.5521 15.8792C15.9401 13.8918 16.7063 9.45506 16.8812 7.72794C16.8911 7.59925 16.8772 7.43297 16.8675 7.35906C16.8578 7.28515 16.8379 7.17561 16.7436 7.09296C16.6324 6.99636 16.4623 6.97516 16.3862 6.97696C15.9693 6.98536 15.3278 7.19706 12.0589 8.36957Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                      </svg>
                    </a>
                    <div>
                      <p className="font-medium text-white">Telegram</p>
                      <a href={`https://t.me/${person.social.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">
                        {person.social.telegram}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {isQRCodeModalOpen && person.social?.wechat && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 relative">
              <button
                onClick={() => setIsQRCodeModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-6">WeChat QR Code</h3>
              
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src={person.social.wechat}
                    alt="WeChat QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="text-center text-gray-400 mt-4">
                Scan this QR code to connect on WeChat
              </p>
            </div>
          </div>
        )}

        {/* 固定位置的Join Us按钮 */}
        <JoinUsButton 
          customContent={
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 mb-6">
              <h3 className="text-xl font-bold text-primary mb-3">{person.name} 的直选需求</h3>
              <p className="text-gray-300 text-sm">{person.recruitmentNeeds && person.recruitmentNeeds.trim() ? person.recruitmentNeeds : "暂无特定招聘需求"}</p>
            </div>
          }
        />

      </div>
    </div>
  );
} 