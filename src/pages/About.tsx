import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="About | Onstage"
        description="Learn about Onstage's mission to connect people through live events and meet the creator behind the platform."
        keywords="about onstage, onstage mission, Liam Martin, event platform, live events"
      />
      
      <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
        <Navbar />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              Our Mission
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              Connecting people through the magic of live experiences
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div 
              className="grid md:grid-cols-2 gap-12 items-center animate-fade-in"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Why Onstage?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In a world increasingly connected digitally, we believe there's something irreplaceable 
                    about gathering together in person. The energy of a live concert, the spark of ideas 
                    at a tech meetup, the warmth of community events—these moments create memories that last.
                  </p>
                  <p>
                    Onstage was born from a simple idea: make it effortless for anyone to discover amazing 
                    local events and equally easy for creators to share their gatherings with the world.
                  </p>
                  <p>
                    We're building the platform we wished existed—one that celebrates live experiences, 
                    supports event creators, and brings communities closer together.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-onstage-coral/20 to-onstage-gold/20 rounded-[40px] flex items-center justify-center">
                  <div className="text-6xl md:text-8xl">🎭</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-2xl md:text-3xl font-medium mb-12 text-center animate-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  emoji: '🌍',
                  title: 'Community First',
                  description: 'Every feature we build starts with one question: does this bring people together?'
                },
                {
                  emoji: '✨',
                  title: 'Simplicity',
                  description: 'Creating and discovering events should be joyful, not complicated.'
                },
                {
                  emoji: '🎯',
                  title: 'Accessibility',
                  description: 'Great events happen everywhere. We\'re committed to showcasing them all.'
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center p-6 border border-border hover:border-onstage-coral/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-onstage-charcoal text-white">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-2xl md:text-3xl font-medium mb-12 text-center animate-fade-in"
              style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
            >
              Meet the Creator
            </h2>
            <div 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in"
              style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
            >
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-onstage-coral">
                <AvatarImage src="https://unavatar.io/liammartin" alt="Liam Martin" />
                <AvatarFallback className="text-3xl bg-onstage-coral text-white">LM</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-medium mb-2">Liam Martin</h3>
                <p className="text-onstage-coral mb-4">Founder & Creator</p>
                <p className="text-white/70 mb-6">
                  Liam is a passionate technologist and community builder who believes in the power of 
                  bringing people together. After years of struggling to find local events and watching 
                  amazing community gatherings go unnoticed, he set out to create Onstage—a platform that 
                  makes live experiences accessible to everyone.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://twitter.com/liammartin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-onstage-coral hover:border-onstage-coral transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/liammartin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-onstage-coral hover:border-onstage-coral transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-2xl mx-auto">
            <h2 
              className="text-2xl md:text-3xl font-medium mb-4 text-center animate-fade-in"
              style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
            >
              Get in Touch
            </h2>
            <p 
              className="text-muted-foreground text-center mb-8 animate-fade-in"
              style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
            >
              Have questions, feedback, or partnership ideas? We'd love to hear from you.
            </p>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border"
                    maxLength={255}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[150px] resize-none"
                  maxLength={1000}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-onstage-coral hover:bg-onstage-coral/90 text-white py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div 
            className="max-w-2xl mx-auto text-center animate-fade-in"
            style={{ animationDelay: '1.4s', animationFillMode: 'both' }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Ready to Go Onstage?</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to discover your next favorite event or share your own with the world, 
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/discover"
                className="px-8 py-3 bg-onstage-coral text-white font-medium hover:bg-onstage-coral/90 transition-colors"
              >
                Discover Events
              </a>
              <a 
                href="/create-event"
                className="px-8 py-3 border border-border hover:bg-secondary transition-colors font-medium"
              >
                Create an Event
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
