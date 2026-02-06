import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Sparkles, ArrowRight, Music, Mic, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { EventsCarousel } from '@/components/EventsCarousel';

const Landing = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Discover Events',
      description: 'Find concerts, meetups, art shows, and community gatherings happening near you.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect with like-minded people and grow your network through shared experiences.'
    },
    {
      icon: Sparkles,
      title: 'Create & Host',
      description: 'Launch your own events with powerful tools for ticketing, promotion, and management.'
    }
  ];

  const eventTypes = [
    { icon: Music, label: 'Concerts' },
    { icon: Mic, label: 'Tech Meetups' },
    { icon: PartyPopper, label: 'Community' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Onstage - Discover Live Events"
        description="Discover and create amazing live events. Find concerts, tech meetups, art shows, and community gatherings near you."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-onstage-coral/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-onstage-coral/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-onstage-gold/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <ScrollAnimationWrapper animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-onstage-charcoal text-white px-4 py-2 mb-8 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 bg-onstage-coral rounded-full animate-pulse" />
                Live Events Platform
              </div>
            </ScrollAnimationWrapper>
            
            {/* Main Headline */}
            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-[0.9]">
                Experience
                <span className="block text-gradient-onstage">Live Moments</span>
              </h1>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Discover unforgettable experiences. From intimate concerts to massive festivals, 
                from tech meetups to art exhibitions — find your next adventure.
              </p>
            </ScrollAnimationWrapper>
            
            {/* CTA Buttons */}
            <ScrollAnimationWrapper animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-onstage-coral hover:bg-onstage-coral/90 text-white px-8 py-6 text-base font-semibold"
                >
                  <Link to="/discover">
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-accent px-8 py-6 text-base font-semibold"
                >
                  <Link to="/create-event">
                    Host an Event
                  </Link>
                </Button>
              </div>
            </ScrollAnimationWrapper>
            
            {/* Event Type Pills */}
            <ScrollAnimationWrapper animation="fade-up" delay={400}>
              <div className="flex flex-wrap justify-center gap-3">
                {eventTypes.map((type) => (
                  <div 
                    key={type.label}
                    className="flex items-center gap-2 bg-card border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    <type.icon className="h-4 w-4 text-onstage-coral" />
                    {type.label}
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Check out the latest events happening near you.
            </p>
          </ScrollAnimationWrapper>
        </div>
        <EventsCarousel />
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need for live events
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're discovering your next experience or creating one, Onstage has you covered.
            </p>
          </ScrollAnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollAnimationWrapper 
                key={feature.title}
                animation="fade-up" 
                delay={index * 150}
              >
                <div 
                  className="bg-card border border-border p-8 hover:border-onstage-coral/50 transition-colors group h-full"
                >
                  <div className="w-12 h-12 bg-onstage-coral/10 flex items-center justify-center mb-6 group-hover:bg-onstage-coral/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-onstage-coral" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-onstage-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Live Events' },
              { value: '10K+', label: 'Happy Attendees' },
              { value: '50+', label: 'Cities Covered' },
            ].map((stat, index) => (
              <ScrollAnimationWrapper key={stat.label} animation="scale" delay={index * 100}>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-onstage-coral mb-2">{stat.value}</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to go <span className="text-gradient-onstage">Onstage</span>?
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-up" delay={100}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Join thousands of event enthusiasts. Discover, create, and experience live moments that matter.
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <Button 
              asChild 
              size="lg" 
              className="bg-onstage-coral hover:bg-onstage-coral/90 text-white px-10 py-6 text-base font-semibold"
            >
              <Link to="/discover">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;
