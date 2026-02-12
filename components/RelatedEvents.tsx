import React from 'react';
import { RelatedEvent } from '../types';

interface RelatedEventsProps {
  events: RelatedEvent[];
}

const RelatedEvents: React.FC<RelatedEventsProps> = ({ events }) => {
  return (
    <div className="max-w-[960px] mx-auto mt-12 px-4 md:px-0 mb-12">
      <h2 className="text-center text-sm text-text-gray mb-6">関連イベント</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded border border-border-gray overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
            <div className="aspect-video relative overflow-hidden bg-gray-200">
              <img 
                src={event.imageUrl} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="text-[10px] text-primary font-bold mb-1">{event.date}</div>
              <h3 className="font-bold text-sm text-text-dark line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <div className="text-[10px] text-text-gray mb-0.5">{event.organizer}</div>
              <div className="text-[10px] text-text-gray">{event.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Cloud */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {['テクノロジー／サイエンス', 'AI', 'アプリ', '生成AI', 'インターネット', 'AIエージェント'].map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full border border-border-gray text-xs text-text-gray hover:bg-white cursor-pointer bg-white transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Peatix Marche Banner */}
      <div className="mt-8 border border-border-gray rounded bg-white p-6 relative overflow-hidden group cursor-pointer">
        <span className="material-icons-outlined absolute top-4 left-4 text-purple-100 text-4xl transform -rotate-12 select-none">confirmation_number</span>
        <span className="material-icons-outlined absolute bottom-4 right-12 text-blue-100 text-4xl transform rotate-12 select-none">palette</span>
        <span className="material-icons-outlined absolute top-10 right-1/4 text-green-100 text-3xl select-none">local_florist</span>
        <span className="material-icons-outlined absolute bottom-8 left-1/4 text-red-100 text-3xl select-none">theater_comedy</span>
        
        <div className="relative z-10 text-center">
          <p className="text-xs text-text-gray mb-2">毎日が豊かになる商品・サービスとの"出会いと体験"を広げる</p>
          <h3 className="font-bold text-lg text-text-dark mb-4">オンラインセレクトストア『Peatixマルシェ』</h3>
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold py-2 px-8 rounded-full shadow-sm transition-colors">
            今すぐチェック
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedEvents;