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

  // ─── Dynamic city addons generator ────────────────────────────────────────

  const CURRENCIES: Record<string, string> = {
    US:"$", CA:"CAD $", GB:"£", AU:"AUD $", NZ:"NZD $",
    DE:"€", FR:"€", IT:"€", ES:"€", PT:"€", NL:"€", BE:"€", GR:"€", AT:"€",
    IE:"€", FI:"€", SK:"€", SI:"€", EE:"€", LV:"€", LT:"€", CY:"€", MT:"€",
    CH:"CHF", SE:"SEK", NO:"NOK", DK:"DKK", PL:"PLN", CZ:"CZK", HU:"HUF", RO:"RON",
    JP:"¥", CN:"RMB", KR:"₩", HK:"HKD $", TW:"NT$", SG:"SGD $", MY:"RM",
    IN:"₹", PK:"₨", BD:"৳", LK:"Rs", NP:"Rs",
    TH:"฿", VN:"₫", ID:"Rp", PH:"₱",
    SA:"SAR", AE:"AED", QA:"QAR", KW:"KWD", BH:"BHD", OM:"OMR",
    TR:"₺", IL:"₪", JO:"JOD", EG:"EGP", MA:"MAD", DZ:"DZD", TN:"TND",
    ZA:"ZAR R", NG:"₦", KE:"KSh", ET:"ETB", GH:"GHS", TZ:"TZS",
    BR:"R$", MX:"MXN $", AR:"ARS $", CL:"CLP $", CO:"COP $", PE:"PEN S/", UY:"UYU $",
    RU:"₽", UA:"UAH",
  };

  const REGIONS: Record<string, string> = {
    US:"north_america", CA:"north_america",
    MX:"latin_america", GT:"latin_america", HN:"latin_america", SV:"latin_america",
    NI:"latin_america", CR:"latin_america", PA:"latin_america", CU:"latin_america",
    DO:"latin_america", HT:"latin_america", JM:"latin_america",
    CO:"latin_america", VE:"latin_america", EC:"latin_america", PE:"latin_america",
    BO:"latin_america", PY:"latin_america", CL:"latin_america", AR:"latin_america",
    UY:"latin_america", BR:"latin_america",
    GB:"western_europe", IE:"western_europe", FR:"western_europe", DE:"western_europe",
    IT:"western_europe", ES:"western_europe", PT:"western_europe", NL:"western_europe",
    BE:"western_europe", LU:"western_europe", AT:"western_europe", CH:"western_europe",
    GR:"western_europe", SE:"western_europe", NO:"western_europe", DK:"western_europe",
    FI:"western_europe", IS:"western_europe",
    PL:"eastern_europe", CZ:"eastern_europe", SK:"eastern_europe", HU:"eastern_europe",
    RO:"eastern_europe", BG:"eastern_europe", HR:"eastern_europe", RS:"eastern_europe",
    SI:"eastern_europe", BA:"eastern_europe", UA:"eastern_europe", RU:"eastern_europe",
    AU:"anglosphere", NZ:"anglosphere",
    JP:"east_asia", CN:"east_asia", KR:"east_asia", TW:"east_asia", HK:"east_asia", MN:"east_asia",
    TH:"southeast_asia", VN:"southeast_asia", ID:"southeast_asia", PH:"southeast_asia",
    MY:"southeast_asia", SG:"southeast_asia", MM:"southeast_asia", KH:"southeast_asia",
    LA:"southeast_asia",
    IN:"south_asia", PK:"south_asia", BD:"south_asia", LK:"south_asia", NP:"south_asia",
    SA:"mena", AE:"mena", KW:"mena", QA:"mena", BH:"mena", OM:"mena",
    YE:"mena", JO:"mena", IQ:"mena", SY:"mena", LB:"mena", IL:"mena",
    IR:"mena", TR:"mena", EG:"mena", LY:"mena", TN:"mena", DZ:"mena", MA:"mena",
    NG:"africa", KE:"africa", ET:"africa", TZ:"africa", UG:"africa", GH:"africa",
    ZA:"africa", AO:"africa", MZ:"africa", ZW:"africa", ZM:"africa", SN:"africa",
    CI:"africa", CM:"africa", ML:"africa", SD:"africa", CD:"africa", MG:"africa",
    KZ:"central_asia", UZ:"central_asia", TM:"central_asia", KG:"central_asia", TJ:"central_asia",
  };

  const CUISINE: Record<string, string[]> = {
    north_america: ["American", "Farm-to-Table", "BBQ", "Seafood", "Mexican-American"],
    latin_america: ["Latin Fusion", "Ceviche", "Grilled Meats", "Traditional"],
    western_europe: ["Contemporary", "Mediterranean", "Bistro", "Modern European"],
    eastern_europe: ["Central European", "Traditional", "Slavic Grill"],
    anglosphere: ["Modern", "Pacific Rim", "Contemporary Café"],
    east_asia: ["Asian Fusion", "Ramen & Noodle", "Hotpot", "Regional Chinese"],
    southeast_asia: ["Street Food Fusion", "Noodle Bar", "Regional Cuisine"],
    south_asia: ["South Asian", "Modern Indian", "Curry House"],
    mena: ["Middle Eastern", "Levantine", "Mezze & Grill"],
    africa: ["West African", "Pan-African Fusion", "Grilled & Stew"],
    central_asia: ["Central Asian", "Traditional Pilaf"],
  };

  const TECH_COMPANIES: Record<string, string[]> = {
    north_america: ["Salesforce", "Google", "Microsoft", "Amazon", "Meta"],
    latin_america: ["MercadoLibre", "Nubank", "Rappi", "OLX Group"],
    western_europe: ["SAP", "Spotify", "Criteo", "Delivery Hero"],
    eastern_europe: ["EPAM Systems", "Grid Dynamics", "Luxoft"],
    anglosphere: ["Atlassian", "Canva", "Xero", "WiseTech"],
    east_asia: ["ByteDance", "Tencent", "Samsung SDS", "NTT"],
    southeast_asia: ["Grab", "Gojek", "Sea Limited", "Lazada"],
    south_asia: ["Infosys", "Wipro", "TCS", "Zoho"],
    mena: ["Careem", "Talabat", "Souq/Amazon", "Anghami"],
    africa: ["Flutterwave", "Andela", "Jumia", "M-Pesa"],
    central_asia: ["Kaspi Bank", "EPAM Regional"],
  };

  function getClimate(lat: number): string {
    const a = Math.abs(lat);
    if (a < 15) return "tropical";
    if (a < 30) return "subtropical";
    if (a < 50) return "temperate";
    if (a < 65) return "continental";
    return "polar";
  }

  function pickRandom<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

  function generateCityAddons(geo: any) {
    const { name, country, country_code, latitude } = geo;
    const cc = (country_code || "US").toUpperCase();
    const region: string = REGIONS[cc] || "western_europe";
    const currency: string = CURRENCIES[cc] || "$";
    const climate = getClimate(latitude || 40);
    const isSouth = (latitude || 40) < 0;
    const cuisines = CUISINE[region] || ["Contemporary", "Traditional"];
    const techCos = TECH_COMPANIES[region] || ["Tech Corp"];
    const now = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const prevMonth = months[now.getMonth() === 0 ? 11 : now.getMonth() - 1];

    // ── What's New ──────────────────────────────────────────────────────────
    const whatsNew = [
      {
        name: `${name} ${pickRandom(cuisines)} Kitchen`,
        category: "Restaurant",
        description: `New ${pickRandom(cuisines).toLowerCase()} restaurant in the city centre with modern décor and seasonal menus`,
        openingDate: `${month} ${year}`
      },
      {
        name: `${name} Innovation Hub`,
        category: "Business",
        description: `New co-working and startup incubator space supporting tech entrepreneurs and small businesses`,
        openingDate: `${prevMonth} ${year}`
      },
      {
        name: `${name} Central Park Trail`,
        category: "Park",
        description: `Renovated walking and cycling trail through the city's main park with improved lighting and seating`,
        openingDate: `${month} ${year}`
      },
      {
        name: `${name} Shopping Centre`,
        category: "Store Opening",
        description: `New retail complex featuring local and international brands in a modern, accessible space`,
        openingDate: `${month} ${year}`
      },
    ];

    // ── Emergency Alerts ─────────────────────────────────────────────────────
    const emergencyAlerts: any[] = [];
    const isWinter = isSouth
      ? (now.getMonth() >= 5 && now.getMonth() <= 8)
      : (now.getMonth() === 11 || now.getMonth() <= 1);
    const isSummer = isSouth
      ? (now.getMonth() === 11 || now.getMonth() <= 2)
      : (now.getMonth() >= 5 && now.getMonth() <= 8);

    if ((climate === "tropical" || climate === "subtropical") && isSummer) {
      emergencyAlerts.push({
        type: "Heat Alert",
        description: `High temperatures expected this week. Stay hydrated, avoid prolonged sun exposure midday, and check on vulnerable residents.`,
        validUntil: `${month} ${now.getDate() + 3}, ${year}`
      });
    } else if ((climate === "continental" || climate === "polar") && isWinter) {
      emergencyAlerts.push({
        type: "Weather Warning",
        description: `Winter weather advisory in effect. Possible snow or ice. Allow extra travel time and dress warmly.`,
        validUntil: `${month} ${now.getDate() + 2}, ${year}`
      });
    }
    // Most cities have no active alerts — return empty which hides the section

    // ── Popular Places ───────────────────────────────────────────────────────
    const marketLabel = ["mena","africa","south_asia","southeast_asia"].includes(region) ? "Grand Bazaar & Market" : "City Market";
    const placeType = {
      north_america: "Shopping & Entertainment", latin_america: "Culture & Dining",
      western_europe: "Shopping & Culture", eastern_europe: "Culture & Dining",
      anglosphere: "Beach & Leisure", east_asia: "Shopping & Culture",
      southeast_asia: "Street Food & Market", south_asia: "Market & Culture",
      mena: "Souk & Heritage", africa: "Market & Dining", central_asia: "Heritage & Culture"
    }[region] || "Shopping & Culture";

    const popularPlaces = [
      {
        name: `${name} City Centre`,
        type: placeType,
        location: "City Centre",
        popularity: "Very High",
        description: `The bustling heart of ${name} with shops, cafes, restaurants, and civic landmarks`,
        visitorCount: "10,000+"
      },
      {
        name: marketLabel,
        type: "Market & Food",
        location: "Old Town",
        popularity: "High",
        description: `Traditional market with local produce, crafts, spices, and street food stalls`,
        visitorCount: "5,000+"
      },
      {
        name: `${name} Waterfront / Park`,
        type: "Park & Recreation",
        location: "Riverside",
        popularity: "High",
        description: `Popular public space for walking, cycling, and weekend leisure activities`,
        visitorCount: "8,000+"
      },
      {
        name: `${name} Restaurant District`,
        type: "Dining & Nightlife",
        location: "Entertainment Quarter",
        popularity: "Medium",
        description: `Concentration of restaurants, bars, and cafes popular with locals and visitors`,
        visitorCount: "4,000+"
      },
    ];

    // ── Problems ──────────────────────────────────────────────────────────────
    const infraSeverity = ["africa","south_asia","central_asia","latin_america"].includes(region) ? "High" : "Moderate";
    const crimeSeverity = ["africa","latin_america","south_asia"].includes(region) ? "Moderate" : "Low";
    const protestSeverity = ["eastern_europe","mena","latin_america","africa"].includes(region) ? "Moderate" : "Low";

    const problems = [
      {
        type: "Infrastructure",
        severity: infraSeverity,
        description: "Road maintenance and public transport challenges",
        details: [
          "Road repairs ongoing in several districts",
          "Public transport capacity under pressure at peak hours",
          "Utility maintenance work causing occasional disruptions"
        ],
        lastUpdated: `${month} ${now.getDate()}, ${year}`
      },
      {
        type: "Crime",
        severity: crimeSeverity,
        description: "Property crime and petty theft in busy areas",
        details: [
          "Petty theft reported in busy market and tourist areas",
          "Vehicle security advisory in car parks",
          "Police recommend standard travel precautions"
        ],
        lastUpdated: `${month} ${now.getDate()}, ${year}`
      },
      {
        type: "Protests",
        severity: protestSeverity,
        description: "Occasional civic and political demonstrations",
        details: [
          "Periodic labour union and workers' rights demonstrations",
          "Political gatherings in central public spaces",
          "Road diversions possible during large events"
        ],
        lastUpdated: `${month} ${now.getDate()}, ${year}`
      },
    ];

    // ── Local Jobs ────────────────────────────────────────────────────────────
    const tc = pickRandom(techCos);
    const localJobs = [
      {
        title: "Software Developer",
        employer: tc,
        neighborhood: "Tech District",
        type: "Full-time",
        sector: "Technology",
        description: `Build digital products for ${name}'s growing tech sector. Programming experience required.`,
        salary: `${currency}${region === "north_america" ? "90,000–130,000/yr" : region === "western_europe" ? "45,000–75,000/yr" : region === "east_asia" ? "15,000–30,000/month" : "Market rate"}`,
        posted: "Today"
      },
      {
        title: "Restaurant Server",
        employer: `${name} ${pickRandom(cuisines)} Restaurant`,
        neighborhood: "City Centre",
        type: "Part-time",
        sector: "Hospitality",
        description: `Serve guests at a popular city-centre restaurant. Friendly and customer-focused attitude required.`,
        salary: `${currency}${region === "north_america" ? "15–18/hr + tips" : region === "western_europe" ? "12–16/hr" : "Market rate"}`,
        posted: "Today"
      },
      {
        title: "Registered Nurse",
        employer: `${name} General Hospital`,
        neighborhood: "Medical District",
        type: "Full-time",
        sector: "Healthcare",
        description: `Provide patient care in a busy public hospital. Nursing qualification required.`,
        salary: `${currency}Market rate`,
        posted: "2 days ago"
      },
      {
        title: "Delivery Driver",
        employer: "Local Delivery Network",
        neighborhood: "Citywide",
        type: "Part-time",
        sector: "Transportation",
        description: `Deliver packages or food orders across the city. Own vehicle preferred. Flexible hours.`,
        salary: `${currency}Market rate`,
        posted: "Today"
      },
      {
        title: "English / Language Teacher",
        employer: `${name} Language Academy`,
        neighborhood: "City Centre",
        type: "Full-time",
        sector: "Education",
        description: `Teach language classes to adults and students. Teaching qualification preferred.`,
        salary: `${currency}Market rate`,
        posted: "1 day ago"
      },
    ];

    return { whatsNew, emergencyAlerts, popularPlaces, problems, localJobs };
  }

  // City addons cache (24 hours)
  const addonsCache = new Map<string, CacheItem>();

  app.get("/api/city-addons/:city", async (req, res) => {
    try {
      const cityParam = req.params.city?.trim();
      if (!cityParam) return res.status(400).json({ message: "City is required" });

      const cacheKey = cityParam.toLowerCase();
      const cached = addonsCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < 60 * 1000) {
        return res.json(cached.data);
      }

      // Geocode to get country/region info
      const geoRes = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
        params: { name: cityParam, count: 1, language: "en", format: "json" },
        timeout: 8000,
      });

      const results = geoRes.data?.results;
      if (!results || results.length === 0) {
        return res.status(404).json({ message: "City not found" });
      }

      const data = generateCityAddons(results[0]);
      addonsCache.set(cacheKey, { data, timestamp: Date.now() });
      res.json(data);
    } catch (err) {
      console.error("City addons error:", err);
      res.status(500).json({ message: "Failed to generate city data" });
    }
  });

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

      // Step 2: Fetch current weather + 7-day daily forecast from Open-Meteo
      const weatherRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude,
          longitude,
          current: "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,visibility,weather_code,precipitation,cloud_cover",
          daily: "temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,wind_speed_10m_max,relative_humidity_2m_mean",
          wind_speed_unit: "kmh",
          timezone: "auto",
          forecast_days: 7,
        },
        timeout: 8000,
      });

      const current = weatherRes.data?.current;
      const daily = weatherRes.data?.daily;
      if (!current) return res.status(500).json({ message: "Weather data unavailable" });

      function wmoToCondition(code: number): { condition: string; description: string } {
        if (code === 0) return { condition: "Sunny", description: "Clear and sunny" };
        if (code <= 2) return { condition: "Partly Cloudy", description: "Partly cloudy skies" };
        if (code === 3) return { condition: "Cloudy", description: "Overcast skies" };
        if (code <= 48) return { condition: "Foggy", description: "Fog or mist" };
        if (code <= 57) return { condition: "Light Drizzle", description: "Light drizzle" };
        if (code <= 67) return { condition: "Rain", description: "Moderate to heavy rain" };
        if (code <= 77) return { condition: "Snow", description: "Snow falling" };
        if (code <= 82) return { condition: "Heavy Rain", description: "Heavy rain showers" };
        if (code <= 86) return { condition: "Heavy Snow", description: "Heavy snow showers" };
        return { condition: "Thunderstorm", description: "Thunderstorm activity" };
      }

      const todayWeather = wmoToCondition(current.weather_code ?? 0);

      // Build daily forecast array
      const forecast = daily ? daily.time.map((date: string, i: number) => {
        const { condition, description } = wmoToCondition(daily.weather_code[i] ?? 0);
        return {
          date,
          condition,
          description,
          tempMax: Math.round(daily.temperature_2m_max[i]),
          tempMin: Math.round(daily.temperature_2m_min[i]),
          precipitation: Math.round((daily.precipitation_sum[i] ?? 0) * 10) / 10,
          windSpeed: Math.round(daily.wind_speed_10m_max[i] ?? 0),
          humidity: Math.round(daily.relative_humidity_2m_mean?.[i] ?? 0),
        };
      }) : [];

      const data = {
        temperature: Math.round(current.temperature_2m),
        condition: todayWeather.condition,
        description: todayWeather.description,
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        visibility: Math.round((current.visibility ?? 10000) / 1000),
        feelsLike: Math.round(current.apparent_temperature),
        precipitation: current.precipitation ?? 0,
        cloudCover: current.cloud_cover ?? 0,
        locationName: name,
        country,
        fetchedAt: new Date().toISOString(),
        forecast,
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
      // searchIn restricts matches to title + description (not full content) for higher relevance
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: searchQuery,
          searchIn: "title,description",
          language: "en",
          sortBy: "publishedAt",
          apiKey: NEWS_API_KEY,
          pageSize: 30, // Fetch more so we have enough after relevance filtering
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

      // Relevance filter: require the city name to actually appear in title or description
      const relevantNewsItems = filterRelevantToCity(validNewsItems, city);

      // Deduplicate by URL, then by title
      const seenUrls = new Set<string>();
      const seenTitles = new Set<string>();
      const uniqueNewsItems = relevantNewsItems.filter((item: any) => {
        const urlKey = item.url?.trim().toLowerCase();
        const titleKey = item.title?.trim().toLowerCase();
        if (urlKey && seenUrls.has(urlKey)) return false;
        if (titleKey && seenTitles.has(titleKey)) return false;
        if (urlKey) seenUrls.add(urlKey);
        if (titleKey) seenTitles.add(titleKey);
        return true;
      }).slice(0, 20);

      // Save news items to storage
      for (const item of uniqueNewsItems) {
        await storage.createNews(item);
      }

      // Cache results
      setCachedNews(city, uniqueNewsItems);

      res.json(uniqueNewsItems);
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
          q: getImprovedSearchQuery(city),
          searchIn: "title,description",
          language: "en",
          sortBy: "relevancy",
          apiKey: NEWS_API_KEY,
          pageSize: 15,
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

      // Relevance filter: require the city name in title or description
      const relevantNewsItems = filterRelevantToCity(validNewsItems, city);

      // Deduplicate by URL, then by title
      const seenUrls2 = new Set<string>();
      const seenTitles2 = new Set<string>();
      const uniqueNewsItems = relevantNewsItems.filter((item: any) => {
        const urlKey = item.url?.trim().toLowerCase();
        const titleKey = item.title?.trim().toLowerCase();
        if (urlKey && seenUrls2.has(urlKey)) return false;
        if (titleKey && seenTitles2.has(titleKey)) return false;
        if (urlKey) seenUrls2.add(urlKey);
        if (titleKey) seenTitles2.add(titleKey);
        return true;
      }).slice(0, 5);

      // Cache results
      setCachedNews(cacheKey, uniqueNewsItems);

      res.json(uniqueNewsItems);
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
// Builds a NewsAPI-compatible boolean query that requires the city name
// (as an exact phrase) AND, for ambiguous names, at least one disambiguation term.
// This is far stricter than space-separated keywords (which NewsAPI treats as OR).
function getImprovedSearchQuery(city: string): string {
  const normalizedCity = city.toLowerCase().trim();

  // Disambiguation context for ambiguous city names (added with AND)
  const disambig: Record<string, string[]> = {
    "vatican city": ["Holy See", "Pope", "Rome"],
    "vatican": ["Holy See", "Pope", "Rome"],
    "monaco": ["Monte Carlo", "Riviera", "principality"],
    "san marino": ["Republic", "Italy", "Europe"],
    "luxembourg": ["Europe", "Grand Duchy"],
    "andorra": ["Pyrenees", "principality"],
    "liechtenstein": ["Vaduz", "principality"],
    "georgia": ["Tbilisi", "Caucasus"],
    "jordan": ["Amman", "Middle East"],
    "lebanon": ["Beirut", "Middle East"],
    "malta": ["Valletta", "Mediterranean"],
    "cyprus": ["Nicosia", "Mediterranean"],
    "dublin": ["Ireland", "Irish"],
    "paris": ["France", "French"],
    "london": ["UK", "Britain", "England"],
    "rome": ["Italy", "Italian"],
    "athens": ["Greece", "Greek"],
    "madrid": ["Spain", "Spanish"],
    "berlin": ["Germany", "German"],
    "vienna": ["Austria", "Austrian"],
    "brussels": ["Belgium", "Belgian"],
    "amsterdam": ["Netherlands", "Dutch"],
    "stockholm": ["Sweden", "Swedish"],
    "oslo": ["Norway", "Norwegian"],
    "copenhagen": ["Denmark", "Danish"],
    "helsinki": ["Finland", "Finnish"],
    "moscow": ["Russia", "Russian", "Kremlin"],
    "warsaw": ["Poland", "Polish"],
    "prague": ["Czech"],
    "budapest": ["Hungary", "Hungarian"],
    "bucharest": ["Romania", "Romanian"],
    "sofia": ["Bulgaria", "Bulgarian"],
    "zagreb": ["Croatia", "Croatian"],
    "belgrade": ["Serbia", "Serbian"],
    "kiev": ["Ukraine", "Ukrainian"],
    "kyiv": ["Ukraine", "Ukrainian"],
    "minsk": ["Belarus", "Belarusian"],
    "riga": ["Latvia", "Latvian"],
    "tallinn": ["Estonia", "Estonian"],
    "vilnius": ["Lithuania", "Lithuanian"],
    "bangkok": ["Thailand", "Thai"],
    "hell": ["Norway", "Trondheim", "village"],
    "batman": ["Turkey", "province", "Kurdish"],
    "booger hole": ["West Virginia", "Clay County"],
    "chimayo": ["New Mexico", "sanctuary"],
    "riz": ["South Tyrol", "Italy", "Alpine"],
    "jericho": ["West Bank", "Palestine", "Palestinian"],
  };

  // Bangkok's full ceremonial name is unsearchable, fall back to "Bangkok"
  const bangkokFull = "krungthepmahanakhon amonrattanakosin mahintharayutthaya";
  const cityForQuery = normalizedCity.startsWith(bangkokFull) ? "Bangkok" : city;

  const phrase = `"${cityForQuery}"`;
  const context = disambig[normalizedCity];
  if (context && context.length > 0) {
    const orList = context.map((c) => (c.includes(" ") ? `"${c}"` : c)).join(" OR ");
    return `${phrase} AND (${orList})`;
  }
  return phrase;
}

// Post-fetch relevance filter: keep only articles whose title or description
// actually mentions the city. NewsAPI sometimes returns loosely related articles
// despite searchIn=title,description, so this is a safety net.
function filterRelevantToCity(items: any[], city: string): any[] {
  const cityLower = city.toLowerCase().trim();
  // Build candidate names to check (handle Bangkok's long ceremonial name etc.)
  const aliases = new Set<string>([cityLower]);
  if (cityLower.startsWith("krungthepmahanakhon")) aliases.add("bangkok");
  if (cityLower === "kiev") aliases.add("kyiv");
  if (cityLower === "kyiv") aliases.add("kiev");

  return items.filter((item) => {
    const haystack = `${item.title || ""} ${item.description || ""}`.toLowerCase();
    for (const name of Array.from(aliases)) {
      if (name.length < 2) continue;
      // Word-boundary-ish check: surround with non-letter chars or string boundary
      const pattern = new RegExp(`(^|[^a-z])${escapeRegex(name)}([^a-z]|$)`, "i");
      if (pattern.test(haystack)) return true;
    }
    return false;
  });
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Helper function to determine article category based on content.
// Uses a scoring system: every keyword match adds 1 point, and the
// category with the most points wins. This avoids false positives from
// a single generic word triggering the wrong label.
function determineCategory(title?: string, description?: string): string {
  // Weight the title more heavily than the description
  const titleText = (title || "").toLowerCase();
  const descText = (description || "").toLowerCase();

  // Each entry is [keyword, weight] — higher weight for more distinctive terms
  const categoryKeywords: Record<string, Array<[string, number]>> = {
    "politics": [
      ["election", 3], ["ballot", 3], ["referendum", 3], ["parliament", 3],
      ["senate", 3], ["congress", 3], ["democrat", 3], ["republican", 3],
      ["political", 2], ["politician", 2], ["minister", 2], ["prime minister", 3],
      ["president", 2], ["legislation", 2], ["policy", 1], ["government", 1],
      ["vote", 1], ["campaign", 1],
    ],
    "business": [
      ["stock exchange", 3], ["wall street", 3], ["ipo", 3], ["gdp", 3],
      ["inflation", 3], ["interest rate", 3], ["hedge fund", 3],
      ["earnings", 2], ["revenue", 2], ["profit", 2], ["startup", 2],
      ["investment", 2], ["merger", 2], ["acquisition", 2], ["ceo", 2],
      ["economy", 1], ["finance", 1], ["trade", 1],
    ],
    "technology": [
      ["artificial intelligence", 3], ["machine learning", 3], ["blockchain", 3],
      ["cryptocurrency", 3], ["cybersecurity", 3], ["robotics", 3],
      ["software", 2], ["smartphone", 2], ["silicon valley", 2], ["startup tech", 2],
      ["technology", 2], ["digital", 2], ["internet", 1], ["cyber", 1],
    ],
    "health": [
      ["pandemic", 3], ["vaccine", 3], ["epidemic", 3], ["surgery", 3],
      ["cancer", 3], ["diabetes", 3], ["mental health", 3], ["covid", 3],
      ["hospital", 2], ["medical", 2], ["disease", 2], ["virus", 2],
      ["health care", 2], ["doctor", 1], ["patient", 1],
    ],
    "sports": [
      ["world cup", 3], ["olympic", 3], ["championship", 3], ["tournament", 3],
      ["formula 1", 3], ["nba", 3], ["nfl", 3], ["premier league", 3],
      ["athlete", 2], ["goalkeeper", 2], ["quarterback", 2], ["marathon", 2],
      ["stadium", 2], ["league", 1], ["match", 1], ["player", 1], ["team", 1],
    ],
    "entertainment": [
      ["box office", 3], ["oscar", 3], ["grammy", 3], ["emmy", 3],
      ["film festival", 3], ["blockbuster", 3], ["streaming", 2],
      ["concert", 2], ["album", 2], ["movie", 2], ["celebrity", 2],
      ["actor", 2], ["actress", 2], ["director", 2], ["entertainment", 1],
    ],
    "science": [
      ["nasa", 3], ["spacex", 3], ["quantum", 3], ["genome", 3],
      ["archaeology", 3], ["fossil", 3], ["telescope", 3],
      ["scientific", 2], ["scientist", 2], ["research", 2], ["experiment", 2],
      ["discovery", 2], ["space", 1], ["climate science", 2],
    ],
    "environment": [
      ["climate change", 3], ["global warming", 3], ["carbon emission", 3],
      ["deforestation", 3], ["endangered species", 3], ["wildfire", 3],
      ["renewable energy", 3], ["solar panel", 2], ["wind farm", 2],
      ["pollution", 2], ["flood", 2], ["drought", 2], ["environment", 1],
    ],
    "education": [
      ["university", 2], ["college", 2], ["scholarship", 3], ["graduation", 3],
      ["curriculum", 3], ["academic", 2], ["tuition", 3], ["campus", 2],
      ["school", 1], ["student", 1], ["teacher", 1], ["professor", 2],
    ],
    "food": [
      ["michelin star", 3], ["restaurant", 2], ["cuisine", 2], ["chef", 2],
      ["dining", 2], ["recipe", 2], ["menu", 2], ["food festival", 3],
      ["culinary", 3], ["food", 1],
    ],
    "housing": [
      ["real estate", 3], ["housing market", 3], ["mortgage", 3], ["eviction", 3],
      ["gentrification", 3], ["landlord", 2], ["tenant", 2], ["apartment", 2],
      ["affordable housing", 3], ["rent", 1], ["property", 1],
    ],
    "traffic": [
      ["traffic jam", 3], ["road closure", 3], ["subway", 2], ["metro", 2],
      ["public transit", 3], ["commute", 2], ["highway", 2], ["bridge closure", 3],
      ["traffic", 1], ["transportation", 1],
    ],
    "crime": [
      ["murder", 3], ["robbery", 3], ["arrest", 3], ["police", 2],
      ["shooting", 3], ["stabbing", 3], ["court", 2], ["trial", 2],
      ["convicted", 3], ["suspect", 2], ["investigation", 1], ["crime", 1],
    ],
  };

  let bestCategory = "local";
  let bestScore = 0;

  for (const [category, entries] of Object.entries(categoryKeywords)) {
    let score = 0;
    for (const [keyword, weight] of entries) {
      // Title matches count 2× more than description matches
      if (titleText.includes(keyword)) score += weight * 2;
      else if (descText.includes(keyword)) score += weight;
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}
