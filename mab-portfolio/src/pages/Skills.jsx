import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, FileCode2, Database, Layers, Terminal, Bot, Container, Cloud } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const skills = [
  { name: 'React', level: 95, category: 'Frontend', icon: <Code2 className="w-6 h-6 text-cyan-400" /> },
  { name: 'Node.js', level: 90, category: 'Backend', icon: <Server className="w-6 h-6 text-green-400" /> },
  { name: 'TypeScript', level: 88, category: 'Language', icon: <FileCode2 className="w-6 h-6 text-blue-400" /> },
  { name: 'MongoDB', level: 85, category: 'Database', icon: <Database className="w-6 h-6 text-emerald-400" /> },
  { name: '.NET Core', level: 82, category: 'Backend', icon: <Layers className="w-6 h-6 text-purple-400" /> },
  { name: 'Python', level: 85, category: 'Language', icon: <Terminal className="w-6 h-6 text-yellow-400" /> },
  { name: 'Machine Learning', level: 78, category: 'AI/ML', icon: <Bot className="w-6 h-6 text-pink-400" /> },
  { name: 'Docker', level: 75, category: 'DevOps', icon: <Container className="w-6 h-6 text-sky-400" /> },
  { name: 'AWS', level: 70, category: 'Cloud', icon: <Cloud className="w-6 h-6 text-amber-400" /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'AI/ML', 'DevOps', 'Cloud'];

const categoryColors = {
  Frontend: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  Backend: 'bg-green-500/10 text-green-300 border-green-500/20',
  Language: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  Database: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  'AI/ML': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  DevOps: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  Cloud: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Skills & Expertise – Bhadra Mohit"
        description="Explore Bhadra Mohit's technical skills: React, Node.js, TypeScript, .NET Core, Python, Machine Learning, Docker, AWS and more."
        keywords="Bhadra Mohit skills, React developer, Node.js, TypeScript, .NET, Machine Learning, Docker, AWS"
        url="https://bhadramohit.vercel.app/skills"
      />

      <section className="py-20 bg-slate-900 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-gray-400 border-slate-700 hover:border-purple-500/50 hover:text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-slate-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 hover:border-purple-500/30 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{skill.icon}</span>
                    <h2 className="font-bold text-white text-lg">{skill.name}</h2>
                  </div>
                  <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.05, ease: "easeOut" }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                  />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${categoryColors[skill.category] || 'bg-slate-700 text-gray-400 border-slate-600'}`}>
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tools & other tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Also familiar with</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Next.js', 'GraphQL', 'Redis', 'PostgreSQL', 'Git', 'GitHub Actions',
                'Tailwind CSS', 'Framer Motion', 'REST APIs', 'WebSockets', 'JWT', 'OAuth2',
                'Figma', 'Postman', 'Linux', 'Nginx',
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-600 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
