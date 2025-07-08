# Globalscope - City Information Dashboard

## Overview
Globalscope is a comprehensive React-based web application that provides users with a complete city information dashboard. Users can enter their city to view weather information, city facts, latest news headlines, neighborhood activity maps, and music recommendations based on news mood.

## Key Features
- **Weather Dashboard**: Real-time weather information displayed at the top of the page
- **City Facts**: Quick facts showing population, famous people born there, and current mayor
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

## Recent Changes
- **2025-01-08**: Added weather section at the top of the dashboard
- **2025-01-08**: Implemented city facts component showing population, famous people, and current mayor
- **2025-01-08**: Reorganized page layout: Weather → City Facts → Neighborhood Map → Music Recommendations → News
- **2025-01-08**: Disabled historical news feature due to NewsAPI limitations (requires paid plan for historical data)
- **2025-01-08**: Added mock weather data for major cities (New York, London, Tokyo, Paris, etc.)
- **2025-01-08**: Created comprehensive city facts database with 15+ major cities
- **2025-01-08**: Fixed Vatican City search disambiguation by improving search queries with context keywords
- **2025-01-08**: Updated Vatican City leadership information to reflect current Pope Leo XIV

## User Preferences
- Weather information should be displayed at the top of the page
- News content should be positioned underneath weather
- City facts should include population, famous people, and current mayor
- Focus on creating a comprehensive city information dashboard experience

## Technical Notes
- NewsAPI.org free tier only allows historical data back to 2025-06-07
- Weather data is currently mock data - would need integration with weather API for production
- City facts database includes 15+ major cities with population, mayors, and famous people
- Music recommendations analyze news sentiment to suggest appropriate playlists
- Neighborhood mapping works for major cities with predefined neighborhood data

## File Structure
- `/client/src/pages/home.tsx` - Main dashboard page
- `/client/src/components/weather-section.tsx` - Weather display component
- `/client/src/components/city-facts.tsx` - City facts component
- `/client/src/components/neighborhood-map.tsx` - Interactive neighborhood map
- `/client/src/components/city-vibe.tsx` - Music recommendations based on news mood
- `/client/src/lib/cityFacts.ts` - City facts database and utilities
- `/client/src/lib/musicRecommender.ts` - Music recommendation logic
- `/client/src/lib/neighborhoodAnalysis.ts` - Neighborhood data and mapping
- `/server/routes.ts` - API routes for news and city data