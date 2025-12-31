import { motion } from 'framer-motion';
import { PhoneOff, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import content from '@/data/content.json';

const stepIcons = [PhoneOff, MessageSquare, Zap];

export const HowItWorksSection = () => {
  const { howItWorks } = content;

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === howItWorks.steps.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="p-8 rounded-2xl bg-card border border-border shadow-lg hover-lift text-center">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent mx-auto mb-6 flex items-center justify-center shadow-glow">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-accent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-lg">
            <h4 className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wide">
              Output Delivered via WebSocket
            </h4>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { icon: '📝', label: 'Summary', desc: 'Call transcript & intent' },
                { icon: '⚠️', label: 'Warnings', desc: 'Fraud signals & reason codes' },
                { icon: '✓', label: 'Actions', desc: 'Recommended next steps' },
                { icon: '{ }', label: 'JSON', desc: 'Structured analytics' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h5 className="font-semibold text-foreground text-sm mb-1">{item.label}</h5>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
