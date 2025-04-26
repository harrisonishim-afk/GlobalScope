import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@shared/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CalendarIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow, format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface HistoricalNewsProps {
  cityName: string;
}

export default function HistoricalNews({ cityName }: HistoricalNewsProps) {
  const [showMore, setShowMore] = useState(false);
  
  // Fetch historical news from one year ago
  const {
    data: historicalNews,
    isLoading,
    isError,
  } = useQuery<NewsItem[]>({
    queryKey: [`/api/news/${cityName}/historical`],
    enabled: !!cityName,
  });
  
  // Reset state when cityName changes
  useEffect(() => {
    setShowMore(false);
  }, [cityName]);
  
  // Format date nicely
  const formatNewsDate = (date: Date | string | null) => {
    if (!date) return "One year ago";
    
    try {
      const dateObj = new Date(date);
      return format(dateObj, "MMMM d, yyyy");
    } catch (e) {
      return "One year ago";
    }
  };
  
  // Check if we have any news to display
  const hasHistoricalNews = historicalNews && historicalNews.length > 0;
  
  if (isLoading) {
    return (
      <Card className="mb-8 overflow-hidden">
        <CardHeader className="pb-3">
          <Skeleton className="h-7 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-16 w-full mb-4" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (isError || !hasHistoricalNews) {
    return null; // Don't show anything if we couldn't find historical news
  }
  
  // Get the main article to display
  const mainArticle = historicalNews[0];
  
  return (
    <Card className="mb-8 overflow-hidden border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          {cityName} News: One Year Ago Today
        </CardTitle>
        <CardDescription>
          See how the headlines have changed over the past year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" />
                {formatNewsDate(mainArticle.publishedAt)}
              </Badge>
              
              {mainArticle.category && (
                <Badge variant="secondary" className="text-xs">
                  {mainArticle.category}
                </Badge>
              )}
            </div>
            
            <h3 className="text-base font-medium mb-1">{mainArticle.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {mainArticle.description}
            </p>
            
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-muted-foreground">
                Source: {mainArticle.source}
              </div>
              <a 
                href={mainArticle.url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary flex items-center gap-1 hover:underline"
              >
                Read original article
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          {showMore && historicalNews.length > 1 && (
            <div className="border-t pt-3 mt-3">
              <h4 className="text-sm font-medium mb-2">More headlines from this time:</h4>
              <ul className="space-y-2">
                {historicalNews.slice(1).map((article, index) => (
                  <li key={index} className="text-sm">
                    <a 
                      href={article.url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline transition-colors"
                    >
                      {article.title}
                    </a>
                    <div className="text-xs text-muted-foreground">
                      {article.source} • {formatNewsDate(article.publishedAt)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {historicalNews.length > 1 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-xs text-primary hover:underline mt-2"
            >
              {showMore ? "Show less" : `Show ${historicalNews.length - 1} more headlines from this time`}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}