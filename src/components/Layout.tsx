import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, CarFront, ChevronRight } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: 'お知らせ', path: '/news' },
    { name: 'サークル概要', path: '/about' },
    { name: '成績・マシン', path: '/results' },
    { name: 'スポンサー', path: '/sponsors' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                  <CarFront size={28} />
                </div>
                <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-800">
                  Formula Team Univ.
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:bg-slate-100 p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <CarFront size={24} className="text-blue-500" />
                <span className="font-bold text-xl text-white">Formula Team Univ.</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 max-w-md">
                学生自ら構想・設計・製作したフォーミュラカーで競技会に挑む、ものづくりサークルです。
                世界に通用するエンジニアを目指し、日々活動しています。
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/news" className="hover:text-blue-400 transition-colors flex items-center gap-1"><ChevronRight size={14}/> お知らせ</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1"><ChevronRight size={14}/> サークル概要</Link></li>
                <li><Link to="/results" className="hover:text-blue-400 transition-colors flex items-center gap-1"><ChevronRight size={14}/> 成績・マシン</Link></li>
                <li><Link to="/sponsors" className="hover:text-blue-400 transition-colors flex items-center gap-1"><ChevronRight size={14}/> スポンサー</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1"><ChevronRight size={14}/> お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Formula Team Univ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
