import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Star, Calendar, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  background_image_url: string;
  address: string;
  date: string;
  time: string;
  category: string | null;
}

export const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      // Get the 3 most recent upcoming events as "featured"
      const { data, error } = await supabase
        .from('events')
        .select('id, title, background_image_url, address, date, time, category')
        .gte('target_date', new Date().toISOString())
        .order('target_date', { ascending: true })
        .limit(3);

      if (data && !error) {
        setEvents(data);
      }
    };

    fetchFeaturedEvents();
  }, []);

  if (events.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-onstage-gold fill-onstage-gold" />
        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">Featured Events</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => navigate(`/event/${event.id}`)}
            className={`relative cursor-pointer group overflow-hidden border border-border hover:border-onstage-coral transition-all duration-300 ${
              index === 0 ? 'md:row-span-2 md:col-span-1' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-video'}`}>
              <img
                src={event.background_image_url}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Featured Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-onstage-gold text-onstage-charcoal px-2 py-1">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Featured</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-semibold text-lg mb-2 line-clamp-2">{event.title}</h4>
                <div className="flex flex-col gap-1 text-white/80 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">{event.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
