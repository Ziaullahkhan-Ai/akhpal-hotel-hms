import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, BedDouble, CalendarCheck, DollarSign, TrendingUp, Users, Search, MoreVertical, RefreshCw } from 'lucide-react';
import { Language, Room } from '../types';
import { REVENUE_DATA, MOCK_ROOMS, MOCK_BOOKINGS, TRANSLATIONS } from '../constants';

interface AdminProps {
  lang: Language;
}

type AdminView = 'dashboard' | 'rooms' | 'bookings';

const Admin: React.FC<AdminProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');
  const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS);
  
  // Status toggle handler for demo purposes
  const toggleRoomStatus = (id: string) => {
    setRooms(rooms.map(room => {
      if (room.id === id) {
        let newStatus: Room['status'] = 'Available';
        if (room.status === 'Available') newStatus = 'Occupied';
        else if (room.status === 'Occupied') newStatus = 'Dirty';
        else if (room.status === 'Dirty') newStatus = 'Maintenance';
        else if (room.status === 'Maintenance') newStatus = 'Available';
        return { ...room, status: newStatus };
      }
      return room;
    }));
  };

  const getStatusColor = (status: Room['status']) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800 border-green-200';
      case 'Occupied': return 'bg-red-100 text-red-800 border-red-200';
      case 'Dirty': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Maintenance': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md z-10 hidden md:flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-akhpal-900 text-white flex items-center justify-center font-bold text-lg">A</div>
            <div>
              <h2 className="font-bold text-gray-800">Admin Panel</h2>
              <p className="text-xs text-gray-500">Manager Access</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentView === 'dashboard' ? 'bg-akhpal-100 text-akhpal-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutDashboard size={20} />
            {t.dashboard}
          </button>
          <button 
            onClick={() => setCurrentView('rooms')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentView === 'rooms' ? 'bg-akhpal-100 text-akhpal-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <BedDouble size={20} />
            {t.rooms} Management
          </button>
          <button 
            onClick={() => setCurrentView('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentView === 'bookings' ? 'bg-akhpal-100 text-akhpal-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <CalendarCheck size={20} />
            {t.reservations}
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 capitalize">{currentView}</h1>
            <p className="text-sm text-gray-500">Welcome back, Manager.</p>
          </div>
          <button className="bg-white p-2 rounded-full shadow-sm border hover:bg-gray-50">
             <RefreshCw size={20} className="text-gray-600" />
          </button>
        </header>

        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600"><DollarSign size={24} /></div>
                  <span className="text-green-500 text-sm font-bold flex items-center">+12% <TrendingUp size={14} className="ml-1" /></span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                <p className="text-2xl font-bold text-gray-800">PKR 452K</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Users size={24} /></div>
                  <span className="text-blue-500 text-sm font-bold">+5%</span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">Occupancy Rate</h3>
                <p className="text-2xl font-bold text-gray-800">78%</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600"><CalendarCheck size={24} /></div>
                  <span className="text-gray-400 text-sm">Today</span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">Check-ins</h3>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><BedDouble size={24} /></div>
                  <span className="text-red-500 text-sm font-bold">3 Pending</span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">Cleaning Needed</h3>
                <p className="text-2xl font-bold text-gray-800">3 Rooms</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Weekly Revenue Analytics</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={REVENUE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
                  />
                  <Bar dataKey="value" fill="#795548" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Room Management View */}
        {currentView === 'rooms' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Room Status Overview</h3>
                <div className="flex gap-2">
                   <div className="flex items-center gap-1 text-sm"><span className="w-3 h-3 rounded-full bg-green-500"></span> Available</div>
                   <div className="flex items-center gap-1 text-sm"><span className="w-3 h-3 rounded-full bg-red-500"></span> Occupied</div>
                   <div className="flex items-center gap-1 text-sm"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Dirty</div>
                </div>
             </div>
             <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {rooms.map(room => (
                  <div 
                    key={room.id} 
                    onClick={() => toggleRoomStatus(room.id)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${getStatusColor(room.status)}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-2xl font-bold">#{room.id}</span>
                       <span className={`px-2 py-1 rounded-full text-xs font-bold bg-white/50`}>{room.status}</span>
                    </div>
                    <div className="mb-2">
                       <p className="font-bold">{room.name}</p>
                       <p className="text-sm opacity-80">{room.type}</p>
                    </div>
                    <div className="text-sm font-mono opacity-70">
                       PKR {room.price.toLocaleString()}
                    </div>
                    <div className="mt-4 pt-4 border-t border-black/10 flex justify-between text-xs">
                        <span>Click to change status</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Bookings View */}
        {currentView === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-4 border-b flex items-center justify-between">
                <h3 className="font-bold text-lg">Recent Reservations</h3>
                <div className="relative">
                   <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                   <input 
                      type="text" 
                      placeholder="Search guest..." 
                      className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-akhpal-500"
                    />
                </div>
             </div>
             <table className="w-full text-left text-sm text-gray-600">
               <thead className="bg-gray-50 text-gray-800 font-bold uppercase text-xs">
                 <tr>
                   <th className="px-6 py-4">Booking ID</th>
                   <th className="px-6 py-4">Guest</th>
                   <th className="px-6 py-4">Room Type</th>
                   <th className="px-6 py-4">Dates</th>
                   <th className="px-6 py-4">Status</th>
                   <th className="px-6 py-4">Total</th>
                   <th className="px-6 py-4"></th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {MOCK_BOOKINGS.map(booking => (
                   <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                     <td className="px-6 py-4 font-mono font-bold text-akhpal-900">{booking.id}</td>
                     <td className="px-6 py-4 font-bold">{booking.guestName}</td>
                     <td className="px-6 py-4">{booking.roomType}</td>
                     <td className="px-6 py-4">
                       <div className="flex flex-col text-xs">
                         <span>In: {booking.checkIn}</span>
                         <span>Out: {booking.checkOut}</span>
                       </div>
                     </td>
                     <td className="px-6 py-4">
                       <span className={`px-2 py-1 rounded text-xs font-bold 
                         ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                           booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}`}>
                         {booking.status}
                       </span>
                     </td>
                     <td className="px-6 py-4 font-bold">PKR {booking.total.toLocaleString()}</td>
                     <td className="px-6 py-4 text-right">
                       <button className="text-gray-400 hover:text-akhpal-900"><MoreVertical size={16} /></button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
