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
    nickname: "Beantown",
    whatsNew: [
      { name: "The Oyster & Ale", category: "Restaurant", description: "New seafood gastropub near Faneuil Hall with 20 New England craft beers on tap", openingDate: "March 2026" },
      { name: "Boston BioInnovate Hub", category: "Business", description: "Life sciences co-working space in Kendall Square supporting startup researchers", openingDate: "February 2026" },
      { name: "Esplanade Riverside Trail", category: "Park", description: "Expanded Charles River walking path with new benches and native plantings", openingDate: "March 2026" },
      { name: "New Balance Flagship Newbury St.", category: "Store Opening", description: "First full-line flagship store from the Boston-based sportswear brand", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Winter storm watch issued. Up to 8 inches of snow possible overnight. Drive only if necessary.", validUntil: "March 9, 2026 6:00 AM" }
    ],
    popularPlaces: [
      { name: "Faneuil Hall Marketplace", type: "Shopping & Dining", location: "Downtown", popularity: "Very High", description: "Historic marketplace with shops, restaurants, and street performers", visitorCount: "18,000,000+" },
      { name: "Newbury Street", type: "Shopping & Dining", location: "Back Bay", popularity: "High", description: "Upscale shopping street with boutiques, galleries, and cafes", visitorCount: "30,000+" },
      { name: "Harvard Square", type: "Shopping & Culture", location: "Cambridge", popularity: "High", description: "Eclectic shops, bookstores, and restaurants near Harvard University", visitorCount: "20,000+" },
      { name: "North End Restaurants", type: "Dining", location: "North End", popularity: "High", description: "Boston's Italian neighborhood packed with trattorias and bakeries", visitorCount: "25,000+" },
      { name: "South End Markets", type: "Cafes & Boutiques", location: "South End", popularity: "Medium", description: "Artisan food vendors and independent boutique stores", visitorCount: "12,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Aging roads and frequent winter damage", details: ["Pothole season after winter freeze-thaw", "Green Line delays due to old track systems", "Big Dig tunnels require ongoing maintenance"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Generally safe with minor property crimes", details: ["Bike theft in Cambridge and Fenway", "Occasional package theft in residential neighborhoods"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Low", description: "University-area activism and civic demonstrations", details: ["Student-led rallies near MIT and Harvard", "Labor union meetings monthly"], lastUpdated: "February 25, 2026" }
    ],
    localJobs: [
      { title: "Lab Research Technician", employer: "Mass General Hospital", neighborhood: "Beacon Hill", type: "Full-time", sector: "Healthcare", description: "Support biomedical research team. Biology or chemistry background preferred.", salary: "$48,000–$60,000/yr", posted: "Today" },
      { title: "Barista", employer: "George Howell Coffee", neighborhood: "Godfrey Hotel, Downtown", type: "Part-time", sector: "Hospitality", description: "Specialty espresso bar in a boutique hotel. Coffee experience preferred.", salary: "$16–$18/hr + tips", posted: "1 day ago" },
      { title: "Software Engineer", employer: "HubSpot", neighborhood: "Cambridge", type: "Full-time", sector: "Technology", description: "Build marketing software used by 100k+ businesses. React and Python required.", salary: "$95,000–$135,000/yr", posted: "2 days ago" },
      { title: "MBTA Transit Officer", employer: "Massachusetts Bay Transit Authority", neighborhood: "Citywide", type: "Full-time", sector: "Government", description: "Patrol transit stations and ensure passenger safety. Benefits and pension included.", salary: "$58,000–$72,000/yr", posted: "Today" },
      { title: "Prep Cook", employer: "Island Creek Oyster Bar", neighborhood: "Kenmore Square", type: "Full-time", sector: "Hospitality", description: "Busy seafood kitchen near Fenway Park. Culinary experience preferred.", salary: "$18–$22/hr", posted: "3 days ago" }
    ]
  },
  "los angeles": {
    population: "13.2 million",
    famousPeople: ["Leonardo DiCaprio", "Angelina Jolie", "Ryan Gosling", "Jake Gyllenhaal", "Anne Hathaway"],
    currentMayor: "Karen Bass",
    foundedYear: 1781,
    nickname: "City of Angels",
    whatsNew: [
      { name: "Malibu Fish House", category: "Restaurant", description: "Oceanfront seafood dining with locally-caught menu and sunset terrace", openingDate: "March 2026" },
      { name: "SunTech Creative Campus", category: "Business", description: "Entertainment and tech co-working space in Culver City", openingDate: "February 2026" },
      { name: "Griffith Park Wildflower Trail", category: "Park", description: "New seasonal wildflower trail through the eastern slopes of Griffith Park", openingDate: "March 2026" },
      { name: "Sporty & Rich Melrose", category: "Store Opening", description: "Vintage-inspired fashion boutique in the heart of Melrose Avenue", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Red Flag Warning in effect. Low humidity and gusty winds increase wildfire risk. No outdoor burning.", validUntil: "March 10, 2026 8:00 PM" },
      { type: "Road Closure", description: "Pacific Coast Highway restricted near Malibu due to mudslide cleanup. Allow extra time.", validUntil: "March 12, 2026" }
    ],
    popularPlaces: [
      { name: "Venice Beach Boardwalk", type: "Beach & Shopping", location: "Venice", popularity: "Very High", description: "Famous boardwalk with street vendors, performers, and muscle beach", visitorCount: "30,000+" },
      { name: "The Grove", type: "Shopping & Dining", location: "Mid-Wilshire", popularity: "Very High", description: "Upscale outdoor shopping center with major brands and restaurants", visitorCount: "18,000,000+" },
      { name: "Hollywood Boulevard", type: "Entertainment & Shopping", location: "Hollywood", popularity: "High", description: "Walk of Fame, TCL Theatre, and souvenir shops", visitorCount: "10,000,000+" },
      { name: "Abbot Kinney Blvd", type: "Boutiques & Cafes", location: "Venice", popularity: "High", description: "Trendy street of independent boutiques, galleries, and coffee shops", visitorCount: "20,000+" },
      { name: "Rodeo Drive", type: "Luxury Shopping", location: "Beverly Hills", popularity: "High", description: "World-famous luxury fashion street with Chanel, Gucci, Louis Vuitton", visitorCount: "15,000+" },
      { name: "Koreatown Restaurants", type: "Dining & Karaoke", location: "Koreatown", popularity: "Medium", description: "24-hour dining, karaoke bars, and Korean BBQ restaurants", visitorCount: "40,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Gridlock traffic and crumbling road infrastructure", details: ["Worst traffic congestion in the US", "500+ potholes reported monthly", "Metro expansion delays affecting commuters"], lastUpdated: "March 6, 2026" },
      { type: "Crime", severity: "Moderate", description: "Property crime and homeless-related incidents", details: ["Car break-ins common in tourist areas", "Catalytic converter theft widespread", "Skid Row area has elevated safety concerns"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Moderate", description: "Frequent large-scale demonstrations", details: ["Immigration policy protests near federal buildings", "Entertainment industry union demonstrations", "Permit-required gatherings in downtown"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Film Production Assistant", employer: "Universal Pictures", neighborhood: "Universal City", type: "Contract", sector: "Media", description: "On-set support for major studio productions. Long hours and fast pace. Entry-level friendly.", salary: "$18–$22/hr", posted: "Today" },
      { title: "Personal Trainer", employer: "Equinox Fitness", neighborhood: "West Hollywood", type: "Part-time", sector: "Hospitality", description: "Train clients in a premium gym setting. NASM or ACE certification required.", salary: "$35–$60/hr", posted: "1 day ago" },
      { title: "Software Engineer", employer: "Snap Inc.", neighborhood: "Santa Monica", type: "Full-time", sector: "Technology", description: "Work on Snapchat features used by 400M users. 3+ years of mobile development.", salary: "$130,000–$180,000/yr", posted: "2 days ago" },
      { title: "Server", employer: "Nobu Malibu", neighborhood: "Malibu", type: "Full-time", sector: "Hospitality", description: "Fine dining server at celebrity-frequented restaurant. Experience required.", salary: "$25–$40/hr + tips", posted: "Today" },
      { title: "Social Media Manager", employer: "Fashion Nova", neighborhood: "Los Angeles", type: "Full-time", sector: "Media", description: "Manage brand presence across Instagram, TikTok, and YouTube. Portfolio required.", salary: "$55,000–$75,000/yr", posted: "3 days ago" }
    ]
  },
  "miami": {
    population: "6.1 million",
    famousPeople: ["Andy Garcia", "Eva Mendes", "Enrique Iglesias", "Sofia Vergara", "Cameron Diaz"],
    currentMayor: "Francis Suarez",
    foundedYear: 1896,
    nickname: "Magic City",
    whatsNew: [
      { name: "Brickell Bay Grill", category: "Restaurant", description: "Waterfront Latin fusion dining with rooftop terrace and live music", openingDate: "March 2026" },
      { name: "Miami Crypto Hub", category: "Business", description: "Blockchain and fintech startup incubator in Brickell financial district", openingDate: "February 2026" },
      { name: "Bayfront Park Expansion", category: "Park", description: "New waterfront amphitheater space and landscaped gardens", openingDate: "March 2026" },
      { name: "Sportwear Wynwood", category: "Store Opening", description: "Street fashion concept store in the heart of the Wynwood arts district", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "Extreme heat expected. Temperatures reaching 38°C. Stay hydrated and limit sun exposure between 11am–4pm.", validUntil: "March 11, 2026" }
    ],
    popularPlaces: [
      { name: "South Beach", type: "Beach & Nightlife", location: "Miami Beach", popularity: "Very High", description: "Famous white sand beach with Art Deco architecture, bars, and clubs", visitorCount: "50,000+" },
      { name: "Wynwood Walls", type: "Art & Dining", location: "Wynwood", popularity: "Very High", description: "Outdoor street art museum surrounded by galleries and trendy restaurants", visitorCount: "300,000+" },
      { name: "Bayside Marketplace", type: "Shopping & Entertainment", location: "Downtown", popularity: "High", description: "Waterfront shopping center with restaurants and live music", visitorCount: "15,000,000+" },
      { name: "Miracle Mile", type: "Shopping & Dining", location: "Coral Gables", popularity: "High", description: "Charming pedestrian shopping street with boutiques and restaurants", visitorCount: "10,000+" },
      { name: "Little Havana", type: "Cultural Dining", location: "Little Havana", popularity: "Medium", description: "Cuban-American neighborhood with cafes, cigar shops, and cultural venues", visitorCount: "20,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Sea level rise and flooding affecting roads", details: ["King tide flooding in South Beach and Brickell", "Stormwater drainage overwhelmed", "Ongoing seawall construction projects"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Vehicle theft and tourist-targeted theft", details: ["Rental car break-ins near beach areas", "Scooter theft in Brickell", "Pickpocketing on Ocean Drive at night"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Occasional political and social demonstrations", details: ["Housing affordability protests", "Climate change sea-level demonstrations"], lastUpdated: "March 1, 2026" }
    ],
    localJobs: [
      { title: "Hotel Front Desk Agent", employer: "Fontainebleau Miami Beach", neighborhood: "Miami Beach", type: "Full-time", sector: "Hospitality", description: "Welcome guests at an iconic luxury resort. Bilingual (English/Spanish) preferred.", salary: "$18–$22/hr", posted: "Today" },
      { title: "Yacht Deckhand", employer: "Miami Yacht Charters", neighborhood: "Coconut Grove Marina", type: "Full-time", sector: "Transportation", description: "Assist with luxury yacht operations. USCG license a plus but will train.", salary: "$20–$28/hr", posted: "2 days ago" },
      { title: "Crypto Developer", employer: "FinTech Brickell", neighborhood: "Brickell", type: "Full-time", sector: "Technology", description: "Build DeFi and blockchain applications. Solidity and Ethereum experience.", salary: "$110,000–$160,000/yr", posted: "1 day ago" },
      { title: "Bartender", employer: "LIV Nightclub", neighborhood: "Miami Beach", type: "Part-time", sector: "Hospitality", description: "Serve high-volume cocktails in one of the world's most famous clubs. Experience required.", salary: "$25–$50/hr + tips", posted: "Today" },
      { title: "Real Estate Agent (Trainee)", employer: "Douglas Elliman", neighborhood: "Brickell", type: "Full-time", sector: "Finance", description: "Train to sell luxury condos and waterfront properties. Florida RE license required.", salary: "Commission-based", posted: "3 days ago" }
    ]
  },
  "seattle": {
    population: "4.0 million",
    famousPeople: ["Bill Gates", "Jeff Bezos", "Kurt Cobain", "Macklemore", "Chris Cornell"],
    currentMayor: "Bruce Harrell",
    foundedYear: 1851,
    nickname: "Emerald City",
    whatsNew: [
      { name: "Pike Place Salmon Bar", category: "Restaurant", description: "New oyster and salmon bar inside Pike Place Market serving Pacific Northwest seafood", openingDate: "March 2026" },
      { name: "Seattle AI Campus", category: "Business", description: "Microsoft-backed AI research center near South Lake Union", openingDate: "February 2026" },
      { name: "Discovery Park Trail Loop", category: "Park", description: "Newly paved 2.8-mile loop trail with forest and Puget Sound viewpoints", openingDate: "March 2026" },
      { name: "REI Co-op Capitol Hill", category: "Store Opening", description: "Expanded outdoor gear flagship with gear rental program and climbing wall", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Atmospheric river event bringing heavy rain and gusty winds. Landslide risk elevated in hillside areas.", validUntil: "March 9, 2026" }
    ],
    popularPlaces: [
      { name: "Pike Place Market", type: "Food Market & Shopping", location: "Downtown", popularity: "Very High", description: "Iconic waterfront farmers market with fish throwing, produce, and local crafts", visitorCount: "10,000,000+" },
      { name: "Capitol Hill Bars & Restaurants", type: "Dining & Nightlife", location: "Capitol Hill", popularity: "High", description: "Vibrant bar and restaurant scene with indie music venues", visitorCount: "20,000+" },
      { name: "South Lake Union Tech District", type: "Dining & Retail", location: "South Lake Union", popularity: "High", description: "Amazon HQ neighborhood with restaurants and shops serving tech workers", visitorCount: "30,000+" },
      { name: "Fremont Sunday Market", type: "Vintage & Crafts", location: "Fremont", popularity: "Medium", description: "Outdoor vintage and handmade goods market in quirky Fremont neighborhood", visitorCount: "8,000+" },
      { name: "Space Needle Area", type: "Landmark & Dining", location: "Seattle Center", popularity: "Very High", description: "Iconic tower surrounded by restaurants, museums, and the Chihuly Garden", visitorCount: "1,300,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Road damage from rain and ongoing transit construction", details: ["I-5 and SR-99 congestion worsening", "Light rail expansion causing detours downtown", "Pothole season during heavy rainfall"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Property crime and open drug use in some areas", details: ["Car break-ins frequent downtown and Capitol Hill", "Open drug use near Pike Street area", "Catalytic converter theft rising"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Occasional tech worker and housing demonstrations", details: ["Amazon headquarters demonstrations", "Affordable housing marches in Capitol Hill"], lastUpdated: "February 28, 2026" }
    ],
    localJobs: [
      { title: "Barista", employer: "Starbucks Reserve Roastery", neighborhood: "Capitol Hill", type: "Full-time", sector: "Hospitality", description: "Craft premium coffee experiences at the flagship Starbucks location. Coffee certification provided.", salary: "$19–$22/hr + tips", posted: "Today" },
      { title: "Software Development Engineer", employer: "Amazon", neighborhood: "South Lake Union", type: "Full-time", sector: "Technology", description: "Work on AWS or Alexa products at global HQ. CS degree or equivalent required.", salary: "$140,000–$200,000/yr", posted: "2 days ago" },
      { title: "Marine Biologist Technician", employer: "NOAA Northwest Fisheries", neighborhood: "Montlake", type: "Full-time", sector: "Government", description: "Support Pacific salmon research and monitoring. Biology degree preferred.", salary: "$52,000–$68,000/yr", posted: "3 days ago" },
      { title: "Outdoor Gear Sales", employer: "REI Flagship", neighborhood: "SoDo", type: "Part-time", sector: "Retail", description: "Help customers find hiking, camping, and kayaking gear. Outdoor enthusiasm required.", salary: "$18–$21/hr", posted: "Today" },
      { title: "Restaurant Line Cook", employer: "Canlis", neighborhood: "Queen Anne", type: "Full-time", sector: "Hospitality", description: "Fine dining kitchen in one of Seattle's most acclaimed restaurants. Experience essential.", salary: "$22–$28/hr", posted: "1 day ago" }
    ]
  },
  "san francisco": {
    population: "4.7 million",
    famousPeople: ["Mark Zuckerberg", "Steve Jobs", "Danny Glover", "Robin Williams", "Sean Penn"],
    currentMayor: "London Breed",
    foundedYear: 1776,
    nickname: "The Golden City",
    whatsNew: [
      { name: "Mission Taqueria Nueva", category: "Restaurant", description: "Modern Mexican dining in the Mission District with handmade tortillas and agave cocktails", openingDate: "March 2026" },
      { name: "SF Climate Tech Hub", category: "Business", description: "Clean energy startup accelerator in the Dogpatch innovation district", openingDate: "February 2026" },
      { name: "Crissy Field West Extension", category: "Park", description: "New shoreline park with restored marshlands and picnic areas", openingDate: "March 2026" },
      { name: "Patagonia Flagship SF", category: "Store Opening", description: "Expanded outdoor and sustainability-focused retail experience on Market Street", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Dense fog advisory. Visibility below 200m near the Bay Bridge and Golden Gate. Drive with caution.", validUntil: "March 8, 2026 11:00 AM" }
    ],
    popularPlaces: [
      { name: "Fisherman's Wharf", type: "Dining & Shopping", location: "Fisherman's Wharf", popularity: "Very High", description: "Waterfront area with seafood restaurants, souvenir shops, and sea lions", visitorCount: "12,000,000+" },
      { name: "Golden Gate Park", type: "Park & Recreation", location: "Richmond District", popularity: "Very High", description: "1000-acre park with museums, gardens, lakes, and cycling paths", visitorCount: "13,000,000+" },
      { name: "Union Square", type: "Shopping & Dining", location: "Downtown", popularity: "High", description: "Upscale shopping hub with luxury brands and department stores", visitorCount: "25,000,000+" },
      { name: "Castro District", type: "Restaurants & Boutiques", location: "Castro", popularity: "High", description: "Vibrant neighborhood with unique shops, bars, and cultural venues", visitorCount: "15,000+" },
      { name: "Haight-Ashbury", type: "Vintage & Cafes", location: "Haight", popularity: "Medium", description: "Iconic counterculture neighborhood with vintage shops and eclectic cafes", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "High theft and drug-related activity in central areas", details: ["Organized retail theft rings targeting downtown stores", "Open drug use in the Tenderloin", "Vehicle break-ins among highest in the US"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "Moderate", description: "Aging Muni transit and pothole damage", details: ["Muni Metro delays due to outdated infrastructure", "Pothole complaints citywide after storms", "Bay Bridge approach road work continuing"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Moderate", description: "Frequent tech industry and housing demonstrations", details: ["Anti-tech gentrification marches", "Housing affordability rallies", "Gig worker rights demonstrations"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Software Engineer", employer: "Salesforce", neighborhood: "SoMa", type: "Full-time", sector: "Technology", description: "Build enterprise cloud applications. Java or Python backend experience required.", salary: "$140,000–$195,000/yr", posted: "Today" },
      { title: "Sous Chef", employer: "Zuni Café", neighborhood: "Hayes Valley", type: "Full-time", sector: "Hospitality", description: "Support executive chef at an SF institution. 3+ years experience in fine dining kitchen.", salary: "$28–$36/hr", posted: "2 days ago" },
      { title: "Muni Bus Operator", employer: "SFMTA", neighborhood: "Citywide", type: "Full-time", sector: "Government", description: "Drive city buses across San Francisco. Full training, benefits, and pension provided.", salary: "$31–$38/hr", posted: "Today" },
      { title: "Startup Recruiter", employer: "Y Combinator Alumni Startup", neighborhood: "SoMa", type: "Full-time", sector: "Technology", description: "Source and hire engineers for Series A startup. 2+ years in tech recruiting.", salary: "$75,000–$100,000/yr", posted: "1 day ago" },
      { title: "Barista", employer: "Sightglass Coffee", neighborhood: "SoMa", type: "Part-time", sector: "Hospitality", description: "Specialty coffee shop beloved by the tech community. Coffee experience preferred.", salary: "$18–$21/hr + tips", posted: "3 days ago" }
    ]
  },
  "toronto": {
    population: "6.2 million",
    famousPeople: ["Drake", "Ryan Gosling", "Jim Carrey", "Keanu Reeves", "The Weeknd"],
    currentMayor: "Olivia Chow",
    foundedYear: 1793,
    nickname: "The 6ix",
    whatsNew: [
      { name: "Ossington Ave Wine Bar", category: "Restaurant", description: "Natural wine bar and charcuterie in the Ossington dining strip", openingDate: "March 2026" },
      { name: "MaRS Innovation Centre Expansion", category: "Business", description: "New wing for health tech startups in the Discovery District", openingDate: "February 2026" },
      { name: "High Park Cherry Blossom Path", category: "Park", description: "Restored Japanese cherry blossom trail with new viewing platforms", openingDate: "March 2026" },
      { name: "Drake General Store Kensington", category: "Store Opening", description: "Canadian lifestyle brand opens new location in Kensington Market", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Winter storm warning. Heavy snow 15–25cm expected overnight. Avoid travel if possible.", validUntil: "March 9, 2026 8:00 AM" }
    ],
    popularPlaces: [
      { name: "Kensington Market", type: "Shopping & Cafes", location: "Downtown West", popularity: "High", description: "Eclectic neighbourhood with vintage shops, cafes, and international food stalls", visitorCount: "10,000+" },
      { name: "Distillery District", type: "Art & Dining", location: "East Downtown", popularity: "Very High", description: "Historic Victorian buildings housing galleries, restaurants, and boutiques", visitorCount: "4,000,000+" },
      { name: "Queen Street West", type: "Shopping & Nightlife", location: "Queen West", popularity: "High", description: "Trendy strip with fashion boutiques, bars, and live music venues", visitorCount: "25,000+" },
      { name: "CF Toronto Eaton Centre", type: "Shopping Mall", location: "Downtown", popularity: "Very High", description: "Massive downtown mall with 250+ stores and restaurants", visitorCount: "50,000,000+" },
      { name: "St. Lawrence Market", type: "Food Market", location: "Old Town", popularity: "High", description: "Award-winning food market with hundreds of vendors and local produce", visitorCount: "120,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Chronic transit delays and pothole damage from winter", details: ["TTC subway signal failures causing delays", "Thousands of potholes after freeze-thaw", "Highway 401 construction zone congestion"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Rise in violent incidents and property crime", details: ["Carjackings up 30% year-over-year", "Condo break-ins in downtown towers", "Gang activity in some suburban areas"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Regular civic demonstrations", details: ["Tenant rights housing protests", "Anti-condo development rallies"], lastUpdated: "March 2, 2026" }
    ],
    localJobs: [
      { title: "Barista", employer: "Pilot Coffee Roasters", neighborhood: "Liberty Village", type: "Part-time", sector: "Hospitality", description: "Specialty coffee shop with a passionate team. Latte art skills a strong asset.", salary: "CAD $17–$20/hr", posted: "Today" },
      { title: "Software Developer", employer: "Shopify", neighborhood: "Remote / Toronto", type: "Full-time", sector: "Technology", description: "Build e-commerce tools for millions of merchants worldwide. React or Ruby on Rails.", salary: "CAD $100,000–$150,000/yr", posted: "1 day ago" },
      { title: "Registered Nurse", employer: "Toronto General Hospital (UHN)", neighborhood: "University Ave", type: "Full-time", sector: "Healthcare", description: "Cardiac care unit nursing. CNO registration required.", salary: "CAD $78,000–$95,000/yr", posted: "2 days ago" },
      { title: "TTC Bus Driver", employer: "Toronto Transit Commission", neighborhood: "Citywide", type: "Full-time", sector: "Transportation", description: "Drive city buses on established routes. Full training provided. DZ licence required.", salary: "CAD $32–$40/hr", posted: "Today" },
      { title: "Retail Associate", employer: "Indigo Books & Music", neighborhood: "Eaton Centre", type: "Part-time", sector: "Retail", description: "Assist customers with books, gifts, and lifestyle products at Canada's largest bookstore.", salary: "CAD $17/hr", posted: "3 days ago" }
    ]
  },
  "vancouver": {
    population: "2.6 million",
    famousPeople: ["Ryan Reynolds", "Seth Rogen", "Michael J. Fox", "Pamela Anderson", "Cobie Smulders"],
    currentMayor: "Ken Sim",
    foundedYear: 1886,
    nickname: "Rain City",
    whatsNew: [
      { name: "Granville Island Brewery Bistro", category: "Restaurant", description: "New craft beer and farm-to-table dining inside the iconic Granville Island market", openingDate: "March 2026" },
      { name: "Pacific Gateway Tech Centre", category: "Business", description: "Asia-Pacific focused tech incubator and innovation hub in Richmond", openingDate: "February 2026" },
      { name: "Stanley Park Seawall Repaving", category: "Park", description: "Completed 10km seawall repaving with upgraded lighting and bike lanes", openingDate: "March 2026" },
      { name: "Arc'teryx Flagship Robson St.", category: "Store Opening", description: "Expanded flagship for Vancouver-born outdoor gear brand with climbing wall", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Rainfall warning in effect. 60–80mm of rain expected. Watch for localized flooding in low areas.", validUntil: "March 9, 2026" }
    ],
    popularPlaces: [
      { name: "Granville Island", type: "Market & Dining", location: "False Creek", popularity: "Very High", description: "Public market with artisan food, crafts, galleries, and live performances", visitorCount: "10,000,000+" },
      { name: "Robson Street", type: "Shopping & Dining", location: "Downtown", popularity: "High", description: "Main shopping street with international brands, cafes, and restaurants", visitorCount: "30,000+" },
      { name: "Gastown", type: "Boutiques & Bars", location: "Downtown East", popularity: "High", description: "Historic cobblestone district with boutique shops, cocktail bars, and restaurants", visitorCount: "15,000+" },
      { name: "Kitsilano Beach", type: "Beach & Cafes", location: "Kitsilano", popularity: "High", description: "Popular beach with yoga studios, juice bars, and ocean views", visitorCount: "20,000+" },
      { name: "Main Street Indie Shops", type: "Vintage & Food", location: "Mount Pleasant", popularity: "Medium", description: "Independent boutiques, vintage stores, and specialty food shops", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Rain-related road damage and transit issues", details: ["SkyTrain delays on the Expo Line", "Pothole repairs across Burnaby and Surrey", "Highway 1 bottlenecks at peak hours"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Drug-related and property crime concerns", details: ["Open drug use in the Downtown Eastside", "Vehicle break-ins in tourist areas", "Residential break-ins in East Vancouver"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Low", description: "Housing and indigenous rights demonstrations", details: ["Housing affordability marches on Granville Street", "First Nations land rights protests"], lastUpdated: "March 1, 2026" }
    ],
    localJobs: [
      { title: "Film Crew Production Assistant", employer: "BC Film Studios", neighborhood: "Burnaby", type: "Contract", sector: "Media", description: "On-set support for Hollywood productions filming in Vancouver. No experience needed.", salary: "CAD $22–$26/hr", posted: "Today" },
      { title: "Software Engineer", employer: "Electronic Arts (EA)", neighborhood: "Burnaby", type: "Full-time", sector: "Technology", description: "Build gaming experiences for FIFA and NHL titles. C++ or Unity required.", salary: "CAD $90,000–$130,000/yr", posted: "2 days ago" },
      { title: "Café Server", employer: "Revolver Coffee", neighborhood: "Gastown", type: "Part-time", sector: "Hospitality", description: "Premium coffee and brunch service in a beloved Gastown café.", salary: "CAD $17–$19/hr + tips", posted: "Today" },
      { title: "Construction Carpenter", employer: "Axiom Builders", neighborhood: "Downtown", type: "Full-time", sector: "Construction", description: "Residential high-rise framing. Red Seal certification preferred.", salary: "CAD $38–$50/hr", posted: "1 day ago" },
      { title: "Nurse Practitioner", employer: "Vancouver Coastal Health", neighborhood: "Vancouver General Hospital", type: "Full-time", sector: "Healthcare", description: "Primary care NP role in a busy urban hospital. BC CRNBC registration required.", salary: "CAD $100,000–$120,000/yr", posted: "3 days ago" }
    ]
  },
  "berlin": {
    population: "3.7 million",
    famousPeople: ["Marlene Dietrich", "Nina Hagen", "Til Schweiger", "Diane Kruger", "Daniel Brühl"],
    currentMayor: "Kai Wegner",
    foundedYear: 1237,
    nickname: "Grey City",
    whatsNew: [
      { name: "Mitte Küche", category: "Restaurant", description: "New-wave German cuisine with seasonal tasting menus in Berlin-Mitte", openingDate: "March 2026" },
      { name: "Berlin Startup Factory", category: "Business", description: "Early-stage VC-backed incubator for European tech startups in Friedrichshain", openingDate: "February 2026" },
      { name: "Tempelhof Field Extension", category: "Park", description: "New community garden and outdoor cinema area at the former airport park", openingDate: "March 2026" },
      { name: "About You Flagship Friedrichstraße", category: "Store Opening", description: "Germany's fastest-growing fashion brand opens its first Berlin flagship store", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Strong wind advisory. Gusts up to 80km/h expected. Secure balcony items and avoid cycling.", validUntil: "March 8, 2026 10:00 PM" }
    ],
    popularPlaces: [
      { name: "Brandenburg Gate Area", type: "Landmark & Tourism", location: "Mitte", popularity: "Very High", description: "Historic gate surrounded by restaurants, shops, and guided tours", visitorCount: "5,000,000+" },
      { name: "Alexanderplatz", type: "Shopping & Transport", location: "Mitte", popularity: "Very High", description: "Busy public square with department stores, restaurants, and the TV Tower", visitorCount: "100,000,000+" },
      { name: "Hackescher Markt", type: "Shopping & Nightlife", location: "Mitte", popularity: "High", description: "Charming courtyard complex with boutiques, restaurants, and live music", visitorCount: "15,000+" },
      { name: "Prenzlauer Berg Cafes", type: "Cafes & Boutiques", location: "Prenzlauer Berg", popularity: "High", description: "Leafy neighbourhood with independent cafes, organic shops, and family restaurants", visitorCount: "20,000+" },
      { name: "KaDeWe Department Store", type: "Luxury Shopping", location: "Charlottenburg", popularity: "High", description: "Europe's second-largest department store with luxury brands and food hall", visitorCount: "40,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Public transit delays and road repair backlog", details: ["U-Bahn delays on multiple lines", "Pothole repairs ongoing in Kreuzberg and Neukölln", "Autobahn construction causing suburban delays"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Petty theft and bicycle theft", details: ["Bike theft among highest in Germany", "Pickpocketing at tourist sites", "Burglaries rising in Neukölln"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "High", description: "Regular large-scale political demonstrations", details: ["Weekly anti-government rallies at Bundestag", "Climate Fridays demonstrations", "Housing rental cap protests ongoing"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Barista", employer: "The Barn Coffee Roasters", neighborhood: "Mitte", type: "Full-time", sector: "Hospitality", description: "World-renowned specialty coffee roastery. Barista championship experience a plus.", salary: "€13–€16/hr", posted: "Today" },
      { title: "Backend Engineer", employer: "Zalando", neighborhood: "Friedrichshain", type: "Full-time", sector: "Technology", description: "Build fashion e-commerce systems for 50M+ European customers. Java and Kafka skills needed.", salary: "€65,000–€95,000/yr", posted: "1 day ago" },
      { title: "Tour Guide (English)", employer: "Berlin City Tours", neighborhood: "Mitte", type: "Part-time", sector: "Hospitality", description: "Lead walking tours of Berlin's history and culture. Fluent English essential.", salary: "€14–€18/hr + tips", posted: "Today" },
      { title: "Nurse (Krankenpfleger)", employer: "Charité Hospital", neighborhood: "Mitte/Wedding", type: "Full-time", sector: "Healthcare", description: "Europe's largest university hospital. German language and EU nursing qualification required.", salary: "€42,000–€55,000/yr", posted: "2 days ago" },
      { title: "Event DJ", employer: "Berghain / Freelance", neighborhood: "Friedrichshain", type: "Contract", sector: "Media", description: "Perform at Berlin's world-famous nightclubs and festivals. Techno/electronic music portfolio required.", salary: "€200–€1,000/event", posted: "3 days ago" }
    ]
  },
  "rome": {
    population: "4.3 million",
    famousPeople: ["Monica Bellucci", "Roberto Benigni", "Sophia Loren", "Gina Lollobrigida", "Anna Magnani"],
    currentMayor: "Roberto Gualtieri",
    foundedYear: -753,
    nickname: "The Eternal City",
    whatsNew: [
      { name: "Testaccio Trattoria Moderna", category: "Restaurant", description: "Contemporary Roman cuisine near the Testaccio market with nose-to-tail cooking", openingDate: "March 2026" },
      { name: "Roma Tech Quarter", category: "Business", description: "New digital economy hub near Tiburtina railway station", openingDate: "February 2026" },
      { name: "Villa Borghese Rose Garden", category: "Park", description: "Restored rose garden in Villa Borghese park open to the public", openingDate: "March 2026" },
      { name: "Gucci Osteria Via Condotti", category: "Store Opening", description: "Luxury fashion house opens combined restaurant and boutique experience", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Thunderstorm warning for central Rome. Avoid outdoor areas and the Colosseum Arch zone during lightning.", validUntil: "March 7, 2026 9:00 PM" }
    ],
    popularPlaces: [
      { name: "Colosseum & Roman Forum", type: "Historic Landmark", location: "Centro Storico", popularity: "Very High", description: "Ancient amphitheatre and ruins drawing millions of tourists each year", visitorCount: "7,000,000+" },
      { name: "Trevi Fountain Area", type: "Shopping & Tourism", location: "Trevi", popularity: "Very High", description: "Baroque fountain surrounded by gelaterias, restaurants, and souvenir shops", visitorCount: "3,000,000+" },
      { name: "Via Condotti & Spanish Steps", type: "Luxury Shopping", location: "Tridente", popularity: "High", description: "Rome's luxury fashion street with Bulgari, Prada, and Fendi flagship stores", visitorCount: "2,000,000+" },
      { name: "Trastevere Restaurants", type: "Dining & Nightlife", location: "Trastevere", popularity: "High", description: "Charming medieval neighbourhood packed with trattorias and wine bars", visitorCount: "15,000+" },
      { name: "Campo de' Fiori Market", type: "Food Market", location: "Campo de' Fiori", popularity: "Medium", description: "Daily open-air market with produce, spices, and local food vendors", visitorCount: "5,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Pothole epidemic and aging transport network", details: ["Rome has some of Europe's worst pothole problems", "Metro line expansion repeatedly delayed", "Traffic around ancient sites causes gridlock"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Pickpocketing and tourist scams", details: ["Pickpocketing rife near the Colosseum and Trevi", "Fake gladiator photo scams at landmarks", "Beware of distraction theft on buses"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Moderate", description: "Frequent union strikes and political demonstrations", details: ["Transport strikes disrupting metros and buses", "Anti-government rallies in Piazza Venezia", "Teacher and healthcare worker strikes"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Restaurant Waiter", employer: "Dal Bolognese", neighborhood: "Piazza del Popolo", type: "Full-time", sector: "Hospitality", description: "Serve guests at one of Rome's most elegant trattorias. Italian language required.", salary: "€1,500–€2,000/month + tips", posted: "Today" },
      { title: "Archaeological Site Guide", employer: "Colosseum Authority (MIC)", neighborhood: "Centro Storico", type: "Part-time", sector: "Education", description: "Lead tours of the Colosseum and Forum. Degree in history or archaeology preferred.", salary: "€15–€20/hr", posted: "2 days ago" },
      { title: "IT Project Manager", employer: "Engineering Group Rome", neighborhood: "EUR District", type: "Full-time", sector: "Technology", description: "Manage digital transformation projects for Italian government clients. PMP preferred.", salary: "€45,000–€65,000/yr", posted: "1 day ago" },
      { title: "Gelato Maker (Gelatiere)", employer: "Giolitti", neighborhood: "Via degli Uffici del Vicario", type: "Full-time", sector: "Hospitality", description: "Craft artisanal gelato at one of Rome's oldest gelaterias. Experience required.", salary: "€1,400–€1,800/month", posted: "Today" },
      { title: "Hotel Concierge", employer: "Hotel de Russie", neighborhood: "Via del Babuino", type: "Full-time", sector: "Hospitality", description: "Assist international guests at a 5-star luxury hotel. English and Italian required.", salary: "€2,200–€2,800/month", posted: "3 days ago" }
    ]
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
    nickname: "Capital of Spain",
    whatsNew: [
      { name: "Mercado de Antón Martín Fusion", category: "Restaurant", description: "New international food stalls added to the historic Antón Martín market", openingDate: "March 2026" },
      { name: "Madrid Fintech District", category: "Business", description: "New financial technology hub near IFEMA trade fair grounds", openingDate: "February 2026" },
      { name: "Casa de Campo Bike Route", category: "Park", description: "Expanded cycling loop through the city's largest parkland with new rest stops", openingDate: "March 2026" },
      { name: "Zara Flagship Gran Vía", category: "Store Opening", description: "Renovated flagship for the Inditex brand's home city, with digital fitting rooms", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "High wind advisory. Gusts up to 70km/h expected across the city. Avoid roof terraces and outdoor furniture.", validUntil: "March 8, 2026 6:00 PM" }
    ],
    popularPlaces: [
      { name: "Gran Vía", type: "Shopping & Entertainment", location: "Centro", popularity: "Very High", description: "Madrid's main shopping and theatre boulevard with international brands and cinemas", visitorCount: "100,000+" },
      { name: "El Rastro Flea Market", type: "Market & Culture", location: "La Latina", popularity: "High", description: "Sunday open-air flea market with antiques, fashion, and handmade goods", visitorCount: "100,000+" },
      { name: "Malasaña & Chueca", type: "Boutiques & Nightlife", location: "Malasaña/Chueca", popularity: "High", description: "Bohemian and LGBTQ+ neighbourhoods with independent shops and bars", visitorCount: "25,000+" },
      { name: "Mercado de San Miguel", type: "Food Market", location: "Sol", popularity: "High", description: "Iron and glass gourmet food market with tapas, wine, and charcuterie", visitorCount: "3,000,000+" },
      { name: "Salamanca Luxury District", type: "Luxury Shopping", location: "Salamanca", popularity: "High", description: "Upscale neighbourhood with designer boutiques and fine dining", visitorCount: "20,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Moderate", description: "Traffic congestion and metro overcrowding", details: ["Ring road M-30 bottlenecks at rush hour", "Metro Line 1 signaling issues", "Pothole complaints in Vallecas and Carabanchel"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Pickpocketing in tourist areas", details: ["Handbag snatching around Sol and Gran Vía", "Scams near Puerta del Sol", "Overall safe city for visitors"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Moderate", description: "Political and social demonstrations frequent", details: ["Housing rental price protests", "Anti-government demonstrations at Puerta del Sol", "Teachers' and nurses' strike marches"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Bartender", employer: "1862 Dry Bar", neighborhood: "Chueca", type: "Full-time", sector: "Hospitality", description: "Craft cocktail bar in Madrid's trendiest neighbourhood. English and Spanish required.", salary: "€1,400–€1,800/month + tips", posted: "Today" },
      { title: "Data Engineer", employer: "Telefónica", neighborhood: "Raimundo Fernández Villaverde", type: "Full-time", sector: "Technology", description: "Build data pipelines for Spain's largest telecom. Python and Spark experience needed.", salary: "€45,000–€65,000/yr", posted: "1 day ago" },
      { title: "Fashion Sales Associate", employer: "Zara Flagship Gran Vía", neighborhood: "Gran Vía", type: "Part-time", sector: "Retail", description: "Serve customers in a high-volume fashion flagship. Spanish required.", salary: "€10–€12/hr", posted: "Today" },
      { title: "Nurse (Enfermero)", employer: "Hospital Gregorio Marañón", neighborhood: "Retiro", type: "Full-time", sector: "Healthcare", description: "General nursing in a major public hospital. Nursing degree and Spanish language required.", salary: "€28,000–€36,000/yr", posted: "2 days ago" },
      { title: "English Teacher", employer: "British Council Madrid", neighborhood: "Alonso Martínez", type: "Part-time", sector: "Education", description: "Teach business English to adult professionals. CELTA qualification and native English required.", salary: "€14–€18/hr", posted: "3 days ago" }
    ]
  },
  "mumbai": {
    population: "20.4 million",
    famousPeople: ["Shah Rukh Khan", "Amitabh Bachchan", "Priyanka Chopra", "Aamir Khan", "A.R. Rahman"],
    currentMayor: "Kishori Pednekar",
    foundedYear: 1507,
    nickname: "Bollywood Capital",
    whatsNew: [
      { name: "Bandra Social Kitchen", category: "Restaurant", description: "Trendy all-day restaurant in Bandra West with Mumbai-inspired fusion menu", openingDate: "March 2026" },
      { name: "Powai Tech Park", category: "Business", description: "New IT park with shared office spaces near Hiranandani Gardens", openingDate: "February 2026" },
      { name: "Marine Drive Promenade Upgrade", category: "Park", description: "Renovated Queen's Necklace walkway with new seating and lighting", openingDate: "March 2026" },
      { name: "Fabindia Bandra Store", category: "Store Opening", description: "New flagship of India's leading handloom and handicraft brand", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "High heat and humidity advisory. Temperatures 36–38°C. Stay hydrated and avoid outdoor exertion midday.", validUntil: "March 11, 2026" }
    ],
    popularPlaces: [
      { name: "Gateway of India & Colaba", type: "Landmark & Shopping", location: "South Mumbai", popularity: "Very High", description: "Historic arch gateway surrounded by cafes, street vendors, and souvenir shops", visitorCount: "5,000,000+" },
      { name: "Linking Road, Bandra", type: "Street Shopping", location: "Bandra", popularity: "Very High", description: "Bustling street market for clothing, accessories, and footwear at bargain prices", visitorCount: "30,000+" },
      { name: "Juhu Beach", type: "Beach & Street Food", location: "Juhu", popularity: "High", description: "Popular beach with street food stalls, chaats, and evening entertainment", visitorCount: "25,000+" },
      { name: "Dharavi Craft Market", type: "Craft & Leather", location: "Dharavi", popularity: "Medium", description: "Asia's largest urban village with leather workshops and export goods", visitorCount: "10,000+" },
      { name: "Crawford Market", type: "Food & Goods Market", location: "Fort", popularity: "High", description: "Historic covered market for fresh produce, spices, and imported goods", visitorCount: "20,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Traffic gridlock and monsoon-prone flooding", details: ["Daily traffic jams on Western and Eastern Expressways", "Monsoon flooding blocks roads in low-lying areas", "Local train overcrowding during rush hours"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Petty theft and organized fraud", details: ["Pickpocketing on local trains", "Real estate scams targeting migrants", "Snatch theft at crowded markets"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Moderate", description: "Workers' rights and political demonstrations", details: ["Bollywood workers' union marches", "Political party rallies ahead of elections", "Farmers' protest marches at Azad Maidan"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "BPO Customer Support Agent", employer: "Infosys BPM", neighborhood: "Vikhroli", type: "Full-time", sector: "Technology", description: "Handle international customer queries via phone and chat. Fluent English required.", salary: "₹25,000–₹35,000/month", posted: "Today" },
      { title: "Film Extra", employer: "Yash Raj Films", neighborhood: "Andheri", type: "Contract", sector: "Media", description: "Appear in Bollywood film productions. No experience needed. Open call.", salary: "₹2,000–₹5,000/day", posted: "Today" },
      { title: "Software Developer", employer: "Reliance Jio", neighborhood: "Navi Mumbai", type: "Full-time", sector: "Technology", description: "Build digital apps for India's largest telecom network. React Native or Android preferred.", salary: "₹8–₹15 lakhs/yr", posted: "1 day ago" },
      { title: "Restaurant Cook", employer: "The Bombay Canteen", neighborhood: "Lower Parel", type: "Full-time", sector: "Hospitality", description: "Cook modern Indian cuisine at one of Mumbai's most acclaimed restaurants.", salary: "₹20,000–₹30,000/month", posted: "2 days ago" },
      { title: "Security Guard", employer: "G4S India", neighborhood: "Citywide", type: "Full-time", sector: "Government", description: "Provide security at commercial buildings. 12th pass minimum. Uniform and training provided.", salary: "₹15,000–₹18,000/month", posted: "Today" }
    ]
  },
  "delhi": {
    population: "32.9 million",
    famousPeople: ["Anushka Sharma", "Ranveer Singh", "Kapil Sharma", "Arijit Singh", "Kailash Kher"],
    currentMayor: "Shelly Oberoi",
    foundedYear: 1911,
    nickname: "India's Capital Territory",
    whatsNew: [
      { name: "Khan Market Café Collective", category: "Restaurant", description: "New multi-chef café concept in Delhi's premium market serving global cuisines", openingDate: "March 2026" },
      { name: "Delhi Startup Village", category: "Business", description: "Government-backed accelerator for tech startups in Okhla Phase II", openingDate: "February 2026" },
      { name: "Lodhi Art District Path", category: "Park", description: "Open-air street art trail through Lodhi Colony with new murals", openingDate: "March 2026" },
      { name: "Uniqlo Connaught Place", category: "Store Opening", description: "Japanese fashion chain's first Delhi store in the heart of CP", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "Severe heat wave warning. Temperatures forecast to exceed 40°C. Avoid outdoor activity from 11am–5pm.", validUntil: "March 12, 2026" }
    ],
    popularPlaces: [
      { name: "Chandni Chowk Market", type: "Shopping & Street Food", location: "Old Delhi", popularity: "Very High", description: "One of Asia's oldest and largest wholesale markets with food stalls and fabric shops", visitorCount: "150,000+" },
      { name: "Connaught Place", type: "Shopping & Dining", location: "Central Delhi", popularity: "Very High", description: "Colonial circular shopping district with international brands, restaurants, and cafes", visitorCount: "50,000+" },
      { name: "Hauz Khas Village", type: "Boutiques & Nightlife", location: "South Delhi", popularity: "High", description: "Upmarket village with designer boutiques, rooftop bars, and art galleries", visitorCount: "20,000+" },
      { name: "Lajpat Nagar Central Market", type: "Street Shopping", location: "South Delhi", popularity: "High", description: "Popular market for ethnic wear, accessories, and home décor at all budgets", visitorCount: "40,000+" },
      { name: "Dilli Haat", type: "Craft & Food Market", location: "INA", popularity: "Medium", description: "Government craft market showcasing handicrafts from all Indian states", visitorCount: "5,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Air pollution and traffic congestion are severe", details: ["AQI frequently in 'Severe' category (400+)", "Potholes rampant across outer ring roads", "Metro overcrowding at peak hours"], lastUpdated: "March 6, 2026" },
      { type: "Crime", severity: "Moderate", description: "Theft and safety concerns", details: ["Snatch theft and phone snatching on main streets", "Scams targeting tourists near monuments", "Safe in central areas; vigilance needed at night"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "High", description: "Frequent large-scale political demonstrations", details: ["Farmers' protest convoys", "Opposition party rallies at Jantar Mantar", "Student union marches near JNU and DU"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Software Engineer", employer: "Paytm", neighborhood: "Noida (Greater Delhi)", type: "Full-time", sector: "Technology", description: "Build payment and fintech products for 300M+ users. React or Java backend.", salary: "₹10–₹20 lakhs/yr", posted: "Today" },
      { title: "Government Clerk", employer: "Delhi Secretariat", neighborhood: "ITO", type: "Full-time", sector: "Government", description: "Administrative role in Delhi state government. Graduation required, SSC exam qualification.", salary: "₹25,000–₹40,000/month", posted: "2 days ago" },
      { title: "Delivery Partner", employer: "Zomato", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Food delivery on bike or scooter. Own vehicle and smartphone required. Flexible hours.", salary: "₹15,000–₹25,000/month", posted: "Today" },
      { title: "English Content Writer", employer: "Times of India Digital", neighborhood: "ITO", type: "Full-time", sector: "Media", description: "Write and edit news articles and digital features. Strong English and journalism background.", salary: "₹4–₹8 lakhs/yr", posted: "1 day ago" },
      { title: "House Captain (Hotel)", employer: "The Leela Palace New Delhi", neighborhood: "Chanakyapuri", type: "Full-time", sector: "Hospitality", description: "Housekeeping leadership role in a 5-star luxury hotel. Hotel management degree preferred.", salary: "₹30,000–₹45,000/month", posted: "3 days ago" }
    ]
  },
  "istanbul": {
    population: "15.8 million",
    famousPeople: ["Tarkan", "Nuri Bilge Ceylan", "Orhan Pamuk", "Sezen Aksu", "Kenan İmirzalıoğlu"],
    currentMayor: "Ekrem İmamoğlu",
    foundedYear: 660,
    nickname: "Bridge Between Continents",
    whatsNew: [
      { name: "Boğaz Balık Evi", category: "Restaurant", description: "New Bosphorus-view seafood restaurant in Beşiktaş with fresh daily catches", openingDate: "March 2026" },
      { name: "Istanbul Tech Valley", category: "Business", description: "New tech park for software startups near Istanbul Technical University", openingDate: "February 2026" },
      { name: "Belgrad Forest Hiking Trails", category: "Park", description: "Expanded trail network through historic Belgrade Forest north of the city", openingDate: "March 2026" },
      { name: "LC Waikiki Grand Bazaar District", category: "Store Opening", description: "Turkey's largest fashion brand opens new concept store near the historic bazaar", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Heavy rain and strong winds expected across Istanbul. Bosphorus ferry services may be suspended.", validUntil: "March 8, 2026 11:00 PM" }
    ],
    popularPlaces: [
      { name: "Grand Bazaar", type: "Shopping & Culture", location: "Fatih", popularity: "Very High", description: "One of the world's oldest covered markets with 4,000+ shops selling carpets, jewelry, and spices", visitorCount: "400,000+" },
      { name: "Istiklal Avenue", type: "Shopping & Dining", location: "Beyoğlu", popularity: "Very High", description: "Pedestrian street with shops, restaurants, and live music", visitorCount: "3,000,000+" },
      { name: "Kapalıçarşı Spice Bazaar", type: "Food Market", location: "Eminönü", popularity: "High", description: "Historic spice and food market near the Golden Horn", visitorCount: "300,000+" },
      { name: "Nişantaşı Luxury District", type: "Luxury Shopping", location: "Şişli", popularity: "High", description: "Upscale shopping area with international fashion brands and fine dining", visitorCount: "15,000+" },
      { name: "Karaköy Cafes & Galleries", type: "Cafes & Art", location: "Karaköy", popularity: "Medium", description: "Trendy waterfront neighbourhood with specialty coffee, galleries, and restaurants", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Traffic gridlock and earthquake preparedness concerns", details: ["Istanbul has worst traffic in Europe", "Many older buildings not earthquake-proof", "Metrobus overcrowding daily"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Pickpocketing in tourist areas", details: ["Wallet theft near Grand Bazaar", "Taxi overcharging scams", "Generally very safe city"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Moderate", description: "Political demonstrations and union marches", details: ["Opposition protests near Taksim Square", "University student demonstrations", "May Day marches traditionally large"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Hotel Receptionist", employer: "Four Seasons Bosphorus", neighborhood: "Beşiktaş", type: "Full-time", sector: "Hospitality", description: "Welcome international guests at luxury waterfront hotel. English and Turkish required.", salary: "₺25,000–₺35,000/month", posted: "Today" },
      { title: "Software Developer", employer: "Trendyol", neighborhood: "Maslak", type: "Full-time", sector: "Technology", description: "Build Turkey's #1 e-commerce platform features. React or Java backend.", salary: "₺60,000–₺100,000/month", posted: "1 day ago" },
      { title: "Carpet Weaver Apprentice", employer: "Hereke Royal Carpets", neighborhood: "Kapalıçarşı", type: "Full-time", sector: "Retail", description: "Learn traditional hand-knotted carpet weaving. 2-year apprenticeship with master weavers.", salary: "₺15,000/month", posted: "3 days ago" },
      { title: "Ferry Captain (Denizci)", employer: "İDO Istanbul Ferries", neighborhood: "Eminönü", type: "Full-time", sector: "Transportation", description: "Operate passenger ferries across the Bosphorus. Maritime license required.", salary: "₺45,000–₺60,000/month", posted: "2 days ago" },
      { title: "Tour Guide (English/Arabic)", employer: "Istanbul Tours", neighborhood: "Sultanahmet", type: "Part-time", sector: "Hospitality", description: "Lead historical tours of Ottoman and Byzantine sites. English or Arabic fluency essential.", salary: "₺500–₺800/tour + tips", posted: "Today" }
    ]
  },
  "cairo": {
    population: "21.3 million",
    famousPeople: ["Omar Sharif", "Yousra", "Mohamed Salah", "Amr Diab", "Adel Imam"],
    currentMayor: "Khaled Abdel Aal",
    foundedYear: 969,
    nickname: "City of a Thousand Minarets",
    whatsNew: [
      { name: "Zamalek Nile Dining", category: "Restaurant", description: "New riverside restaurant on Zamalek island with panoramic Nile views", openingDate: "March 2026" },
      { name: "Cairo Silicon District", category: "Business", description: "New IT and software hub in the New Administrative Capital east of Cairo", openingDate: "February 2026" },
      { name: "Al-Azhar Park Extension", category: "Park", description: "New children's play area and botanical garden added to the park", openingDate: "March 2026" },
      { name: "Azza Fahmy Jewellery Maadi", category: "Store Opening", description: "Egypt's foremost artisanal jewellery brand opens new Maadi boutique", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "Extreme heat warning. Temperatures reaching 39°C. Avoid outdoor exposure during peak hours and drink water frequently.", validUntil: "March 12, 2026" }
    ],
    popularPlaces: [
      { name: "Khan el-Khalili Bazaar", type: "Market & Culture", location: "Old Cairo", popularity: "Very High", description: "Historic medieval market selling spices, antiques, and handmade crafts", visitorCount: "2,000,000+" },
      { name: "Tahrir Square Area", type: "Shopping & Tourism", location: "Downtown", popularity: "High", description: "Central square with shops, cafes, and the Egyptian Museum nearby", visitorCount: "50,000+" },
      { name: "City Stars Mall", type: "Shopping Mall", location: "Nasr City", popularity: "Very High", description: "One of the Middle East's largest malls with 600+ stores and entertainment", visitorCount: "5,000,000+" },
      { name: "Zamalek Island", type: "Cafes & Boutiques", location: "Zamalek", popularity: "High", description: "Upscale residential island with art galleries, cafes, and restaurants", visitorCount: "15,000+" },
      { name: "Old Cairo (Coptic Quarter)", type: "Cultural Tourism", location: "Misr al-Qadima", popularity: "Medium", description: "Ancient Christian neighbourhood with historic churches and craft shops", visitorCount: "500,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Traffic chaos and urban overcrowding", details: ["Cairo has some of Africa's worst traffic gridlock", "Many roads without lane markings", "Pothole damage widespread"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Petty crime and scams targeting tourists", details: ["Tourist scams at the Pyramids", "Overcharging in taxis and tuk-tuks", "Use metered taxis or ride apps"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Low", description: "Limited demonstrations under current regulations", details: ["Occasional labour strikes", "Police permit required for gatherings"], lastUpdated: "February 20, 2026" }
    ],
    localJobs: [
      { title: "Call Centre Agent", employer: "Vodafone Egypt", neighborhood: "Smart Village, Giza", type: "Full-time", sector: "Technology", description: "Handle Arabic-language customer support. Good Arabic communication skills required.", salary: "EGP 6,000–8,000/month", posted: "Today" },
      { title: "Hotel Receptionist", employer: "Kempinski Nile Hotel", neighborhood: "Corniche El Nil", type: "Full-time", sector: "Hospitality", description: "Welcome guests at a luxury Nile-view hotel. English and Arabic required.", salary: "EGP 8,000–12,000/month", posted: "2 days ago" },
      { title: "Archaeologist (Junior)", employer: "Egyptian Ministry of Antiquities", neighborhood: "Giza Plateau", type: "Full-time", sector: "Government", description: "Field archaeology and site documentation. Archaeology degree required.", salary: "EGP 10,000–15,000/month", posted: "1 day ago" },
      { title: "Graphic Designer", employer: "Tarek Nour Communications", neighborhood: "Mohandessin", type: "Full-time", sector: "Media", description: "Create advertising visuals for Egyptian and regional brands. Portfolio required.", salary: "EGP 8,000–14,000/month", posted: "3 days ago" },
      { title: "Security Guard", employer: "G4S Egypt", neighborhood: "Various Locations", type: "Full-time", sector: "Government", description: "Commercial building security. Military or police background preferred.", salary: "EGP 4,000–6,000/month", posted: "Today" }
    ]
  },
  "lagos": {
    population: "15.4 million",
    famousPeople: ["Burna Boy", "Wizkid", "Davido", "Genevieve Nnaji", "Ramsey Nouah"],
    currentMayor: "Babajide Sanwo-Olu",
    foundedYear: 1472,
    nickname: "Centre of Excellence",
    whatsNew: [
      { name: "Lekki Pepper Soup Joint", category: "Restaurant", description: "Upscale Nigerian comfort food restaurant in Lekki Phase 1 with live Afrobeats", openingDate: "March 2026" },
      { name: "Lagos Tech Hub", category: "Business", description: "Africa's largest co-working space for startups in Victoria Island", openingDate: "February 2026" },
      { name: "Lekki Conservation Centre Trail", category: "Park", description: "New elevated canopy walkway through mangrove forest in conservation area", openingDate: "March 2026" },
      { name: "Alara Concept Store", category: "Store Opening", description: "Pan-African fashion and lifestyle concept store in Ikoyi", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Heavy rainfall warning. Street flooding expected in low-lying areas of Lagos Island and Mainland. Avoid flood-prone roads.", validUntil: "March 9, 2026" },
      { type: "Heat Alert", description: "High humidity and heat advisory. Temperatures and humidity combining to feel above 42°C.", validUntil: "March 10, 2026" }
    ],
    popularPlaces: [
      { name: "Balogun Market", type: "Street Shopping", location: "Lagos Island", popularity: "Very High", description: "West Africa's largest open market for fabric, clothing, and electronics", visitorCount: "100,000+" },
      { name: "Victoria Island Restaurants", type: "Dining & Nightlife", location: "Victoria Island", popularity: "Very High", description: "Upscale dining and entertainment district with international and Nigerian cuisine", visitorCount: "30,000+" },
      { name: "Lekki Arts & Craft Market", type: "Craft Market", location: "Lekki", popularity: "High", description: "Curated African art, sculptures, and handmade crafts for locals and tourists", visitorCount: "5,000+" },
      { name: "Ikeja City Mall", type: "Shopping Mall", location: "Ikeja", popularity: "High", description: "Modern mall with international brands, cinema, and food court", visitorCount: "20,000+" },
      { name: "Bar Beach & Eko Atlantic", type: "Beach & Development", location: "Lagos Island", popularity: "Medium", description: "Coastal area with new luxury developments and ocean-view promenade", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Critical", description: "Severe traffic gridlock, flooding, and power cuts", details: ["Lagos traffic among Africa's worst", "Power outages daily across all areas", "Roads flooded after heavy rain", "Road potholes widespread"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "High", description: "Robbery, fraud, and area boy extortion", details: ["Armed robbery risk in some areas after dark", "Internet fraud (Yahoo-Yahoo) concerns", "Avoid isolated areas at night"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Moderate", description: "Labour unions and political demonstrations", details: ["NLC union strikes disrupting transport", "Youth-led political protest movements", "Fuel price hike demonstrations"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Software Developer", employer: "Flutterwave", neighborhood: "Victoria Island", type: "Full-time", sector: "Technology", description: "Build Africa's leading payment infrastructure. React or Node.js experience.", salary: "₦600,000–₦1,200,000/month", posted: "Today" },
      { title: "Afrobeats Musician (Session)", employer: "DMW Records / Freelance", neighborhood: "Lekki", type: "Contract", sector: "Media", description: "Session musician or background vocalist for studio recordings and live shows.", salary: "₦50,000–₦200,000/session", posted: "Today" },
      { title: "Bank Teller", employer: "Zenith Bank", neighborhood: "Broad Street, Lagos Island", type: "Full-time", sector: "Finance", description: "Customer-facing banking role. OND/HND minimum. Smart and customer-focused candidates.", salary: "₦80,000–₦120,000/month", posted: "2 days ago" },
      { title: "Truck Driver", employer: "DHL Nigeria", neighborhood: "Apapa Port", type: "Full-time", sector: "Transportation", description: "Heavy-duty truck delivery across Lagos and Southwest states. Valid LASDRI licence required.", salary: "₦120,000–₦180,000/month", posted: "1 day ago" },
      { title: "Nurse", employer: "Lagos University Teaching Hospital", neighborhood: "Idi-Araba, Surulere", type: "Full-time", sector: "Healthcare", description: "General nursing in Nigeria's busiest teaching hospital. NMCN registration required.", salary: "₦100,000–₦150,000/month", posted: "3 days ago" }
    ]
  },
  "shanghai": {
    population: "24.9 million",
    famousPeople: ["Jackie Chan", "Zhang Ziyi", "Yao Ming", "Liu Xiang", "Wang Leehom"],
    currentMayor: "Gong Zheng",
    foundedYear: 1291,
    nickname: "Pearl of the Orient",
    whatsNew: [
      { name: "The Bund Rooftop Dining", category: "Restaurant", description: "New rooftop restaurant on the Bund with panoramic Pudong skyline views", openingDate: "March 2026" },
      { name: "Zhangjiang AI Innovation Park", category: "Business", description: "Artificial intelligence research and development campus in Pudong", openingDate: "February 2026" },
      { name: "Century Park Lakeside Trail", category: "Park", description: "New 3km lakeside walking and cycling trail with native plantings", openingDate: "March 2026" },
      { name: "Hermès Maison Nanjing Road", category: "Store Opening", description: "Hermès flagship in a restored historic building on Nanjing East Road", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Typhoon influence bringing heavy rain and strong winds to Shanghai. Flights may be affected.", validUntil: "March 9, 2026" }
    ],
    popularPlaces: [
      { name: "The Bund", type: "Landmark & Dining", location: "Huangpu", popularity: "Very High", description: "Iconic waterfront promenade with colonial architecture and Pudong skyline views", visitorCount: "70,000+" },
      { name: "Nanjing Road", type: "Shopping", location: "Huangpu", popularity: "Very High", description: "China's most famous shopping street with department stores and flagship brands", visitorCount: "1,000,000+" },
      { name: "Xintiandi", type: "Shopping & Dining", location: "Huangpu", popularity: "High", description: "Upscale converted shikumen neighbourhood with restaurants and boutiques", visitorCount: "25,000+" },
      { name: "Tianzifang", type: "Boutiques & Cafes", location: "Luwan", popularity: "High", description: "Creative arts and crafts district in restored alleyways", visitorCount: "20,000+" },
      { name: "Lu Jia Zui Finance District", type: "Dining & Office", location: "Pudong", popularity: "High", description: "Skyscraper district with restaurants, shops, and observation decks", visitorCount: "50,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Low", description: "Congestion on outer ring roads", details: ["Inner-city metro very efficient", "Outer Ring Road congestion at peak hours", "Ongoing metro Line 19 construction"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Very low crime rate overall", details: ["Petty theft in busy tourist markets", "Bike theft in residential areas", "One of the safest megacities globally"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Low", description: "Demonstrations are rare and controlled", details: ["Permitted labour disputes handled through unions", "Social stability maintained strongly"], lastUpdated: "February 15, 2026" }
    ],
    localJobs: [
      { title: "English Teacher", employer: "New Oriental Education", neighborhood: "Jing'an", type: "Full-time", sector: "Education", description: "Teach English to K-12 students. Native or near-native English required. Degree essential.", salary: "RMB 20,000–30,000/month", posted: "Today" },
      { title: "Finance Analyst", employer: "HSBC China", neighborhood: "Pudong Lujiazui", type: "Full-time", sector: "Finance", description: "Financial modeling and reporting for banking division. CFA or finance degree.", salary: "RMB 25,000–40,000/month", posted: "1 day ago" },
      { title: "UX Designer", employer: "ByteDance Shanghai", neighborhood: "Jing'an", type: "Full-time", sector: "Technology", description: "Design TikTok and Douyin features for global users. Figma and prototyping required.", salary: "RMB 25,000–45,000/month", posted: "2 days ago" },
      { title: "Hotel Butler", employer: "The Peninsula Shanghai", neighborhood: "The Bund", type: "Full-time", sector: "Hospitality", description: "Provide personal butler service to VIP guests. Mandarin and English fluency essential.", salary: "RMB 8,000–12,000/month + service charge", posted: "Today" },
      { title: "Logistics Coordinator", employer: "Maersk China", neighborhood: "Waigaoqiao FTZ", type: "Full-time", sector: "Transportation", description: "Coordinate global shipping logistics for a major port operator. Mandarin essential.", salary: "RMB 12,000–18,000/month", posted: "3 days ago" }
    ]
  },
  "mexico city": {
    population: "21.8 million",
    famousPeople: ["Gael García Bernal", "Diego Luna", "Salma Hayek", "Guillermo del Toro", "Alfonso Cuarón"],
    currentMayor: "Martí Batres",
    foundedYear: 1325,
    nickname: "City of Palaces",
    whatsNew: [
      { name: "Mercado Roma Nuevo", category: "Restaurant", description: "Contemporary food market in Colonia Roma with artisan vendors and mezcal bar", openingDate: "March 2026" },
      { name: "CDMX Startup Garage", category: "Business", description: "New early-stage incubator for Latin American fintech startups in Polanco", openingDate: "February 2026" },
      { name: "Bosque de Chapultepec Restoration", category: "Park", description: "New native species garden and improved lake access in Section 2 of Chapultepec", openingDate: "March 2026" },
      { name: "Mercado Cuauhtémoc", category: "Store Opening", description: "New curated artisan market for Mexican handcrafts, textiles, and ceramics", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Heavy rain and hail risk this afternoon. Flash flood risk in low-lying colonias. Stay indoors if possible.", validUntil: "March 7, 2026 9:00 PM" }
    ],
    popularPlaces: [
      { name: "Zócalo & Centro Histórico", type: "Landmark & Market", location: "Centro", popularity: "Very High", description: "Historic city centre with Aztec ruins, baroque cathedral, and street food", visitorCount: "150,000+" },
      { name: "Polanco Shopping District", type: "Luxury Shopping", location: "Polanco", popularity: "Very High", description: "Upscale neighbourhood with international fashion brands and fine dining", visitorCount: "30,000+" },
      { name: "Mercado de Artesanías", type: "Craft Market", location: "San Ángel", popularity: "High", description: "Saturday market with Mexican art, crafts, and traditional food", visitorCount: "10,000+" },
      { name: "Condesa & Roma Cafes", type: "Cafes & Restaurants", location: "Condesa/Roma", popularity: "High", description: "Trendy tree-lined streets packed with cafes, restaurants, and bookshops", visitorCount: "25,000+" },
      { name: "Tepito Flea Market", type: "Street Market", location: "Tepito", popularity: "Medium", description: "Huge informal market for electronics, clothing, and goods at low prices", visitorCount: "40,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "Robbery, kidnapping, and carjacking in some areas", details: ["Express kidnappings reported in taxi rides", "Avoid ATMs at night", "Tepito and some metro stations high-risk"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Severe traffic congestion and earthquake risk", details: ["Traffic gridlock among world's worst", "City built on ancient lake bed—earthquake prone", "Potholes and street flooding after rains"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "High", description: "Frequent large-scale marches and demonstrations", details: ["Teachers' CNTE union marches blocking roads", "Feminist demonstrations on March 8th", "Anti-government protests at Zócalo"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Software Developer", employer: "Clip Payments", neighborhood: "Polanco", type: "Full-time", sector: "Technology", description: "Build payment processing tools for Mexican SMEs. React and Node.js.", salary: "MXN $35,000–$60,000/month", posted: "Today" },
      { title: "Street Food Cook", employer: "El Huequito Tacos", neighborhood: "Centro Histórico", type: "Full-time", sector: "Hospitality", description: "Cook tacos al pastor at a legendary Mexico City institution. Experience preferred.", salary: "MXN $12,000–$18,000/month", posted: "Today" },
      { title: "Archaeologist", employer: "INAH (National Institute)", neighborhood: "Templo Mayor", type: "Full-time", sector: "Government", description: "Work at Aztec excavation sites in the city centre. Archaeology degree required.", salary: "MXN $18,000–$28,000/month", posted: "2 days ago" },
      { title: "Content Creator", employer: "Grupo Televisa Digital", neighborhood: "Santa Fe", type: "Full-time", sector: "Media", description: "Create video content for streaming and social platforms. Spanish fluency required.", salary: "MXN $20,000–$35,000/month", posted: "1 day ago" },
      { title: "Metro Operator", employer: "Sistema de Transporte Colectivo", neighborhood: "Citywide", type: "Full-time", sector: "Transportation", description: "Operate Mexico City metro trains. Full training provided. High school diploma required.", salary: "MXN $15,000–$20,000/month", posted: "3 days ago" }
    ]
  },
  "sao paulo": {
    population: "22.6 million",
    famousPeople: ["Pelé", "Ayrton Senna", "Caetano Veloso", "Gisele Bündchen", "Wagner Moura"],
    currentMayor: "Ricardo Nunes",
    foundedYear: 1554,
    nickname: "Land of Drizzle",
    whatsNew: [
      { name: "Figueira Rubaiyat Jardins", category: "Restaurant", description: "Iconic steakhouse expands with a new garden dining terrace in Jardins", openingDate: "March 2026" },
      { name: "São Paulo Tech Hub Paulista", category: "Business", description: "Multi-floor startup incubator on Avenida Paulista for fintech companies", openingDate: "February 2026" },
      { name: "Parque Trianon Renovation", category: "Park", description: "Restored Atlantic Forest reserve park in the heart of Paulista Avenue", openingDate: "March 2026" },
      { name: "Reserva SP Flagship", category: "Store Opening", description: "Brazilian streetwear brand opens its largest store in the Pinheiros district", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Severe thunderstorm and flash flood risk. Stay indoors during heavy downpours. Avoid underpasses.", validUntil: "March 8, 2026 10:00 PM" }
    ],
    popularPlaces: [
      { name: "Avenida Paulista", type: "Shopping & Culture", location: "Bela Vista", popularity: "Very High", description: "São Paulo's iconic boulevard with museums, galleries, restaurants, and cafes", visitorCount: "1,500,000+" },
      { name: "Mercadão (Municipal Market)", type: "Food Market", location: "Centro", popularity: "High", description: "Historic market with exotic fruits, cheeses, bacalhau, and the famous mortadella sandwich", visitorCount: "10,000+" },
      { name: "Vila Madalena Bars", type: "Nightlife & Cafes", location: "Vila Madalena", popularity: "High", description: "Bohemian neighbourhood with street art, bars, and live samba venues", visitorCount: "20,000+" },
      { name: "Shopping Iguatemi", type: "Luxury Shopping", location: "Jardins", popularity: "High", description: "Brazil's first shopping mall with luxury brands and fine dining", visitorCount: "15,000+" },
      { name: "Liberdade Japanese Quarter", type: "Food & Culture", location: "Liberdade", popularity: "Medium", description: "Japanese-Brazilian neighbourhood with sushi restaurants, shops, and Asian grocery stores", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "Robbery and car theft in many areas", details: ["Car robbery at traffic lights (arrastão)", "Avoid walking with phones visible", "Some areas unsafe at night"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Severe traffic and flooding after rain", details: ["Daily traffic jams among the world's worst", "Flash flooding blocks key roads", "Metro overcrowded at peak hours"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Moderate", description: "Labour and political demonstrations", details: ["MST agricultural worker marches", "Union strikes disrupting public transport", "Political rallies on Avenida Paulista"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Financial Analyst", employer: "Itaú Unibanco", neighborhood: "Vila Olímpia", type: "Full-time", sector: "Finance", description: "Support investment banking team. Economics or finance degree. Excel and Bloomberg required.", salary: "BRL 6,000–10,000/month", posted: "Today" },
      { title: "React Developer", employer: "iFood", neighborhood: "Pinheiros", type: "Full-time", sector: "Technology", description: "Build Latin America's largest food delivery app. TypeScript and React experience.", salary: "BRL 10,000–18,000/month", posted: "1 day ago" },
      { title: "Sushi Chef", employer: "Kinoshita", neighborhood: "Vila Mariana", type: "Full-time", sector: "Hospitality", description: "Japanese fine dining in Brazil's largest Japanese city. Precision and experience essential.", salary: "BRL 4,000–8,000/month", posted: "2 days ago" },
      { title: "Journalist (Reporter)", employer: "Folha de S.Paulo", neighborhood: "Cerqueira César", type: "Full-time", sector: "Media", description: "Report breaking news and features for Brazil's largest newspaper. Portuguese fluency required.", salary: "BRL 4,500–7,000/month", posted: "3 days ago" },
      { title: "Bus Driver", employer: "SPTrans", neighborhood: "Citywide", type: "Full-time", sector: "Transportation", description: "Drive city buses across São Paulo. Valid CNH-D licence required. Benefits included.", salary: "BRL 3,500–5,000/month", posted: "Today" }
    ]
  },
  "rio de janeiro": {
    population: "13.7 million",
    famousPeople: ["Carmen Miranda", "Ronaldinho", "Rodrigo Santoro", "Alice Braga", "City of God cast"],
    currentMayor: "Eduardo Paes",
    foundedYear: 1565,
    nickname: "Marvelous City",
    whatsNew: [
      { name: "Ipanema Beach Club", category: "Restaurant", description: "New upscale beachside restaurant with fresh ceviche and tropical cocktails", openingDate: "March 2026" },
      { name: "Rio Startup Hub Botafogo", category: "Business", description: "New tech startup co-working space in the Botafogo neighbourhood", openingDate: "February 2026" },
      { name: "Tijuca National Park Ecotrail", category: "Park", description: "Expanded guided hiking trail through the world's largest urban rainforest", openingDate: "March 2026" },
      { name: "Farm Rio Flagship Leblon", category: "Store Opening", description: "Brazil's beloved tropical fashion brand opens new flagship in Leblon", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Heavy rain and landslide risk in hillside communities (favelas). Civil Defence alert issued. Stay indoors.", validUntil: "March 9, 2026 6:00 AM" }
    ],
    popularPlaces: [
      { name: "Copacabana Beach", type: "Beach & Dining", location: "Copacabana", popularity: "Very High", description: "World-famous beach lined with kiosks, restaurants, and beachfront hotels", visitorCount: "40,000+" },
      { name: "Ipanema Beach", type: "Beach & Boutiques", location: "Ipanema", popularity: "Very High", description: "Iconic beach with upscale boutiques and seafood restaurants on surrounding streets", visitorCount: "30,000+" },
      { name: "Saara Market District", type: "Street Shopping", location: "Centro", popularity: "High", description: "Bustling downtown market district with fabric, clothing, and goods at low prices", visitorCount: "50,000+" },
      { name: "Santa Teresa Cafes", type: "Art & Cafes", location: "Santa Teresa", popularity: "Medium", description: "Bohemian hilltop neighbourhood with artists' studios, bars, and antique shops", visitorCount: "8,000+" },
      { name: "Shopping Leblon", type: "Shopping Mall", location: "Leblon", popularity: "High", description: "Upscale mall with premium brands, restaurants, and cinema in the wealthy Leblon area", visitorCount: "20,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "High crime rate including armed robbery and gang activity", details: ["Tourists should avoid walking after dark in many areas", "Some favelas under drug faction control", "Mugging common near Copacabana at night"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Flooding and landslides in heavy rain", details: ["Hillside communities at landslide risk", "Roads flood regularly in summer storms", "Traffic congestion in tunnels and highways"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "Moderate", description: "Housing and workers' rights demonstrations", details: ["Favela housing rights marches", "Transport workers' strikes", "Carnival workers' union protests"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Beach Kiosk Attendant", employer: "Copacabana Kiosk Cooperative", neighborhood: "Copacabana Beach", type: "Full-time", sector: "Hospitality", description: "Serve drinks and snacks at the beach. No experience needed. Outdoor work in sun.", salary: "BRL 2,000–3,500/month + tips", posted: "Today" },
      { title: "Hotel Bellboy", employer: "Belmond Copacabana Palace", neighborhood: "Copacabana", type: "Full-time", sector: "Hospitality", description: "Guest assistance at an iconic 5-star hotel. Portuguese and English required.", salary: "BRL 2,500–3,500/month + tips", posted: "1 day ago" },
      { title: "Capoeira Instructor", employer: "Riotur Tourism", neighborhood: "Santa Teresa", type: "Part-time", sector: "Education", description: "Teach capoeira to tourists and locals. Mestre or Contramestre certification required.", salary: "BRL 80–150/class", posted: "Today" },
      { title: "IT Support Analyst", employer: "Embratel", neighborhood: "Centro", type: "Full-time", sector: "Technology", description: "IT helpdesk and network support for Brazil's largest telecom. Technical degree preferred.", salary: "BRL 3,500–6,000/month", posted: "2 days ago" },
      { title: "Construction Worker", employer: "MRV Engenharia", neighborhood: "Barra da Tijuca", type: "Full-time", sector: "Construction", description: "General labour on residential construction. No experience required. Safety equipment provided.", salary: "BRL 2,000–3,000/month", posted: "3 days ago" }
    ]
  },
  "buenos aires": {
    population: "15.6 million",
    famousPeople: ["Diego Maradona", "Lionel Messi", "Jorge Luis Borges", "Eva Perón", "Pope Francis"],
    currentMayor: "Jorge Macri",
    foundedYear: 1536,
    nickname: "Paris of South America",
    whatsNew: [
      { name: "Palermo SoHo Parrilla", category: "Restaurant", description: "New upscale Argentine steakhouse in Palermo with dry-aged prime cuts", openingDate: "March 2026" },
      { name: "Buenos Aires Fintech Hub", category: "Business", description: "New fintech incubator in the Microcentro for Argentine financial startups", openingDate: "February 2026" },
      { name: "Bosques de Palermo Restoration", category: "Park", description: "Restored lakes and native garden areas in Palermo's iconic park network", openingDate: "March 2026" },
      { name: "Rapsodia Recoleta", category: "Store Opening", description: "Argentina's beloved boho fashion brand opens renovated Recoleta boutique", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Strong storm warning. Expect heavy rain, hail, and gusty winds. Avoid outdoor areas and parked cars under trees.", validUntil: "March 7, 2026 8:00 PM" }
    ],
    popularPlaces: [
      { name: "San Telmo Market", type: "Antiques & Dining", location: "San Telmo", popularity: "Very High", description: "Historic antique market with tango shows, restaurants, and local crafts", visitorCount: "5,000+" },
      { name: "Florida Street", type: "Shopping", location: "Microcentro", popularity: "High", description: "Busy pedestrian shopping street with shoe stores, cafes, and bookshops", visitorCount: "100,000+" },
      { name: "Recoleta Neighbourhood", type: "Cafes & Boutiques", location: "Recoleta", popularity: "High", description: "Elegant Parisian-style neighbourhood with cafes, galleries, and designer boutiques", visitorCount: "20,000+" },
      { name: "Palermo Hollywood Bars", type: "Nightlife & Dining", location: "Palermo", popularity: "High", description: "Trendy neighbourhood with restaurants, craft beer bars, and live music venues", visitorCount: "30,000+" },
      { name: "Caminito, La Boca", type: "Cultural Tourism", location: "La Boca", popularity: "Medium", description: "Colourful street market with tango dancers, art, and local crafts", visitorCount: "10,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Economic crisis straining infrastructure upkeep", details: ["Power outages due to infrastructure ageing", "Pothole problem widespread in Greater BA", "Subte (metro) delays and overcrowding"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Purse snatching and scams in tourist areas", details: ["Pickpocketing near Obelisco and Florida Street", "Mustard scam near San Telmo", "Generally safe by South American standards"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "High", description: "Frequent mass protests and piqueteros", details: ["Piquetero roadblocks on major highways", "Anti-austerity marches at Plaza de Mayo", "Unions blocking city centre regularly"], lastUpdated: "March 5, 2026" }
    ],
    localJobs: [
      { title: "Tango Teacher", employer: "Academia Nacional del Tango", neighborhood: "San Telmo", type: "Part-time", sector: "Education", description: "Teach Argentine tango to tourists and local students. Certification and performance experience required.", salary: "ARS $15,000–$30,000/class", posted: "Today" },
      { title: "Software Engineer", employer: "Mercado Libre", neighborhood: "Saavedra", type: "Full-time", sector: "Technology", description: "Build Latin America's largest e-commerce platform. Java or Python backend experience.", salary: "USD $2,000–$4,000/month (USD-pegged)", posted: "1 day ago" },
      { title: "Chef de Partie", employer: "Don Julio Parrilla", neighborhood: "Palermo", type: "Full-time", sector: "Hospitality", description: "Work at Latin America's #1 steakhouse. Experience in Argentine grilling required.", salary: "ARS $300,000–$500,000/month", posted: "2 days ago" },
      { title: "Journalist", employer: "La Nación Digital", neighborhood: "San Nicolás", type: "Full-time", sector: "Media", description: "Report on politics and economics for Argentina's oldest newspaper. Spanish journalism degree.", salary: "ARS $250,000–$400,000/month", posted: "3 days ago" },
      { title: "Delivery Rider", employer: "PedidosYa", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Deliver food and parcels by bike or motorcycle. Own vehicle required. Flexible hours.", salary: "ARS $200,000–$400,000/month", posted: "Today" }
    ]
  },
  "jakarta": {
    population: "35.4 million",
    famousPeople: ["Soekarno", "Megawati Sukarnoputri", "Agnes Monica", "Raline Shah", "Rio Dewanto"],
    currentMayor: "Heru Budi Hartono",
    foundedYear: 397,
    nickname: "Big Durian",
    whatsNew: [
      { name: "SCBD Sate House", category: "Restaurant", description: "Modern Indonesian grill restaurant in the financial district with premium satay", openingDate: "March 2026" },
      { name: "Jakarta Digital Hub", category: "Business", description: "New government-backed tech startup incubator in South Jakarta", openingDate: "February 2026" },
      { name: "Ragunan Zoo Botanical Garden", category: "Park", description: "Expanded botanical garden with tropical plant collections and new walking paths", openingDate: "March 2026" },
      { name: "Erigo Store Grand Indonesia", category: "Store Opening", description: "Indonesia's biggest streetwear brand opens new premium store in the city's top mall", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Heavy monsoon rain and severe flooding risk. Several roads underwater. Seek higher ground if in flood zones.", validUntil: "March 9, 2026" },
      { type: "Heat Alert", description: "High heat and humidity advisory. Feels like 42°C due to humidity. Stay hydrated.", validUntil: "March 10, 2026" }
    ],
    popularPlaces: [
      { name: "Grand Indonesia Mall", type: "Shopping Mall", location: "Central Jakarta", popularity: "Very High", description: "One of Southeast Asia's largest malls with international brands and restaurants", visitorCount: "100,000+" },
      { name: "Kota Tua (Old Town)", type: "Heritage & Cafes", location: "North Jakarta", popularity: "High", description: "Dutch colonial heritage area with museums, cafes, and antique shops", visitorCount: "15,000+" },
      { name: "Pasar Baru Market", type: "Street Shopping", location: "Central Jakarta", popularity: "High", description: "Traditional market known for fabric, electronics, and local goods at good prices", visitorCount: "30,000+" },
      { name: "SCBD & Sudirman District", type: "Dining & Business", location: "South Jakarta", popularity: "High", description: "Financial district with upscale restaurants, bars, and modern shopping", visitorCount: "50,000+" },
      { name: "Tanah Abang Textile Market", type: "Wholesale Fashion", location: "Central Jakarta", popularity: "Very High", description: "Southeast Asia's largest textile market for clothing at wholesale prices", visitorCount: "80,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Critical", description: "Catastrophic traffic, flooding, and sinking land", details: ["North Jakarta sinking up to 25cm per year", "Monsoon flooding paralyzes the city", "Traffic jams among the worst in Asia", "City capital moving to Nusantara, Kalimantan"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Pickpocketing, scams, and motorbike theft", details: ["Smartphone snatching on motorbikes", "Taxi overcharging near airports", "Use Gojek or Grab for safe transport"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Moderate", description: "Worker strikes and political demonstrations", details: ["Labour union rallies near parliament", "Student demonstrations at Universitas Indonesia", "May Day marches city-wide"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Ojek Driver (Gojek)", employer: "Gojek", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Motorbike ride-hailing and delivery. Own motorbike required. Flexible schedule.", salary: "IDR 3,000,000–6,000,000/month", posted: "Today" },
      { title: "Software Engineer", employer: "Tokopedia", neighborhood: "Kuningan, South Jakarta", type: "Full-time", sector: "Technology", description: "Build Indonesia's largest marketplace platform. React or Golang experience needed.", salary: "IDR 15,000,000–30,000,000/month", posted: "1 day ago" },
      { title: "Batik Designer", employer: "Danar Hadi", neighborhood: "Jl. Raden Saleh", type: "Full-time", sector: "Retail", description: "Design traditional and contemporary batik patterns for Indonesia's leading textiles brand.", salary: "IDR 5,000,000–8,000,000/month", posted: "2 days ago" },
      { title: "Hotel Receptionist", employer: "Mandarin Oriental Jakarta", neighborhood: "SCBD", type: "Full-time", sector: "Hospitality", description: "Welcome international guests. English and Indonesian fluency required.", salary: "IDR 5,000,000–7,000,000/month", posted: "Today" },
      { title: "Factory Worker", employer: "Unilever Indonesia", neighborhood: "Cikarang Industrial Zone", type: "Full-time", sector: "Construction", description: "Production line work in FMCG manufacturing. Shift work, full benefits.", salary: "IDR 4,500,000–6,000,000/month", posted: "3 days ago" }
    ]
  },

  "seoul": {
    population: "25.7 million",
    famousPeople: ["BTS", "BLACKPINK", "Psy", "Song Joong-ki", "IU"],
    currentMayor: "Oh Se-hoon",
    foundedYear: 18,
    nickname: "Han River Miracle",
    whatsNew: [
      { name: "Seongsu-dong Café & Brunch", category: "Restaurant", description: "New artisan café collective in Seoul's hip 'Brooklyn' neighbourhood", openingDate: "March 2026" },
      { name: "Seoul MICE Innovation Centre", category: "Business", description: "New conventions and business events hub at COEX in Gangnam", openingDate: "February 2026" },
      { name: "Han River Floating Garden", category: "Park", description: "New floating garden and pedestrian island on the Han River", openingDate: "March 2026" },
      { name: "NewJeans x Gentle Monster", category: "Store Opening", description: "K-pop collaboration fashion pop-up store in Sinchon", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "Yellow dust (hwangsa) warning from China. Wear masks outdoors and close windows. Air quality Poor.", validUntil: "March 10, 2026" }
    ],
    popularPlaces: [
      { name: "Myeongdong Shopping District", type: "Shopping & Dining", location: "Jung-gu", popularity: "Very High", description: "Korea's busiest shopping street for K-beauty, fashion, and street food", visitorCount: "1,000,000+" },
      { name: "Gangnam Shopping & Dining", type: "Luxury Shopping", location: "Gangnam-gu", popularity: "Very High", description: "Upscale fashion brands, plastic surgery clinics, and fine dining", visitorCount: "200,000+" },
      { name: "Hongdae Indie Scene", type: "Nightlife & Cafes", location: "Mapo-gu", popularity: "High", description: "University area with indie music, street performances, cafes, and clubs", visitorCount: "150,000+" },
      { name: "Namdaemun Market", type: "Traditional Market", location: "Jung-gu", popularity: "High", description: "Korea's oldest and largest traditional market with food and goods", visitorCount: "200,000+" },
      { name: "Bukchon Hanok Village", type: "Culture & Cafes", location: "Jongno-gu", popularity: "High", description: "Preserved traditional Korean houses with tea shops and artisan stores", visitorCount: "50,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Low", description: "Excellent infrastructure with some road congestion", details: ["Gangnam and Mapo bridge traffic at peak hours", "Subway capacity at rush hours", "Pothole repairs standard in winter"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "One of the world's safest cities", details: ["Petty theft in Myeongdong and Itaewon", "Drunk driving incidents on weekends", "Overall extremely safe"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Moderate", description: "Political demonstrations common on weekends", details: ["Saturday candlelight vigils at Gwanghwamun Square", "Trade union marches on May Day", "Conservative and progressive rallies competing"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "K-pop Dance Instructor", employer: "Big Hit Entertainment Studio", neighborhood: "Mapo-gu", type: "Part-time", sector: "Education", description: "Teach choreography to trainee and amateur dancers. Dance competition experience required.", salary: "KRW 30,000–80,000/hr", posted: "Today" },
      { title: "Software Engineer", employer: "Kakao", neighborhood: "Seongnam (Pangyo)", type: "Full-time", sector: "Technology", description: "Build features for KakaoTalk used by 50M+ Koreans. Java or Kotlin required.", salary: "KRW 60,000,000–90,000,000/yr", posted: "1 day ago" },
      { title: "K-beauty Consultant", employer: "Innisfree Myeongdong Flagship", neighborhood: "Myeongdong", type: "Part-time", sector: "Retail", description: "Assist customers with skincare and cosmetics. English or Chinese skills a major asset.", salary: "KRW 12,000–15,000/hr", posted: "Today" },
      { title: "Nurse", employer: "Samsung Medical Center", neighborhood: "Gangnam", type: "Full-time", sector: "Healthcare", description: "ICU nursing in a world-class hospital. Korean nursing licence and language required.", salary: "KRW 35,000,000–50,000,000/yr", posted: "2 days ago" },
      { title: "Webtoon Artist", employer: "Naver Webtoon", neighborhood: "Seongbuk-gu", type: "Contract", sector: "Media", description: "Create original digital comic series for Korea's leading webtoon platform. Portfolio required.", salary: "KRW 3,000,000–8,000,000/month", posted: "3 days ago" }
    ]
  },
  "tehran": {
    population: "15.2 million",
    famousPeople: ["Shohreh Aghdashloo", "Golshifteh Farahani", "Leila Hatami", "Ali Daei", "Googoosh"],
    currentMayor: "Alireza Zakani",
    foundedYear: 3000,
    nickname: "City of 72 Nations",
    whatsNew: [
      { name: "Darband Traditional Restaurant", category: "Restaurant", description: "Mountain-area restaurant serving traditional Persian cuisine with river views", openingDate: "March 2026" },
      { name: "Tehran Digital Commerce Park", category: "Business", description: "New zone for e-commerce and digital businesses near Shahrak Gharb", openingDate: "February 2026" },
      { name: "Jamshidieh Park Expansion", category: "Park", description: "New cultural pavilion and nature walk added to the rocky hillside park", openingDate: "March 2026" },
      { name: "Golestan Shopping Centre", category: "Store Opening", description: "New concept retail floor with Iranian designer brands and handicrafts", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "Dust storm and heat advisory. Hazardous air quality expected. Limit outdoor exposure, wear masks.", validUntil: "March 10, 2026" }
    ],
    popularPlaces: [
      { name: "Grand Bazaar of Tehran", type: "Market & Culture", location: "Tehran City Centre", popularity: "Very High", description: "One of the world's largest bazaars with spices, carpets, gold, and traditional goods", visitorCount: "500,000+" },
      { name: "Tajrish Bazaar", type: "Food Market", location: "Shemiran", popularity: "High", description: "Traditional market in north Tehran known for fresh produce and local foods", visitorCount: "30,000+" },
      { name: "Milad Tower", type: "Landmark & Shopping", location: "Shahrak Gharb", popularity: "High", description: "Sixth-tallest tower in the world with restaurants and observation deck", visitorCount: "1,000,000+" },
      { name: "Valiasr Street Cafes", type: "Cafes & Restaurants", location: "Valiasr Ave", popularity: "High", description: "World's longest urban street with tree-lined cafes and restaurants", visitorCount: "50,000+" },
      { name: "Sa'dabad Palace Complex", type: "Cultural Tourism", location: "Shemiran", popularity: "Medium", description: "Historic palace gardens with museums and cultural exhibitions", visitorCount: "200,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Severe air pollution and traffic gridlock", details: ["Tehran has some of world's worst air quality (AQI 200+)", "Traffic jams across all major highways", "Metro overcrowded; expansion projects delayed"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Low", description: "Generally safe with limited petty crime", details: ["Bag snatching in crowded bazaars", "Car theft in outlying areas", "City is largely safe for residents"], lastUpdated: "March 4, 2026" },
      { type: "Protests", severity: "Moderate", description: "Social and political tensions periodically arise", details: ["Worker and teacher strikes", "Economic hardship protests", "Police presence heavy at demonstrations"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "Carpet Weaver", employer: "Iran Carpet Company", neighborhood: "Tehran Bazaar", type: "Full-time", sector: "Retail", description: "Hand-knot traditional Persian carpets. Apprenticeship available; no experience needed.", salary: "IRR 30,000,000–50,000,000/month", posted: "Today" },
      { title: "Software Developer", employer: "Digikala", neighborhood: "Shahrak Gharb", type: "Full-time", sector: "Technology", description: "Build Iran's largest e-commerce platform. React and Django experience.", salary: "IRR 80,000,000–150,000,000/month", posted: "1 day ago" },
      { title: "Hospital Physician", employer: "Imam Khomeini Hospital", neighborhood: "Tehran University", type: "Full-time", sector: "Healthcare", description: "General medicine practice in a major public hospital. Iranian medical licence required.", salary: "IRR 200,000,000–400,000,000/month", posted: "2 days ago" },
      { title: "Taxi Driver", employer: "Snapp (Iran Uber)", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Drive passengers via Iran's leading ride-hailing app. Own car required.", salary: "IRR 40,000,000–70,000,000/month", posted: "Today" },
      { title: "Persian Language Teacher", employer: "University of Tehran", neighborhood: "Enghelab Square", type: "Part-time", sector: "Education", description: "Teach Farsi to international students. MA degree in Persian literature required.", salary: "IRR 25,000,000–40,000,000/month", posted: "3 days ago" }
    ]
  },
  "karachi": {
    population: "16.0 million",
    famousPeople: ["Mahira Khan", "Fawad Khan", "Atif Aslam", "Rahat Fateh Ali Khan", "Nusrat Fateh Ali Khan"],
    currentMayor: "Barrister Murtaza Wahab",
    foundedYear: 1729,
    nickname: "City of Lights",
    whatsNew: [
      { name: "Clifton Sea View Grill", category: "Restaurant", description: "New seafood restaurant overlooking the Arabian Sea in Clifton", openingDate: "March 2026" },
      { name: "Karachi Tech Park SITE", category: "Business", description: "Government IT park with subsidized space for software companies", openingDate: "February 2026" },
      { name: "Bagh Ibn Qasim Walkway", category: "Park", description: "Upgraded seaside park walkway with new benches and jogging track", openingDate: "March 2026" },
      { name: "Khaadi Flagship Dolmen Mall", category: "Store Opening", description: "Pakistan's leading fashion brand opens largest store in Dolmen Mall", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Heat Alert", description: "Extreme heat warning. Temperatures 40–44°C with high humidity. Heatstroke risk. Stay indoors midday.", validUntil: "March 11, 2026" }
    ],
    popularPlaces: [
      { name: "Clifton Beach", type: "Beach & Street Food", location: "Clifton", popularity: "Very High", description: "Popular beach with camel rides, street food stalls, and carnival attractions", visitorCount: "30,000+" },
      { name: "Dolmen Mall Clifton", type: "Shopping Mall", location: "Clifton", popularity: "Very High", description: "Karachi's premier mall with international and Pakistani brands", visitorCount: "40,000+" },
      { name: "Saddar Bazaar", type: "Street Shopping", location: "Saddar", popularity: "High", description: "Historic commercial district with fabric, electronics, and street food", visitorCount: "100,000+" },
      { name: "Port Grand", type: "Dining & Entertainment", location: "Karachi Port", popularity: "High", description: "Waterfront food and entertainment complex with Pakistani and international cuisine", visitorCount: "10,000+" },
      { name: "Empress Market", type: "Food Market", location: "Saddar", popularity: "Medium", description: "Victorian-era market for fresh produce, spices, and live animals", visitorCount: "20,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "High", description: "Potholed roads, power cuts, and water shortages", details: ["12+ hour power outages in summer", "Water tanker dependency in many areas", "Roads in poor condition across the city"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "High", description: "Street crime and targeted robbery", details: ["Phone and wallet snatching on motorcycles", "Car theft and carjacking reports", "Use Careem or InDrive apps for safe transport"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "Moderate", description: "Political and labour demonstrations", details: ["PTI and PPP party rallies", "Labour union strikes blocking roads", "Sectarian demonstrations occasionally"], lastUpdated: "March 3, 2026" }
    ],
    localJobs: [
      { title: "BPO Agent", employer: "Ibex Global", neighborhood: "Clifton", type: "Full-time", sector: "Technology", description: "Handle international customer support calls in English. Excellent communication required.", salary: "PKR 40,000–65,000/month", posted: "Today" },
      { title: "Fashion Stitching Operator", employer: "Khaadi Factory", neighborhood: "SITE Industrial Area", type: "Full-time", sector: "Retail", description: "Operate sewing machines for garment production. Experience preferred but training provided.", salary: "PKR 25,000–35,000/month", posted: "1 day ago" },
      { title: "Port Logistics Officer", employer: "Karachi Port Trust", neighborhood: "Port Area", type: "Full-time", sector: "Transportation", description: "Coordinate cargo operations at Pakistan's busiest seaport. Logistics degree preferred.", salary: "PKR 60,000–90,000/month", posted: "2 days ago" },
      { title: "TV News Reporter", employer: "Geo News", neighborhood: "Korangi", type: "Full-time", sector: "Media", description: "Report on breaking news in Karachi. Journalism degree and Urdu/English fluency required.", salary: "PKR 50,000–80,000/month", posted: "Today" },
      { title: "Pharmacist", employer: "Aga Khan University Hospital", neighborhood: "Stadium Road", type: "Full-time", sector: "Healthcare", description: "Dispense medicines and counsel patients at a leading private hospital. PharmD required.", salary: "PKR 80,000–120,000/month", posted: "3 days ago" }
    ]
  },
  "dhaka": {
    population: "22.5 million",
    famousPeople: ["Shakib Al Hasan", "Mashrafe Mortaza", "Jaya Ahsan", "Chanchal Chowdhury", "Fazlur Rahman Khan"],
    currentMayor: "Sheikh Fazle Noor Taposh",
    foundedYear: 1608,
    nickname: "City of Mosques",
    whatsNew: [
      { name: "Dhanmondi Lake Restaurant Row", category: "Restaurant", description: "New cluster of modern Bangladeshi and international restaurants along the lake", openingDate: "March 2026" },
      { name: "Bashundhara IT Complex", category: "Business", description: "Expanded IT park for software and BPO companies in the Bashundhara zone", openingDate: "February 2026" },
      { name: "Hatirjheel Water Park", category: "Park", description: "New floating platform and water sports area at the Hatirjheel lake complex", openingDate: "March 2026" },
      { name: "Aarong Gulshan Flagship", category: "Store Opening", description: "Bangladesh's largest artisan brand expands its Gulshan lifestyle store", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Storm Alert", description: "Cyclone precursor weather. Heavy rain and high winds from Bay of Bengal system. Coastal residents on alert.", validUntil: "March 9, 2026" }
    ],
    popularPlaces: [
      { name: "New Market Shopping Area", type: "Street Shopping", location: "Nilkhet", popularity: "Very High", description: "Enormous market for clothing, books, electronics, and groceries at low prices", visitorCount: "100,000+" },
      { name: "Gulshan & Banani Cafes", type: "Cafes & Restaurants", location: "Gulshan", popularity: "High", description: "Upscale neighbourhoods with international restaurants, cafes, and boutiques", visitorCount: "20,000+" },
      { name: "Bashundhara City Mall", type: "Shopping Mall", location: "Panthapath", popularity: "Very High", description: "Bangladesh's largest shopping mall with hundreds of local and international stores", visitorCount: "50,000+" },
      { name: "Sadarghat River Port", type: "Cultural Experience", location: "Old Dhaka", popularity: "Medium", description: "Busy river port with wooden boats, fish markets, and local atmosphere", visitorCount: "30,000+" },
      { name: "Old Dhaka Food Street", type: "Street Food", location: "Puran Dhaka", popularity: "High", description: "Famous for biryani, kebabs, and traditional Bengali street food at any hour", visitorCount: "15,000+" }
    ],
    problems: [
      { type: "Infrastructure", severity: "Critical", description: "Extreme traffic gridlock and flooding", details: ["Dhaka has some of world's worst traffic (avg 4.4km/hr)", "Waterlogging after any significant rain", "Power cuts frequent in residential areas"], lastUpdated: "March 5, 2026" },
      { type: "Crime", severity: "Moderate", description: "Petty crime and road accidents", details: ["Phone snatching on rickshaws", "Bus pickpocketing in crowded routes", "Road accidents very common"], lastUpdated: "March 6, 2026" },
      { type: "Protests", severity: "High", description: "Frequent political and student demonstrations", details: ["Garment worker strike marches", "Political party hartals (shutdowns)", "Student union demonstrations at Dhaka University"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Garment Quality Inspector", employer: "Square Textiles", neighborhood: "Mirpur", type: "Full-time", sector: "Retail", description: "Inspect exported garments for major global brands. Textile knowledge preferred.", salary: "BDT 15,000–25,000/month", posted: "Today" },
      { title: "Software Developer", employer: "bKash", neighborhood: "Gulshan", type: "Full-time", sector: "Technology", description: "Build Bangladesh's leading mobile banking platform. Java or React Native.", salary: "BDT 50,000–100,000/month", posted: "1 day ago" },
      { title: "Rickshaw Driver", employer: "Self-employed", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Pedal rickshaw work in Dhaka's dense streets. Own or rented rickshaw. Flexible hours.", salary: "BDT 8,000–15,000/month", posted: "Today" },
      { title: "Hospital Nurse", employer: "Dhaka Medical College Hospital", neighborhood: "Sher-e-Bangla Nagar", type: "Full-time", sector: "Healthcare", description: "Government nursing role in a major public hospital. B.Sc Nursing required.", salary: "BDT 20,000–30,000/month", posted: "2 days ago" },
      { title: "English Tutor", employer: "British Council Bangladesh", neighborhood: "Fuller Road, Dhaka", type: "Part-time", sector: "Education", description: "Teach English communication skills to Bangladeshi students and professionals.", salary: "BDT 600–1,200/hr", posted: "3 days ago" }
    ]
  },
  "lima": {
    population: "11.1 million",
    famousPeople: ["Mario Vargas Llosa", "Gastón Acurio", "Magaly Medina", "Jefferson Farfán", "Claudio Pizarro"],
    currentMayor: "Rafael López Aliaga",
    foundedYear: 1535,
    nickname: "City of Kings",
    whatsNew: [
      { name: "Central Cevichería", category: "Restaurant", description: "New ceviche and Peruvian seafood restaurant from a Central alumni chef in Miraflores", openingDate: "March 2026" },
      { name: "Lima Tech Hub Surquillo", category: "Business", description: "New tech startup co-working space in Surquillo, Lima's emerging innovation district", openingDate: "February 2026" },
      { name: "Costa Verde Boardwalk", category: "Park", description: "Extended coastal boardwalk between Miraflores and Barranco with new seating", openingDate: "March 2026" },
      { name: "Gamarra Fashion Street", category: "Store Opening", description: "New curated boutique section in Lima's massive textile market district", openingDate: "March 2026" }
    ],
    emergencyAlerts: [
      { type: "Weather Warning", description: "El Niño-related strong currents and coastal winds. Avoid swimming at ocean beaches. Fog reducing visibility.", validUntil: "March 10, 2026" }
    ],
    popularPlaces: [
      { name: "Miraflores Larcomar Mall", type: "Shopping & Dining", location: "Miraflores", popularity: "Very High", description: "Clifftop mall carved into the Pacific coast with ocean-view restaurants", visitorCount: "15,000+" },
      { name: "Barranco Bohemian District", type: "Art & Restaurants", location: "Barranco", popularity: "High", description: "Colonial seaside neighbourhood with art galleries, restaurants, and live music", visitorCount: "10,000+" },
      { name: "Miraflores Parque Kennedy", type: "Cafes & Shopping", location: "Miraflores", popularity: "High", description: "Popular park surrounded by cafes, restaurants, and street vendors", visitorCount: "20,000+" },
      { name: "Gamarra Textile Market", type: "Fashion Market", location: "La Victoria", popularity: "High", description: "One of Latin America's largest textile markets with thousands of clothing vendors", visitorCount: "120,000+" },
      { name: "Surquillo Produce Market", type: "Food Market", location: "Surquillo", popularity: "Medium", description: "Fresh ingredients market for chefs — home to Peru's finest local produce", visitorCount: "8,000+" }
    ],
    problems: [
      { type: "Crime", severity: "High", description: "Robbery and express kidnapping in many areas", details: ["Express kidnapping by fake taxis", "Phone snatching in tourist areas", "Avoid flashing valuables in public"], lastUpdated: "March 6, 2026" },
      { type: "Infrastructure", severity: "High", description: "Traffic congestion and potholed roads", details: ["Lima has one of South America's worst traffic problems", "Many roads in poor condition", "Combi buses cause road accidents frequently"], lastUpdated: "March 5, 2026" },
      { type: "Protests", severity: "High", description: "Regular roadblocks and political demonstrations", details: ["Regional roadblocks disrupting Lima highways", "Anti-government marches in Plaza San Martín", "Truck driver strikes blocking cargo routes"], lastUpdated: "March 4, 2026" }
    ],
    localJobs: [
      { title: "Ceviche Cook", employer: "La Mar Cebichería", neighborhood: "Miraflores", type: "Full-time", sector: "Hospitality", description: "Prepare traditional Peruvian ceviche at Gastón Acurio's acclaimed restaurant. Experience required.", salary: "PEN 1,500–2,500/month", posted: "Today" },
      { title: "Software Developer", employer: "Culqi (fintech)", neighborhood: "San Isidro", type: "Full-time", sector: "Technology", description: "Build payment gateway solutions for Peru and the Andes region. React or Python.", salary: "PEN 4,000–8,000/month", posted: "1 day ago" },
      { title: "Tour Guide (English/Spanish)", employer: "Peru Hop", neighborhood: "Miraflores", type: "Part-time", sector: "Hospitality", description: "Lead overland tours of Peru's best destinations. English fluency and charisma essential.", salary: "PEN 1,200/month + tips", posted: "Today" },
      { title: "Bank Analyst", employer: "BCP (Banco de Crédito)", neighborhood: "La Molina", type: "Full-time", sector: "Finance", description: "Credit risk analysis for Peru's largest bank. Economics or finance degree.", salary: "PEN 3,500–6,000/month", posted: "2 days ago" },
      { title: "Delivery Motorcyclist", employer: "Rappi Peru", neighborhood: "Citywide", type: "Part-time", sector: "Transportation", description: "Deliver food and parcels by motorbike. Flexible hours. Own motorbike preferred.", salary: "PEN 1,200–2,000/month", posted: "Today" }
    ]
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