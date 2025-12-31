import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  ShieldAlert, 
  FileText, 
  Zap, 
  Settings, 
  Server 
} from 'lucide-react';
import content from '@/data/content.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  ShieldAlert,
  FileText,
  Zap,
  Settings,
  Server,
};

export const FeaturesSection = () => {
  const { features } = content;

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {features.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {features.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || MessageSquare;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 h-full hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
