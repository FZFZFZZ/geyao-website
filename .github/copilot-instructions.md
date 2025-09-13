# Geyao Music Website - AI Coding Instructions

## 🎵 Project Overview
Modern Next.js 15 music community website showcasing bands, musicians, and their music with dark theme design.

## 📁 Architecture & Data Flow

### Core Data Models
- **Bands** (`src/data/bands.ts`): ID-based band entities with members array, external links (YouTube/Bilibili/小红书), Google Drive integration
- **People** (`src/data/people.ts`): Musicians with roles, departments, social links, topAlbums (iTunes API integration), casual talk, recruitment needs  
- **Relationships**: Bands reference people by ID arrays in `members` field; people reference bands in `bands` array

### Key External Integrations
- **iTunes API**: Album artwork fetching with mobile-optimized strategies, error handling, and fallback displays
- **Social Media**: Instagram/Telegram/WeChat integration with bubble animations (`src/lib/bubbleStyles.ts`)
- **Video Platforms**: External links to YouTube, Bilibili, 小红书 (not embedded players)

## 🛠️ Development Patterns

### Component Structure
```
src/components/
├── BandsGrid.tsx      # Band cards with search/filter
├── PeopleGrid.tsx     # People cards with roles
├── Bubble.tsx         # Animated social media bubbles  
├── LayoutWrapper.tsx  # Common layout patterns
└── Navbar.tsx         # Main navigation
```

### Styling Conventions
- **Tailwind CSS**: Primary framework with custom color scheme
- **Dark Theme**: `bg-gray-900`, `bg-gray-800/30` with backdrop blur
- **Gradient Accents**: `from-indigo-500 to-purple-500` for primary elements
- **Hover Effects**: `hover:scale-105 transition-all duration-300` standard pattern
- **Responsive Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` layout pattern

### Data Management
- Static JSON data in TypeScript files (no database)
- ID-based relationships between bands and people
- External asset hosting (Google Drive, social media)

## 🎯 Critical Workflows

### Adding New Musicians
1. Edit `src/data/people.ts` with required fields: `id`, `name`, `roles[]`, `department[]` 
2. Optional: `photo` (path to `/photos/`), `topAlbums[]`, `social{}`, `casualTalk`, `recruitmentNeeds`
3. Reference person ID in relevant band's `members[]` array

### Adding New Bands  
1. Edit `src/data/bands.ts` with required: `id`, `name`, `members[]` (person IDs)
2. Optional: `photo` (path to `/bandphotos/`), `tags[]`, `youtubeVideos[]`, `social{}`
3. External links use `{ title: string, url: string }` objects

### iTunes API Integration
- Album artwork fetching uses multiple search strategies with 4s timeout
- Mobile-optimized: max 6 albums, 500ms delays between requests
- Error handling with fallback icons for failed artwork loads
- Image optimization: 200x200 resolution, HTTPS enforcement

## 🔧 Build & Deploy
- **Dev**: `npm run dev` (Next.js 15 App Router)
- **Build**: `npm run build` (Vercel deployment ready)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React + FontAwesome for social platforms

## 📋 UI/UX Patterns
- **Card Components**: Clickable with group hover states, backdrop blur glass morphism
- **Search & Filter**: Real-time text search across name/tags/genres with case-insensitive matching  
- **Member Cards**: Link to individual `/people/[id]` pages, simplified design with roles display
- **External Links**: Open in new tabs with appropriate icons (YouTube, Instagram, etc.)

## 🚨 Recent Changes
- Removed standalone video library (Jan 2025) - videos now embedded in band profiles
- Simplified member cards with direct profile links instead of modal overlays
- Mobile performance optimizations for iTunes API requests

Always maintain ID-based relationships when editing data, use consistent Tailwind patterns for new components, and test iTunes API integration on mobile devices.
