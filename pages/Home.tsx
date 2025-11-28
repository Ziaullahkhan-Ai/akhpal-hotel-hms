import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, Utensils, Mountain, Wifi, Car, Coffee, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_ROOMS, MOCK_SERVICES } from '../constants';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isUrdu = lang === 'ur';

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full bg-black">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Akhpal Hotel Exterior" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-akhpal-900/90 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-xl animate-fade-in-up">
            {t.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 font-light tracking-wider mb-8">
            {t.tagline}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
            {t.book_now}
            {isUrdu ? null : <ArrowRight size={20} />}
          </button>
        </div>
      </div>

      {/* Booking Widget */}
      <div className="relative -mt-16 z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-end border-t-4 border-amber-600">
          <div className="flex-1 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
              <Calendar size={16} className="text-amber-600" /> {t.check_in}
            </label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
              <Calendar size={16} className="text-amber-600" /> {t.check_out}
            </label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
              <Users size={16} className="text-amber-600" /> {t.guests}
            </label>
            <select 
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-700"
            >
              {[1, 2, 3, 4, 5, '6+'].map(num => (
                <option key={num} value={num}>{num} {t.guests}</option>
              ))}
            </select>
          </div>
          <button className="w-full md:w-auto bg-akhpal-900 hover:bg-akhpal-800 text-white px-8 py-3.5 rounded-lg font-bold transition-colors">
            {t.search}
          </button>
        </div>
      </div>

      {/* Featured Rooms */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-akhpal-900 mb-12">
          {t.our_rooms}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_ROOMS.slice(0, 3).map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  PKR {room.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-akhpal-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Star size={10} className="text-amber-500" /> {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full border-2 border-akhpal-900 text-akhpal-900 hover:bg-akhpal-900 hover:text-white font-bold py-2 rounded-lg transition-colors">
                  {t.book_now}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-akhpal-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-akhpal-900 mb-4">
            {t.services}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.explore_desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                  {service.icon === 'Utensils' && <Utensils />}
                  {service.icon === 'Coffee' && <Coffee />}
                  {service.icon === 'Sparkles' && <Star />}
                  {service.icon === 'Car' && <Car />}
                </div>
                <h3 className="text-lg font-bold text-akhpal-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Quetta Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-akhpal-900 mb-6 flex items-center gap-3">
              <Mountain className="text-balochi-blue" />
              {t.about_quetta}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t.explore_desc} 
              Located in the heart of Balochistan, Akhpal Hotel serves as your gateway to the rich culture and breathtaking landscapes of the region. From the serene waters of Hanna Lake to the bustling Kandahari Bazaar, adventure awaits just around the corner.
            </p>
            <button className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1596025219904-80252b47494f?auto=format&fit=crop&q=80&w=400" alt="Quetta Landscape" className="rounded-lg shadow-lg w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1628062947119-90d235c5c02b?auto=format&fit=crop&q=80&w=400" alt="Balochi Culture" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
