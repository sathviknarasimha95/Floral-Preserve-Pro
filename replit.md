# Presavia - Cold Storage Platform for Flowers

## Overview

Presavia is a marketing and lead generation website for a premium cold storage facility targeting flower vendors and florists in India. The platform showcases the business's unique value proposition of 30-day flower preservation, enabling customers to buy flowers at low prices and sell when prices spike. The site includes a profit calculator, service descriptions, testimonials, and a contact form that captures leads into a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom theme variables defined in `client/src/index.css`
- **UI Components**: shadcn/ui component library (New York style variant) with Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State Management**: TanStack React Query for server state and API calls
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints prefixed with `/api/`
- **Development Server**: Vite dev server with HMR proxied through Express

### Data Storage
- **Database**: PostgreSQL via Neon serverless driver
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains table definitions shared between frontend and backend
- **Current Tables**: `leads` table for storing contact form submissions

### Build System
- **Frontend Build**: Vite bundles React app to `dist/public`
- **Backend Build**: esbuild compiles server to `dist/index.cjs`
- **Development**: `npm run dev` runs Express server with Vite middleware for HMR

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components (layout, sections, ui)
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Drizzle migration files
```

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database connected via `DATABASE_URL` environment variable
- **Connection**: Uses WebSocket-based pooling through `@neondatabase/serverless`

### UI Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component

### Fonts
- **Google Fonts**: DM Sans (body text) and Poppins (display/headings) loaded via CDN

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, and runtime error overlay for Replit environment
- **Drizzle Kit**: Database schema management and migrations via `npm run db:push`