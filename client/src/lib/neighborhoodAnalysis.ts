import { NewsItem } from "@shared/schema";

// Interface for neighborhood data
export interface NeighborhoodData {
  name: string;
  count: number;
  longitude?: number;
  latitude?: number;
}

// Common neighborhoods by city
const cityNeighborhoods: Record<string, { [key: string]: [number, number] }> = {
  "new york": {
    "manhattan": [-73.9840, 40.7830],
    "brooklyn": [-73.9442, 40.6782],
    "queens": [-73.7949, 40.7282],
    "bronx": [-73.8648, 40.8448],
    "staten island": [-74.1502, 40.5795],
    "harlem": [-73.9465, 40.8116],
    "times square": [-73.9855, 40.7580],
    "soho": [-74.0018, 40.7248],
    "tribeca": [-74.0091, 40.7163],
    "chelsea": [-74.0014, 40.7430],
  },
  "london": {
    "westminster": [-0.1340, 51.4975],
    "hackney": [-0.0575, 51.5450],
    "camden": [-0.1426, 51.5390],
    "brixton": [-0.1132, 51.4613],
    "shoreditch": [-0.0765, 51.5273],
    "kensington": [-0.1920, 51.5015],
    "chelsea": [-0.1693, 51.4875],
    "islington": [-0.1030, 51.5416],
    "southwark": [-0.0760, 51.5045],
    "hammersmith": [-0.2231, 51.4927],
  },
  "paris": {
    "le marais": [2.3582, 48.8598],
    "montmartre": [2.3432, 48.8865],
    "champs-élysées": [2.3095, 48.8698],
    "bastille": [2.3693, 48.8531],
    "pigalle": [2.3401, 48.8822],
    "quartier latin": [2.3459, 48.8464],
    "la défense": [2.2361, 48.8908],
    "belleville": [2.3796, 48.8697],
    "montparnasse": [2.3264, 48.8425],
    "république": [2.3635, 48.8670],
  },
  "tokyo": {
    "shinjuku": [139.7016, 35.6938],
    "shibuya": [139.7015, 35.6580],
    "ginza": [139.7667, 35.6721],
    "roppongi": [139.7275, 35.6631],
    "akihabara": [139.7730, 35.6980],
    "asakusa": [139.7971, 35.7148],
    "harajuku": [139.7030, 35.6716],
    "ikebukuro": [139.7113, 35.7295],
    "odaiba": [139.7754, 35.6246],
    "ueno": [139.7765, 35.7141],
  },
  "sydney": {
    "cbd": [151.2093, -33.8688],
    "bondi": [151.2758, -33.8917],
    "manly": [151.2848, -33.7965],
    "newtown": [151.1795, -33.8960],
    "surry hills": [151.2129, -33.8850],
    "parramatta": [151.0017, -33.8150],
    "circular quay": [151.2111, -33.8611],
    "darling harbour": [151.2011, -33.8724],
    "chatswood": [151.1806, -33.7969],
    "kings cross": [151.2240, -33.8740],
  },
  "boston": {
    "back bay": [-71.0817, 42.3504],
    "beacon hill": [-71.0658, 42.3583],
    "north end": [-71.0550, 42.3647],
    "south end": [-71.0709, 42.3398],
    "fenway": [-71.0927, 42.3466],
    "downtown": [-71.0589, 42.3587],
    "charlestown": [-71.0636, 42.3782],
    "cambridge": [-71.1056, 42.3736],
    "roxbury": [-71.0914, 42.3152],
    "dorchester": [-71.0678, 42.3016],
  },
  "chicago": {
    "loop": [-87.6297, 41.8781],
    "wicker park": [-87.6772, 41.9088],
    "lincoln park": [-87.6454, 41.9214],
    "gold coast": [-87.6270, 41.9033],
    "hyde park": [-87.5965, 41.7943],
    "lakeview": [-87.6532, 41.9432],
    "pilsen": [-87.6571, 41.8568],
    "uptown": [-87.6576, 41.9651],
    "west loop": [-87.6546, 41.8842],
    "rogers park": [-87.6695, 42.0095],
  },
};

// Standardize city name
export function getNormalizedCityName(city: string): string {
  return city.toLowerCase().trim();
}

// Extract neighborhoods mentioned in news articles
export function extractNeighborhoodData(newsItems: NewsItem[], cityName: string): NeighborhoodData[] {
  const normalizedCity = getNormalizedCityName(cityName);
  const neighborhoods = cityNeighborhoods[normalizedCity] || {};
  
  // Initialize neighborhood counts
  const neighborhoodCounts: Record<string, number> = {};
  
  // Count mentions of neighborhoods in news content
  newsItems.forEach(item => {
    const content = `${item.title} ${item.description} ${item.content || ''}`.toLowerCase();
    
    Object.keys(neighborhoods).forEach(neighborhood => {
      if (content.includes(neighborhood)) {
        neighborhoodCounts[neighborhood] = (neighborhoodCounts[neighborhood] || 0) + 1;
      }
    });
  });
  
  // Convert to NeighborhoodData array
  const result: NeighborhoodData[] = Object.entries(neighborhoodCounts).map(([name, count]) => {
    const coords = neighborhoods[name];
    return {
      name,
      count,
      longitude: coords ? coords[0] : undefined,
      latitude: coords ? coords[1] : undefined,
    };
  });
  
  // Sort by count (descending)
  return result.sort((a, b) => b.count - a.count);
}

// Get heatmap data for visualization
export function getHeatmapData(neighborhoods: NeighborhoodData[]): any[] {
  return neighborhoods.map(neighborhood => ({
    id: neighborhood.name,
    value: neighborhood.count,
    coordinates: [
      neighborhood.longitude || 0,
      neighborhood.latitude || 0
    ],
  }));
}

// Calculate city center coordinates based on neighborhoods
export function getCityCenterCoordinates(cityName: string): [number, number] {
  const normalizedCity = getNormalizedCityName(cityName);
  const neighborhoods = cityNeighborhoods[normalizedCity] || {};
  
  // Default coordinates if city not found
  if (Object.keys(neighborhoods).length === 0) {
    return [0, 0];
  }
  
  // Calculate average coordinates
  let totalLong = 0;
  let totalLat = 0;
  const entries = Object.values(neighborhoods);
  
  entries.forEach(coords => {
    totalLong += coords[0];
    totalLat += coords[1];
  });
  
  return [
    totalLong / entries.length,
    totalLat / entries.length
  ];
}

// Check if we have neighborhood data for this city
export function hasNeighborhoodData(cityName: string): boolean {
  const normalizedCity = getNormalizedCityName(cityName);
  return !!cityNeighborhoods[normalizedCity];
}