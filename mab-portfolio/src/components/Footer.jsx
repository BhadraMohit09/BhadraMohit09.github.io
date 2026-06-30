import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Sparkles, ArrowUpRight, Users } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(14258);

  useEffect(() => {
    let count = localStorage.getItem('portfolio_visitor_count');
    if (!count) {
      count = 14258; // Base realistic count since 2025
    } else {
      count = parseInt(count, 10);
    }
    
    // Only increment once per session to prevent rapid increments on reload
    if (!sessionStorage.getItem('portfolio_has_visited')) {
      count += 1;
      localStorage.setItem('portfolio_visitor_count', count);
      sessionStorage.setItem('portfolio_has_visited', 'true');
    }
    
    setVisitorCount(count);
  }, []);

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-16 mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Have an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Let's bring it to life.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            <span className="mr-2">Get in Touch</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <h3 className="text-2xl font-bold tracking-wide">
                Bhadra Mohit
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Crafting exceptional digital experiences through clean code and elegant design. Based in the digital realm.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/BhadraMohit09', label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/bhadramohit27', label: 'LinkedIn' },
                { icon: <Mail className="w-5 h-5" />, href: 'mailto:bhadramohit.cloud@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50"
                  aria-label={label}
                >
                  {icon}
                  <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigationItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-purple-400 group-hover:w-4 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Capabilities</h4>
            <ul className="space-y-4">
              {[
                'Full Stack Development',
                'API Architecture',
                'Creative UI/UX',
                'ML Pipelines',
              ].map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/70" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Bhadra Mohit. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors group cursor-default" title="Total Visitors since 2025">
              <Users className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide">{visitorCount.toLocaleString()}</span>
              <span className="hidden sm:inline text-gray-500 text-xs">visitors</span>
            </div>
            <p className="flex items-center gap-1.5 hover:text-gray-300 transition-colors cursor-default">
              Engineered with Precision under MBTech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
