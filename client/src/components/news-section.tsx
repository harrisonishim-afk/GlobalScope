import { useState } from "react";
import NewsCard from "@/components/news-card";
import { Loader2, AlertCircle, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@shared/schema";
import { format } from "date-fns";

interface NewsSectionProps {
  newsItems: NewsItem[] | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  currentCity: string;
  handleRetry: () => void;
  handleQuickSearch: (city: string) => void;
}

export default function NewsSection({
  newsItems,
  isLoading,
  isError,
  errorMessage,
  currentCity,
  handleRetry,
  handleQuickSearch,
}: NewsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  
  const loadMore = () => {
    if (newsItems) {
      setVisibleCount(Math.min(visibleCount + 6, newsItems.length));
    }
  };

  const getCurrentTime = () => {
    return format(new Date(), "MMMM d, yyyy 'at' h:mm a");
  };

  if (!currentCity) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="space-y-8 w-full max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center">
              <Loader2 className="animate-spin h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Fetching headlines for {currentCity}...
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center max-w-2xl mx-auto">
        <div className="text-error mb-4">
          <AlertCircle className="h-12 w-12 mx-auto text-red-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Unable to load news for this location
        </h3>
        <p className="text-gray-600 mb-4">
          {errorMessage || "We couldn't find news for the location you entered. Please check the spelling or try a different city."}
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 justify-center">
          <Button onClick={handleRetry}>Try again</Button>
          <Button variant="outline" onClick={() => handleQuickSearch("New York")}>
            Browse popular cities
          </Button>
        </div>
      </div>
    );
  }

  if (newsItems && newsItems.length === 0) {
    const popularCities = ["New York", "London", "Tokyo", "Paris", "Chicago"];
    
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center max-w-2xl mx-auto">
        <div className="text-gray-400 mb-4">
          <Newspaper className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No recent news available
        </h3>
        <p className="text-gray-600 mb-4">
          There are no recent headlines for this location. Try searching for a larger city nearby or check back later.
        </p>
        <div className="mt-4">
          <h4 className="font-medium text-gray-700 mb-2">
            Try one of these popular cities:
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {popularCities.map((city) => (
              <button
                key={city}
                className="px-3 py-1 bg-secondary text-gray-700 rounded-full text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
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

  return (
    <section>
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Headlines in <span className="text-primary">{currentCity}</span>
          <span className="text-sm text-gray-500 ml-2">
            ({newsItems?.length} articles)
          </span>
        </h2>
        <div className="text-sm">
          <span className="text-gray-500">Last updated: </span>
          <span className="font-medium">{getCurrentTime()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems?.slice(0, visibleCount).map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>

      {newsItems && visibleCount < newsItems.length && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={loadMore}>
            Load more headlines
          </Button>
        </div>
      )}
    </section>
  );
}
