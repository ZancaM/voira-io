import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Eye, Server, AlertTriangle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const SecurityPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Our security team will respond within 48 hours.",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Security & Privacy | Voira — The New Voice Era</title>
        <meta name="description" content="Enterprise-grade security and privacy for Voira AI call assistant. Privacy-first architecture, data encryption, compliance standards, and responsible disclosure. Zero data retention on calls." />
        <meta name="keywords" content="Voira security, AI call privacy, enterprise security, data encryption, GDPR compliance, SOC 2, privacy-first AI, secure voice AI, fraud detection security, telco security" />
        <link rel="canonical" href="https://voira.io/security" />

        {/* Open Graph */}
        <meta property="og:title" content="Security & Privacy | Voira — The New Voice Era" />
        <meta property="og:description" content="Enterprise-grade security and privacy for Voira AI call assistant. Privacy-first architecture with zero data retention." />
        <meta property="og:url" content="https://voira.io/security" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Security & Privacy | Voira — The New Voice Era" />
        <meta name="twitter:description" content="Enterprise-grade security and privacy for Voira AI. Privacy-first architecture with zero data retention." />
      </Helmet>

      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/20 mb-8">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Enterprise Security</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Security & Privacy
              </h1>
              <p className="text-lg text-muted-foreground">
                Built with privacy at the core. Voira is designed to protect user data while delivering actionable call intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-12"
            >
              Our security principles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Lock,
                  title: "GDPR-Ready Posture",
                  description: "Full compliance with GDPR requirements including data subject rights, lawful processing, and cross-border transfer safeguards."
                },
                {
                  icon: Eye,
                  title: "Data Minimization",
                  description: "We collect only what's necessary for call analysis. No unnecessary data storage, with configurable retention policies."
                },
                {
                  icon: Server,
                  title: "Infrastructure Security",
                  description: "Enterprise-grade encryption at rest and in transit. SOC 2 Type II aligned security controls and monitoring."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Clarification */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Analytics, Not Blocking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Voira provides call analytics, summaries, and fraud intelligence — it does <strong className="text-foreground">not block calls</strong>. 
                      We deliver insights and recommended actions, empowering users and operators to make informed decisions 
                      while respecting communication rights.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance & Documentation */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-4"
            >
              Compliance documentation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Enterprise customers can request the following documentation
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Data Processing Agreement", desc: "DPA template available" },
                { title: "DPIA Support", desc: "Privacy impact assessments" },
                { title: "Security Questionnaire", desc: "Standard responses ready" },
                { title: "Pen Test Reports", desc: "Annual third-party audits" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border text-center hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-soft mx-auto flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto text-center"
            >
              <Mail className="w-12 h-12 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl font-bold mb-4">Contact our security team</h2>
              <p className="text-primary-foreground/70 mb-8">
                Questions about security, compliance, or need documentation? Reach out to our security team.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" variant="accent">
                  Send inquiry
                </Button>
              </form>
              
              <p className="text-sm text-primary-foreground/50 mt-4">
                Or email directly: security@voira.io
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
