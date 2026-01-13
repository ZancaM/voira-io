import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

export const HeroSection = () => {
  const { hero } = content;

  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-sm font-medium text-foreground">Real-Time AI · Zero False Positives</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative z-[60]"
          >
            <Button variant="hero" onClick={handleScrollToSection('contact')} className="group">
              {hero.primaryCta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="hero-secondary" onClick={handleScrollToSection('how-it-works')} className="group">
              <Play className="mr-2" size={18} />
              {hero.secondaryCta}
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {hero.trustStrip.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium text-muted-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
            {/* Mockup Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background text-xs text-muted-foreground">
                  voira.io/dashboard
                </div>
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="p-6 sm:p-8 bg-gradient-card">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Call Summary Card */}
                <div className="md:col-span-2 p-5 rounded-xl bg-background border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center">
                      <span className="text-accent text-lg">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Summary</h4>
                      <p className="text-xs text-muted-foreground">2 seconds ago</p>
                    </div>
                    <div className="ml-auto px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium">
                      ⚠️ Potential Scam
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Caller claimed to be from "Technical Support" and requested remote access to the device. Used urgency tactics and mentioned non-existent viruses.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">Impersonation</span>
                    <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">Urgency</span>
                    <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">87% confidence</span>
                  </div>
                </div>

                {/* Actions Card */}
                <div className="p-5 rounded-xl bg-background border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-4">Recommended Actions</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs">✕</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Do not call back this number</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-warning text-xs">!</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Report to fraud prevention</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-success text-xs">✓</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Number added to watchlist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
