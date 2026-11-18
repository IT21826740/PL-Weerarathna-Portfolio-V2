import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, Globe, Instagram, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Branding & Packaging',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b] border-t border-zinc-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            CONNECT & COLLABORATE
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Whether you require a corporate brand redesign, high-volume offset print supervision, vehicle fleet wrapping, or 3D visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-zinc-800/80 pb-4">
                Direct Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:plweerarathna41@gmail.com"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 transition-colors group"
                >
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      plweerarathna41@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+94756492993"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800 transition-colors group"
                >
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Direct Line & WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors font-mono">
                      +94 75 6492993
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">Studio Location</span>
                    <span className="text-sm font-semibold text-white">
                      Hikkaduwa, Southern Province, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                  Professional Networks
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook Profile"
                    className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Profile"
                    className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Behance Portfolio"
                    className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">
              Send a Project Brief or Inquiry
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Average response time within 24 hours. For urgent print machinery consultations, reach out via WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-zinc-950/70 border border-emerald-500/30 rounded-xl space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Transmitted</h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your project details have been received. PL Weerarathna will respond to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', service: 'Branding & Packaging', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ruwan Jayasuriya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ruwan@company.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Primary Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Branding & Packaging">Brand Identity & Packaging Dielines</option>
                    <option value="Print Production">Offset & Digital Commercial Print Production</option>
                    <option value="Vehicle Wraps">Fleet & Vehicle Wrap Artworks</option>
                    <option value="3D Visualization">3D Architectural & AutoCAD Visualization</option>
                    <option value="Video Editing">Promotional Video & Motion Graphics</option>
                    <option value="General Inquiry">General Creative Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Scope & Specifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your design specifications, dimensions, print quantities, or brand deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500 leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Project Brief
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
