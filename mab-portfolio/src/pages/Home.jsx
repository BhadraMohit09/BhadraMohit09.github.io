import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Github, Linkedin, Mail, Send, ExternalLink,
  ArrowRight, Sparkles, Code2, Layers, Zap,
  Star, Coffee, Globe, ChevronRight, Rocket, GraduationCap, GitCommit, Terminal,
  Server, FileCode2, Database, Bot, Container, Cloud, Check, Settings
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

/* ─── Floating animated tech orb ─── */
const TechOrb = ({ icon, label, style, colorClass }) => (
  <div
    className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm select-none pointer-events-none ${colorClass}`}
    style={style}
  >
    {icon}
    <span>{label}</span>
  </div>
);

/* ─── Typing animation hook ─── */
const useTypingEffect = (words, speed = 100, pause = 1800) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    setText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
};

/* ─── Project preview card ─── */
const ProjectPreview = ({ title, tag, tagIcon, color, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between p-3.5 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-purple-500/40 rounded-xl transition-all duration-200 cursor-pointer"
  >
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color} flex-shrink-0`} />
      <span className="text-sm font-medium text-gray-200">{title}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1 text-xs text-gray-400 bg-slate-700 px-2 py-0.5 rounded-full font-medium">
        {tag} {tagIcon}
      </span>
      <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200" />
    </div>
  </a>
);

/* ─── Skill chip ─── */
const SkillChip = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 border border-slate-700/60 rounded-lg text-sm text-gray-300 hover:border-purple-500/40 hover:text-white transition-all duration-200">
    <span className="flex items-center">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

const Home = () => {
  const roles = ['Full Stack Developer', 'MERN Specialist', '.NET Engineer', 'AI/ML Builder', 'Open Source Dev'];
  const typedRole = useTypingEffect(roles);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const floatingTechs = [
    { label: 'React', icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />, style: { top: '18%', left: '6%' }, colorClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
    { label: 'Node.js', icon: <Server className="w-3.5 h-3.5 text-green-400" />, style: { top: '30%', right: '5%' }, colorClass: 'bg-green-500/10 border-green-500/20 text-green-300' },
    { label: '.NET', icon: <Layers className="w-3.5 h-3.5 text-purple-400" />, style: { top: '55%', left: '4%' }, colorClass: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' },
    { label: 'Python', icon: <Terminal className="w-3.5 h-3.5 text-yellow-400" />, style: { top: '65%', right: '6%' }, colorClass: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300' },
    { label: 'MongoDB', icon: <Database className="w-3.5 h-3.5 text-emerald-400" />, style: { top: '78%', left: '8%' }, colorClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' },
    { label: 'TypeScript', icon: <FileCode2 className="w-3.5 h-3.5 text-blue-400" />, style: { top: '80%', right: '7%' }, colorClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
  ];

  return (
    <>
      <SEOHead
        title="Bhadra Mohit – Full Stack Developer | Portfolio"
        description="Bhadra Mohit is a Full Stack Developer at ZennovaTech, specializing in MERN stack, .NET, and AI/ML. Open to freelance projects and collaboration."
        url="https://bhadramohit.vercel.app/"
      />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden">

        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.8) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Mouse-tracking spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.07), transparent 60%)`,
          }}
        />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-900/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating tech labels */}
        {floatingTechs.map((t) => (
          <TechOrb key={t.label} {...t} />
        ))}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8 hover:bg-purple-500/15 transition-colors duration-200">
            <Sparkles className="w-3.5 h-3.5" />
            Associate Software Engineer @ ZennovaTech
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
          </div>

          {/* Avatar */}
          <div className="mb-8 relative inline-block group">
            <div className="relative w-32 h-32 mx-auto">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-spin p-[2px]" style={{ animationDuration: '4s' }}>
                <div className="w-full h-full rounded-full bg-slate-900" />
              </div>
              {/* Photo */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/astronaut.jpeg"
                  alt="Bhadra Mohit"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <Star className="w-3 h-3 fill-white" />
                Seeking the Eternal
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 mt-4 tracking-tight leading-none">
            Bhadra{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Mohit
            </span>
          </h1>

          {/* Animated role */}
          <div className="h-8 flex items-center justify-center mb-6">
            <span className="text-xl md:text-2xl text-gray-400 font-medium font-mono">
              {typedRole}
              <span className="inline-block w-0.5 h-5 bg-purple-400 ml-0.5 animate-pulse align-middle" />
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Passionate about{' '}
            <span className="text-purple-300 font-medium">scalable architecture</span>,{' '}
            <span className="text-blue-300 font-medium">clean code</span>, and{' '}
            <span className="text-pink-300 font-medium">great UX</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Send className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Let's Work Together</span>
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-purple-500/40 text-gray-200 hover:text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              View My Work
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-16">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/BhadraMohit09', label: 'GitHub', hoverClass: 'hover:border-gray-400 hover:text-white' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/bhadramohit27', label: 'LinkedIn', hoverClass: 'hover:border-blue-400 hover:text-blue-400' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:bhadramohit.cloud@gmail.com', label: 'Email', hoverClass: 'hover:border-pink-400 hover:text-pink-400' },
              { icon: <Globe className="w-4 h-4" />, href: 'https://bhadramohit.vercel.app', label: 'Website', hoverClass: 'hover:border-purple-400 hover:text-purple-400' },
            ].map(({ icon, href, label, hoverClass }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-gray-400 transition-all duration-200 hover:scale-110 hover:shadow-lg ${hoverClass}`}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
            {[
              { value: '15+', label: 'Projects', icon: <Rocket className="w-5 h-5 mx-auto text-purple-400 group-hover:scale-110 transition-transform" /> },
              { value: '100+', label: 'Students Mentored', icon: <GraduationCap className="w-5 h-5 mx-auto text-blue-400 group-hover:scale-110 transition-transform" /> },
              { value: '500+', label: 'Commits', icon: <GitCommit className="w-5 h-5 mx-auto text-green-400 group-hover:scale-110 transition-transform" /> },
              { value: '3+', label: 'Yrs Experience', icon: <Zap className="w-5 h-5 mx-auto text-amber-400 group-hover:scale-110 transition-transform" /> },
            ].map(({ value, label, icon }) => (
              <div key={label} className="group text-center p-4 bg-slate-800/40 hover:bg-slate-800/70 rounded-2xl border border-slate-700/60 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="mb-2 flex justify-center">{icon}</div>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{value}</div>
                <div className="text-gray-500 text-xs mt-0.5 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-pulse" />
          </div>
          <span className="text-[10px] text-gray-600 uppercase tracking-widest">scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT I DO — Services strip
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What I Build</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              End-to-end product development — from pixel-perfect UIs to production-grade backends.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: 'Frontend Engineering',
                desc: 'Responsive, accessible UIs with React, TypeScript & Tailwind. Pixel-perfect from Figma to browser.',
                tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
                color: 'from-blue-500/10 to-cyan-500/5',
                border: 'border-blue-500/20',
                iconBg: 'bg-blue-500/15 text-blue-300',
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: 'Backend & APIs',
                desc: 'Scalable RESTful APIs, microservices, and real-time systems using Node.js and .NET Core.',
                tags: ['Node.js', '.NET Core', 'PostgreSQL', 'MongoDB'],
                color: 'from-green-500/10 to-emerald-500/5',
                border: 'border-green-500/20',
                iconBg: 'bg-green-500/15 text-green-300',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'AI & ML Integration',
                desc: 'Machine learning pipelines, model deployment with Flask/FastAPI, and data analysis with Python.',
                tags: ['Python', 'Scikit-learn', 'Flask', 'Docker'],
                color: 'from-purple-500/10 to-violet-500/5',
                border: 'border-purple-500/20',
                iconBg: 'bg-purple-500/15 text-purple-300',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'PWA & Web Performance',
                desc: 'Progressive Web Apps with offline support, service workers, and Lighthouse 90+ scores.',
                tags: ['PWA', 'Workbox', 'Vite', 'Web Vitals'],
                color: 'from-cyan-500/10 to-sky-500/5',
                border: 'border-cyan-500/20',
                iconBg: 'bg-cyan-500/15 text-cyan-300',
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Open Source',
                desc: '500+ commits across utility tools, converters, and educational platforms shared with the community.',
                tags: ['GitHub', 'OSS', 'Documentation', 'Code Review'],
                color: 'from-yellow-500/10 to-amber-500/5',
                border: 'border-yellow-500/20',
                iconBg: 'bg-yellow-500/15 text-yellow-300',
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: 'Mentoring & Teaching',
                desc: 'Teaching assistant at Darshan University — guiding 100+ students through web tech and algorithms.',
                tags: ['Web Dev', 'DSA', 'Mentoring', 'Curriculum'],
                color: 'from-pink-500/10 to-rose-500/5',
                border: 'border-pink-500/20',
                iconBg: 'bg-pink-500/15 text-pink-300',
              },
            ].map(({ icon, title, desc, tags, color, border, iconBg }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${color} border ${border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/[0.02] group-hover:scale-150 transition-transform duration-500" />
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-gray-500 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS SNAPSHOT
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Core Toolkit</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                A curated set of technologies I reach for to build fast, scalable, and maintainable products — refined over 3+ years of shipping real-world software.
              </p>
              <Link
                to="/skills"
                className="group inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold text-sm transition-colors duration-200"
              >
                See full skills breakdown
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { icon: <Code2 className="w-4 h-4 text-cyan-400" />, label: 'React' },
                { icon: <Server className="w-4 h-4 text-green-400" />, label: 'Node.js' },
                { icon: <FileCode2 className="w-4 h-4 text-blue-400" />, label: 'TypeScript' },
                { icon: <Database className="w-4 h-4 text-emerald-400" />, label: 'MongoDB' },
                { icon: <Layers className="w-4 h-4 text-purple-400" />, label: '.NET Core' },
                { icon: <Terminal className="w-4 h-4 text-yellow-400" />, label: 'Python' },
                { icon: <Bot className="w-4 h-4 text-pink-400" />, label: 'ML / AI' },
                { icon: <Container className="w-4 h-4 text-sky-400" />, label: 'Docker' },
                { icon: <Cloud className="w-4 h-4 text-amber-400" />, label: 'AWS' },
              ].map((s) => (
                <SkillChip key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIVE PROJECTS PREVIEW
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900/80 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">Live Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Things I've Shipped</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                From utility tools used daily to enterprise platforms — here's a snapshot of what I've built and deployed.
              </p>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Browse all projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="lg:w-1/2 space-y-2.5 w-full">
              <ProjectPreview title="MAB Converter" tag="Live" tagIcon={<Check className="w-3 h-3 text-green-400" />} color="bg-green-400" url="https://mab-converter-beta.vercel.app/" />
              <ProjectPreview title="GST Calculator" tag="Live" tagIcon={<Check className="w-3 h-3 text-green-400" />} color="bg-green-400" url="https://gst-calculator-76b.pages.dev/" />
              <ProjectPreview title="Finance Calculator" tag="Live" tagIcon={<Check className="w-3 h-3 text-green-400" />} color="bg-green-400" url="https://fin-calc-delta.vercel.app/" />
              <ProjectPreview title="MAB Translator" tag="Live" tagIcon={<Check className="w-3 h-3 text-green-400" />} color="bg-green-400" url="https://mab-translator-seven.vercel.app/" />
              <ProjectPreview title="AssessEdge360" tag="In Dev" tagIcon={<Settings className="w-3 h-3 text-yellow-400 animate-spin" />} color="bg-yellow-400" url="https://github.com/BhadraMohit09/AssessEdge360" />
              <div className="flex items-center justify-end pt-1">
                <Link to="/projects" className="text-xs text-gray-500 hover:text-purple-400 flex items-center gap-1 transition-colors duration-200">
                  +3 more projects <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20" />
        <div className="absolute inset-0 border-y border-purple-500/10" />

        {/* Animated blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold mb-6 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Got a project in mind?
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mt-1">
              Let's build it together.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Whether it's a web app, API, or ML pipeline — I'm available for freelance work, full-time roles, and technical consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Send className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Start a Conversation</span>
            </Link>
            <a
              href="https://github.com/BhadraMohit09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.2] text-gray-200 hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
