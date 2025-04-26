import { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  NeighborhoodData, 
  extractNeighborhoodData, 
  getCityCenterCoordinates, 
  hasNeighborhoodData 
} from "@/lib/neighborhoodAnalysis";
import { NewsItem } from "@shared/schema";

// TopoJSON maps for different regions
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface NeighborhoodMapProps {
  newsItems: NewsItem[];
  cityName: string;
}

export default function NeighborhoodMap({ newsItems, cityName }: NeighborhoodMapProps) {
  const [tooltipContent, setTooltipContent] = useState("");
  
  // Extract neighborhood data from news items
  const neighborhoods = useMemo(() => 
    extractNeighborhoodData(newsItems, cityName), 
    [newsItems, cityName]
  );

  // Get center coordinates for the city
  const centerCoordinates = useMemo(() => 
    getCityCenterCoordinates(cityName), 
    [cityName]
  );

  // Create a color scale for the markers based on news count
  const maxCount = Math.max(...neighborhoods.map(n => n.count), 1);
  const colorScale = scaleLinear<string>()
    .domain([1, maxCount])
    .range(["#8ecae6", "#023047"]);

  // Create a size scale for the markers based on news count
  const sizeScale = scaleLinear()
    .domain([1, maxCount])
    .range([5, 20]);

  if (!hasNeighborhoodData(cityName) || neighborhoods.length === 0) {
    return (
      <Card className="mt-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium">Neighborhood Analysis</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    We analyze news articles to determine which neighborhoods are mentioned most frequently.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CardDescription>
            No neighborhood data available for {cityName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Try searching for a major city like New York, London, Tokyo, Paris, Chicago, or Boston to see neighborhood activity.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Neighborhood News Activity</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  This map shows which neighborhoods are mentioned most frequently in the news.
                  Larger circles represent more news activity.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>
          Highlighting areas with the most news coverage
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full relative">
          <ComposableMap
            projectionConfig={{
              scale: 800,
            }}
            className="h-full w-full"
          >
            <ZoomableGroup 
              center={centerCoordinates} 
              zoom={6}
              maxZoom={20}
              minZoom={1}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              
              {neighborhoods.map(({ name, count, longitude, latitude }) => {
                if (!longitude || !latitude) return null;
                
                return (
                  <Marker
                    key={name}
                    coordinates={[longitude, latitude]}
                    onMouseEnter={() => {
                      setTooltipContent(`${name}: ${count} mentions`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  >
                    <circle
                      r={sizeScale(count)}
                      fill={colorScale(count)}
                      stroke="#fff"
                      strokeWidth={1}
                      opacity={0.8}
                    />
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
          
          {tooltipContent && (
            <div
              className="absolute bg-white px-2 py-1 rounded shadow-sm text-xs"
              style={{ 
                left: "50%", 
                bottom: 10, 
                transform: "translateX(-50%)",
                zIndex: 1000 
              }}
            >
              {tooltipContent}
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Top Neighborhoods</h4>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.slice(0, 5).map((neighborhood) => (
              <Badge key={neighborhood.name} variant="secondary">
                {neighborhood.name} ({neighborhood.count})
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}