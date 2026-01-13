import { motion } from 'framer-motion';
import content from '@/data/content.json';

export const PerformanceSection = () => {
  const { performance } = content;

  return (
    <section id="performance" aria-label="Voira Performance Metrics and SLA" className="py-24 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {performance.title}
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            {performance.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {performance.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-foreground/70 font-medium">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-primary-foreground/50 mt-12 max-w-xl mx-auto"
        >
          {performance.disclaimer}
        </motion.p>
      </div>
    </section>
  );
};
