"use client";

import React from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
import JoinUsButton from "@/components/JoinUsButton";

const EventsPage = () => {
  return (
    <>
      <LayoutWrapper>
        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-3xl md:text-4xl font-postmodern-display text-white tracking-tight mb-4">Events</h1>
          <p className="mt-4 text-lg text-gray-300">Information about our past and upcoming events will be here.</p>
        </div>
      </LayoutWrapper>
      <JoinUsButton />
    </>
  );
};

export default EventsPage; 