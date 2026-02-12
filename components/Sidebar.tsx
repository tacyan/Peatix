import React from 'react';
import { EventData } from '../types';

interface SidebarProps {
  event: EventData;
}

const Sidebar: React.FC<SidebarProps> = ({ event }) => {
  // ISO8601 strings for Google Calendar (assuming 2026/02/13 22:00 - 24:00 JST)
  // JST is UTC+9. 22:00 JST = 13:00 UTC
  const googleCalendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=20260213T130000Z/20260213T150000Z&location=${encodeURIComponent(event.location)}`;

  return (
    <div className="space-y-8">
      {/* Tickets */}
      <div>
        <div className="flex items-center gap-2 font-bold text-text-dark mb-3 text-sm">
          <span className="material-icons-outlined text-[20px]">confirmation_number</span>
          チケット
        </div>
        <div className="space-y-4">
          {event.tickets.map((ticket, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-dark">{ticket.name}</span>
              </div>
              {!ticket.isFree && (
                 <div className="text-text-gray text-sm">
                   {ticket.currency}{ticket.price}
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Date & Time */}
      <div>
        <div className="flex items-center gap-2 font-bold text-text-dark mb-3 text-sm">
          <span className="material-icons-outlined text-[20px]">calendar_today</span>
          日時
        </div>
        <div className="text-sm text-text-dark space-y-1">
          <div>{event.date.fullDate}</div>
          <div>{event.date.time}</div>
          <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-block mt-1">
            カレンダーに追加
          </a>
        </div>
      </div>

      {/* Location */}
      <div>
        <div className="flex items-center gap-2 font-bold text-text-dark mb-3 text-sm">
          <span className="material-icons-outlined text-[20px]">location_on</span>
          場所
        </div>
        <div className="text-sm text-text-dark">
          {event.location}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;