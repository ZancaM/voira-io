import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, BarChart3 } from 'lucide-react';
import content from '@/data/content.json';

export const UseCasesSection = () => {
  const { useCases } = content;
  const [activeTab, setActiveTab] = useState(useCases.tabs[0].id);
  const activeCase = useCases.tabs.find(t => t.id === activeTab) || useCases.tabs[0];

  return (
    <section id="use-cases" aria-label="Voira Use Cases for Telcos and Enterprises" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {useCases.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {useCases.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {useCases.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground shadow-glow'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Description */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {activeCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeCase.description}
                </p>

                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Outcomes
                </h4>
                <ul className="space-y-3">
                  {activeCase.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-success text-xs">✓</span>
                      </div>
                      <span className="text-foreground text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KPIs */}
              <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-lg">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  Key Metrics
                </h4>
                <div className="space-y-4">
                  {activeCase.kpis.map((kpi, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-background border border-border flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center">
                        <span className="text-accent font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium text-foreground">{kpi}</span>
                    </div>
                  ))}
                </div>

                {/* Visual placeholder */}
                <div className="mt-8 p-6 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-accent/20 rounded-t transition-all duration-500 hover:bg-accent/40"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Sample performance visualization
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
