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

export interface PopularPlace {
  name: string;
  type: string;
  location: string;
  popularity: "Very High" | "High" | "Medium" | "Low";
  description?: string;
  visitorCount?: string;
}

export interface CityProblem {
  type: "Protests" | "Crime" | "Infrastructure";
  description: string;
  severity: "Critical" | "High" | "Moderate" | "Low";
  details?: string[];
  lastUpdated?: string;
}

export interface LocalJob {
  title: string;
  employer: string;
  neighborhood: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  sector: string;
  description: string;
  salary?: string;
  posted?: string;
}

export interface CityFacts {
  population: string;
  famousPeople: string[];
  currentMayor: string;
  foundedYear?: number;
  nickname?: string;
  whatsNew?: WhatsNewItem[];
  emergencyAlerts?: EmergencyAlert[];
  popularPlaces?: PopularPlace[];
  problems?: CityProblem[];
  localJobs?: LocalJob[];
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
    ],
    popularPlaces: [
      { name: "Times Square", type: "Shopping & Entertainment", location: "Midtown Manhattan", popularity: "Very High", description: "World's busiest pedestrian intersection with theaters, restaurants, and shops", visitorCount: "300,000+" },
      { name: "Central Park", type: "Park & Recreation", location: "Uptown Manhattan", popularity: "Very High", description: "Iconic 843-acre urban park with trails, lakes, and cultural attractions", visitorCount: "40,000+" },
      { name: "Brooklyn Bridge", type: "Landmark & Walkway", location: "Lower Manhattan to Brooklyn", popularity: "High", description: "Historic bridge with pedestrian path offering skyline views", visitorCount: "4,000+" },
      { name: "High Line", type: "Park & Restaurant Scene", location: "Chelsea & Meatpacking", popularity: "High", description: "Elevated park with art installations and dining venues", visitorCount: "8,000+" },
      { name: "SoHo Boutiques", type: "Shopping District", location: "South of Houston", popularity: "High", description: "Premium fashion and designer retail stores", visitorCount: "50,000+" },
      { name: "East Village Cafes", type: "Cafe & Dining", location: "Lower East Side", popularity: "Medium", description: "Trendy coffee shops and restaurants in bohemian neighborhood", visitorCount: "15,000+" }
    ],
    problems: [
      { type: "Crime", severity: "Moderate", description: "Theft and robbery incidents in high-traffic areas", details: ["15% increase in petty theft in Midtown", "Subway safety concerns during late hours", "Recommended: Travel in groups at night"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Significant pothole and road damage issues", details: ["500+ reported potholes in Manhattan", "Subway delays due to track maintenance", "Street flooding in Lower East Side"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Low", description: "Occasional demonstrations and rally activity", details: ["Weekly labor union gatherings", "Climate activism events on weekends"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Restaurant Server", employer: "The River Café", neighborhood: "Brooklyn", type: "Full-time", sector: "Hospitality", description: "Seeking experienced servers for upscale waterfront dining. Evening shifts available, tips included.", salary: "$18–$25/hr + tips", posted: "2 days ago" },
      { title: "Software Engineer", employer: "FinTech Startup", neighborhood: "Midtown Manhattan", type: "Full-time", sector: "Technology", description: "Build scalable payment systems with React and Node.js. 2+ years experience preferred.", salary: "$90,000–$130,000/yr", posted: "1 day ago" },
      { title: "Warehouse Associate", employer: "Amazon Fulfillment Center", neighborhood: "Queens", type: "Full-time", sector: "Transportation", description: "Packing, sorting, and shipping orders. No experience needed. Benefits included from day one.", salary: "$20.50/hr", posted: "Today" },
      { title: "Teaching Assistant", employer: "NYC Department of Education", neighborhood: "The Bronx", type: "Part-time", sector: "Education", description: "Support elementary school teachers and students. Ideal for education students.", salary: "$16–$18/hr", posted: "3 days ago" },
      { title: "Retail Sales Associate", employer: "Nike Flagship SoHo", neighborhood: "SoHo", type: "Part-time", sector: "Retail", description: "Assist customers, manage inventory, and represent the brand in a flagship store environment.", salary: "$17–$20/hr", posted: "Today" },
      { title: "Construction Laborer", employer: "Turner Construction", neighborhood: "Lower Manhattan", type: "Full-time", sector: "Construction", description: "General labor on commercial high-rise project. OSHA certification a plus but not required.", salary: "$25–$32/hr", posted: "2 days ago" }
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
    ],
    popularPlaces: [
      { name: "Harrods", type: "Luxury Department Store", location: "Knightsbridge", popularity: "Very High", description: "World-famous luxury shopping destination with premium brands", visitorCount: "15,000+" },
      { name: "Piccadilly Circus", type: "Shopping & Dining", location: "West End", popularity: "Very High", description: "Iconic public space with theaters, restaurants, and boutiques", visitorCount: "300,000+" },
      { name: "Borough Market", type: "Food Market", location: "Southwark", popularity: "High", description: "Historic food market with artisanal producers and restaurants", visitorCount: "100,000+" },
      { name: "Oxford Street", type: "Shopping District", location: "West End", popularity: "High", description: "Europe's busiest shopping street with major retailers", visitorCount: "500,000+" },
      { name: "Shoreditch Independent Shops", type: "Boutiques & Cafes", location: "East London", popularity: "Medium", description: "Trendy vintage and independent designer stores", visitorCount: "25,000+" },
      { name: "Covent Garden Market", type: "Shopping & Entertainment", location: "West End", popularity: "High", description: "Historic market with street performers and specialty shops", visitorCount: "40,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Underground rail maintenance and road reconstruction", details: ["Central Line disruptions through March", "Multiple A-road closures for repair work", "Pothole maintenance ongoing in West End"], lastUpdated: "March 4, 2026" },
      { type: "Crime", severity: "Moderate", description: "Street crime and theft in central areas", details: ["Pickpocketing in Oxford Street area", "Bike theft increasing in East London", "Recommended: Avoid Piccadilly area late at night"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Regular activism and demonstration activity", details: ["Environmental protests on weekends", "Workers' rights marches scheduled"], lastUpdated: "March 2, 2026" }
    ],
    localJobs: [
      { title: "Barista", employer: "Monmouth Coffee Company", neighborhood: "Borough Market, Southwark", type: "Full-time", sector: "Hospitality", description: "Craft specialty coffees at one of London's most beloved cafes. Experience preferred.", salary: "£12.50–£14/hr", posted: "Today" },
      { title: "Junior Web Developer", employer: "Digital Agency Shoreditch", neighborhood: "Shoreditch, East London", type: "Full-time", sector: "Technology", description: "HTML, CSS, JavaScript front-end role at a growing creative agency. Portfolio required.", salary: "£32,000–£40,000/yr", posted: "1 day ago" },
      { title: "NHS Healthcare Assistant", employer: "NHS Trust", neighborhood: "Camden", type: "Full-time", sector: "Healthcare", description: "Support nursing staff in a busy hospital ward. Full training provided for motivated applicants.", salary: "£24,000–£27,000/yr", posted: "2 days ago" },
      { title: "Retail Team Member", employer: "Marks & Spencer", neighborhood: "Oxford Street", type: "Part-time", sector: "Retail", description: "Customer-facing role in one of London's busiest department stores. Flexible hours available.", salary: "£12–£13.50/hr", posted: "Today" },
      { title: "Event Staff", employer: "ExCeL London Events", neighborhood: "Docklands", type: "Contract", sector: "Hospitality", description: "Set-up, hosting, and breakdown for large trade events. Weekend availability required.", salary: "£13/hr", posted: "3 days ago" },
      { title: "Graduate Finance Analyst", employer: "Barclays Bank", neighborhood: "Canary Wharf", type: "Internship", sector: "Finance", description: "12-month rotational program across investment banking divisions. Graduates only.", salary: "£38,000/yr", posted: "4 days ago" }
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
    ],
    popularPlaces: [
      { name: "Shibuya Crossing", type: "Shopping & Dining", location: "Shibuya", popularity: "Very High", description: "World's busiest pedestrian crossing surrounded by shops and restaurants", visitorCount: "500,000+" },
      { name: "Ginza Luxury Shopping", type: "Premium Retail", location: "Ginza", popularity: "Very High", description: "Upscale shopping district with international luxury brands", visitorCount: "200,000+" },
      { name: "Akihabara Electronics District", type: "Tech & Gaming", location: "Akihabara", popularity: "High", description: "Famous for electronics, anime, and gaming merchandise", visitorCount: "150,000+" },
      { name: "Senso-ji Temple & Market", type: "Cultural & Shopping", location: "Asakusa", popularity: "High", description: "Historic temple with traditional shops and street food", visitorCount: "100,000+" },
      { name: "Harajuku Fashion District", type: "Fashion & Youth Culture", location: "Harajuku", popularity: "High", description: "Trendy boutiques and vintage shops popular with young shoppers", visitorCount: "180,000+" },
      { name: "Ikebukuro Department Stores", type: "Shopping", location: "Ikebukuro", popularity: "Medium", description: "Major department stores and shopping complexes", visitorCount: "120,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Road and rail maintenance projects", details: ["Shinjuku station renovation in progress", "Multiple street reconstructions in Ginza", "Minor pothole repairs across wards"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Generally low crime rates with minor pickpocketing", details: ["Occasional purse snatching in crowded areas", "Bicycle theft in residential areas", "Overall safe for visitors"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Minimal protest activity", details: ["Occasional labor demonstrations", "Annual environmental marches"], lastUpdated: "February 28, 2026" }
    ],
    localJobs: [
      { title: "English Language Teacher", employer: "NOVA English Academy", neighborhood: "Shinjuku", type: "Full-time", sector: "Education", description: "Teach conversational English to adult students. Native or fluent English speakers welcome.", salary: "¥250,000/month", posted: "Today" },
      { title: "IT Systems Engineer", employer: "Sony Group", neighborhood: "Minato", type: "Full-time", sector: "Technology", description: "Maintain enterprise IT infrastructure for global media division. Japanese language skills a plus.", salary: "¥5,500,000–¥7,000,000/yr", posted: "2 days ago" },
      { title: "Hotel Concierge", employer: "Park Hyatt Tokyo", neighborhood: "Shinjuku", type: "Full-time", sector: "Hospitality", description: "Assist international guests with bookings, recommendations, and luxury services. English fluency required.", salary: "¥220,000/month", posted: "1 day ago" },
      { title: "Graphic Designer", employer: "Hakuhodo Ad Agency", neighborhood: "Akasaka", type: "Full-time", sector: "Media", description: "Create advertising visuals for major Japanese and international brands. Portfolio essential.", salary: "¥3,500,000–¥4,500,000/yr", posted: "3 days ago" },
      { title: "Retail Assistant (Part-time)", employer: "Uniqlo Ginza", neighborhood: "Ginza", type: "Part-time", sector: "Retail", description: "Assist customers in flagship store. Great for students or newcomers to Tokyo.", salary: "¥1,100–¥1,300/hr", posted: "Today" },
      { title: "Research Intern", employer: "University of Tokyo", neighborhood: "Bunkyo", type: "Internship", sector: "Education", description: "Support AI and robotics research labs. Programming skills in Python required.", salary: "¥150,000/month", posted: "5 days ago" }
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
    ],
    localJobs: [
      { title: "Sommelier", employer: "Le Grand Véfour", neighborhood: "Palais-Royal, 1st arr.", type: "Full-time", sector: "Hospitality", description: "Serve and recommend wines in a historic Michelin-starred restaurant. French language required.", salary: "€2,800–€3,500/month", posted: "Today" },
      { title: "Fashion Design Assistant", employer: "Chanel Studio", neighborhood: "8th arrondissement", type: "Full-time", sector: "Media", description: "Support senior designers on seasonal collections. Fashion degree and portfolio required.", salary: "€2,500–€3,200/month", posted: "2 days ago" },
      { title: "Museum Guide", employer: "Louvre Museum", neighborhood: "1st arrondissement", type: "Part-time", sector: "Education", description: "Lead tours in English, French or Spanish through world-class art collections. History knowledge required.", salary: "€14–€17/hr", posted: "1 day ago" },
      { title: "Software Engineer", employer: "BlaBlaCar", neighborhood: "Montparnasse, 14th arr.", type: "Full-time", sector: "Technology", description: "Build features for Europe's leading carpooling platform. Python and React experience needed.", salary: "€50,000–€70,000/yr", posted: "3 days ago" },
      { title: "Baker (Boulanger)", employer: "Poilâne Bakery", neighborhood: "Saint-Germain, 6th arr.", type: "Full-time", sector: "Hospitality", description: "Traditional French bread baking using wood-fired ovens. Experience with artisan baking preferred.", salary: "€1,900–€2,400/month", posted: "Today" },
      { title: "Finance Intern", employer: "BNP Paribas", neighborhood: "La Défense", type: "Internship", sector: "Finance", description: "6-month internship supporting investment banking analysts. Finance students in final year.", salary: "€1,200/month", posted: "4 days ago" }
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
    ],
    popularPlaces: [
      { name: "Bondi Beach", type: "Beach & Dining", location: "Bondi", popularity: "Very High", description: "Famous beach with restaurants, bars, and water sports", visitorCount: "40,000+" },
      { name: "Sydney Opera House", type: "Cultural Landmark", location: "Circular Quay", popularity: "Very High", description: "Iconic performing arts venue with dining and tour options", visitorCount: "8,000+" },
      { name: "Queen Victoria Building", type: "Shopping & Dining", location: "Central Business District", popularity: "High", description: "Historic building converted to premium shopping and dining", visitorCount: "50,000+" },
      { name: "Pitt Street Mall", type: "Shopping District", location: "Central Business District", popularity: "High", description: "Pedestrian shopping mall with flagship stores and cafes", visitorCount: "100,000+" },
      { name: "Surry Hills Brunch Scene", type: "Cafes & Restaurants", location: "Surry Hills", popularity: "Medium", description: "Trendy cafe culture with independent boutiques", visitorCount: "20,000+" },
      { name: "Barangaroo Reserve & Dining", type: "Waterfront & Restaurants", location: "Barangaroo", popularity: "High", description: "Waterfront precinct with fine dining and shopping", visitorCount: "30,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Road maintenance and coastal erosion concerns", details: ["Pothole repairs ongoing across CBD", "Bondi beachfront erosion management", "Parramatta train line upgrade work"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Drug-related activity and property crime", details: ["Kings Cross late-night safety concerns", "Vehicle break-ins in inner suburbs", "Recommended: Avoid certain areas after dark"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Occasional activism and community gatherings", details: ["Indigenous rights demonstrations", "Climate action events"], lastUpdated: "March 1, 2026" }
    ],
    localJobs: [
      { title: "Café Barista", employer: "Single O Coffee", neighborhood: "Surry Hills", type: "Part-time", sector: "Hospitality", description: "Specialty coffee role in a beloved local café. Latte art skills a bonus.", salary: "AUD $26–$30/hr", posted: "Today" },
      { title: "Registered Nurse", employer: "St Vincent's Hospital", neighborhood: "Darlinghurst", type: "Full-time", sector: "Healthcare", description: "Medical-surgical ward nursing. AHPRA registration required.", salary: "AUD $75,000–$90,000/yr", posted: "2 days ago" },
      { title: "Software Developer", employer: "Atlassian", neighborhood: "CBD", type: "Full-time", sector: "Technology", description: "Work on cloud collaboration tools used by millions worldwide. React and Java skills needed.", salary: "AUD $110,000–$145,000/yr", posted: "1 day ago" },
      { title: "Tour Guide", employer: "Bondi to Coogee Walks", neighborhood: "Bondi", type: "Part-time", sector: "Hospitality", description: "Guide visitors along the famous coastal walk. Great communication and passion for Sydney required.", salary: "AUD $28/hr", posted: "Today" },
      { title: "Finance Graduate", employer: "Commonwealth Bank", neighborhood: "Darling Harbour", type: "Internship", sector: "Finance", description: "12-month graduate program in retail or business banking. Open to commerce and economics graduates.", salary: "AUD $55,000/yr", posted: "3 days ago" },
      { title: "Construction Worker", employer: "Multiplex Constructions", neighborhood: "Parramatta", type: "Full-time", sector: "Construction", description: "General labourer for large-scale residential tower project. White Card required.", salary: "AUD $35–$45/hr", posted: "1 day ago" }
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
    ],
    popularPlaces: [
      { name: "The Magnificent Mile", type: "Shopping & Dining", location: "Downtown Chicago", popularity: "Very High", description: "Premier shopping district on North Michigan Avenue with luxury brands", visitorCount: "250,000+" },
      { name: "Willis Tower Skydeck", type: "Observation Deck", location: "Loop", popularity: "Very High", description: "Iconic building with observation deck and restaurants", visitorCount: "1,700,000+" },
      { name: "Millennium Park", type: "Park & Culture", location: "Downtown", popularity: "High", description: "Urban park with art installations, concerts, and dining", visitorCount: "25,000+" },
      { name: "Navy Pier", type: "Entertainment & Dining", location: "Downtown", popularity: "High", description: "Historic pier with restaurants, shops, and attractions", visitorCount: "8,000,000+" },
      { name: "Wicker Park Boutiques", type: "Shopping & Cafes", location: "Wicker Park", popularity: "Medium", description: "Vintage shops and independent retailers in bohemian neighborhood", visitorCount: "15,000+" },
      { name: "River North Galleries", type: "Art & Dining", location: "River North", popularity: "High", description: "Art galleries, restaurants, and upscale shopping", visitorCount: "40,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "Higher violent crime rates in certain neighborhoods", details: ["Gang-related activity in South and West sides", "Increased carjacking incidents", "Loop and downtown generally safe"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Extensive pothole and street damage issues", details: ["1000+ reported potholes citywide", "CTA train delays due to track work", "Spring flooding in low-lying areas"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Moderate", description: "Regular activism and demonstrations", details: ["Workers' rights and labor protests", "Social justice demonstrations", "Permit required for large gatherings"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Line Cook", employer: "Girl & the Goat", neighborhood: "West Loop", type: "Full-time", sector: "Hospitality", description: "Join the kitchen team at a James Beard Award-winning restaurant. Fast-paced, team-oriented environment.", salary: "$19–$24/hr", posted: "Today" },
      { title: "Social Worker", employer: "Chicago Department of Family Services", neighborhood: "South Side", type: "Full-time", sector: "Government", description: "Case management and community outreach for at-risk families. BSW or MSW required.", salary: "$48,000–$58,000/yr", posted: "2 days ago" },
      { title: "Data Analyst", employer: "Morningstar Inc.", neighborhood: "Loop", type: "Full-time", sector: "Finance", description: "Analyze investment data and build dashboards for financial research products. SQL and Python skills needed.", salary: "$70,000–$90,000/yr", posted: "1 day ago" },
      { title: "Bus Operator Trainee", employer: "Chicago Transit Authority (CTA)", neighborhood: "Citywide", type: "Full-time", sector: "Transportation", description: "No experience required. Full training, benefits, and pension provided. CDL preferred.", salary: "$25/hr + benefits", posted: "Today" },
      { title: "Pharmacy Technician", employer: "Advocate Health", neighborhood: "Lincoln Park", type: "Full-time", sector: "Healthcare", description: "Assist licensed pharmacists in a busy outpatient clinic. Certification preferred.", salary: "$20–$24/hr", posted: "3 days ago" },
      { title: "Marketing Intern", employer: "Leo Burnett Agency", neighborhood: "Streeterville", type: "Internship", sector: "Media", description: "Assist brand strategy team on consumer campaigns. Open to marketing and communications students.", salary: "$18/hr", posted: "4 days ago" }
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
 * Get popular places for a city
 * @param cityName The name of the city
 * @returns Array of popular places or empty array
 */
export function getPopularPlaces(cityName: string): PopularPlace[] {
  const facts = getCityFacts(cityName);
  return facts?.popularPlaces || [];
}

/**
 * Get city problems and issues
 * @param cityName The name of the city
 * @returns Array of city problems or empty array
 */
export function getCityProblems(cityName: string): CityProblem[] {
  const facts = getCityFacts(cityName);
  return facts?.problems || [];
}

/**
 * Get local job listings for a city
 * @param cityName The name of the city
 * @returns Array of local jobs or empty array
 */
export function getLocalJobs(cityName: string): LocalJob[] {
  const facts = getCityFacts(cityName);
  return facts?.localJobs || [];
}

/**
 * Check if we have facts for a given city
 * @param cityName The name of the city
 * @returns true if we have facts for this city
 */
export function hasCityFacts(cityName: string): boolean {
  return getCityFacts(cityName) !== null;
}