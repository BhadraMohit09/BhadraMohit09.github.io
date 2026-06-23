import { useState } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const projects = [
  {
    title: 'MAB Converter',
    description: 'Modern converter for number-system and unit conversions with keyboard-friendly interface, precision settings, and full accessibility support.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mab-converter-beta.vercel.app/',
    githubUrl: 'public',
    featured: true,
    status: 'Live',
  },
  {
    title: 'MAB Universal Converter',
    description: 'Single interface for converting units, formats, and encodings. Optimized for low-bandwidth environments with progressive enhancement.',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Vanilla JS', 'HTML5', 'CSS3', 'PWA'],
    liveUrl: 'https://mab-universal-converter-beta.netlify.app/',
    githubUrl: 'public',
    featured: true,
    status: 'Live',
  },
  {
    title: 'GST Calculator',
    description: 'A clean, fast GST calculation tool tailored for Indian businesses. Supports multiple tax slabs (5%, 12%, 18%, 28%) and both inclusive/exclusive calculation modes.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Vanilla JS', 'HTML5', 'CSS3', 'Cloudflare Pages'],
    liveUrl: 'https://gst-calculator-76b.pages.dev/',
    githubUrl: 'private',
    featured: true,
    status: 'Live',
  },
  {
    title: 'Finance Calculator',
    description: 'Comprehensive financial calculator covering EMI, SIP, compound interest, and loan amortization — built for clean, mobile-friendly UX and real-world financial planning.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Vercel', 'Tailwind CSS'],
    liveUrl: 'https://fin-calc-delta.vercel.app/',
    githubUrl: 'private',
    featured: true,
    status: 'Live',
  },
  {
    title: 'MAB Translator',
    description: 'Advanced translation application with real-time language detection, quick-copy functionality, and multiple download formats.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'i18n', 'REST API', 'Material-UI'],
    liveUrl: 'https://mab-translator-seven.vercel.app/',
    githubUrl: 'public',
    featured: false,
    status: 'Live',
  },
  {
    title: 'Crop Analysis ML Pipeline',
    description: 'Comprehensive machine learning pipeline for agricultural data analysis with Flask API, Docker deployment, and real-time predictions.',
    image: 'https://images.pexels.com/photos/1447238/pexels-photo-1447238.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Docker', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/BhadraMohit09/Crop_Analysis_with_Flask_API',
    featured: true,
    status: 'Open Source',
  },
  {
    title: 'AssessEdge360',
    description: 'Enterprise-grade placement examination platform with timed assessments, automated grading, comprehensive analytics, and real-time monitoring.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['MERN Stack', 'WebSockets', 'JWT', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: 'https://github.com/BhadraMohit09/AssessEdge360',
    featured: true,
    status: 'In Development',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, PWA support, and optimized performance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Tailwind CSS', 'Vite', 'PWA'],
    liveUrl: 'https://bhadramohit.vercel.app/',
    githubUrl: 'public',
    featured: false,
    status: 'Live',
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Live': return 'bg-green-500/10 text-green-400 border border-green-500/20';
    case 'In Development': return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    case 'Open Source': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    default: return 'bg-slate-700 text-gray-400';
  }
};

const handlePrivateRepo = () => {
  alert('🔒 This repository is private and not publicly available.');
};

const GitHubButton = ({ githubUrl }) => {
  if (githubUrl === 'private') {
    return (
      <button
        onClick={handlePrivateRepo}
        className="flex items-center gap-2 border border-slate-600 hover:border-amber-500/50 text-gray-400 hover:text-amber-400 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
      >
        <Lock className="w-4 h-4" /> Private Repo
      </button>
    );
  }
  if (githubUrl === 'public' || githubUrl === '#') {
    return null;
  }
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
    >
      <Github className="w-4 h-4" /> Source Code
    </a>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Live', 'Open Source', 'In Development'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.status === filter);

  return (
    <>
      <SEOHead
        title="Projects – Bhadra Mohit | Full Stack Developer"
        description="Explore projects by Bhadra Mohit: MAB Converter, GST Calculator, Finance Calculator, AssessEdge360, Crop Analysis ML Pipeline, and more."
        keywords="Bhadra Mohit projects, GST Calculator, Finance Calculator, MAB Converter, AssessEdge360, Crop Analysis, portfolio"
        url="https://bhadramohit.vercel.app/projects"
      />

      <section className="py-20 bg-slate-900 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating technical expertise and creative problem-solving.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === f
                    ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-gray-400 border-slate-700 hover:border-purple-500/50 hover:text-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden border border-slate-700 hover:border-purple-500/30 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-400 mb-5 leading-relaxed text-sm flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 bg-slate-700 text-gray-500 px-5 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" /> Coming Soon
                      </span>
                    )}
                    <GitHubButton githubUrl={project.githubUrl} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
