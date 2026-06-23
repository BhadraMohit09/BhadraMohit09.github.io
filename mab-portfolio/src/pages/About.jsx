import { MapPin, Briefcase, GraduationCap, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  return (
    <>
      <SEOHead
        title="About Bhadra Mohit – Full Stack Developer"
        description="Learn about Bhadra Mohit – a Full Stack Developer from Jamnagar, Gujarat, India. Passionate about MERN, .NET, and AI/ML. Currently at ZennovaTech."
        keywords="About Bhadra Mohit, Full Stack Developer, ZennovaTech, Darshan University, Jamnagar"
        url="https://bhadramohit.vercel.app/about"
      />

      <section className="py-20 bg-slate-900 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A passionate developer bridging elegant code with real-world impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies and a keen interest in AI/ML. My journey in technology started with curiosity and has evolved into a professional pursuit of excellence.
                </p>
                <p>
                  With experience spanning the MERN stack, .NET, and Python-based ML solutions, I enjoy turning innovative ideas into elegant, scalable digital solutions that provide real value.
                </p>
                <p>
                  Currently working as an Associate Software Engineer at ZennovaTech, I contribute to enterprise-grade full-stack features while continuing to explore open-source projects and mentoring at Darshan University.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Projects Completed', color: 'text-purple-400' },
                  { value: '100+', label: 'Students Mentored', color: 'text-blue-400' },
                  { value: '500+', label: 'GitHub Commits', color: 'text-pink-400' },
                  { value: '3+', label: 'Years Experience', color: 'text-green-400' },
                ].map(({ value, label, color }) => (
                  <div key={label} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-colors duration-300">
                    <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
                    <div className="text-gray-400 font-medium text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/80 to-blue-600/80 rounded-2xl p-8 text-white shadow-2xl shadow-purple-500/20">
                <div className="space-y-4 mb-8">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Jamnagar, Gujarat, India' },
                    { icon: <Briefcase className="w-5 h-5" />, label: 'Role', value: 'Associate Software Engineer' },
                    { icon: <GraduationCap className="w-5 h-5" />, label: 'Education', value: 'B.Tech, Darshan University' },
                    { icon: <Globe className="w-5 h-5" />, label: 'Timezone', value: 'IST (GMT+5:30)' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="opacity-70">{icon}</span>
                      <span className="opacity-70 text-sm min-w-[80px]">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-semibold mb-4 text-xl">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', '.NET', 'Python', 'MongoDB', 'TypeScript', 'NextJS', 'SQL Server', 'AI/ML', 'AWS'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Open to work</div>
                    <div className="text-gray-400 text-xs">Freelance & full-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
