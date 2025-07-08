export interface CityFacts {
  population: string;
  famousPeople: string[];
  currentMayor: string;
  foundedYear?: number;
  nickname?: string;
}

// City facts database
const cityFactsDatabase: Record<string, CityFacts> = {
  "new york": {
    population: "8.3 million",
    famousPeople: ["Jay-Z", "Lady Gaga", "Robert De Niro", "Scarlett Johansson", "Alicia Keys"],
    currentMayor: "Eric Adams",
    foundedYear: 1624,
    nickname: "The Big Apple"
  },
  "london": {
    population: "9.5 million",
    famousPeople: ["David Beckham", "Adele", "Benedict Cumberbatch", "Emma Watson", "Daniel Craig"],
    currentMayor: "Sadiq Khan",
    foundedYear: 43,
    nickname: "The Big Smoke"
  },
  "tokyo": {
    population: "37.4 million",
    famousPeople: ["Akira Kurosawa", "Yoko Ono", "Haruki Murakami", "Sofia Coppola", "Takeshi Kitano"],
    currentMayor: "Yuriko Koike",
    foundedYear: 1603,
    nickname: "The Eastern Capital"
  },
  "paris": {
    population: "12.3 million",
    famousPeople: ["Marion Cotillard", "Jean-Paul Gaultier", "Brigitte Bardot", "Omar Sy", "Vincent Cassel"],
    currentMayor: "Anne Hidalgo",
    foundedYear: 250,
    nickname: "City of Light"
  },
  "sydney": {
    population: "5.3 million",
    famousPeople: ["Hugh Jackman", "Nicole Kidman", "Russell Crowe", "Rebel Wilson", "Chris Hemsworth"],
    currentMayor: "Clover Moore",
    foundedYear: 1788,
    nickname: "Harbour City"
  },
  "chicago": {
    population: "2.7 million",
    famousPeople: ["Oprah Winfrey", "Kanye West", "Hillary Clinton", "Barack Obama", "Walt Disney"],
    currentMayor: "Brandon Johnson",
    foundedYear: 1837,
    nickname: "The Windy City"
  },
  "boston": {
    population: "4.9 million",
    famousPeople: ["Matt Damon", "Ben Affleck", "Mark Wahlberg", "John Krasinski", "Conan O'Brien"],
    currentMayor: "Michelle Wu",
    foundedYear: 1630,
    nickname: "Beantown"
  },
  "los angeles": {
    population: "13.2 million",
    famousPeople: ["Leonardo DiCaprio", "Jennifer Aniston", "Will Smith", "Sandra Bullock", "Ryan Gosling"],
    currentMayor: "Karen Bass",
    foundedYear: 1781,
    nickname: "City of Angels"
  },
  "miami": {
    population: "6.1 million",
    famousPeople: ["Gloria Estefan", "Pitbull", "Andy Garcia", "Eva Mendes", "Enrique Iglesias"],
    currentMayor: "Francis Suarez",
    foundedYear: 1896,
    nickname: "Magic City"
  },
  "seattle": {
    population: "4.0 million",
    famousPeople: ["Bill Gates", "Jeff Bezos", "Kurt Cobain", "Macklemore", "Chris Cornell"],
    currentMayor: "Bruce Harrell",
    foundedYear: 1851,
    nickname: "Emerald City"
  },
  "san francisco": {
    population: "4.7 million",
    famousPeople: ["Mark Zuckerberg", "Steve Jobs", "Danny Glover", "Robin Williams", "Sean Penn"],
    currentMayor: "London Breed",
    foundedYear: 1776,
    nickname: "The Golden City"
  },
  "toronto": {
    population: "6.2 million",
    famousPeople: ["Drake", "Ryan Gosling", "Jim Carrey", "Keanu Reeves", "The Weeknd"],
    currentMayor: "Olivia Chow",
    foundedYear: 1793,
    nickname: "The 6ix"
  },
  "vancouver": {
    population: "2.6 million",
    famousPeople: ["Ryan Reynolds", "Seth Rogen", "Michael J. Fox", "Pamela Anderson", "Cobie Smulders"],
    currentMayor: "Ken Sim",
    foundedYear: 1886,
    nickname: "Rain City"
  },
  "berlin": {
    population: "3.7 million",
    famousPeople: ["Marlene Dietrich", "Nina Hagen", "Til Schweiger", "Diane Kruger", "Daniel Brühl"],
    currentMayor: "Kai Wegner",
    foundedYear: 1237,
    nickname: "Grey City"
  },
  "rome": {
    population: "4.3 million",
    famousPeople: ["Monica Bellucci", "Roberto Benigni", "Sophia Loren", "Gina Lollobrigida", "Anna Magnani"],
    currentMayor: "Roberto Gualtieri",
    foundedYear: -753,
    nickname: "The Eternal City"
  },
  "vatican city": {
    population: "825",
    famousPeople: ["Swiss Guard Members", "Vatican Citizens", "Papal Staff"],
    currentMayor: "Pope Leo XIV",
    foundedYear: 1929,
    nickname: "The Holy See"
  },
  "fucking": {
    population: "104",
    famousPeople: ["Local Austrian residents", "Village council members", "Alpine farmers"],
    currentMayor: "Andrea Holzner",
    foundedYear: 1070,
    nickname: "Fugging (renamed 2020)"
  },
  "fucking city": {
    population: "104",
    famousPeople: ["Local Austrian residents", "Village council members", "Alpine farmers"],
    currentMayor: "Andrea Holzner",
    foundedYear: 1070,
    nickname: "Fugging (renamed 2020)"
  }
};

/**
 * Get facts for a city based on its name
 * @param cityName The name of the city
 * @returns City facts or null if not found
 */
export function getCityFacts(cityName: string): CityFacts | null {
  const normalizedName = cityName.toLowerCase().trim();
  
  // Direct match
  if (cityFactsDatabase[normalizedName]) {
    return cityFactsDatabase[normalizedName];
  }
  
  // Partial matches for common variations
  const partialMatches: Record<string, string> = {
    "nyc": "new york",
    "ny": "new york",
    "manhattan": "new york",
    "la": "los angeles",
    "sf": "san francisco",
    "san fran": "san francisco",
    "frisco": "san francisco",
    "chi": "chicago",
    "chi-town": "chicago",
    "t.o.": "toronto",
    "t-dot": "toronto",
    "van": "vancouver",
    "to": "toronto"
  };
  
  if (partialMatches[normalizedName]) {
    return cityFactsDatabase[partialMatches[normalizedName]];
  }
  
  return null;
}

/**
 * Check if we have facts for a given city
 * @param cityName The name of the city
 * @returns true if we have facts for this city
 */
export function hasCityFacts(cityName: string): boolean {
  return getCityFacts(cityName) !== null;
}