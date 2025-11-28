import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Hotel, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];
  const isUrdu = lang === 'ur';

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ur' : 'en');
  };

  const navLinks = [
    { name: isUrdu ? 'ہوم' : 'Home', path: '/' },
    { name: isUrdu ? 'کمرے' : 'Rooms', path: '/rooms' },
    { name: isUrdu ? 'خدمات' : 'Services', path: '/services' },
    { name: t.admin_panel, path: '/admin' },
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans ${isUrdu ? 'text-right' : 'text-left'}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <nav className="bg-akhpal-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center gap-2">
                 <Hotel className="h-8 w-8 text-amber-500" />
                 <div>
                    <h1 className="text-2xl font-bold tracking-wider">AKHPAL</h1>
                    <p className="text-xs text-amber-500 tracking-widest uppercase">Hotel Quetta</p>
                 </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-amber-400 transition-colors duration-200 font-medium ${location.pathname === link.path ? 'text-amber-500' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 bg-akhpal-700 hover:bg-akhpal-600 px-4 py-2 rounded-full transition-all"
              >
                <Globe size={18} />
                <span className="uppercase font-bold">{lang}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-amber-400">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-akhpal-800 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-akhpal-700 hover:text-amber-400"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                    toggleLang();
                    setIsMenuOpen(false);
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 bg-akhpal-700 px-4 py-2 rounded-md"
              >
                <Globe size={18} />
                <span>Switch to {lang === 'en' ? 'Urdu' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-stone-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-akhpal-900 text-stone-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Akhpal Hotel</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Experience the warmth of Balochi hospitality in the heart of Quetta. 
              Luxury, comfort, and tradition combined.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500"><Facebook /></a>
              <a href="#" className="hover:text-amber-500"><Instagram /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-500" />
                <span>Zarghun Road, Quetta, Balochistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500" />
                <span>+92 81 1234567</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
             <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-2 rounded bg-akhpal-800 border border-akhpal-700 focus:outline-none focus:border-amber-500 text-white"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-medium transition-colors">
                  Subscribe
                </button>
             </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-akhpal-800 text-xs">
          © 2023 Akhpal Hotel Quetta. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
