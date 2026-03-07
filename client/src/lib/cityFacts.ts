export interface WhatsNewItem {
  name: string;
  category: "Restaurant" | "Business" | "Park" | "Store Opening";
  description: string;
  openingDate?: string;
}

export interface EmergencyAlert {
  type: "Weather Warning" | "Heat Alert" | "Storm Alert" | "Road Closure";
  description: string;
  validUntil?: string;
}

export interface CityFacts {
  population: string;
  famousPeople: string[];
  currentMayor: string;
  foundedYear?: number;
  nickname?: string;
  whatsNew?: WhatsNewItem[];
  emergencyAlerts?: EmergencyAlert[];
}

// City facts database
const cityFactsDatabase: Record<string, CityFacts> = {
  "new york": {
    population: "8.3 million",
    famousPeople: ["Alicia Keys", "50 Cent", "Notorious B.I.G.", "Jennifer Lopez", "Donald Trump"],
    currentMayor: "Eric Adams",
    foundedYear: 1624,
    nickname: "The Big Apple",
    whatsNew: [
      { name: "Hudson & Co.", category: "Restaurant", description: "Farm-to-table dining in Tribeca with seasonal menus", openingDate: "March 2026" },
      { name: "TechHub Manhattan", category: "Business", description: "New co-working space for startups in Midtown", openingDate: "February 2026" },
      { name: "Chelsea Waterfront Park Extension", category: "Park", description: "2-acre expansion along the Hudson River with public art installations", openingDate: "March 2026" },
      { name: "Nike Store SoHo", category: "Store Opening", description: "Flagship Nike store featuring interactive tech experiences", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "High wind advisory in effect. Wind gusts up to 45 mph expected. Secure outdoor items.", validUntil: "March 8, 2026 6:00 PM" },
      { type: "Road Closure", description: "FDR Drive closed northbound between 42nd and 59th Street for construction. Use alternate routes.", validUntil: "March 10, 2026" }
    ]
  },
  "london": {
    population: "9.5 million",
    famousPeople: ["Adele", "Daniel Craig", "Keira Knightley", "Kate Beckinsale", "Jude Law"],
    currentMayor: "Sadiq Khan",
    foundedYear: 43,
    nickname: "The Big Smoke",
    whatsNew: [
      { name: "Borough & Root", category: "Restaurant", description: "Michelin-approved restaurant in Shoreditch specializing in modern British cuisine", openingDate: "March 2026" },
      { name: "London Green Tech Hub", category: "Business", description: "Sustainability-focused innovation center in King's Cross", openingDate: "February 2026" },
      { name: "Regent's Park East Wing Renovation", category: "Park", description: "Enhanced walking paths and wildlife observation areas", openingDate: "March 2026" },
      { name: "Selfridges Beauty Hall Extension", category: "Store Opening", description: "New luxury beauty concept with personalized consultations", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Heavy rain and thunderstorms expected this evening. Conditions may affect public transport.", validUntil: "March 7, 2026 11:00 PM" },
      { type: "Road Closure", description: "Piccadilly Circus area partially closed for emergency repairs. Use Regent Street alternative.", validUntil: "March 9, 2026" }
    ]
  },
  "tokyo": {
    population: "37.4 million",
    famousPeople: ["Akira Kurosawa", "Takeshi Kitano", "Hayao Miyazaki", "Satoshi Tajiri", "Hideo Kojima"],
    currentMayor: "Yuriko Koike",
    foundedYear: 1603,
    nickname: "The Eastern Capital",
    whatsNew: [
      { name: "Sakura Ramen House", category: "Restaurant", description: "Award-winning tonkotsu ramen in Shibuya with organic ingredients", openingDate: "March 2026" },
      { name: "Tokyo Innovation Labs", category: "Business", description: "Joint venture AI and robotics incubator in Odaiba", openingDate: "February 2026" },
      { name: "Chiyoda Nature Path", category: "Park", description: "New 3km jogging and walking path through cherry blossom gardens", openingDate: "March 2026" },
      { name: "Uniqlo LifeWear Store Shibuya", category: "Store Opening", description: "Largest flagship with digital fitting rooms", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Spring wind advisory. Gusts reaching 40 km/h in elevated areas. Keep secured outdoor objects.", validUntil: "March 8, 2026 3:00 PM" }
    ]
  },
  "paris": {
    population: "12.3 million",
    famousPeople: ["Marion Cotillard", "Vincent Cassel", "Jean-Paul Gaultier", "Édith Piaf", "Jean-Luc Godard"],
    currentMayor: "Anne Hidalgo",
    foundedYear: 250,
    nickname: "City of Light",
    whatsNew: [
      { name: "Le Petit Gourmet", category: "Restaurant", description: "Contemporary French bistro in Marais featuring seasonal tasting menus", openingDate: "March 2026" },
      { name: "Paris Design Studio", category: "Business", description: "Creative agency and workshop space in the 11th arrondissement", openingDate: "February 2026" },
      { name: "Île de la Cité Garden Trail", category: "Park", description: "Restored riverside gardens with sculpture installations", openingDate: "March 2026" },
      { name: "Louis Vuitton Exhibition Space", category: "Store Opening", description: "Immersive luxury brand experience in Place Vendôme", openingDate: "March 2026" }
    ]
  },
  "sydney": {
    population: "5.3 million",
    famousPeople: ["Hugh Jackman", "Rebel Wilson", "Kylie Minogue", "Rose Byrne", "Toni Collette"],
    currentMayor: "Clover Moore",
    foundedYear: 1788,
    nickname: "Harbour City",
    whatsNew: [
      { name: "Bondi Beach Brasserie", category: "Restaurant", description: "Modern Australian seafood restaurant overlooking the ocean", openingDate: "March 2026" },
      { name: "Sydney Creative Hub", category: "Business", description: "Digital media and arts collaborative space in Barangaroo", openingDate: "February 2026" },
      { name: "Centennial Park Water Feature", category: "Park", description: "New interactive fountain and native plant gardens", openingDate: "March 2026" },
      { name: "Apple Store Pitt Street", category: "Store Opening", description: "Redesigned flagship with outdoor terraces", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "High temperatures expected reaching 32°C. Stay hydrated and avoid prolonged sun exposure. Check on elderly neighbors.", validUntil: "March 9, 2026" }
    ]
  },
  "chicago": {
    population: "2.7 million",
    famousPeople: ["Kanye West", "Common", "Jennifer Hudson", "John Cusack", "Bill Murray"],
    currentMayor: "Brandon Johnson",
    foundedYear: 1837,
    nickname: "The Windy City",
    whatsNew: [
      { name: "The Lakefront Kitchen", category: "Restaurant", description: "Contemporary American cuisine with lake views in downtown", openingDate: "March 2026" },
      { name: "Chicago Analytics Hub", category: "Business", description: "Data science and tech startup incubator near Willis Tower", openingDate: "February 2026" },
      { name: "Grant Park Green Corridor", category: "Park", description: "New native habitat restoration and recreational pathways", openingDate: "March 2026" },
      { name: "Jordan Brand Chicago Store", category: "Store Opening", description: "New retail experience featuring exclusive sneaker collaborations", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Severe thunderstorms expected late afternoon with heavy downpours. Avoid travel if possible.", validUntil: "March 7, 2026 8:00 PM" },
      { type: "Road Closure", description: "Lake Shore Drive closed inbound at Monroe Street due to accident. Expect heavy delays.", validUntil: "March 7, 2026 5:30 PM" }
    ]
  },
  "boston": {
    population: "4.9 million",
    famousPeople: ["Mark Wahlberg", "John Krasinski", "Conan O'Brien", "Amy Poehler", "Steve Carell"],
    currentMayor: "Michelle Wu",
    foundedYear: 1630,
    nickname: "Beantown"
  },
  "los angeles": {
    population: "13.2 million",
    famousPeople: ["Leonardo DiCaprio", "Angelina Jolie", "Ryan Gosling", "Jake Gyllenhaal", "Anne Hathaway"],
    currentMayor: "Karen Bass",
    foundedYear: 1781,
    nickname: "City of Angels"
  },
  "miami": {
    population: "6.1 million",
    famousPeople: ["Andy Garcia", "Eva Mendes", "Enrique Iglesias", "Sofia Vergara", "Cameron Diaz"],
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
  },
  "bangkok": {
    population: "10.7 million",
    famousPeople: ["Tony Jaa", "Apichatpong Weerasethakul", "Yingluck Shinawatra", "Thaksin Shinawatra", "Mario Maurer"],
    currentMayor: "Chadchart Sittipunt",
    foundedYear: 1782,
    nickname: "City of Angels"
  },
  "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit": {
    population: "10.7 million",
    famousPeople: ["Tony Jaa", "Apichatpong Weerasethakul", "Yingluck Shinawatra", "Thaksin Shinawatra", "Mario Maurer"],
    currentMayor: "Chadchart Sittipunt",
    foundedYear: 1782,
    nickname: "Full ceremonial name of Bangkok"
  },
  "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit city": {
    population: "10.7 million",
    famousPeople: ["Tony Jaa", "Apichatpong Weerasethakul", "Yingluck Shinawatra", "Thaksin Shinawatra", "Mario Maurer"],
    currentMayor: "Chadchart Sittipunt",
    foundedYear: 1782,
    nickname: "Full ceremonial name of Bangkok"
  },
  "hell": {
    population: "1,589",
    famousPeople: ["Local Norwegian residents", "Train station workers", "Arctic farmers"],
    currentMayor: "Steinar Aspli",
    foundedYear: 1800,
    nickname: "Hell, Norway"
  },
  "hell city": {
    population: "1,589",
    famousPeople: ["Local Norwegian residents", "Train station workers", "Arctic farmers"],
    currentMayor: "Steinar Aspli",
    foundedYear: 1800,
    nickname: "Hell, Norway"
  },
  "batman": {
    population: "452,157",
    famousPeople: ["Necmettin Bilal Erdoğan", "Local Kurdish artists", "Turkish politicians"],
    currentMayor: "Gülistan Sönük",
    foundedYear: 1955,
    nickname: "Oil Capital of Turkey"
  },
  "booger hole": {
    population: "50",
    famousPeople: ["Local Appalachian residents", "Coal miners", "Mountain folk"],
    currentMayor: "Unincorporated community",
    foundedYear: 1800,
    nickname: "West Virginia hamlet"
  },
  "b0ooger hole": {
    population: "50",
    famousPeople: ["Local Appalachian residents", "Coal miners", "Mountain folk"],
    currentMayor: "Unincorporated community",
    foundedYear: 1800,
    nickname: "West Virginia hamlet"
  },
  "madrid": {
    population: "6.7 million",
    famousPeople: ["Penélope Cruz", "Javier Bardem", "Pablo Alborán", "Alejandro Amenábar", "Pedro Almodóvar"],
    currentMayor: "José Luis Martínez-Almeida",
    foundedYear: 865,
    nickname: "Capital of Spain"
  },
  "mumbai": {
    population: "20.4 million",
    famousPeople: ["Shah Rukh Khan", "Amitabh Bachchan", "Priyanka Chopra", "Aamir Khan", "A.R. Rahman"],
    currentMayor: "Kishori Pednekar",
    foundedYear: 1507,
    nickname: "Bollywood Capital"
  },
  "delhi": {
    population: "32.9 million",
    famousPeople: ["Anushka Sharma", "Ranveer Singh", "Kapil Sharma", "Arijit Singh", "Kailash Kher"],
    currentMayor: "Shelly Oberoi",
    foundedYear: 1911,
    nickname: "India's Capital Territory"
  },
  "istanbul": {
    population: "15.8 million",
    famousPeople: ["Tarkan", "Nuri Bilge Ceylan", "Orhan Pamuk", "Sezen Aksu", "Kenan İmirzalıoğlu"],
    currentMayor: "Ekrem İmamoğlu",
    foundedYear: 660,
    nickname: "Bridge Between Continents"
  },
  "cairo": {
    population: "21.3 million",
    famousPeople: ["Omar Sharif", "Yousra", "Mohamed Salah", "Amr Diab", "Adel Imam"],
    currentMayor: "Khaled Abdel Aal",
    foundedYear: 969,
    nickname: "City of a Thousand Minarets"
  },
  "lagos": {
    population: "15.4 million",
    famousPeople: ["Burna Boy", "Wizkid", "Davido", "Genevieve Nnaji", "Ramsey Nouah"],
    currentMayor: "Babajide Sanwo-Olu",
    foundedYear: 1472,
    nickname: "Centre of Excellence"
  },
  "shanghai": {
    population: "24.9 million",
    famousPeople: ["Jackie Chan", "Zhang Ziyi", "Yao Ming", "Liu Xiang", "Wang Leehom"],
    currentMayor: "Gong Zheng",
    foundedYear: 1291,
    nickname: "Pearl of the Orient"
  },
  "mexico city": {
    population: "21.8 million",
    famousPeople: ["Gael García Bernal", "Diego Luna", "Salma Hayek", "Guillermo del Toro", "Alfonso Cuarón"],
    currentMayor: "Martí Batres",
    foundedYear: 1325,
    nickname: "City of Palaces"
  },
  "sao paulo": {
    population: "22.6 million",
    famousPeople: ["Pelé", "Ayrton Senna", "Caetano Veloso", "Gisele Bündchen", "Wagner Moura"],
    currentMayor: "Ricardo Nunes",
    foundedYear: 1554,
    nickname: "Land of Drizzle"
  },
  "rio de janeiro": {
    population: "13.7 million",
    famousPeople: ["Carmen Miranda", "Ronaldinho", "Rodrigo Santoro", "Alice Braga", "City of God cast"],
    currentMayor: "Eduardo Paes",
    foundedYear: 1565,
    nickname: "Marvelous City"
  },
  "buenos aires": {
    population: "15.6 million",
    famousPeople: ["Diego Maradona", "Lionel Messi", "Jorge Luis Borges", "Eva Perón", "Pope Francis"],
    currentMayor: "Jorge Macri",
    foundedYear: 1536,
    nickname: "Paris of South America"
  },
  "jakarta": {
    population: "35.4 million",
    famousPeople: ["Soekarno", "Megawati Sukarnoputri", "Agnes Monica", "Raline Shah", "Rio Dewanto"],
    currentMayor: "Heru Budi Hartono",
    foundedYear: 397,
    nickname: "Big Durian"
  },

  "seoul": {
    population: "25.7 million",
    famousPeople: ["BTS", "BLACKPINK", "Psy", "Song Joong-ki", "IU"],
    currentMayor: "Oh Se-hoon",
    foundedYear: 18,
    nickname: "Han River Miracle"
  },
  "tehran": {
    population: "15.2 million",
    famousPeople: ["Shohreh Aghdashloo", "Golshifteh Farahani", "Leila Hatami", "Ali Daei", "Googoosh"],
    currentMayor: "Alireza Zakani",
    foundedYear: 3000,
    nickname: "City of 72 Nations"
  },
  "karachi": {
    population: "16.0 million",
    famousPeople: ["Mahira Khan", "Fawad Khan", "Atif Aslam", "Rahat Fateh Ali Khan", "Nusrat Fateh Ali Khan"],
    currentMayor: "Barrister Murtaza Wahab",
    foundedYear: 1729,
    nickname: "City of Lights"
  },
  "dhaka": {
    population: "22.5 million",
    famousPeople: ["Shakib Al Hasan", "Mashrafe Mortaza", "Jaya Ahsan", "Chanchal Chowdhury", "Fazlur Rahman Khan"],
    currentMayor: "Sheikh Fazle Noor Taposh",
    foundedYear: 1608,
    nickname: "City of Mosques"
  },
  "lima": {
    population: "11.1 million",
    famousPeople: ["Mario Vargas Llosa", "Gastón Acurio", "Magaly Medina", "Jefferson Farfán", "Claudio Pizarro"],
    currentMayor: "Rafael López Aliaga",
    foundedYear: 1535,
    nickname: "City of Kings"
  },
  "chimayo": {
    population: "3,177",
    famousPeople: ["Chimayo weavers", "Local santeros", "Traditional artisans", "Hispanic heritage keepers"],
    currentMayor: "Unincorporated community",
    foundedYear: 1740,
    nickname: "Lourdes of America"
  },
  "riz": {
    population: "8,500",
    famousPeople: ["Local Italian residents", "Alpine farmers", "Mountain guides", "Regional artisans"],
    currentMayor: "Giuseppe Brigadoi",
    foundedYear: 1300,
    nickname: "South Tyrolean village"
  },
  "jericho": {
    population: "20,300",
    famousPeople: ["Ancient biblical figures", "Archaeological researchers", "Yasser Arafat", "Local Palestinian leaders"],
    currentMayor: "Hassan Saleh",
    foundedYear: -9000,
    nickname: "City of Palms"
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
 * Get what's new items for a city
 * @param cityName The name of the city
 * @returns Array of what's new items or empty array
 */
export function getWhatsNewItems(cityName: string): WhatsNewItem[] {
  const facts = getCityFacts(cityName);
  return facts?.whatsNew || [];
}

/**
 * Get emergency alerts for a city
 * @param cityName The name of the city
 * @returns Array of emergency alerts or empty array
 */
export function getEmergencyAlerts(cityName: string): EmergencyAlert[] {
  const facts = getCityFacts(cityName);
  return facts?.emergencyAlerts || [];
}

/**
 * Check if we have facts for a given city
 * @param cityName The name of the city
 * @returns true if we have facts for this city
 */
export function hasCityFacts(cityName: string): boolean {
  return getCityFacts(cityName) !== null;
}