import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap } from "lucide-react";
import { getPopularPlaces, PopularPlace } from "@/lib/cityFacts";

interface PlacesPopularityMapProps {
  cityName: string;
}

export default function PlacesPopularityMap({ cityName }: PlacesPopularityMapProps) {
  const places = getPopularPlaces(cityName);
  
  if (!places || places.length === 0) {
    return null;
  }

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "Very High":
        return "bg-red-500";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPopularityBadgeColor = (popularity: string) => {
    switch (popularity) {
      case "Very High":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const popularityLevels = ["Very High", "High", "Medium", "Low"];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Popular Shops & Places
        </CardTitle>
        <CardDescription>
          Color-coded by popularity and foot traffic
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Legend */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-sm mb-3">Popularity Indicator</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {popularityLevels.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${getPopularityColor(level)}`}></div>
                  <span className="text-sm text-gray-700">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {places.map((place, index) => (
              <div
                key={index}
                className={`border-l-4 p-4 rounded-lg transition-all hover:shadow-md ${
                  getPopularityColor(place.popularity) === "bg-red-500"
                    ? "border-l-red-500 bg-red-50"
                    : getPopularityColor(place.popularity) === "bg-orange-500"
                    ? "border-l-orange-500 bg-orange-50"
                    : getPopularityColor(place.popularity) === "bg-yellow-500"
                    ? "border-l-yellow-500 bg-yellow-50"
                    : "border-l-blue-500 bg-blue-50"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-grow">
                    <h4 className="font-semibold text-base">{place.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{place.type}</p>
                    {place.location && (
                      <p className="text-xs text-gray-500 mt-1">{place.location}</p>
                    )}
                  </div>
                  <Badge className={getPopularityBadgeColor(place.popularity)}>
                    <Zap className="h-3 w-3 mr-1" />
                    {place.popularity}
                  </Badge>
                </div>
                {place.description && (
                  <p className="text-sm text-gray-700 mt-3">{place.description}</p>
                )}
                {place.visitorCount && (
                  <div className="text-xs text-gray-500 mt-2">
                    ~{place.visitorCount} daily visitors
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
