"use client";

import { useState } from "react";
import { peopleData } from "@/data/people";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUsers, faMicrophone, faDrum, faGuitar, faCog, faCommentDots, faBullhorn, faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
  "Piano": faMusic,
  "Violin": faMusic,
  "Bass": faGuitar,
};

const PeopleGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedInstrument, setSelectedInstrument] = useState<string>("all");
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  // Get all unique instruments from people data
  const allInstruments = Array.from(new Set(
    peopleData.flatMap(person => person.roles || [])
  )).sort();

  const instruments = ["all", ...allInstruments];

  const filteredPeople = peopleData.filter(person => {
    // Department filter
    const departmentMatch = selectedDepartment === "all" || 
      (Array.isArray(person.department) 
        ? person.department.includes(selectedDepartment)
        : person.department === selectedDepartment);
    
    // Instrument filter
    const instrumentMatch = selectedInstrument === "all" || 
      (person.roles && person.roles.includes(selectedInstrument));
    
    return departmentMatch && instrumentMatch;
  });

  const departments = ["all", ...Array.from(new Set(
    peopleData.flatMap(p => 
      Array.isArray(p.department) ? p.department : [p.department]
    )
  ))];

  const isPerformer = (department: string | string[]) => {
    if (Array.isArray(department)) {
      return department.includes("Performer");
    }
    return department === "Performer";
  };

  const getNonPerformerDepartments = (department: string | string[]) => {
    if (Array.isArray(department)) {
      return department.filter(dept => dept !== "Performer");
    }
    return department === "Performer" ? [] : [department];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-postmodern-display text-white mb-4 tracking-tight">
            Meet Our Team
          </h1>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {departments.map((dept) => {
            const Icon = dept === "all" ? faUsers : (departmentIcons[dept as keyof typeof departmentIcons] || faUsers);
            return (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept || "all")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedDepartment === dept
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={Icon} size="lg" />
                <span className="capitalize">{dept}</span>
              </button>
            );
          })}
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

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person) => (
            <Link
              key={person.id}
              href={`/people/${person.id}`}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
              onMouseEnter={() => setHoveredPerson(person.id)}
              onMouseLeave={() => setHoveredPerson(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Person Photo and Info */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
                      {person.photo ? (
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <FontAwesomeIcon icon={faMusic} size="2x" className="text-gray-500" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-postmodern-heading text-white mb-2 group-hover:text-primary transition-colors tracking-tight">{person.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {/* Show roles for performers */}
                      {person.department && isPerformer(person.department) && person.roles && person.roles.length > 0 && person.roles.map((role, index) => {
                        const RoleIcon = roleIcons[role as keyof typeof roleIcons] || faMusic;
                        return (
                          <span key={`role-${index}`} className="flex items-center gap-1 text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">
                            <FontAwesomeIcon icon={RoleIcon} size="sm" className="text-primary" />
                            {role}
                          </span>
                        );
                      })}
                      
                      {/* Show other departments */}
                      {person.department && getNonPerformerDepartments(person.department).map((dept, index) => {
                        const DeptIcon = departmentIcons[dept as keyof typeof departmentIcons] || faUsers;
                        return (
                          <span key={`dept-${index}`} className="flex items-center gap-1 text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">
                            <FontAwesomeIcon icon={DeptIcon} size="sm" className="text-primary" />
                            {dept}
                          </span>
                        );
                      })}
                    </div>
                  </div>
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
      </div>
    </div>
  );
};

export default PeopleGrid; 