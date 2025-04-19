import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

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

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 news-card">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={item.imageUrl || "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=500&auto=format"}
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
          <span>
            {item.publishedAt 
              ? formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true }) 
              : "Recently"}
          </span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>
        <a 
          href={item.url} 
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
