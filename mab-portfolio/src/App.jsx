import React, { useState, useEffect } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  MapPin,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Menu,
  X,
  ArrowUp,
  Phone,
  Download
} from 'lucide-react';
import FakeErrorSplash from './FakeErrorSplash';

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll-based section tracking and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Show scroll to top button
      setShowScrollTop(window.scrollY > 500);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");

    try {
      const res = await fetch("https://mab-contact-form-beta.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);

    // clear status after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };


  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
    { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
    { name: "TypeScript", level: 88, category: "Language", icon: "🔷" },
    { name: "MongoDB", level: 85, category: "Database", icon: "🍃" },
    { name: ".NET Core", level: 82, category: "Backend", icon: "🔵" },
    { name: "Python", level: 85, category: "Language", icon: "🐍" },
    { name: "Machine Learning", level: 78, category: "AI/ML", icon: "🤖" },
    { name: "Docker", level: 75, category: "DevOps", icon: "🐳" },
    { name: "AWS", level: 70, category: "Cloud", icon: "☁️" },
  ];

  const projects = [
    {
      title: "MAB Converter",
      description: "Modern converter for number-system and unit conversions with keyboard-friendly interface, precision settings, and full accessibility support.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://mab-converter-beta.vercel.app/",
      githubUrl: "#",
      featured: true,
      status: "Live"
    },
    {
      title: "MAB Universal Converter",
      description: "Single interface for converting units, formats, and encodings. Optimized for low-bandwidth environments with progressive enhancement.",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vanilla JS", "HTML5", "CSS3", "PWA"],
      liveUrl: "https://mab-universal-converter-beta.netlify.app/",
      githubUrl: "#",
      featured: true,
      status: "Live"
    },
    {
      title: "MAB Translator",
      description: "Advanced translation application with real-time language detection, quick-copy functionality, and multiple download formats.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "i18n", "REST API", "Material-UI"],
      liveUrl: "https://mab-translator-seven.vercel.app/",
      githubUrl: "#",
      featured: false,
      status: "Live"
    },
    {
      title: "Crop Analysis ML Pipeline",
      description: "Comprehensive machine learning pipeline for agricultural data analysis with Flask API, Docker deployment, and real-time predictions.",
      image: "https://images.pexels.com/photos/1447238/pexels-photo-1447238.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Flask", "Scikit-learn", "Docker", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/BhadraMohit09/Crop_Analysis_with_Flask_API",
      featured: true,
      status: "Open Source"
    },
    {
      title: "AssessEdge360",
      description: "Enterprise-grade placement examination platform with timed assessments, automated grading, comprehensive analytics, and real-time monitoring.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["MERN Stack", "WebSockets", "JWT", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/BhadraMohit09/AssessEdge360",
      featured: true,
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live"
    }
  ];

  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Darshan University",
      period: "2023 - Present",
      description: "Assisted in laboratory sessions for Web Technology and Data Structures courses. Mentored 100+ students in practical implementations and guided them through complex programming concepts.",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["JavaScript", "Data Structures", "Web Development", "Mentoring"]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description: "Developed responsive web applications and integrated backend systems with client APIs. Successfully delivered 15+ projects ranging from e-commerce platforms to data visualization dashboards.",
      icon: <Code className="w-6 h-6" />,
      skills: ["MERN Stack", "API Integration", "UI/UX Design", "Client Management"]
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      period: "2022 - Present",
      description: "Maintained multiple utility repositories and contributed to various open-source projects. Accumulated 500+ commits across different projects and helped improve developer tools.",
      icon: <Github className="w-6 h-6" />,
      skills: ["Git", "Open Source", "Code Review", "Documentation"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor, Darshan University",
      content: "Mohit has been an exceptional teaching assistant. His ability to explain complex concepts and help students debug their code is remarkable.",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Alex Chen",
      role: "Startup Founder",
      content: "Working with Mohit was a great experience. He delivered our web application on time and exceeded our expectations with the quality of work.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <FakeErrorSplash delay={3500}>
        <div className="bg-slate-900 text-gray-300 min-h-screen relative p-1">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  MBTech
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navigationItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${activeSection === id
                        ? "text-white bg-purple-600/40"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors duration-200"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-slate-700 bg-slate-900">
                  {navigationItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-md ${activeSection === id
                        ? "text-white bg-purple-600/40"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-200 transform hover:scale-110 z-40"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Hero Section */}
          <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/20">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQG9bDHvwq3WBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731600725551?e=1758153600&v=beta&t=OqdkYy_7PBPhmZYE-F6jCiy7h2-03yPkV3RS3pLx0P4"
                        alt="Bhadra Mohit"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                      <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
                      Seeking the Eternal
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    Bhadra Mohit
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">Full Stack Developer</p>
                <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Crafting exceptional digital experiences with MERN stack, .NET, and AI/ML technologies.
                  Passionate about building scalable, user-centric applications that make a difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Let's Work Together
                  </button>
                  <button
                    onClick={() => scrollTo('projects')}
                    className="border-2 border-slate-600 hover:border-purple-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View My Work
                  </button>
                </div>

                <div className="flex justify-center space-x-6 p-2">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/BhadraMohit09", label: "GitHub", color: "hover:text-white" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/bhadramohit27", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: <Mail className="w-6 h-6" />, href: "mailto:bhadramohit.cloud@gmail.com", label: "Email", color: "hover:text-pink-400" }
                  ].map(({ icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-4 rounded-full bg-slate-800 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-200 transform hover:scale-110 text-gray-400 ${color}`}
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div >
                  <h2 className="text-4xl text-center font-bold text-white mb-8">About Me</h2>
                  <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                      I'm a passionate full-stack developer with a strong foundation in modern web technologies and a keen interest in AI/ML. My journey in technology started with curiosity and has evolved into a professional pursuit of excellence.
                    </p>
                    <p>
                      With experience spanning the MERN stack, .NET, and Python-based ML solutions, I enjoy turning innovative ideas into elegant, scalable digital solutions that provide real value.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                      <div className="text-gray-400 font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                      <div className="text-gray-400 font-medium">Students Mentored</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/80 to-blue-600/80 rounded-2xl p-8 text-white shadow-2xl shadow-purple-500/20">
                    <div className="space-y-6">
                      {/* Info items remain the same, colors look good on this new background */}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/20">
                      <h3 className="font-semibold mb-4 text-xl">Core Technologies</h3>
                      <div className="flex flex-wrap gap-3">
                        {["React", "Node.js", ".NET", "Python", "MongoDB", "TypeScript", "NextJS", "SQL Server", "AI ML", "AWS Cloud"].map(tech => (
                          <span key={tech} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 bg-slate-900 border-t border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">A comprehensive toolkit built through hands-on experience and continuous learning.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-purple-400">{skill.icon}</span>
                        <h3 className="font-bold text-white text-lg">{skill.name}</h3>
                      </div>
                      <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 bg-slate-700 px-3 py-1 rounded-full font-medium">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">A showcase of my recent work, demonstrating technical expertise and creative problem-solving.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {projects.map((project) => (
                  <div key={project.title} className="group bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden border border-slate-700">
                    {/* Image and tags part remain mostly the same */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
                          <Github className="w-4 h-4" /> Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience & Contact Sections would follow a similar dark theme conversion */}
          {/* Experience Section */}
          <section id="experience" className="py-16 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  My professional journey, key contributions, and the impact I've made in various roles.
                </p>
              </div>

              <div className="space-y-12">
                {experiences.map((exp) => (
                  <div key={exp.title} className="bg-slate-800/50 rounded-2xl shadow-sm p-10 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-slate-700">
                    <div className="flex flex-col sm:flex-row items-start gap-8">
                      <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-4 rounded-xl flex-shrink-0">
                        {exp.icon}
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{exp.company}</p>
                          </div>
                          <span className="text-gray-400 font-medium bg-slate-700 px-4 py-2 rounded-full text-sm lg:text-base mt-2 lg:mt-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map(skill => (
                            <span key={skill} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-4 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to take on new challenges.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                      Whether you need a full-stack developer, technical consultant, or someone to bring your digital vision to life, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: <Mail className="w-6 h-6 text-purple-300" />, label: "Email", value: "bhadramohit.cloud@gmail.com" },
                      { icon: <Phone className="w-6 h-6 text-purple-300" />, label: "Phone", value: "+91 87805 70242" },
                      { icon: <MapPin className="w-6 h-6 text-purple-300" />, label: "Location", value: "Jamnagar, Gujarat" },
                      { icon: <Globe className="w-6 h-6 text-purple-300" />, label: "Timezone", value: "IST (GMT+5:30)" }
                    ].map((contact) => (
                      <div key={contact.label} className="flex items-center gap-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors duration-200">
                        <div className="bg-purple-600/20 p-4 rounded-xl">
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-lg">{contact.label}</div>
                          <div className="text-gray-400">{contact.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-slate-800/50 rounded-3xl p-10 border border-slate-700">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-6 py-4 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg placeholder:text-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-6 py-4 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg placeholder:text-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="w-full px-6 py-4 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-lg placeholder:text-gray-500"
                        placeholder="Tell me about your project, timeline, and how I can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-200 disabled:cursor-not-allowed disabled:bg-slate-600
                    ${isSubmitting
                          ? "bg-slate-600"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {status && (
                      <div className={`flex items-center gap-3 p-4 rounded-xl border ${status.includes("success")
                        ? "bg-green-500/10 text-green-300 border-green-500/20"
                        : "bg-purple-500/10 text-purple-300 border-purple-500/20"
                        }`}>
                        {status.includes("success") ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        <span className="font-medium">{status}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-900 border-t border-slate-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Bhadra Mohit
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                    Full Stack Developer passionate about creating exceptional digital experiences and solving complex problems through innovative technology solutions.
                  </p>
                </div>

                {/* Quick Links and Services would be here */}
              </div>
              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-400 mb-2">
                  &copy; {new Date().getFullYear()} Bhadra Mohit. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm">
                  Engineered with Precision under MBTech ✨
                </p>
              </div>
            </div>
          </footer>
        </div>
      </FakeErrorSplash>
    </>
  );
}

export default App;