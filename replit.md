# Globalscope - City Information Dashboard

## Overview
Globalscope is a comprehensive React-based web application that provides users with a complete city information dashboard. Users can enter their city to view weather information, city facts, latest news headlines, neighborhood activity maps, and music recommendations based on news mood.

## Key Features
- **Weather Dashboard**: Real-time weather information displayed at the top of the page
- **Emergency Alerts**: Weather warnings, heat alerts, storm alerts, and road closures
- **City Facts**: Quick facts showing population, famous people born there, and current mayor
- **What's New in the City**: Daily updates featuring new restaurants, businesses, parks, and store openings
- **Places Popularity Map**: Color-coded map showing shops and venues by popularity (Very High, High, Medium, Low) with visitor counts
- **City Problems & Issues**: Information on protests, crime statistics, and infrastructure problems (potholes, road damage)
- **Local Jobs**: Open job listings for new workers, with salary, employer, location, job type, and sector
- **News Feed**: Latest news headlines from NewsAPI.org with categorization
- **Neighborhood Activity Map**: Interactive map showing news activity hotspots in specific neighborhoods
- **Music Recommendations**: AI-powered music suggestions based on the mood of city news (peaceful, dramatic, chaotic themes)
- **City Search**: Search functionality with popular cities suggestions

## Project Architecture
- **Frontend**: React with TypeScript, Vite, TailwindCSS, shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: In-memory storage (MemStorage) for development
- **External APIs**: NewsAPI.org for news data
- **State Management**: TanStack Query for data fetching and caching
- **Routing**: Wouter for client-side routing

## Design System
- **Theme**: Vibrant sky-blue primary (`hsl(211 96% 48%)`), rounded corners (0.75), light mode
- **Hero**: Dark gradient (slate-900 → blue-950 → slate-900) with live badge, gradient headline, glass search box, feature pills
- **Header**: Sticky white with backdrop blur, gradient logo wordmark, polished language picker with flags
- **Dashboard**: City banner with gradient + live indicator, section dividers with labels, 2-column grids for City Info and Problems/Jobs
- **Cards**: Consistent `rounded-2xl border-gray-100 shadow-sm` via global CSS override
- **News cards**: Image zoom on hover, category pill top-left, compact typography
- **Footer**: Dark slate-900 multi-column with brand description, feature links, company links

## Subscription Tiers
- **Free tier**: Live weather, latest news, City Facts (1 add-on only). All other add-ons show locked overlays with blur + grayscale preview and "Unlock with Premium · $10/mo" CTA.
- **Premium tier ($10/month)**: Unlocks Emergency Alerts, What's New, Popular Places Map, City Problems, Local Jobs, Neighborhood Map, and Music Mood (City Vibe).
- **Implementation**: `SubscriptionContext` stores state in `localStorage` (`globalscope_premium`). Header shows blue "Subscribe · $10/mo" button when free, amber "Premium" crown badge when subscribed. Both open a centered modal with feature comparison and Subscribe / Cancel actions. `LockedSection` wrapper component renders blurred + faded preview of the underlying component with an unlock CTA.
- **Note**: This is a demo subscription with no real payment processing — state is local to the browser.

## News Relevance
- **Query construction**: City name wrapped in quotes for exact phrase match. Ambiguous cities (London, Georgia, Jordan, etc.) get a disambiguation context appended via boolean `AND (term1 OR term2 OR …)`.
- **NewsAPI scoping**: `searchIn=title,description` so matches are restricted to article titles/descriptions, not full body content.
- **Post-fetch relevance filter**: `filterRelevantToCity()` keeps only articles whose title or description actually mentions the city name (regex with word boundaries). Handles aliases like Kiev/Kyiv and Bangkok's full ceremonial name.
- **Page size**: Live endpoint fetches 30 articles, returns top 20 after filtering. Historical endpoint fetches 15, returns top 5.

## Recent Changes
- **2026-03-07**: Added Local Jobs section showing open positions for new workers (salary, employer, type, sector)
- **2026-03-07**: Added City Problems & Issues section showing protests, crime statistics, and infrastructure problems
- **2026-03-07**: Added Places Popularity Map with color-coded indicators (Very High, High, Medium, Low) showing shops and venues
- **2026-03-07**: Added Emergency Alerts component for weather warnings, heat alerts, storm alerts, and road closures
- **2026-03-07**: Added "What's New in the City" section with daily updates for restaurants, businesses, parks, and store openings
- **2026-03-07**: Created WhatsNewSection component with color-coded categories and opening dates
- **2025-01-19**: Fixed accuracy of famous people data for all major cities (now shows people actually born there)
- **2025-01-19**: Added comprehensive data for Jericho (ancient Palestinian city with proper historical context)
- **2025-01-19**: Added Riz (South Tyrolean Alpine village) with authentic Italian mountain climate
- **2025-01-19**: Added Chimayo (New Mexico) with high desert climate and Hispanic cultural heritage
- **2025-01-19**: Expanded city database to 30+ cities including major global metros and unique locations
- **2025-01-19**: Removed duplicate Bangkok entries and cleaned up data consistency issues
- **2025-01-08**: Added weather section at the top of the dashboard
- **2025-01-08**: Implemented city facts component showing population, famous people, and current mayor
- **2025-01-08**: Reorganized page layout: Weather → City Facts → Neighborhood Map → Music Recommendations → News
- **2025-01-08**: Created comprehensive city facts database with search disambiguation for unusual cities

## User Preferences
- Weather information should be displayed at the top of the page
- News content should be positioned underneath weather
- City facts should include population, famous people, and current mayor
- Focus on creating a comprehensive city information dashboard experience

## Technical Notes
- NewsAPI.org free tier only allows historical data back to 2025-06-07
- Weather data is LIVE from Open-Meteo API (free, no API key required) — auto-refreshes every 5 minutes
- Open-Meteo geocoding API used to convert city names to coordinates
- Server-side weather cache (5-minute TTL) prevents excessive API calls
- City facts database includes 30+ cities with all add-ons (whatsNew, emergencyAlerts, popularPlaces, problems, localJobs)
- Music recommendations analyze news sentiment to suggest appropriate playlists
- Neighborhood mapping works for major cities with predefined neighborhood data

## File Structure
- `/client/src/pages/home.tsx` - Main dashboard page
- `/client/src/components/weather-section.tsx` - Weather display component
- `/client/src/components/emergency-alerts.tsx` - Emergency alerts component for weather warnings, heat/storm alerts, road closures
- `/client/src/components/city-facts.tsx` - City facts component
- `/client/src/components/whats-new-section.tsx` - What's new updates component with restaurants, businesses, parks, store openings
- `/client/src/components/places-popularity-map.tsx` - Popular shops and places with color-coded popularity levels
- `/client/src/components/city-problems.tsx` - City problems component showing protests, crime, and infrastructure issues
- `/client/src/components/local-jobs.tsx` - Local job listings component with sector, salary, type, and employer info
- `/client/src/components/neighborhood-map.tsx` - Interactive neighborhood map
- `/client/src/components/city-vibe.tsx` - Music recommendations based on news mood
- `/client/src/lib/cityFacts.ts` - City facts database and utilities (includes WhatsNewItem, EmergencyAlert, PopularPlace, CityProblem interfaces and related functions)
- `/client/src/lib/musicRecommender.ts` - Music recommendation logic
- `/client/src/lib/neighborhoodAnalysis.ts` - Neighborhood data and mapping
- `/server/routes.ts` - API routes for news and city data