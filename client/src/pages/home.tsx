import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchForm from "@/components/search-form";
import NewsSection from "@/components/news-section";
import NeighborhoodMap from "@/components/neighborhood-map";
import { NewsItem } from "@shared/schema";
import { hasNeighborhoodData } from "@/lib/neighborhoodAnalysis";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");

  const {
    data: newsItems,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<NewsItem[]>({
    queryKey: [`/api/news/${currentCity}`],
    enabled: !!currentCity,
  });

  const handleSearch = (city: string) => {
    if (city.trim()) {
      setCurrentCity(city);
    }
  };

  // Determine if we should show the neighborhood map
  const showNeighborhoodMap = currentCity && newsItems && newsItems.length > 0 && hasNeighborhoodData(currentCity);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-8">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Global News, Local Focus</h2>
              <p className="text-lg text-gray-600">Enter any city to discover what's happening around the world.</p>
            </div>
            <SearchForm 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              handleSearch={handleSearch}
            />
          </section>
          
          <div className={showNeighborhoodMap ? "grid grid-cols-1 lg:grid-cols-3 gap-6" : ""}>
            <div className={showNeighborhoodMap ? "lg:col-span-2" : ""}>
              <NewsSection 
                newsItems={newsItems} 
                isLoading={isLoading} 
                isError={isError} 
                errorMessage={error instanceof Error ? error.message : "An error occurred"} 
                currentCity={currentCity}
                handleRetry={() => refetch()}
                handleQuickSearch={handleSearch}
              />
            </div>
            
            {showNeighborhoodMap && newsItems && (
              <div className="lg:col-span-1">
                <NeighborhoodMap 
                  newsItems={newsItems} 
                  cityName={currentCity} 
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
