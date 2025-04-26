import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { NewsItem } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";
import { getNormalizedCityName } from "@/lib/neighborhoodAnalysis";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const getCategoryClass = (category: string) => {
    const categoryClasses: Record<string, string> = {
      "local": "bg-primary",
      "traffic": "bg-warning",
      "food": "bg-success",
      "housing": "bg-primary",
      "sports": "bg-accent",
      "community": "bg-success",
      "politics": "bg-primary",
      "business": "bg-accent",
      "health": "bg-success",
      "technology": "bg-warning",
      "entertainment": "bg-accent",
      "science": "bg-primary",
      "education": "bg-success",
      "environment": "bg-accent",
    };
    
    return categoryClasses[category.toLowerCase()] || "bg-primary";
  };

  // Check if this article mentions a specific neighborhood
  const getNeighborhoodMention = () => {
    if (!item.city) return undefined;
    
    const cityName = getNormalizedCityName(item.city);
    const cityNeighborhoods: Record<string, string[]> = {
      "new york": ["manhattan", "brooklyn", "queens", "bronx", "staten island", "harlem", "times square", "chelsea", "soho", "tribeca"],
      "london": ["westminster", "hackney", "camden", "brixton", "shoreditch", "kensington", "chelsea", "islington", "southwark", "hammersmith"],
      "paris": ["le marais", "montmartre", "champs-élysées", "bastille", "pigalle", "quartier latin", "la défense", "belleville", "montparnasse", "république"],
      "tokyo": ["shinjuku", "shibuya", "ginza", "roppongi", "akihabara", "asakusa", "harajuku", "ikebukuro", "odaiba", "ueno"],
      "sydney": ["cbd", "bondi", "manly", "newtown", "surry hills", "parramatta", "circular quay", "darling harbour", "chatswood", "kings cross"],
      "boston": ["back bay", "beacon hill", "north end", "south end", "fenway", "downtown", "charlestown", "cambridge", "roxbury", "dorchester"],
      "chicago": ["loop", "wicker park", "lincoln park", "gold coast", "hyde park", "lakeview", "pilsen", "uptown", "west loop", "rogers park"],
    };
    
    const neighborhoods = cityNeighborhoods[cityName] || [];
    const content = `${item.title} ${item.description}`.toLowerCase();
    
    for (const neighborhood of neighborhoods) {
      if (content.includes(neighborhood)) {
        return neighborhood;
      }
    }
    
    return undefined;
  };

  const formatDate = (dateString?: Date | string | null) => {
    if (!dateString) return "Recently";
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (e) {
      return "Recently";
    }
  };

  const neighborhood = getNeighborhoodMention();
  const fallbackImage = "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=500&auto=format";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 news-card">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={item.imageUrl || fallbackImage}
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        {item.category && (
          <div className={`absolute top-0 right-0 ${getCategoryClass(item.category)} text-white text-xs font-medium px-2 py-1 rounded-bl`}>
            {item.category}
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span className="font-medium text-gray-700">{item.source}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(item.publishedAt)}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>
        
        {neighborhood && (
          <div className="mb-3">
            <Badge variant="outline" className="flex items-center gap-1 text-xs">
              <MapPin className="h-3 w-3" />
              {neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1)}
            </Badge>
          </div>
        )}
        
        <a 
          href={item.url || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary font-medium text-sm hover:underline"
        >
          Read full story →
        </a>
      </CardContent>
    </Card>
  );
}
