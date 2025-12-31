import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import content from '@/data/content.json';

export const SocialProofSection = () => {
  const { socialProof } = content;

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            {socialProof.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {socialProof.logos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-secondary/50 border border-border text-muted-foreground font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialProof.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border h-full flex flex-col hover-lift">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </p>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
