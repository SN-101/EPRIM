import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoEPRIM from '../assets/images/logo-EPRIM.webp';

export default function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'programs', label: 'Formations' },
    { id: 'admission', label: 'Admission' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-wrap justify-center items-center cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <div className="text-2xl justify-self-center font-bold text-[#0047AB]">
              <img className='h-16 p-0 w-32' src={logoEPRIM} alt="logo EPRIM without bg" />
            </div>
            <div className="ml-3 text-sm text-gray-600 hidden md:block max-w-xs whitespace-nowrap">
              École Professionnelle d'Informatique et Management
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#0047AB] border-b-2 border-[#0047AB]'
                    : 'text-gray-700 hover:text-[#0047AB]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'text-[#0047AB] bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
