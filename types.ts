export type Language = 'en' | 'ur';

export interface Room {
  id: string;
  name: string;
  type: 'Single' | 'Double' | 'Deluxe' | 'Executive' | 'Family';
  price: number;
  status: 'Available' | 'Occupied' | 'Dirty' | 'Maintenance';
  amenities: string[];
  image: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'Dining' | 'Wellness' | 'Transport' | 'Business';
}

export interface Booking {
  id: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'CheckedOut';
  total: number;
}

export interface StatData {
  name: string;
  value: number;
}
