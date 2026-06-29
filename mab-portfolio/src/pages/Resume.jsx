import { useState } from 'react';
import {
  GraduationCap, Briefcase, Award, Code2, Calendar,
  MapPin, Download, CheckCircle2, ChevronDown, ChevronUp,
  Sparkles, Layers, Rocket, BookOpen
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const timelineData = [
  {
    id: 'current-role',
    period: 'June 2024 – Present',
    title: 'Software Engineer & Teaching Assistant',
    institution: 'ZennovaTech & Darshan University',
    location: 'Jamnagar & Rajkot, Gujarat',
    badge: 'Current Role',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    icon: <Briefcase className="w-5 h-5 text-green-400" />,
    score: 'Active Professional & Educator',
    description: 'Bridging enterprise software development with academic mentorship. Architecting scalable full-stack web applications while guiding engineering students in core computer science subjects.',
    skillsGained: [
      'Advanced MERN Architecture', 'Enterprise .NET Core', 'AI/ML Model Deployment',
      'Docker & Cloud CI/CD', 'Code Review & Mentorship', 'Agile Engineering'
    ],
    projectsBuilt: [
      {
        name: 'Enterprise Client Solutions at ZennovaTech',
        tech: 'MERN Stack, .NET Core, AWS',
        desc: 'Delivering robust, production-grade custom web software and APIs for commercial clients.'
      },
      {
        name: 'University Academic Curriculum & Labs',
        tech: 'Data Structures, Web Tech, Computer Networks',
        desc: 'Conducting lab sessions, evaluating algorithms, and simplifying network protocols for undergrads.'
      }
    ]
  },
  {
    id: 'btech',
    period: 'Expected May 2026 (Started 2023)',
    title: 'B. Tech in Computer Science & Engineering',
    institution: 'Darshan University',
    location: 'Rajkot, Gujarat',
    badge: 'Higher Education',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    score: 'CPI: 8.80 / 10',
    description: 'Deepening foundational engineering knowledge with intensive focus on full-stack frameworks, system design, database optimization, and artificial intelligence.',
    skillsGained: [
      'ReactJS & Redux', 'Node.js & Express', 'ASP.NET Core / C#',
      'Python & Machine Learning', 'MongoDB & SQL Server', 'REST API Integration'
    ],
    projectsBuilt: [
      {
        name: 'Astronomical Orbits',
        tech: 'ReactJS + .NET Core',
        desc: 'Interactive astrophysics web platform offering real-time planetary trajectory simulation and data visualization.'
      },
      {
        name: 'Crop Yield Analysis ML Pipeline',
        tech: 'Flask API + Python ML',
        desc: 'Predictive agricultural system predicting crop yield based on weather, soil type, and fertilizer data.'
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
    id: 'diploma',
    period: 'June 2020 – June 2023',
    title: 'Diploma in Computer Engineering',
    institution: 'Kalyan Polytechnic',
    location: 'Jamnagar, Gujarat',
    badge: 'Gold Medalist Standard',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: <Award className="w-5 h-5 text-amber-400" />,
    score: 'CPI: 9.93 / 10 (Topper)',
    description: 'Achieved near-perfect academic standing while mastering core programming languages, data structures, and database administration.',
    skillsGained: [
      'C & C++ Programming', 'Core JavaScript', 'Object Oriented Programming (OOP)',
      'MySQL Database Design', 'Problem Solving Logic', 'Web Fundamentals (HTML/CSS)'
    ],
    projectsBuilt: [
      {
        name: 'Library & Student Management System',
        tech: 'C++ & File Structures',
        desc: 'Built console-based academic management applications emphasizing data structure optimization.'
      },
      {
        name: 'Dynamic CRUD Web Portal',
        tech: 'JavaScript + PHP/MySQL',
        desc: 'Developed foundational web portals with database interaction and authentication.'
      }
    ]
  },
  {
    id: 'schooling',
    period: 'Completed May 2018',
    title: 'Class X Secondary State Board',
    institution: 'New Advent Academy',
    location: 'Jamnagar, Gujarat',
    badge: 'Foundation',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    score: 'Percentile: 96.39%',
    description: 'Established a stellar academic record characterized by high mathematical aptitude, analytical thinking, and early passion for computing and science.',
    skillsGained: [
      'Mathematical Aptitude', 'Logical Reasoning', 'Basic Computing',
      'Academic Discipline', 'Scientific Method & Inquiry'
    ],
    projectsBuilt: [
      {
        name: 'Science & Technology Exhibition Exhibits',
        tech: 'Applied Electronics & Logic',
        desc: 'Participated in regional tech fairs demonstrating foundational working models and scientific principles.'
      }
    ]
  }
];

const Resume = () => {
  const [expandedItems, setExpandedItems] = useState({
    'current-role': true,
    'btech': true,
    'diploma': false,
    'schooling': false,
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title="Interactive Career Timeline & Resume – Bhadra Mohit"
        description="Explore Bhadra Mohit's career progression: from schooling (96.39 percentile) and Diploma Topper (9.93 CPI) to B.Tech Computer Science and Full Stack Engineer at ZennovaTech."
        keywords="Bhadra Mohit Resume, Career Timeline, Full Stack Engineer, Darshan University, Kalyan Polytechnic, ZennovaTech"
        url="https://bhadramohit.vercel.app/resume"
      />

      <section className="py-12 md:py-20 bg-slate-900 min-h-screen text-gray-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Banner */}
          <div className="text-center mb-16 relative bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Comprehensive Curriculum Vitae
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Career & Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Timeline</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              A chronological journey highlighting academic excellence, practical skill mastery, and real-world software engineering projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" /> Print / Save Resume
              </button>
              <a
                href="/contact"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 border border-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:border-white/20"
              >
                <Rocket className="w-4 h-4 text-purple-400" /> Hire Me Now
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-slate-800/50 border border-white/[0.07] p-5 rounded-2xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">9.93</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Diploma CPI (Topper)</div>
            </div>
            <div className="bg-slate-800/50 border border-white/[0.07] p-5 rounded-2xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">8.80</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">B.Tech CPI</div>
            </div>
            <div className="bg-slate-800/50 border border-white/[0.07] p-5 rounded-2xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">96.39%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Class X Percentile</div>
            </div>
            <div className="bg-slate-800/50 border border-white/[0.07] p-5 rounded-2xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Full Stack</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">MERN & .NET Specialist</div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {timelineData.map((item) => {
              const isExpanded = expandedItems[item.id];
              return (
                <div key={item.id} className="relative group">
                  {/* Glowing Timeline Node Dot */}
                  <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Card Body */}
                  <div className="bg-slate-800/70 hover:bg-slate-800/90 border border-white/[0.08] hover:border-purple-500/30 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl">
                    
                    {/* Top Row: Badge & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-slate-900/60 px-3 py-1 rounded-lg border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-purple-300 mb-3">
                      <span>{item.institution}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {item.location}
                      </span>
                      <span className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-0.5 rounded text-xs font-bold">
                        {item.score}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-xl border border-purple-500/20 transition-all duration-200 mb-4"
                    >
                      {isExpanded ? (
                        <>Hide Skills & Projects <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View Skills & Projects Learned <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-white/10 space-y-6 animate-fadeIn">
                        
                        {/* Skills Acquired */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-blue-400" /> Skills & Core Competencies Acquired
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skillsGained.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1 bg-slate-900/80 border border-white/10 rounded-lg text-xs font-medium text-gray-200 shadow-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects Learned / Built */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-green-400" /> Key Projects & Practical Implementations
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {item.projectsBuilt.map((proj, pIdx) => (
                              <div
                                key={pIdx}
                                className="bg-slate-900/60 border border-white/5 p-4 rounded-xl hover:border-white/15 transition-all"
                              >
                                <div className="font-bold text-sm text-white mb-1 flex items-center justify-between">
                                  <span>{proj.name}</span>
                                  <span className="text-[10px] font-semibold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
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

                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-purple-900/30 via-slate-800 to-blue-900/30 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to add this value to your team?</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
              I am currently available for software engineering roles, full-time opportunities, and challenging freelance projects. Let's build something exceptional together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-gray-100 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
            >
              Get in Touch Today <CheckCircle2 className="w-4 h-4 text-green-600" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Resume;
