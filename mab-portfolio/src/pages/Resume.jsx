import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Award, Code2, Calendar,
  MapPin, CheckCircle2, ChevronDown, ChevronUp,
  Sparkles, Layers, Rocket, BookOpen, Users
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const timelineData = [
  {
    id: 'schooling',
    period: 'Completed May 2018',
    title: 'Class X Secondary State Board',
    institution: 'New Advent Academy',
    location: 'Jamnagar, Gujarat',
    badge: 'Foundation',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    icon: <BookOpen className="w-5 h-5 text-pink-400" />,
    description: 'Established strong analytical foundations characterized by high mathematical reasoning, structured scientific inquiry, and an early passion for technology.',
    skillsGained: [
      'Mathematical Reasoning', 'Analytical Thinking', 'Scientific Method',
      'Core Computing', 'Academic Discipline'
    ],
    projectsBuilt: [
      {
        name: 'Science & Technology Exhibition Models',
        tech: 'Applied Science & Logic',
        desc: 'Created and presented working functional models demonstrating logical and scientific principles.'
      }
    ]
  },
  {
    id: 'diploma',
    period: 'June 2020 – June 2023',
    title: 'Diploma in Computer Engineering',
    institution: 'Kalyan Polytechnic',
    location: 'Jamnagar, Gujarat',
    badge: 'Technical Diploma',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    icon: <Award className="w-5 h-5 text-amber-400" />,
    description: 'Mastered foundational computer programming languages, relational database administration, and object-oriented software engineering paradigms.',
    skillsGained: [
      'C & C++ Programming', 'Core JavaScript', 'Object Oriented Programming (OOP)',
      'MySQL Database Design', 'Logic & Problem Solving', 'Web Fundamentals'
    ],
    projectsBuilt: [
      {
        name: 'Library Management System',
        tech: 'C++ & Data Structures',
        desc: 'Built console-based academic management software optimizing data storage and retrieval.'
      },
      {
        name: 'Dynamic Database Web Portal',
        tech: 'JavaScript + PHP/MySQL',
        desc: 'Developed foundational responsive portals with structured database interaction.'
      }
    ]
  },
  {
    id: 'btech',
    period: 'Expected May 2026 (Started 2023)',
    title: 'B. Tech in Computer Science & Engineering',
    institution: 'Darshan University',
    location: 'Rajkot, Gujarat',
    badge: 'Higher Degree',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    description: 'Deepening advanced software engineering capabilities with an intensive focus on modern full-stack web frameworks, artificial intelligence pipelines, and database optimization.',
    skillsGained: [
      'ReactJS & Redux', 'Node.js & ExpressJS', 'ASP.NET Core / C#',
      'Python & Machine Learning', 'MongoDB & SQL Server', 'RESTful APIs'
    ],
    projectsBuilt: [
      {
        name: 'Astronomical Orbits',
        tech: 'ReactJS + .NET Core',
        desc: 'Interactive astrophysics web platform offering real-time planetary trajectory simulation and data visualization.'
      },
      {
        name: 'Crop Yield Analysis ML Pipeline',
        tech: 'Flask API + Machine Learning',
        desc: 'Predictive agricultural system predicting crop yield based on weather, soil type, and fertilizer parameters.'
      },
      {
        name: 'Real-Time Text to Speech & STT',
        tech: 'ReactJS + Web Speech API',
        desc: 'Browser-native TTS/STT interaction tool supporting multiple voices and dynamic speech rate adjustments.'
      },
      {
        name: 'Sports Utilities Catalog & Checkout',
        tech: 'MERN Stack + Payment Gateway',
        desc: 'E-commerce product system with category filtering and integrated secure online UPI/Card payment flows.'
      }
    ]
  },
  {
    id: 'teaching-assistant',
    period: 'June 2024 – Present',
    title: 'Teaching Assistant',
    institution: 'Darshan University',
    location: 'Rajkot, Gujarat',
    badge: 'Academic Leadership',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: <Users className="w-5 h-5 text-blue-400" />,
    description: 'Mentoring engineering undergraduates across core software engineering disciplines. Conducting practical laboratory sessions and guiding students in complex algorithmic implementations.',
    skillsGained: [
      'Technical Mentorship', 'Web Technology Instruction', 'Data Structures & Algorithms',
      'Computer Networks Guidance', 'Code Reviewing', 'Academic Evaluation'
    ],
    projectsBuilt: [
      {
        name: 'Lab Curriculum & Practical Guidance',
        tech: 'Data Structures, Web Tech, Networks',
        desc: 'Facilitating doubt-clearing sessions and supporting undergraduate practical implementations.'
      }
    ]
  },
  {
    id: 'software-engineer',
    period: 'Current Role',
    title: 'Software Engineer',
    institution: 'ZennovaTech',
    location: 'Jamnagar / Remote',
    badge: 'Industry Experience',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/30',
    icon: <Briefcase className="w-5 h-5 text-green-400" />,
    description: 'Architecting scalable full-stack enterprise applications, building robust backend REST APIs, and delivering high-performance custom web software using the MERN stack and .NET Core.',
    skillsGained: [
      'Advanced MERN Architecture', 'Enterprise .NET Core', 'Cloud Integrations',
      'System Scaling & Security', 'Agile Software Development', 'Client Collaboration'
    ],
    projectsBuilt: [
      {
        name: 'Enterprise Client Portals & APIs',
        tech: 'MERN Stack, .NET Core, AWS',
        desc: 'Delivering production-grade custom web platforms and secure backend architectures.'
      }
    ]
  }
];

const Resume = () => {
  const [expandedItems, setExpandedItems] = useState({
    'software-engineer': true,
    'teaching-assistant': true,
    'btech': true,
    'diploma': false,
    'schooling': false,
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <SEOHead
        title="Career Journey & Experience Timeline – Bhadra Mohit"
        description="Explore Bhadra Mohit's progressive software engineering journey: Schooling, Diploma, B.Tech, Teaching Assistantship, and Software Engineer role at ZennovaTech."
        keywords="Bhadra Mohit Career, Software Engineer, Teaching Assistant, ZennovaTech, Darshan University, Kalyan Polytechnic"
        url="https://bhadramohit.vercel.app/resume"
      />

      <section className="py-12 md:py-20 bg-slate-900 min-h-screen text-gray-300 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Banner animated with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20 relative bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Career Roadmap
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Journey</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              A distinctive chronological roadmap showcasing continuous growth—from foundational schooling and academic leadership to professional software engineering.
            </p>

            <div className="flex justify-center">
              <a
                href="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105 active:scale-95"
              >
                <Rocket className="w-4 h-4" /> Connect / Hire Me
              </a>
            </div>
          </motion.div>

          {/* Unique Alternating Central Timeline */}
          <div className="relative">
            {/* Glowing Central Spine on desktop, left spine on mobile */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full md:-translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />

            <div className="space-y-16">
              {timelineData.map((item, idx) => {
                const isExpanded = expandedItems[item.id];
                const isEven = idx % 2 === 0; // Even items slide from left on desktop, odd slide from right

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Center Node Icon */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] z-20 group hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    {/* Empty Space for opposing side on desktop */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Timeline Card Content */}
                    <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className="bg-slate-800/80 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                        
                        {/* Subtle Card Glow */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/15 transition-all duration-500" />

                        {/* Top Row: Badge & Period */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400 bg-slate-900/80 px-3 py-1 rounded-xl border border-white/5">
                            <Calendar className="w-3.5 h-3.5 text-purple-400" />
                            {item.period}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-purple-300 mb-4">
                          <span>{item.institution}</span>
                          <span className="flex items-center gap-1 text-gray-400 text-xs font-normal">
                            <MapPin className="w-3.5 h-3.5 text-gray-500" />
                            {item.location}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2.5 rounded-xl border border-purple-500/20 transition-all duration-200 mb-2"
                        >
                          {isExpanded ? (
                            <>Hide Skills & Projects <ChevronUp className="w-4 h-4" /></>
                          ) : (
                            <>Explore Skills & Projects <ChevronDown className="w-4 h-4" /></>
                          )}
                        </button>

                        {/* Collapsible Details Animated */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-6 mt-4 border-t border-white/10 space-y-6"
                          >
                            {/* Skills Acquired */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-blue-400" /> Key Skills & Competencies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.skillsGained.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-3 py-1 bg-slate-900/90 border border-white/10 rounded-xl text-xs font-semibold text-gray-200 shadow-sm hover:border-purple-500/40 transition-colors"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Projects Built */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                                <Layers className="w-4 h-4 text-green-400" /> Featured Work & Contributions
                              </h4>
                              <div className="grid gap-3">
                                {item.projectsBuilt.map((proj, pIdx) => (
                                  <div
                                    key={pIdx}
                                    className="bg-slate-900/70 border border-white/5 p-4 rounded-2xl hover:border-white/15 transition-all"
                                  >
                                    <div className="font-bold text-sm text-white mb-1 flex items-center justify-between">
                                      <span>{proj.name}</span>
                                      <span className="text-[10px] font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                                        {proj.tech}
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-normal">
                                      {proj.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Call to Action animated */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center bg-gradient-to-r from-purple-900/30 via-slate-800 to-blue-900/30 p-10 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Ready to bring this experience to your team?</h2>
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              I am actively available for software engineering roles, impactful collaborations, and innovative product development.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-gray-100 font-extrabold px-9 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              Get in Touch Today <CheckCircle2 className="w-5 h-5 text-green-600" />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Resume;
