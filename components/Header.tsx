import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white border-b border-border-gray sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://peatix.com" className="flex items-center gap-1 group">
               <svg className="h-6 w-auto text-primary" viewBox="0 0 100 30" fill="currentColor">
                <path d="M10,5 C15,5 18,8 18,15 C18,22 15,25 10,25 L5,25 L5,5 L10,5 Z M20,5 L30,5 L30,8 L23,8 L23,12 L28,12 L28,15 L23,15 L23,22 L30,22 L30,25 L20,25 L20,5 Z" fill="#333" />
                <text x="35" y="22" fontFamily="Arial" fontSize="20" fontWeight="bold" className="fill-current text-[#333]">Peatix</text>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="https://peatix.com/search" className="hidden md:flex items-center gap-1 text-text-gray hover:text-primary transition-colors">
              <span className="material-icons-outlined text-[20px]">search</span>
              イベント検索
            </a>
            <a href="https://peatix.com/dashboard" className="hidden md:flex items-center gap-1 text-text-gray hover:text-primary transition-colors">
              <span className="material-icons-outlined text-[20px]">confirmation_number</span>
              マイチケット
            </a>
            <a href="https://peatix.com/create" className="bg-primary hover:bg-primary-hover text-white px-4 py-1.5 rounded-full font-bold text-xs transition-colors shadow-sm">
              イベントを作成
            </a>
            
            <div className="flex items-center gap-3 border-l border-border-gray pl-4">
              <button className="text-text-gray hover:text-text-dark flex items-center gap-1 text-xs font-bold">
                tacyan <span className="material-icons-outlined text-[16px]">expand_more</span>
              </button>
              <button className="text-text-gray hover:text-text-dark relative">
                <span className="material-icons-outlined">notifications</span>
                <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Banner */}
      <a href="https://peatix.com/event/campaign/community-award-2024" target="_blank" rel="noopener noreferrer" className="block bg-accent-yellow border-b border-yellow-200 text-center py-2 text-xs md:text-sm text-yellow-800 hover:bg-[#fff9e6] transition-colors flex items-center justify-center gap-2">
        <span className="material-icons-outlined text-orange-400 text-[18px]">emoji_events</span>
        <span>3/15(日)締切「Peatix コミュニティアワード」エントリー受付中!</span>
      </a>
    </>
  );
};

export default Header;