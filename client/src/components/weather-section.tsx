import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Droplets, Eye } from "lucide-react";

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
  description: string;
}

interface WeatherSectionProps {
  cityName: string;
}

// Mock weather data for demonstration - in production, this would come from a weather API
const mockWeatherData: Record<string, WeatherData> = {
  "new york": {
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 24,
    description: "Partly cloudy with light winds"
  },
  "london": {
    temperature: 16,
    condition: "Light Rain",
    humidity: 78,
    windSpeed: 8,
    visibility: 7,
    feelsLike: 14,
    description: "Light rain with overcast skies"
  },
  "tokyo": {
    temperature: 28,
    condition: "Sunny",
    humidity: 55,
    windSpeed: 6,
    visibility: 15,
    feelsLike: 30,
    description: "Clear skies with warm temperatures"
  },
  "paris": {
    temperature: 19,
    condition: "Cloudy",
    humidity: 70,
    windSpeed: 10,
    visibility: 8,
    feelsLike: 18,
    description: "Overcast with mild temperatures"
  },
  "sydney": {
    temperature: 24,
    condition: "Sunny",
    humidity: 60,
    windSpeed: 15,
    visibility: 12,
    feelsLike: 26,
    description: "Sunny with fresh coastal breeze"
  },
  "chicago": {
    temperature: 18,
    condition: "Windy",
    humidity: 55,
    windSpeed: 25,
    visibility: 12,
    feelsLike: 15,
    description: "Windy conditions with clear skies"
  },
  "boston": {
    temperature: 20,
    condition: "Partly Cloudy",
    humidity: 62,
    windSpeed: 14,
    visibility: 10,
    feelsLike: 22,
    description: "Partly cloudy with moderate winds"
  },
  "los angeles": {
    temperature: 26,
    condition: "Sunny",
    humidity: 45,
    windSpeed: 8,
    visibility: 15,
    feelsLike: 28,
    description: "Sunny and warm with light winds"
  },
  "miami": {
    temperature: 30,
    condition: "Humid",
    humidity: 85,
    windSpeed: 12,
    visibility: 8,
    feelsLike: 35,
    description: "Hot and humid with scattered clouds"
  },
  "seattle": {
    temperature: 17,
    condition: "Light Rain",
    humidity: 82,
    windSpeed: 9,
    visibility: 6,
    feelsLike: 15,
    description: "Light drizzle with overcast skies"
  },
  "vatican city": {
    temperature: 18,
    condition: "Partly Cloudy",
    humidity: 68,
    windSpeed: 7,
    visibility: 12,
    feelsLike: 19,
    description: "Partly cloudy with mild Mediterranean climate"
  },
  "fucking": {
    temperature: 12,
    condition: "Cloudy",
    humidity: 75,
    windSpeed: 8,
    visibility: 9,
    feelsLike: 10,
    description: "Cool alpine weather with overcast skies"
  },
  "fucking city": {
    temperature: 12,
    condition: "Cloudy",
    humidity: 75,
    windSpeed: 8,
    visibility: 9,
    feelsLike: 10,
    description: "Cool alpine weather with overcast skies"
  },
  "bangkok": {
    temperature: 32,
    condition: "Humid",
    humidity: 89,
    windSpeed: 6,
    visibility: 8,
    feelsLike: 38,
    description: "Hot and humid tropical weather"
  },
  "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit": {
    temperature: 32,
    condition: "Humid",
    humidity: 89,
    windSpeed: 6,
    visibility: 8,
    feelsLike: 38,
    description: "Hot and humid tropical weather"
  },
  "krungthepmahanakhon amonrattanakosin mahintharayutthaya mahadilokphop noppharatratchathaniburirom udomratchaniwetmahasathan amonphimanawatansathit sakkathattiyawitsanukamprasit city": {
    temperature: 32,
    condition: "Humid",
    humidity: 89,
    windSpeed: 6,
    visibility: 8,
    feelsLike: 38,
    description: "Hot and humid tropical weather"
  }
};

function getWeatherIcon(condition: string) {
  const iconProps = { className: "h-8 w-8" };
  
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun {...iconProps} className="h-8 w-8 text-yellow-500" />;
    case "partly cloudy":
      return <Cloud {...iconProps} className="h-8 w-8 text-gray-500" />;
    case "cloudy":
      return <Cloud {...iconProps} className="h-8 w-8 text-gray-600" />;
    case "light rain":
      return <CloudRain {...iconProps} className="h-8 w-8 text-blue-500" />;
    case "rain":
      return <CloudRain {...iconProps} className="h-8 w-8 text-blue-600" />;
    case "snow":
      return <CloudSnow {...iconProps} className="h-8 w-8 text-blue-300" />;
    case "windy":
      return <Wind {...iconProps} className="h-8 w-8 text-gray-500" />;
    default:
      return <Sun {...iconProps} className="h-8 w-8 text-yellow-500" />;
  }
}

export default function WeatherSection({ cityName }: WeatherSectionProps) {
  const { data: weatherData, isLoading, isError } = useQuery({
    queryKey: ["weather", cityName],
    queryFn: async () => {
      // Simulate API call with mock data
      const normalizedCity = cityName.toLowerCase().trim();
      const weather = mockWeatherData[normalizedCity];
      
      if (!weather) {
        throw new Error("Weather data not available for this city");
      }
      
      return weather;
    },
    enabled: !!cityName,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  if (isLoading) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            Weather in {cityName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-16 bg-gray-200 rounded"></div>
              <div className="h-16 bg-gray-200 rounded"></div>
              <div className="h-16 bg-gray-200 rounded"></div>
              <div className="h-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError || !weatherData) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            Weather in {cityName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            <p>Weather information not available for this city</p>
            <p className="text-sm">Try searching for a major city</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="h-5 w-5" />
          Weather in {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main weather display */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {getWeatherIcon(weatherData.condition)}
            <div>
              <div className="text-3xl font-bold">
                {weatherData.temperature}°C
              </div>
              <div className="text-sm text-muted-foreground">
                Feels like {weatherData.feelsLike}°C
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-2">
              {weatherData.condition}
            </Badge>
            <div className="text-sm text-muted-foreground">
              {weatherData.description}
            </div>
          </div>
        </div>

        {/* Weather details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <div className="text-sm font-medium">{weatherData.humidity}%</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Wind className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">{weatherData.windSpeed} km/h</div>
              <div className="text-xs text-muted-foreground">Wind Speed</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Eye className="h-4 w-4 text-green-500" />
            <div>
              <div className="text-sm font-medium">{weatherData.visibility} km</div>
              <div className="text-xs text-muted-foreground">Visibility</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Thermometer className="h-4 w-4 text-red-500" />
            <div>
              <div className="text-sm font-medium">{weatherData.feelsLike}°C</div>
              <div className="text-xs text-muted-foreground">Feels Like</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}