import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, X } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (city: string) => void;
}

const popularCities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

export default function SearchForm({ searchQuery, setSearchQuery, handleSearch }: SearchFormProps) {
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleQuickSearch = (city: string) => {
    setSearchQuery(city);
    handleSearch(city);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            id="location-search"
            className="block w-full pl-10 pr-20 py-3 border border-gray-300 rounded-md"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            {searchQuery && (
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <Button type="submit" className="rounded-l-none h-full">
              {t("searchButton")}
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-2 flex justify-between text-sm">
        <span className="text-gray-500">{t("popularLabel")}</span>
        <div className="space-x-2">
          {popularCities.map((city) => (
            <button
              key={city}
              className="text-primary hover:text-primary hover:underline focus:outline-none"
              onClick={() => handleQuickSearch(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
