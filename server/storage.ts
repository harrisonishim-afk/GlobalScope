import { 
  users, type User, type InsertUser,
  news, type NewsItem, type InsertNews,
  citySearches, type CitySearch
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // News methods
  getNewsByCity(city: string): Promise<NewsItem[]>;
  createNews(news: InsertNews): Promise<NewsItem>;
  
  // City search methods
  updateCitySearch(city: string): Promise<CitySearch>;
  getPopularCities(limit?: number): Promise<CitySearch[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsItems: Map<number, NewsItem>;
  private cities: Map<number, CitySearch>;
  
  private userCurrentId: number;
  private newsCurrentId: number;
  private cityCurrentId: number;

  constructor() {
    this.users = new Map();
    this.newsItems = new Map();
    this.cities = new Map();
    
    this.userCurrentId = 1;
    this.newsCurrentId = 1;
    this.cityCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // News methods
  async getNewsByCity(city: string): Promise<NewsItem[]> {
    return Array.from(this.newsItems.values()).filter(
      (item) => item.city.toLowerCase() === city.toLowerCase()
    );
  }

  async createNews(insertNews: InsertNews): Promise<NewsItem> {
    const id = this.newsCurrentId++;
    const newsItem: NewsItem = {
      ...insertNews,
      id,
      content: insertNews.content ?? null,
      url: insertNews.url ?? null,
      imageUrl: insertNews.imageUrl ?? null,
      author: insertNews.author ?? null,
      category: insertNews.category ?? null,
      publishedAt: insertNews.publishedAt ?? null,
    };
    this.newsItems.set(id, newsItem);
    return newsItem;
  }

  // City search methods
  async updateCitySearch(city: string): Promise<CitySearch> {
    const normalizedCity = city.toLowerCase();
    const existingCity = Array.from(this.cities.values()).find(
      (c) => c.city.toLowerCase() === normalizedCity
    );

    if (existingCity) {
      // Update existing city search count
      const updatedCity: CitySearch = {
        ...existingCity,
        searchCount: existingCity.searchCount + 1,
        lastSearched: new Date(),
      };
      this.cities.set(existingCity.id, updatedCity);
      return updatedCity;
    } else {
      // Create new city search entry
      const id = this.cityCurrentId++;
      const newCity: CitySearch = {
        id,
        city,
        searchCount: 1,
        lastSearched: new Date(),
      };
      this.cities.set(id, newCity);
      return newCity;
    }
  }

  async getPopularCities(limit: number = 10): Promise<CitySearch[]> {
    return Array.from(this.cities.values())
      .sort((a, b) => b.searchCount - a.searchCount)
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
