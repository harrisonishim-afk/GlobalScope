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