import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending message...');

    try {
      const res = await fetch('https://mab-contact-form-beta.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setForm({ name: '', email: '', message: '' });
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
    setTimeout(() => setStatus(''), 5000);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-purple-300" />, label: 'Email', value: 'bhadramohit.cloud@gmail.com', href: 'mailto:bhadramohit.cloud@gmail.com' },
    { icon: <Phone className="w-5 h-5 text-purple-300" />, label: 'Phone', value: '+91 87805 70242', href: 'tel:+918780570242' },
    { icon: <MapPin className="w-5 h-5 text-purple-300" />, label: 'Location', value: 'Jamnagar, Gujarat', href: null },
    { icon: <Globe className="w-5 h-5 text-purple-300" />, label: 'Timezone', value: 'IST (GMT+5:30)', href: null },
  ];

  return (
    <>
      <SEOHead
        title="Contact – Hire Bhadra Mohit | Full Stack Developer"
        description="Get in touch with Bhadra Mohit for freelance projects, collaboration, or full-time opportunities. Based in Jamnagar, Gujarat, India (IST)."
        keywords="Contact Bhadra Mohit, hire full stack developer, freelance React developer, bhadramohit.cloud@gmail.com"
        url="https://bhadramohit.vercel.app/contact"
      />

      <section className="py-20 bg-slate-900 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to take on new challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you need a full-stack developer, technical consultant, or someone to bring your digital vision to life, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center gap-5 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-purple-500/30 transition-all duration-200 group"
                  >
                    <div className="bg-purple-600/15 p-3 rounded-xl flex-shrink-0 group-hover:bg-purple-600/25 transition-colors duration-200">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{contact.label}</div>
                      {contact.href ? (
                        <a href={contact.href} className="text-gray-400 text-sm hover:text-purple-300 transition-colors duration-200">
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-400 text-sm">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-semibold">Currently Available</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm open to freelance projects, part-time contracts, and full-time opportunities. Typical response time: within 24 hours.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-slate-700 text-gray-200 border border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none placeholder:text-gray-500"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed ${
                    isSubmitting
                      ? 'bg-slate-600'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-purple-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl border ${
                      status.includes('success')
                        ? 'bg-green-500/10 text-green-300 border-green-500/20'
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                    }`}
                  >
                    {status.includes('success')
                      ? <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      : <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    }
                    <span className="font-medium text-sm">{status}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
