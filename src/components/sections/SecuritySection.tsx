import { motion } from 'framer-motion';
import { Shield, Eye, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Eye,
  FileCheck,
};

export const SecuritySection = () => {
  const { security } = content;

  return (
    <section id="security" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {security.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {security.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {security.points.map((point, index) => {
            const Icon = iconMap[point.icon] || Shield;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-2xl bg-card border border-border h-full text-center hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" asChild>
              <a href="/security" className="group">
                {security.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${security.contactEmail}`}>
                Contact security team
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
