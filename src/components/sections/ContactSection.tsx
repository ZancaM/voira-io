import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import content from '@/data/content.json';

export const ContactSection = () => {
  const { contact } = content;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {contact.formFields.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    {contact.formFields.company}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    {contact.formFields.role}
                  </label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Product Manager"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {contact.formFields.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@acme.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-foreground mb-2">
                    Segment
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select segment</option>
                    {contact.formFields.segment.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-foreground mb-2">
                    {contact.formFields.volume}
                  </label>
                  <Input
                    id="volume"
                    name="volume"
                    placeholder="e.g., 100k/day"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                  {contact.formFields.notes}
                </label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Tell us about your use case..."
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Calendar Placeholder */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg flex-grow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Schedule a call</h3>
                  <p className="text-sm text-muted-foreground">30-minute intro call</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Calendar booking widget
                </p>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                    <div key={day} className="text-xs text-muted-foreground">{day}</div>
                  ))}
                  {[1, 2, 3, 4, 5, 8, 9, 10, 11, 12].map((day) => (
                    <button
                      key={day}
                      className="p-2 text-sm rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Select a date to see available times
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us directly</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
