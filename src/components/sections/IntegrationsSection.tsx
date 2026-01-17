import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

export const IntegrationsSection = () => {
  const { integrations } = content;
  const [copied, setCopied] = useState(false);

  const codeString = JSON.stringify(integrations.codeExample, null, 2);

  // Compact version for mobile - shortened keys and values
  const compactCodeExample = {
    event: "call_complete",
    call_id: "call_abc123",
    summary: "Caller claimed to be from bank support...",
    fraud_signals: [{
      type: "impersonation",
      confidence: 0.92
    }],
    recommended_actions: [
      "Do not call back",
      "Report to bank",
      "Block caller"
    ],
    metadata: {
      duration_ms: 45000,
      latency_ms: 1847
    }
  };

  const compactCodeString = JSON.stringify(compactCodeExample, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integrations" aria-label="Voira WebSocket API Integration" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {integrations.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              {integrations.subtitle}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {integrations.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
              <Button variant="accent" size="sm" asChild>
                <a href="#contact" className="group inline-flex items-center">
                  {integrations.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </a>
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
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border max-w-full">
              {/* Header */}
              <div className="flex items-center justify-between px-2.5 sm:px-4 py-2 sm:py-3 bg-primary">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-foreground/20" />
                  </div>
                  <span className="text-primary-foreground/60 text-[9px] sm:text-xs ml-1 sm:ml-2">
                    Call Back Event
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 sm:p-1.5 rounded-md hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                  ) : (
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/60" />
                  )}
                </button>
              </div>

              {/* Code */}
              <div className="bg-primary/95 p-2 sm:p-5 overflow-auto scrollbar-thin scrollbar-thumb-primary-foreground/20 scrollbar-track-transparent max-w-full max-h-[200px] sm:max-h-[350px] md:max-h-none">
                <pre className="text-[8px] sm:text-xs md:text-sm text-primary-foreground/90 font-mono leading-tight sm:leading-relaxed whitespace-pre max-w-full">
                  <code className="block sm:hidden">{compactCodeString}</code>
                  <code className="hidden sm:block">{codeString}</code>
                </pre>
              </div>
            </div>

            {/* WebSocket Flow */}
            <div className="mt-3 sm:mt-6 p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center justify-between text-[10px] sm:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-muted-foreground">WebSocket Connected</span>
                </div>
                <span className="text-[9px] sm:text-xs text-muted-foreground">
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
