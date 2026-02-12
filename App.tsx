import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import RelatedEvents from './components/RelatedEvents';
import EventHero from './components/EventHero';
import { EVENT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray">
      <Header />
      
      <main className="w-full pb-20 flex-grow">
        {/* Main Content Container */}
        <div className="bg-white max-w-[960px] mx-auto mt-6 rounded-t-lg shadow-sm overflow-hidden">
          
          <EventHero bannerUrl={EVENT_DATA.bannerUrl} />
          
          <div className="p-6 md:p-8">
            {/* Header Section */}
            <div className="flex gap-4 items-start">
              {/* Date Badge */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="text-text-gray text-xs font-bold uppercase tracking-wider">{EVENT_DATA.date.month}</div>
                <div className="text-3xl font-bold text-text-dark leading-none">{EVENT_DATA.date.day}</div>
              </div>

              {/* Title & Tags */}
              <div className="flex-grow">
                <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2 leading-tight">
                   {EVENT_DATA.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 text-xs text-text-gray mb-4">
                  <span>(金) 22:00 (2日間)</span>
                  <span className="mx-1">|</span>
                  <span>{EVENT_DATA.location}</span>
                  <span className="mx-1">|</span>
                  <span>主催: <a href="#" className="hover:underline text-text-gray">{EVENT_DATA.organizer.name}</a></span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {EVENT_DATA.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-border-gray text-xs text-text-gray hover:bg-gray-50 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Buttons (Desktop) */}
              <div className="hidden md:flex flex-col gap-3 text-center">
                <button className="flex flex-col items-center text-text-gray hover:text-primary group transition-colors">
                  <span className="material-icons-outlined group-hover:text-primary mb-1 transition-colors">favorite_border</span>
                  <span className="text-[10px]">お気に入り</span>
                </button>
                <button className="flex flex-col items-center text-text-gray hover:text-primary group transition-colors">
                  <span className="material-icons-outlined group-hover:text-primary mb-1 transition-colors">ios_share</span>
                  <span className="text-[10px]">共有</span>
                </button>
              </div>
            </div>

            <div className="h-px bg-border-gray my-8 w-full"></div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Left Column: Description & Organizer */}
              <div className="md:col-span-2">
                {/* Description */}
                <div 
                  className="prose prose-sm max-w-none text-text-dark leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: EVENT_DATA.description }}
                />

                <div className="mt-4">
                  <button className="w-full border border-border-gray text-primary hover:bg-gray-50 py-3 px-4 rounded transition-colors text-sm font-medium">
                    続きを読む
                  </button>
                </div>

                {/* Organizer Card */}
                <div className="mt-12 pt-8 border-t border-border-gray flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={EVENT_DATA.organizer.avatarUrl} 
                      alt="Organizer Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs text-text-gray mb-1">主催者</div>
                    <h3 className="font-bold text-text-dark text-base mb-1">{EVENT_DATA.organizer.name}</h3>
                    <div className="text-xs text-text-gray mb-4">フォロワー数: {EVENT_DATA.organizer.followers}</div>
                  </div>
                  <div className="flex gap-2">
                     <button className="px-4 py-2 border border-border-gray rounded bg-white text-text-dark text-xs hover:bg-gray-50 transition-colors">
                       主催者へ連絡
                     </button>
                     <button className="px-4 py-2 border border-border-gray rounded bg-white text-text-dark text-xs hover:bg-gray-50 transition-colors flex items-center gap-1">
                       <span className="material-icons-outlined text-[14px]">check</span> フォロー中
                     </button>
                  </div>
                </div>
                
                <div className="mt-8 text-xs text-text-gray">
                   参加者 {EVENT_DATA.attendees}
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="md:col-span-1">
                <Sidebar event={EVENT_DATA} />
              </div>
            </div>
          </div>
          
           {/* Mobile Footer Date limit */}
           <div className="px-8 pb-8 text-xs text-text-gray border-t border-border-gray pt-4 mt-4 bg-white">
             販売期限: 2026/2/14 (土) 23:59
           </div>
        </div>

        {/* Floating Ticket Button Area */}
        <div className="max-w-[960px] mx-auto mt-4 flex justify-end px-4 md:px-0 mb-8">
           <button className="w-full md:w-auto bg-[#f0ad4e] hover:bg-yellow-500 text-white font-bold py-3 px-12 rounded shadow-sm transition-colors text-base">
             チケットを申し込む
           </button>
        </div>

        <RelatedEvents events={EVENT_DATA.relatedEvents} />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;