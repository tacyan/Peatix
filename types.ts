export interface Organizer {
  name: string;
  followers: number;
  avatarUrl: string;
  profileUrl: string;
}

export interface Ticket {
  name: string;
  price: number;
  currency: string;
  isFree: boolean;
  details?: string;
}

export interface RelatedEvent {
  id: string;
  title: string;
  date: string;
  organizer: string;
  location: string;
  imageUrl: string;
}

export interface EventData {
  id: string;
  title: string;
  date: {
    month: string;
    day: string;
    fullDate: string;
    time: string;
  };
  location: string;
  tags: string[];
  bannerUrl: string;
  description: string; // HTML string for rich text
  organizer: Organizer;
  tickets: Ticket[];
  relatedEvents: RelatedEvent[];
  attendees: number;
}