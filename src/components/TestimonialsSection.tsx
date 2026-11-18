import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            CLIENT ENDORSEMENTS & VERIFIED REVIEWS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Client Feedback & Partnerships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Trusted by manufacturing executives, packaging brand managers, and advertising directors across Sri Lanka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Project Context */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-zinc-400">{t.role} · <span className="text-zinc-300">{t.company}</span></p>
                <div className="mt-2 text-[11px] font-mono text-amber-400/90">
                  Delivered: {t.projectScope}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
