import { Room, Service, Booking, StatData } from './types';

export const TRANSLATIONS = {
  en: {
    welcome: "Welcome to Akhpal Hotel",
    tagline: "Your Trusted Friend in Quetta",
    book_now: "Book Now",
    check_in: "Check In",
    check_out: "Check Out",
    guests: "Guests",
    search: "Search Availability",
    our_rooms: "Our Elegant Rooms",
    services: "Premium Services",
    about_quetta: "Explore Quetta",
    admin_panel: "Admin Panel",
    dashboard: "Dashboard",
    reservations: "Reservations",
    rooms: "Rooms",
    revenue: "Revenue",
    occupancy: "Occupancy",
    clean: "Mark Clean",
    maintenance: "Maintenance",
    price_night: "PKR / Night",
    explore_desc: "Experience the beauty of Hanna Lake, the history of Ziarat Residency, and the vibrant culture of Balochistan.",
    chiltan_desc: "Authentic Balochi & Pashtun cuisine",
    zarghun_desc: "Rooftop Cafe with mountain views",
    login: "Staff Login",
  },
  ur: {
    welcome: "اخپل ہوٹل میں خوش آمدید",
    tagline: "کوئٹہ میں آپ کا قابل اعتماد دوست",
    book_now: "بکنگ کریں",
    check_in: "چیک ان",
    check_out: "چیک آؤٹ",
    guests: "مہمان",
    search: "دستیابی تلاش کریں",
    our_rooms: "ہمارے کمرے",
    services: "خصوصی خدمات",
    about_quetta: "کوئٹہ کی سیر",
    admin_panel: "ایڈمن پینل",
    dashboard: "ڈیش بورڈ",
    reservations: "ریزرویشنز",
    rooms: "کمرے",
    revenue: "آمدنی",
    occupancy: "قبضہ",
    clean: "صاف کریں",
    maintenance: "مرمت",
    price_night: "روپے / رات",
    explore_desc: "ہنہ جھیل کی خوبصورتی، زیارت ریزیڈنسی کی تاریخ اور بلوچستان کی متحرک ثقافت کا تجربہ کریں۔",
    chiltan_desc: "روایتی بلوچی اور پشتون کھانے",
    zarghun_desc: "پہاڑی نظاروں کے ساتھ روف ٹاپ کیفے",
    login: "اسٹاف لاگ ان",
  }
};

export const MOCK_ROOMS: Room[] = [
  {
    id: '101',
    name: 'Standard Single',
    type: 'Single',
    price: 8000,
    status: 'Available',
    amenities: ['Wi-Fi', 'AC', 'Breakfast'],
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Cozy room perfect for solo travelers.'
  },
  {
    id: '102',
    name: 'Deluxe Double',
    type: 'Double',
    price: 15000,
    status: 'Occupied',
    amenities: ['Wi-Fi', 'AC', 'Minibar', 'View'],
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Spacious room with a view of Zarghun Mountain.'
  },
  {
    id: '103',
    name: 'Executive Suite',
    type: 'Executive',
    price: 35000,
    status: 'Dirty',
    amenities: ['Wi-Fi', 'AC', 'Lounge', 'Jacuzzi', 'Work Desk'],
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Luxury suite for business and leisure.'
  },
  {
    id: '104',
    name: 'Family Room',
    type: 'Family',
    price: 25000,
    status: 'Available',
    amenities: ['Wi-Fi', 'AC', '2 Beds', 'Kitchenette'],
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Perfect for families, spacious and comfortable.'
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Chiltan Restaurant',
    description: 'Authentic Sajji and Rosht.',
    icon: 'Utensils',
    type: 'Dining'
  },
  {
    id: 's2',
    name: 'Zarghun Cafe',
    description: 'Rooftop coffee and snacks.',
    icon: 'Coffee',
    type: 'Dining'
  },
  {
    id: 's3',
    name: 'Hanna Spa',
    description: 'Relaxing massage and sauna.',
    icon: 'Sparkles',
    type: 'Wellness'
  },
  {
    id: 's4',
    name: 'Airport Shuttle',
    description: '24/7 Pick and Drop.',
    icon: 'Car',
    type: 'Transport'
  }
];

export const REVENUE_DATA: StatData[] = [
  { name: 'Mon', value: 45000 },
  { name: 'Tue', value: 52000 },
  { name: 'Wed', value: 48000 },
  { name: 'Thu', value: 61000 },
  { name: 'Fri', value: 85000 },
  { name: 'Sat', value: 95000 },
  { name: 'Sun', value: 75000 },
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'BK-001', guestName: 'Ahmed Khan', roomType: 'Deluxe Double', checkIn: '2023-10-25', checkOut: '2023-10-28', status: 'Confirmed', total: 45000 },
  { id: 'BK-002', guestName: 'Sarah Smith', roomType: 'Executive Suite', checkIn: '2023-10-26', checkOut: '2023-10-27', status: 'CheckedOut', total: 35000 },
  { id: 'BK-003', guestName: 'Bilal Baloch', roomType: 'Standard Single', checkIn: '2023-10-27', checkOut: '2023-10-30', status: 'Pending', total: 24000 },
];
