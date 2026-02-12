import React from 'react';

interface EventHeroProps {
  bannerUrl: string;
}

const EventHero: React.FC<EventHeroProps> = ({ bannerUrl }) => {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full aspect-video bg-gray-200 relative group">
        <img 
          src={bannerUrl} 
          alt="Event Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Action Bar */}
      <div className="px-6 py-4 bg-surface-gray border-b border-border-gray flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-text-dark font-medium text-sm md:text-base">
          <span className="material-icons-outlined">videocam</span>
          <span>イベントに参加できます</span>
        </div>
        <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded shadow-sm transition-colors text-sm">
          イベントに参加
        </button>
      </div>
    </>
  );
};

export default EventHero;