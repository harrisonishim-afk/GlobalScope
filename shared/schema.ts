import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// News schema
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"),
  url: text("url"),
  imageUrl: text("image_url"),
  source: text("source").notNull(),
  author: text("author"),
  category: text("category"),
  publishedAt: timestamp("published_at"),
  city: text("city").notNull(),
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
});

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type NewsItem = typeof news.$inferSelect;

// City search history for caching popular searches
export const citySearches = pgTable("city_searches", {
  id: serial("id").primaryKey(),
  city: text("city").notNull().unique(),
  searchCount: integer("search_count").notNull().default(1),
  lastSearched: timestamp("last_searched").notNull().defaultNow(),
});

export const insertCitySearchSchema = createInsertSchema(citySearches).omit({
  id: true,
  searchCount: true,
  lastSearched: true,
});

export type InsertCitySearch = z.infer<typeof insertCitySearchSchema>;
export type CitySearch = typeof citySearches.$inferSelect;
