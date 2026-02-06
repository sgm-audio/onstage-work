-- Add capacity column to events (nullable - events without limits have unlimited capacity)
ALTER TABLE public.events ADD COLUMN capacity integer DEFAULT NULL;

-- Add category column to events with predefined options
CREATE TYPE public.event_category AS ENUM ('music', 'tech', 'sports', 'art', 'food', 'networking', 'education', 'community', 'nightlife', 'other');

ALTER TABLE public.events ADD COLUMN category public.event_category DEFAULT 'other';

-- Add index for category filtering
CREATE INDEX idx_events_category ON public.events(category);

-- Add comment for clarity
COMMENT ON COLUMN public.events.capacity IS 'Maximum number of attendees. NULL means unlimited capacity.';
COMMENT ON COLUMN public.events.category IS 'Event category for filtering and discovery.';