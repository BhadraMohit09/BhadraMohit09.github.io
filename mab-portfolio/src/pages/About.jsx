import { motion } from 'framer-motion';
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

      <section className="py-16 md:py-20 bg-slate-900 min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header animated */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">About Me</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A passionate developer bridging elegant code with real-world impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column animated from left */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
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
                ].map(({ value, label, color }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
                    <div className="text-gray-400 font-medium text-sm">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column animated from right */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600/80 to-blue-600/80 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-purple-500/20 border border-white/20">
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
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-bold mb-4 text-xl tracking-tight">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', '.NET', 'Python', 'MongoDB', 'TypeScript', 'NextJS', 'SQL Server', 'AI/ML', 'AWS'].map((tech, tIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + tIdx * 0.05 }}
                        className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-200 shadow-sm hover:scale-105"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-slate-900 border border-purple-500/30 rounded-2xl p-4 shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Open to work</div>
                    <div className="text-gray-400 text-xs">Freelance & full-time</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
