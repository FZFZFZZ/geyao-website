"use client";

import { useState, useEffect } from "react";
import { peopleData } from "@/data/people";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUsers, faMicrophone, faDrum, faGuitar, faCog, faCommentDots, faBullhorn, faChevronDown, faComment, faUsers as faBand, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram as faInstagramBrand, faTelegram as faTelegramBrand, faWeixin as faWeixinBrand } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";

const departmentIcons = {
  "Performer": faMusic,
  "Technician": faCog,
  "Commentator": faCommentDots,
  "Publicity": faBullhorn
};

const roleIcons = {
  "Guitar": faGuitar,
  "Vocals": faMicrophone,
  "Drums": faDrum,
  "Bass": faGuitar,
  "Keys": faMusic,
  "Rap": faMicrophone,
  "Violin": faMusic,
  "Viola": faMusic
};

const departmentColors = {
  "Performer": "from-purple-500/20 to-pink-500/20",
  "Technician": "from-blue-500/20 to-cyan-500/20", 
  "Commentator": "from-green-500/20 to-emerald-500/20",
  "Publicity": "from-orange-500/20 to-red-500/20"
};

const roleColors = {
  "Guitar": "border-purple-400/50 text-purple-300",
  "Vocals": "border-pink-400/50 text-pink-300", 
  "Drums": "border-orange-400/50 text-orange-300",
  "Bass": "border-blue-400/50 text-blue-300",
  "Keys": "border-green-400/50 text-green-300",
  "Rap": "border-red-400/50 text-red-300",
  "Violin": "border-indigo-400/50 text-indigo-300",
  "Viola": "border-violet-400/50 text-violet-300"
};

const PeopleGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedInstrument, setSelectedInstrument] = useState("all");
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);
  const [recruitmentModal, setRecruitmentModal] = useState<{ isOpen: boolean; person: any }>({
    isOpen: false,
    person: null
  });
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get unique departments
  const departments = ["all", ...Array.from(new Set(peopleData.flatMap(person => 
    Array.isArray(person.department) ? person.department : [person.department]
  ).filter(Boolean)))];

  // Get unique instruments/roles
  const instruments = ["all", ...Array.from(new Set(peopleData.flatMap(person => 
    person.roles || []
  )))];

  const isPerformer = (department: string | string[]) => {
    const depts = Array.isArray(department) ? department : [department];
    return depts.some(dept => dept === "Performer");
  };

  const getNonPerformerDepartments = (department: string | string[]) => {
    const depts = Array.isArray(department) ? department : [department];
    return depts.filter(dept => dept !== "Performer");
  };

  const getDepartmentColor = (department: string | string[]) => {
    const depts = Array.isArray(department) ? department : [department];
    const mainDept = depts.find(dept => departmentColors[dept as keyof typeof departmentColors]);
    return departmentColors[mainDept as keyof typeof departmentColors] || "from-gray-500/20 to-gray-600/20";
  };

  const getRoleColor = (role: string) => {
    return roleColors[role as keyof typeof roleColors] || "border-gray-400/50 text-gray-300";
  };

  const filteredPeople = peopleData.filter(person => {
    const deptMatch = selectedDepartment === "all" || 
      (Array.isArray(person.department) ? person.department.includes(selectedDepartment) : person.department === selectedDepartment);
    
    const instrumentMatch = selectedInstrument === "all" || 
      (person.roles && person.roles.includes(selectedInstrument));
    
    return deptMatch && instrumentMatch;
  });

  const handleRecruitmentClick = (e: React.MouseEvent, person: any) => {
    e.preventDefault();
    e.stopPropagation();
    setRecruitmentModal({ isOpen: true, person });
  };

  const closeRecruitmentModal = () => {
    setRecruitmentModal({ isOpen: false, person: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-postmodern-display text-white mb-6">
            Meet Our Team
          </h1>
          
          {/* Department Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
              {departments.map((dept) => {
                const DeptIcon = dept === "all" ? faUsers : departmentIcons[dept as keyof typeof departmentIcons] || faUsers;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept || "all")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      selectedDepartment === dept
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <FontAwesomeIcon icon={DeptIcon} size="sm" />
                    <span className="font-medium">{dept === "all" ? "All" : dept}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Instrument Filter */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <select
                value={selectedInstrument}
                onChange={(e) => setSelectedInstrument(e.target.value)}
                className="appearance-none bg-gray-800/50 border-2 border-gray-700/50 rounded-full px-6 py-3 text-white focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary transition-all duration-300 cursor-pointer min-w-[200px]"
              >
                {instruments.map((instrument) => (
                  <option key={instrument} value={instrument} className="bg-gray-800 text-white">
                    {instrument === "all" ? "All Instruments" : instrument}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FontAwesomeIcon icon={faChevronDown} size="sm" className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person) => (
            <Link
              key={person.id}
              href={`/people/${person.id}`}
              className="group relative bg-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
              onMouseEnter={() => setHoveredPerson(person.id)}
              onMouseLeave={() => setHoveredPerson(null)}
            >
              {/* Hero Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getDepartmentColor(person.department || "Performer")} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Content Container */}
              <div className="relative z-10 p-6">
                {/* Photo and Name Section */}
                <div className="text-center mb-6">
                  {/* Photo Container */}
                  <div className="relative flex justify-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                      {person.photo ? (
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <FontAwesomeIcon icon={faMusic} size="3x" className="text-gray-500" />
                        </div>
                      )}
                    </div>
                    
                    {/* Band Membership Indicator */}
                    {person.bands && person.bands.length > 0 && (
                      <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-2 shadow-lg">
                        <FontAwesomeIcon icon={faBand} size="sm" />
                      </div>
                    )}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-3xl font-postmodern-heading text-white mb-3 group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {person.name}
                  </h3>
                </div>

                {/* Roles/Instruments */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {person.roles && person.roles.map((role, index) => {
                    const RoleIcon = roleIcons[role as keyof typeof roleIcons] || faMusic;
                    const roleColor = getRoleColor(role);
                    return (
                      <span 
                        key={`role-${index}`} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${roleColor} bg-gray-800/50 backdrop-blur-sm font-medium text-sm transition-all duration-300 group-hover:scale-105`}
                      >
                        <FontAwesomeIcon icon={RoleIcon} size="sm" />
                        {role}
                      </span>
                    );
                  })}
                  
                  {/* Non-performer departments */}
                  {person.department && getNonPerformerDepartments(person.department || "Performer").map((dept, index) => {
                    const DeptIcon = departmentIcons[dept as keyof typeof departmentIcons] || faUsers;
                    return (
                      <span 
                        key={`dept-${index}`} 
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-400/50 text-gray-300 bg-gray-800/50 backdrop-blur-sm font-medium text-sm transition-all duration-300 group-hover:scale-105"
                      >
                        <FontAwesomeIcon icon={DeptIcon} size="sm" />
                        {dept}
                      </span>
                    );
                  })}
                </div>

                {/* Casual Talk Section */}
                {person.casualTalk && (
                  <div className="mb-6 p-4 bg-gray-700/20 rounded-2xl border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon 
                        icon={faComment} 
                        size="sm" 
                        className="text-primary mt-1 flex-shrink-0" 
                      />
                      <p className="text-sm text-gray-300 italic leading-relaxed font-postmodern-body">
                        "{person.casualTalk}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Social Media & Recruitment */}
                <div className="flex items-center justify-between">
                  {/* Social Media Icons */}
                  <div className="flex gap-2">
                    {/* Instagram */}
                    {isClient && person.social?.instagram && (
                      <button
                        type="button"
                        className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            person.social?.instagram?.startsWith('http')
                              ? person.social?.instagram
                              : `https://instagram.com/${person.social?.instagram?.replace(/^@/, '')}`,
                            '_blank'
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faInstagramBrand} size="sm" />
                      </button>
                    )}
                    {/* Telegram */}
                    {isClient && person.social?.telegram && (
                      <button
                        type="button"
                        className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            person.social?.telegram?.startsWith('http')
                              ? person.social?.telegram
                              : `https://t.me/${person.social?.telegram?.replace(/^@/, '')}`,
                            '_blank'
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faTelegramBrand} size="sm" />
                      </button>
                    )}
                    {/* WeChat (QR code image) */}
                    {isClient && person.social?.wechat && (
                      <button
                        type="button"
                        className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(person.social?.wechat, '_blank');
                        }}
                      >
                        <FontAwesomeIcon icon={faWeixinBrand} size="sm" />
                      </button>
                    )}
                  </div>

                  {/* Recruitment Needs Indicator */}
                  {person.recruitmentNeeds && (
                    <button
                      onClick={(e) => handleRecruitmentClick(e, person)}
                      className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    >
                      Recruiting
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPeople.length === 0 && (
          <div className="text-center py-12">
            <FontAwesomeIcon icon={faMusic} size="5x" className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">
              {selectedDepartment !== "all" && selectedInstrument !== "all" 
                ? `No members found in ${selectedDepartment} department playing ${selectedInstrument}.`
                : selectedDepartment !== "all"
                ? `No members found in ${selectedDepartment} department.`
                : selectedInstrument !== "all"
                ? `No members found playing ${selectedInstrument}.`
                : "No members found."
              }
            </p>
          </div>
        )}

        {/* Recruitment Modal */}
        {recruitmentModal.isOpen && recruitmentModal.person && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 relative border border-gray-700/50">
              {/* Close Button */}
              <button
                onClick={closeRecruitmentModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              
              {/* Modal Content */}
              <div className="text-center">
                {/* Person Info */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 mr-4">
                    {recruitmentModal.person.photo ? (
                      <Image
                        src={recruitmentModal.person.photo}
                        alt={recruitmentModal.person.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMusic} size="lg" className="text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{recruitmentModal.person.name}</h3>
                    <p className="text-gray-400 text-sm">Recruitment Needs</p>
                  </div>
                </div>

                {/* Recruitment Details */}
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon 
                      icon={faUsers} 
                      size="sm" 
                      className="text-primary mt-1 flex-shrink-0" 
                    />
                    <div className="text-left">
                      <p className="text-gray-300 leading-relaxed font-postmodern-body">
                        {recruitmentModal.person.recruitmentNeeds}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                {recruitmentModal.person.social && (
                  <div className="mt-6">
                    <p className="text-gray-400 text-sm mb-3">Contact for more details:</p>
                    <div className="flex justify-center gap-3">
                      {recruitmentModal.person.social.instagram && (
                        <a
                          href={recruitmentModal.person.social.instagram.startsWith('http')
                            ? recruitmentModal.person.social.instagram
                            : `https://instagram.com/${recruitmentModal.person.social.instagram.replace(/^@/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faInstagramBrand} size="sm" />
                        </a>
                      )}
                      {recruitmentModal.person.social.telegram && (
                        <a
                          href={recruitmentModal.person.social.telegram.startsWith('http')
                            ? recruitmentModal.person.social.telegram
                            : `https://t.me/${recruitmentModal.person.social.telegram.replace(/^@/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faTelegramBrand} size="sm" />
                        </a>
                      )}
                      {recruitmentModal.person.social.wechat && (
                        <a
                          href={recruitmentModal.person.social.wechat}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faWeixinBrand} size="sm" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleGrid; 