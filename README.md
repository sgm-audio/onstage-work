# onstage-work

Front end for onstage.work: an events site where people sign up, post events, and browse what's coming up. It's React + TypeScript on Vite, with shadcn/ui and Tailwind, and Supabase for auth, the database and image storage. It started out as a Lovable project.

## What it does

- Create, edit and delete your own events: image upload (JPG/PNG/GIF/WebP, 5 MB max), date and time, and location
- Browse upcoming events; each event page has a countdown, a map and registration
- Email/password sign-up and login through Supabase Auth. A profile row is created on sign-up
- Admin role (`user_roles` table with row-level security). Admins can edit or delete any event
- Location autocomplete and maps through the Google Maps Places API
- Per-page title, description and Open Graph tags

## Setup

You need Node.js and npm.

```sh
git clone https://github.com/sgm-audio/onstage-work.git
cd onstage-work
npm i
cp .env.example .env   # fill in your Supabase project and Google Maps key
npm run dev
```

The database schema is in `supabase/migrations/`.

For the Google Maps key, enable **Places API (New)** in Google Cloud Console, create an API key, and restrict it to the Places API and your domain.

## Build

```sh
npm run build   # outputs dist/, deploy to any static host
```

## Current state

- `npx tsc -p tsconfig.app.json --noEmit` passes.
- `npm run lint` reports 13 errors and 12 warnings, mostly `no-explicit-any` and missing hook dependencies.
- The build warns about a 741 kB JS chunk. Nothing is code-split yet.
- No tests.

## License

MIT. See [LICENSE](LICENSE).
