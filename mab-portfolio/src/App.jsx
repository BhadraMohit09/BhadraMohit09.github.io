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
        <div className="bg-slate-50 min-h-screen relative p-1">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MBTech
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navigationItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${activeSection === id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-200 bg-white">
                  {navigationItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${activeSection === id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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
              className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 z-40"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Hero Section */}
          <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQG9bDHvwq3WBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731600725551?e=1758153600&v=beta&t=OqdkYy_7PBPhmZYE-F6jCiy7h2-03yPkV3RS3pLx0P4"
                        alt="Bhadra Mohit"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      Seeking the Eternal
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Bhadra Mohit
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">Full Stack Developer</p>
                <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Crafting exceptional digital experiences with MERN stack, .NET, and AI/ML technologies.
                  Passionate about building scalable, user-centric applications that make a difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Let's Work Together
                  </button>
                  <button
                    onClick={() => scrollTo('projects')}
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View My Work
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1ih0_4pqk2QB5X1moVTTWjUB0TJoHo_mM/view?usp=sharing"
                    className="border-2 border-purple-300 hover:border-purple-600 text-purple-700 hover:text-purple-600 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>

                <div className="flex justify-center space-x-6">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/BhadraMohit09", label: "GitHub", color: "hover:text-gray-900" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/bhadramohit27", label: "LinkedIn", color: "hover:text-blue-600" },
                    { icon: <Mail className="w-6 h-6" />, href: "mailto:bhadramohit.cloud@gmail.com", label: "Email", color: "hover:text-red-600" },
                    { icon: <Phone className="w-6 h-6" />, href: "tel:8780570242", label: "Phone", color: "hover:text-green-600" }
                  ].map(({ icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-600 ${color}`}
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
          <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      I'm a passionate full-stack developer with a strong foundation in modern web technologies
                      and a keen interest in artificial intelligence and machine learning applications. My journey
                      in technology started with curiosity and has evolved into a professional pursuit of excellence.
                    </p>
                    <p>
                      With extensive experience spanning the MERN stack, .NET ecosystem, and Python-based ML solutions,
                      I enjoy tackling complex problems and turning innovative ideas into elegant, scalable digital solutions
                      that provide real value to users and businesses.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source
                      projects, sharing knowledge through teaching and mentoring, or working on personal projects that
                      challenge my skills and creativity.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                      <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                      <div className="text-gray-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200">
                      <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                      <div className="text-gray-600 font-medium">Students Mentored</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
                      <div className="text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200">
                      <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                      <div className="text-gray-600 font-medium">GitHub Commits</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-blue-200" />
                        <span className="text-lg">Gujarat, India</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-blue-200" />
                        <span className="text-lg">Available for new opportunities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-blue-200" />
                        <span className="text-lg">Teaching Assistant at Darshan University</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-blue-200" />
                        <span className="text-lg">Freelance Full Stack Developer</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20">
                      <h3 className="font-semibold mb-4 text-xl">Core Technologies</h3>
                      <div className="flex flex-wrap gap-3">
                        {["React", "Node.js", ".NET", "Python", "MongoDB", "TypeScript"].map(tech => (
                          <span key={tech} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A comprehensive toolkit built through hands-on experience, continuous learning, and real-world project implementation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
                      </div>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Technologies</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code",
                    "Figma", "Adobe XD", "Linux", "Windows", "REST APIs", "GraphQL",
                    "JWT", "OAuth", "Redis", "PostgreSQL", "MySQL", "Firebase"
                  ].map(tech => (
                    <span key={tech} className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A showcase of my recent work, from web applications to machine learning solutions,
                  demonstrating technical expertise and creative problem-solving
                </p>
              </div>

              {/* All Projects Grid */}
              <div className="grid lg:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {project.featured && (
                          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </div>
                        )}
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${project.status === "Live"
                            ? "bg-green-400 text-green-900"
                            : project.status === "In Development"
                              ? "bg-blue-400 text-blue-900"
                              : "bg-purple-400 text-purple-900"
                            }`}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Experience Section */}
          <section id="experience" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  My professional journey, key contributions, and the impact I've made in various roles
                </p>
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={exp.title} className="bg-white rounded-2xl shadow-sm p-10 hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-8">
                      <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                        {exp.icon}
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                            <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                          </div>
                          <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full text-sm lg:text-base">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map(skill => (
                            <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
          <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                  I'm always excited to take on new challenges and collaborate on innovative solutions.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      I'm always excited to take on new challenges and collaborate on innovative projects.
                      Whether you need a full-stack developer, technical consultant, or someone to bring
                      your digital vision to life, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: <Mail className="w-6 h-6" />, label: "Email", value: "bhadramohit.cloud@example.com", color: "bg-red-100" },
                      { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 87805 70242", color: "bg-green-100" },
                      { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Gujarat, India", color: "bg-blue-100" },
                      { icon: <Globe className="w-6 h-6" />, label: "Timezone", value: "GMT+5:30 (IST)", color: "bg-purple-100" }
                    ].map((contact) => (
                      <div key={contact.label} className="flex items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <div className={`${contact.color} p-4 rounded-xl`}>
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">{contact.label}</div>
                          <div className="text-gray-600">{contact.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-6 font-medium">Connect with me on social media</p>
                    <div className="flex space-x-4">
                      {[
                        { icon: <Github className="w-6 h-6" />, href: "https://github.com/BhadraMohit09", label: "GitHub", color: "hover:bg-gray-100" },
                        { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/bhadramohit27", label: "LinkedIn", color: "hover:bg-blue-100" },
                        { icon: <Mail className="w-6 h-6" />, href: "mailto:bhadramohit.cloud@gmail.com", label: "Email", color: "hover:bg-red-100" }
                      ].map(({ icon, href, label, color }) => (
                        <a
                          key={label}
                          href={href}
                          className={`p-4 bg-gray-50 ${color} rounded-xl transition-all duration-200 transform hover:scale-105`}
                          aria-label={label}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-100">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-lg"
                        placeholder="Tell me about your project, timeline, and how I can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        } text-white`}
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
                      <div className={`flex items-center gap-3 p-4 rounded-xl ${status.includes("success") ? "bg-green-100 text-green-800 border border-green-200" : "bg-blue-100 text-blue-800 border border-blue-200"
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
          <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Bhadra Mohit
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                    Full Stack Developer passionate about creating exceptional digital experiences
                    and solving complex problems through innovative technology solutions.
                  </p>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
                      { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
                      { icon: <Mail className="w-6 h-6" />, href: "#", label: "Email" }
                    ].map(({ icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 transform hover:scale-110"
                        aria-label={label}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                  <ul className="space-y-2">
                    {navigationItems.map(({ id, label }) => (
                      <li key={id}>
                        <button
                          onClick={() => scrollTo(id)}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Services</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>API Development</li>
                    <li>UI/UX Design</li>
                    <li>Technical Consulting</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-400 mb-2">
                  &copy; {new Date().getFullYear()} Bhadra Mohit. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm">
                  Built with React, Tailwind CSS, and lots of ☕
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