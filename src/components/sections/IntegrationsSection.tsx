import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

export const IntegrationsSection = () => {
  const { integrations } = content;
  const [copied, setCopied] = useState(false);

  const codeString = JSON.stringify(integrations.codeExample, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integrations" aria-label="Voira WebSocket API Integration" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {integrations.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              {integrations.subtitle}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {integrations.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="accent" asChild className="w-full sm:w-auto">
                <a href="#contact" className="group">
                  {integrations.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href="/security">View documentation</a>
              </Button>
            </div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border">
              {/* Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-primary">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                  </div>
                  <span className="text-primary-foreground/60 text-[10px] sm:text-xs ml-1.5 sm:ml-2">
                    Call Back Event
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 sm:p-1.5 rounded-md hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground/60" />
                  )}
                </button>
              </div>

              {/* Code */}
              <div className="bg-primary/95 p-3 sm:p-5 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-foreground/20 scrollbar-track-transparent">
                <pre className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/90 font-mono leading-relaxed whitespace-pre">
                  <code>{codeString}</code>
                </pre>
              </div>
            </div>

            {/* WebSocket Flow */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-muted-foreground">WebSocket Connected</span>
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  Latency: &lt;2s (p95)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
