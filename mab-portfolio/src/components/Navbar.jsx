import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send, ChevronDown, Sparkles, Code2, Layers, User, Briefcase, Mail, Home } from 'lucide-react';

const navSections = [
  {
    path: '/',
    label: 'Home',
    icon: <Home className="w-4 h-4" />,
    description: 'Back to the start',
  },
  {
    path: '/about',
    label: 'About',
    icon: <User className="w-4 h-4" />,
    description: 'Who I am & my background',
  },
  {
    path: '/skills',
    label: 'Skills',
    icon: <Code2 className="w-4 h-4" />,
    description: 'Technologies I work with',
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: <Layers className="w-4 h-4" />,
    description: 'What Ive built',
  },
  {
    path: '/experience',
    label: 'Experience',
    icon: <Briefcase className="w-4 h-4" />,
    description: 'My professional journey',
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: <Mail className="w-4 h-4" />,
    description: 'Lets work together',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
          isScrolled
            ? 'bg-slate-950/85 border-white/[0.12] shadow-2xl shadow-purple-950/30 py-0'
            : 'bg-slate-950/45 border-white/[0.08] shadow-lg shadow-black/20 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative">
                <img
                  src="/icon-192.png"
                  alt="MBTech Logo"
                  className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-105 transition-all duration-300 border border-white/20"
                />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-slate-900 animate-pulse z-10" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                MB<span className="text-purple-400">Tech</span>
              </span>
            </Link>

            {/* ── Desktop nav: pill container ── */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-sm">
                {navSections.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onMouseEnter={() => setHoveredPath(path)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className={`relative text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isActive(path)
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive(path) && (
                      <span className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.12]" />
                    )}
                    {hoveredPath === path && !isActive(path) && (
                      <span className="absolute inset-0 rounded-full bg-white/[0.05]" />
                    )}
                    <span className="relative">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Desktop right side ── */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5 hover:bg-white/[0.07] transition-colors duration-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available to hire
              </div>
              <Link
                to="/contact"
                className="group relative text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Send className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Hire me</span>
              </Link>
            </div>

            {/* ── Mobile: right side ── */}
            <div className="md:hidden flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                Available
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-300 hover:bg-white/[0.1] hover:text-white transition-all duration-200"
                aria-label="Toggle menu"
              >
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                  <X className="w-4 h-4" />
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                  <Menu className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/[0.06] bg-slate-950/95 backdrop-blur-2xl">
            <div className="px-4 pt-4 pb-2">
              {/* Mobile nav grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {navSections.map(({ path, label, icon, description }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex flex-col gap-1 px-3.5 py-3 rounded-xl border transition-all duration-200 ${
                      isActive(path)
                        ? 'bg-purple-600/15 border-purple-500/30 text-white'
                        : 'bg-white/[0.03] border-white/[0.06] text-gray-400 hover:bg-white/[0.07] hover:border-white/[0.12] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`${isActive(path) ? 'text-purple-400' : ''}`}>{icon}</span>
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                    <span className="text-xs text-gray-500 leading-tight">{description}</span>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.06] pt-3 pb-4 space-y-2">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <Send className="w-4 h-4" />
                  Get in touch
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  Open to freelance & full-time roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
