import { Zap, GraduationCap, Code, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'ZennovaTech',
    period: 'Jan 2026 – Present',
    isNew: true,
    description:
      'Building and maintaining enterprise-grade full stack features for production systems using React, .NET, and PostgreSQL. Contributing to API design, database schema planning, and frontend component architecture within an agile delivery team.',
    icon: <Zap className="w-6 h-6" />,
    skills: ['React', '.NET Core', 'PostgreSQL', 'TypeScript', 'REST APIs', 'Agile'],
  },
  {
    title: 'Teaching Assistant',
    company: 'Darshan University',
    period: '2023 – Present',
    isNew: false,
    description:
      'Assisted in laboratory sessions for Web Technology and Data Structures courses. Mentored 100+ students in practical implementations and guided them through complex programming concepts.',
    icon: <GraduationCap className="w-6 h-6" />,
    skills: ['JavaScript', 'Data Structures', 'Web Development', 'Mentoring'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: '2022 – 2023',
    isNew: false,
    description:
      'Developed responsive web applications and integrated backend systems with client APIs. Successfully delivered 15+ projects ranging from e-commerce platforms to data visualization dashboards.',
    icon: <Code className="w-6 h-6" />,
    skills: ['MERN Stack', 'API Integration', 'UI/UX Design', 'Client Management'],
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2022 – Present',
    isNew: false,
    description:
      'Maintained multiple utility repositories and contributed to various open-source projects. Accumulated 500+ commits across different projects and helped improve developer tools.',
    icon: <Github className="w-6 h-6" />,
    skills: ['Git', 'Open Source', 'Code Review', 'Documentation'],
  },
];

const Experience = () => {
  return (
    <>
      <SEOHead
        title="Experience – Bhadra Mohit | Full Stack Developer"
        description="Bhadra Mohit's professional experience: Associate Software Engineer at ZennovaTech, Teaching Assistant at Darshan University, Freelance Full Stack Developer, and Open Source Contributor."
        keywords="Bhadra Mohit experience, ZennovaTech, Darshan University, freelance developer, open source"
        url="https://bhadramohit.vercel.app/experience"
      />

      <section className="py-20 bg-slate-900 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              My professional journey, key contributions, and the impact I've made in various roles.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className={`relative rounded-2xl p-8 transition-all duration-300 border group ${
                    exp.isNew
                      ? 'bg-purple-600/5 border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10'
                      : 'bg-slate-800/50 border-slate-700 hover:shadow-lg hover:shadow-purple-500/10'
                  } md:ml-20`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[3.35rem] top-8 w-6 h-6 rounded-full border-2 flex items-center justify-center hidden md:flex ${
                    exp.isNew
                      ? 'bg-purple-600 border-purple-400'
                      : 'bg-slate-800 border-slate-600 group-hover:border-purple-500'
                  } transition-colors duration-300`}>
                    <div className={`w-2 h-2 rounded-full ${exp.isNew ? 'bg-purple-200' : 'bg-slate-500 group-hover:bg-purple-400'} transition-colors duration-300`} />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className={`p-3.5 rounded-xl flex-shrink-0 ${
                      exp.isNew
                        ? 'bg-purple-600/20 text-purple-300'
                        : 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 text-purple-300'
                    }`}>
                      {exp.icon}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 gap-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                          {exp.isNew && (
                            <span className="text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <p className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                          <span className="text-gray-400 text-sm bg-slate-700/80 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-5">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-600 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
