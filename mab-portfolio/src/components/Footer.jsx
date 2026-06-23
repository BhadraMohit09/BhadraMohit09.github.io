import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Bhadra Mohit
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences and solving complex problems through innovative technology solutions.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Github className="w-4 h-4" />, href: 'https://github.com/BhadraMohit09', label: 'GitHub' },
                { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/bhadramohit27', label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />, href: 'mailto:bhadramohit.cloud@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-500 transition-all duration-200"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigationItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Development',
                'API Design & Integration',
                'UI/UX Implementation',
                'ML Pipeline Development',
                'Technical Consulting',
                'Code Review',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bhadra Mohit. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">Engineered with Precision under MBTech ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
