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
    <Card className="overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 news-card group">
      <div className="relative h-44 bg-gray-100 overflow-hidden">
        <img
          src={item.imageUrl || fallbackImage}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
        />
        {item.category && (
          <div className={`absolute top-2.5 left-2.5 ${getCategoryClass(item.category)} text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full`}>
            {item.category}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
          <span className="font-semibold text-gray-600">{item.source}</span>
          <span>·</span>
          <span>{formatDate(item.publishedAt)}</span>
        </div>
        <h3 className="text-sm font-bold text-gray-900 mb-1.5 line-clamp-2 leading-snug">{item.title}</h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{item.description}</p>

        <div className="flex items-center justify-between">
          {neighborhood ? (
            <Badge variant="outline" className="flex items-center gap-1 text-xs py-0 border-gray-200">
              <MapPin className="h-2.5 w-2.5" />
              {neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1)}
            </Badge>
          ) : <span />}
          <a
            href={item.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-semibold text-xs hover:text-sky-800 hover:underline transition-colors"
          >
            Read more →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
