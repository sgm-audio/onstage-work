import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, Cpu, Trophy, Palette, UtensilsCrossed, Handshake, GraduationCap, Users, PartyPopper, MoreHorizontal } from 'lucide-react';
import { FeaturedEvents } from './FeaturedEvents';

interface Event {
  id: string;
  title: string;
  background_image_url: string;
  address: string;
  date: string;
  time: string;
  category: string | null;
}

const categories = [
  { value: 'all', label: 'All Events', icon: null },
  { value: 'music', label: 'Music', icon: Music },
  { value: 'tech', label: 'Tech', icon: Cpu },
  { value: 'sports', label: 'Sports', icon: Trophy },
  { value: 'art', label: 'Art', icon: Palette },
  { value: 'food', label: 'Food', icon: UtensilsCrossed },
  { value: 'networking', label: 'Networking', icon: Handshake },
  { value: 'education', label: 'Education', icon: GraduationCap },
  { value: 'community', label: 'Community', icon: Users },
  { value: 'nightlife', label: 'Nightlife', icon: PartyPopper },
  { value: 'other', label: 'Other', icon: MoreHorizontal },
];

export const EventsCarousel = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('id, title, background_image_url, address, date, time, category')
        .order('target_date', { ascending: false })
        .limit(10);

      if (data && !error) {
        setEvents(data);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  // Duplicate the events array exactly twice for seamless loop
  const multipliedEvents = [...filteredEvents, ...filteredEvents];

  return (
    <div className="w-full overflow-hidden py-12 pb-20 md:pb-24 bg-background">
      {/* Featured Events Section */}
      <FeaturedEvents />

      {/* Category Filter Pills */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border ${
                  isSelected
                    ? 'bg-onstage-coral text-white border-onstage-coral'
                    : 'bg-card text-muted-foreground border-border hover:border-onstage-coral/50 hover:text-foreground'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {filteredEvents.length > 0 ? (
          <div className="flex gap-px w-max animate-scroll-left-fast will-change-[transform]">
            {multipliedEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/event/${event.id}`);
                }}
                className="relative flex-shrink-0 w-[65vw] md:w-[calc(40vw-0.5px)] aspect-[4/5] max-h-[800px] cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <img
                  src={event.background_image_url}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                
                <div className="absolute top-4 left-4 flex flex-col gap-0">
                  <div className="bg-background border border-border px-3 h-[23px] flex items-center">
                    <div className="text-[11px] font-medium uppercase leading-none text-foreground">{event.date}</div>
                  </div>
                  <div className="bg-background border border-t-0 border-border px-3 h-[23px] flex items-center">
                    <div className="text-[11px] font-medium uppercase leading-none text-foreground">{event.time}</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-medium mb-1 tracking-tight">{event.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{event.address}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            No events found in this category.
          </div>
        )}
      </div>

      {/* View All Events Button */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <Button 
          asChild 
          size="lg" 
          className="bg-onstage-coral hover:bg-onstage-coral/90 text-white px-8 py-6 text-base font-semibold"
        >
          <Link to="/discover">
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
