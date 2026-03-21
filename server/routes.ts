import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsSchema } from "@shared/schema";
import axios from "axios";
import { z } from "zod";

// News API key from environment
const NEWS_API_KEY = process.env.NEWS_API_KEY || "";

// Cache duration in milliseconds (30 minutes)
const CACHE_DURATION = 30 * 60 * 1000;

// Cache for news by city
interface CacheItem {
  data: any;
  timestamp: number;
}

const newsCache = new Map<string, CacheItem>();

export async function registerRoutes(app: Express): Promise<Server> {
  // Check if news data for a city is in cache and still valid
  const getCachedNews = (city: string) => {
    const cacheItem = newsCache.get(city.toLowerCase());
    if (cacheItem && (Date.now() - cacheItem.timestamp) < CACHE_DURATION) {
      return cacheItem.data;
    }
    return null;
  };

  // Set news data for a city in cache
  const setCachedNews = (city: string, data: any) => {
    newsCache.set(city.toLowerCase(), {
      data,
      timestamp: Date.now()
    });
  };

  // Weather cache (5 minutes)
  const weatherCache = new Map<string, CacheItem>();

  app.get("/api/weather/:city", async (req, res) => {
    try {
      const cityParam = req.params.city?.trim();
      if (!cityParam) return res.status(400).json({ message: "City is required" });

      const cacheKey = cityParam.toLowerCase();
      const cached = weatherCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
        return res.json(cached.data);
      }

      // Step 1: Geocode city name to coordinates
      const geoRes = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
        params: { name: cityParam, count: 1, language: "en", format: "json" },
        timeout: 8000,
      });

      const results = geoRes.data?.results;
      if (!results || results.length === 0) {
        return res.status(404).json({ message: "City not found" });
      }

      const { latitude, longitude, name, country } = results[0];

      // Step 2: Fetch current weather from Open-Meteo
      const weatherRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude,
          longitude,
          current: "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,visibility,weather_code,precipitation,cloud_cover",
          wind_speed_unit: "kmh",
          timezone: "auto",
        },
        timeout: 8000,
      });

      const current = weatherRes.data?.current;
      if (!current) return res.status(500).json({ message: "Weather data unavailable" });

      // Map WMO weather code to condition label
      const code = current.weather_code ?? 0;
      let condition = "Clear";
      let description = "Clear skies";
      if (code === 0) { condition = "Sunny"; description = "Clear and sunny"; }
      else if (code <= 2) { condition = "Partly Cloudy"; description = "Partly cloudy skies"; }
      else if (code === 3) { condition = "Cloudy"; description = "Overcast skies"; }
      else if (code <= 48) { condition = "Foggy"; description = "Fog or mist"; }
      else if (code <= 57) { condition = "Light Drizzle"; description = "Light drizzle"; }
      else if (code <= 67) { condition = "Rain"; description = "Moderate to heavy rain"; }
      else if (code <= 77) { condition = "Snow"; description = "Snow falling"; }
      else if (code <= 82) { condition = "Heavy Rain"; description = "Heavy rain showers"; }
      else if (code <= 86) { condition = "Heavy Snow"; description = "Heavy snow showers"; }
      else { condition = "Thunderstorm"; description = "Thunderstorm activity"; }

      const data = {
        temperature: Math.round(current.temperature_2m),
        condition,
        description,
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        visibility: Math.round((current.visibility ?? 10000) / 1000),
        feelsLike: Math.round(current.apparent_temperature),
        precipitation: current.precipitation ?? 0,
        cloudCover: current.cloud_cover ?? 0,
        locationName: name,
        country,
        fetchedAt: new Date().toISOString(),
      };

      weatherCache.set(cacheKey, { data, timestamp: Date.now() });
      res.json(data);
    } catch (err) {
      console.error("Weather fetch error:", err);
      res.status(500).json({ message: "Failed to fetch weather data" });
    }
  });

  app.get("/api/facts/:city", async (req, res) => {
    try {
      let cityParam = req.params.city;

      if (!cityParam || typeof cityParam !== "string") {
        return res.status(400).json({ message: "City parameter is required" });
      }
      
      cityParam = cityParam.toLowerCase()
      let cityWords = cityParam.split(" ")
      cityWords.forEach(s => {
        return s.charAt(0).toUpperCase() + s.slice(1);
      })
      cityParam = cityWords.join("_");
    
      const response = await axios.get("https://citystats.xyz/cities/" + cityParam, {
        timeout: 5000,
      });

      if (response.data.status !== "ok") {
        return res.status(500).json({ message: "Facts API returned an error" });
      }
      res.status(200).json( response.data);
    }
    catch {
      res.status(500).json({ message: "Failed to fetch facts" });
    }
  });

  // API route to get news by city
  app.get("/api/news/:city", async (req, res) => {
    try {
      const cityParam = req.params.city;
      
      if (!cityParam || typeof cityParam !== "string") {
        return res.status(400).json({ message: "City parameter is required" });
      }

      const city = cityParam.trim();
      if (city.length < 2) {
        return res.status(400).json({ message: "City name is too short" });
      }

      // Check cache first
      const cachedNews = getCachedNews(city);
      if (cachedNews) {
        return res.json(cachedNews);
      }

      // Track city search for analytics
      await storage.updateCitySearch(city);

      // Fetch from external news API
      if (!NEWS_API_KEY) {
        return res.status(500).json({ message: "News API key is not configured" });
      }

      // Improve search query for specific cities
      const searchQuery = getImprovedSearchQuery(city);
      
      // Use News API to get articles related to the city
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: searchQuery,
          language: "en",
          sortBy: "publishedAt",
          apiKey: NEWS_API_KEY,
          pageSize: 20, // Limit to 20 articles
        },
        timeout: 5000,
      });

      if (response.data.status !== "ok") {
        return res.status(500).json({ message: "News API returned an error" });
      }

      // Transform and filter API response to match our schema
      const newsItems = response.data.articles.map((article: any) => {
        const category = determineCategory(article.title, article.description);
        
        return {
          title: article.title || "Untitled",
          description: article.description || "No description available",
          content: article.content,
          url: article.url,
          imageUrl: article.urlToImage,
          source: article.source?.name || "Unknown Source",
          author: article.author,
          category,
          publishedAt: article.publishedAt ? new Date(article.publishedAt) : null,
          city,
        };
      });

      // Validate and store news items
      const validNewsItems = newsItems.filter((item: any) => {
        try {
          insertNewsSchema.parse(item);
          return true;
        } catch (e) {
          return false;
        }
      });

      // Save news items to storage
      for (const item of validNewsItems) {
        await storage.createNews(item);
      }

      // Cache results
      setCachedNews(city, validNewsItems);

      res.json(validNewsItems);
    } catch (error) {
      console.error("Error fetching news:", error);
      
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          return res.status(504).json({ message: "Request to news service timed out" });
        }
        if (error.response) {
          return res.status(error.response.status).json({ 
            message: `News API error: ${error.response.data?.message || error.message}` 
          });
        }
      }
      
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });

  // Get popular city searches
  app.get("/api/popular-cities", async (req, res) => {
    try {
      const popularCities = await storage.getPopularCities(5); // Top 5 most searched cities
      res.json(popularCities);
    } catch (error) {
      console.error("Error fetching popular cities:", error);
      res.status(500).json({ message: "Failed to fetch popular cities" });
    }
  });
  
  // API route to get historical news from one year ago for a city
  app.get("/api/news/:city/historical", async (req, res) => {
    try {
      const cityParam = req.params.city;
      
      if (!cityParam || typeof cityParam !== "string") {
        return res.status(400).json({ message: "City parameter is required" });
      }

      const city = cityParam.trim();
      if (city.length < 2) {
        return res.status(400).json({ message: "City name is too short" });
      }

      // Check cache first
      const cacheKey = `historical_${city.toLowerCase()}`;
      const cachedNews = getCachedNews(cacheKey);
      if (cachedNews) {
        return res.json(cachedNews);
      }

      // Fetch from external news API
      if (!NEWS_API_KEY) {
        return res.status(500).json({ message: "News API key is not configured" });
      }

      // Calculate date range for exactly 1 year ago (with a window of a few days)
      const today = new Date();
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      
      // Create a window of ±3 days around the exact date one year ago
      const fromDate = new Date(oneYearAgo);
      fromDate.setDate(oneYearAgo.getDate() - 3);
      
      const toDate = new Date(oneYearAgo);
      toDate.setDate(oneYearAgo.getDate() + 3);
      
      // Format dates for the API
      const fromDateStr = fromDate.toISOString().split('T')[0];
      const toDateStr = toDate.toISOString().split('T')[0];

      // Use News API to get articles from one year ago
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: city,
          language: "en",
          sortBy: "relevancy",
          apiKey: NEWS_API_KEY,
          pageSize: 5, // Limit to 5 articles
          from: fromDateStr,
          to: toDateStr
        },
        timeout: 5000,
      });

      if (response.data.status !== "ok") {
        return res.status(500).json({ message: "News API returned an error" });
      }

      // Transform and filter API response to match our schema
      const newsItems = response.data.articles.map((article: any) => {
        const category = determineCategory(article.title, article.description);
        
        return {
          title: article.title || "Untitled",
          description: article.description || "No description available",
          content: article.content,
          url: article.url,
          imageUrl: article.urlToImage,
          source: article.source?.name || "Unknown Source",
          author: article.author,
          category,
          publishedAt: article.publishedAt ? new Date(article.publishedAt) : null,
          city,
        };
      });

      // Validate news items
      const validNewsItems = newsItems.filter((item: any) => {
        try {
          insertNewsSchema.parse(item);
          return true;
        } catch (e) {
          return false;
        }
      });

      // Cache results
      setCachedNews(cacheKey, validNewsItems);

      res.json(validNewsItems);
    } catch (error) {
      console.error("Error fetching historical news:", error);
      
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          return res.status(504).json({ message: "Request to news service timed out" });
        }
        if (error.response) {
          return res.status(error.response.status).json({ 
            message: `News API error: ${error.response.data?.message || error.message}` 
          });
        }
      }
      
      res.status(500).json({ message: "Failed to fetch historical news" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to improve search queries for specific cities
function getImprovedSearchQuery(city: string): string {
  const normalizedCity = city.toLowerCase().trim();
  
  // Special cases for cities that commonly have disambiguation issues
  const cityMappings: Record<string, string> = {
    "vatican city": "Vatican City Holy See Pope",
    "vatican": "Vatican City Holy See Pope",
    "monaco": "Monaco Monte Carlo",
    "san marino": "San Marino Republic",
    "luxembourg": "Luxembourg City Europe",
    "andorra": "Andorra la Vella",
    "liechtenstein": "Liechtenstein Vaduz",
    "georgia": "Georgia Tbilisi country",
    "jordan": "Jordan Amman country",
    "lebanon": "Lebanon Beirut country",
    "malta": "Malta Valletta",
    "cyprus": "Cyprus Nicosia",
    "dublin": "Dublin Ireland",
    "paris": "Paris France",
    "london": "London UK Britain",
    "rome": "Rome Italy",
    "athens": "Athens Greece",
    "madrid": "Madrid Spain",
    "berlin": "Berlin Germany",
    "vienna": "Vienna Austria",
    "brussels": "Brussels Belgium",
    "amsterdam": "Amsterdam Netherlands",
    "stockholm": "Stockholm Sweden",
    "oslo": "Oslo Norway",
    "copenhagen": "Copenhagen Denmark",
    "helsinki": "Helsinki Finland",
    "moscow": "Moscow Russia",
    "warsaw": "Warsaw Poland",
    "prague": "Prague Czech Republic",
    "budapest": "Budapest Hungary",
    "bucharest": "Bucharest Romania",
    "sofia": "Sofia Bulgaria",
    "zagreb": "Zagreb Croatia",
    "belgrade": "Belgrade Serbia",
    "kiev": "Kiev Ukraine",
    "minsk": "Minsk Belarus",
    "riga": "Riga Latvia",
    "tallinn": "Tallinn Estonia",
    "vilnius": "Vilnius Lithuania",
    "fucking": "\"Fugging\" Austria village renamed 2020",
    "fucking city": "\"Fugging\" Austria village renamed 2020",
    "bangkok": "Bangkok Thailand",
    "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit": "Bangkok Thailand",
    "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit city": "Bangkok Thailand",
    "hell": "\"Hell\" Norway village Trondheim",
    "hell city": "\"Hell\" Norway village Trondheim", 
    "batman": "\"Batman\" Turkey city province oil",
    "booger hole": "\"Booger Hole\" West Virginia Clay County community",
    "b0ooger hole": "\"Booger Hole\" West Virginia Clay County community",
    "chimayo": "\"Chimayo\" New Mexico sanctuary pilgrimage site",
    "riz": "\"Riz\" South Tyrol Italy Alpine village",
    "jericho": "\"Jericho\" West Bank Palestine ancient city"
  };
  
  // Return improved query if mapping exists, otherwise return original city
  return cityMappings[normalizedCity] || city;
}

// Helper function to determine article category based on content
function determineCategory(title?: string, description?: string): string {
  const content = `${title || ""} ${description || ""}`.toLowerCase();
  const categoryKeywords: Record<string, string[]> = {
    "politics": ["politic", "government", "election", "vote", "congress", "senate", "president", "democrat", "republican"],
    "business": ["business", "economy", "market", "stock", "invest", "finance", "economic", "trade", "company"],
    "technology": ["tech", "technology", "software", "app", "digital", "internet", "cyber", "ai", "artificial intelligence"],
    "health": ["health", "covid", "medical", "hospital", "doctor", "patient", "disease", "virus", "vaccine"],
    "sports": ["sport", "game", "team", "player", "championship", "tournament", "match", "league", "athlete"],
    "entertainment": ["entertainment", "movie", "film", "music", "celebrity", "actor", "actress", "show", "star"],
    "science": ["science", "research", "study", "discover", "scientific", "scientist", "lab", "experiment"],
    "environment": ["environment", "climate", "pollution", "energy", "sustainable", "green", "recycle", "carbon"],
    "education": ["education", "school", "university", "college", "student", "teacher", "professor", "class", "academic"],
    "food": ["food", "restaurant", "dining", "cuisine", "chef", "recipe", "menu", "dish"],
    "housing": ["housing", "real estate", "property", "apartment", "house", "rent", "mortgage", "building"],
    "traffic": ["traffic", "transit", "commute", "transportation", "road", "highway", "street", "bridge"],
    "community": ["community", "neighborhood", "local", "resident", "volunteer", "charity", "donate", "program"],
  };

  // Check for each category
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => content.includes(keyword))) {
      return category;
    }
  }

  // Default category
  return "local";
}
