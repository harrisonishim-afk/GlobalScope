import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer,
  Droplets, Eye, CloudLightning, CloudDrizzle, RefreshCw
} from "lucide-react";

interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
  precipitation: number;
  cloudCover: number;
  locationName: string;
  country: string;
  fetchedAt: string;
}

interface WeatherSectionProps {
  cityName: string;
}

function getWeatherIcon(condition: string) {
  const c = condition.toLowerCase();
  if (c.includes("thunder")) return <CloudLightning className="h-10 w-10 text-yellow-500" />;
  if (c.includes("heavy rain") || c.includes("heavy snow")) return <CloudRain className="h-10 w-10 text-blue-700" />;
  if (c.includes("snow")) return <CloudSnow className="h-10 w-10 text-blue-300" />;
  if (c.includes("drizzle") || c.includes("rain")) return <CloudDrizzle className="h-10 w-10 text-blue-500" />;
  if (c.includes("fog")) return <Cloud className="h-10 w-10 text-gray-400" />;
  if (c.includes("windy")) return <Wind className="h-10 w-10 text-gray-500" />;
  if (c.includes("cloudy") || c.includes("overcast")) return <Cloud className="h-10 w-10 text-gray-500" />;
  if (c.includes("partly")) return <Cloud className="h-10 w-10 text-sky-400" />;
  return <Sun className="h-10 w-10 text-yellow-500" />;
}

function getWeatherGradient(condition: string) {
  const c = condition.toLowerCase();
  if (c.includes("thunder")) return "from-gray-700 to-gray-900";
  if (c.includes("snow")) return "from-blue-100 to-blue-200";
  if (c.includes("rain") || c.includes("drizzle")) return "from-slate-500 to-slate-700";
  if (c.includes("fog")) return "from-gray-300 to-gray-400";
  if (c.includes("cloudy") || c.includes("overcast")) return "from-gray-400 to-slate-500";
  if (c.includes("partly")) return "from-sky-400 to-blue-500";
  return "from-amber-400 to-sky-500";
}

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  } catch {
    return "";
  }
}

export default function WeatherSection({ cityName }: WeatherSectionProps) {
  const { data, isLoading, isError, dataUpdatedAt, isFetching, refetch } = useQuery<WeatherData>({
    queryKey: ["/api/weather", cityName],
    queryFn: async () => {
      const res = await fetch(`/api/weather/${encodeURIComponent(cityName)}`);
      if (!res.ok) throw new Error("Weather unavailable");
      return res.json();
    },
    enabled: !!cityName,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 1,
  });

  if (isLoading) {
    return (
      <Card className="mb-6 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-sky-400 to-blue-500 animate-pulse" />
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            Loading weather for {cityName}…
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-20 bg-muted rounded-xl" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-muted rounded-lg" />)}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError || !data) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            Weather in {cityName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-4">
            <Cloud className="h-10 w-10 mx-auto mb-2 opacity-40" />
            <p className="font-medium">Weather data unavailable</p>
            <p className="text-sm">Could not locate this city in weather data</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const gradient = getWeatherGradient(data.condition);
  const lastUpdated = data.fetchedAt ? formatTime(data.fetchedAt) : (dataUpdatedAt ? formatTime(new Date(dataUpdatedAt).toISOString()) : "");

  return (
    <Card className="mb-6 overflow-hidden">
      {/* Live colour bar */}
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Thermometer className="h-5 w-5" />
            Live Weather — {data.locationName}, {data.country}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              {isFetching ? "Refreshing…" : `Updated ${lastUpdated}`}
            </span>
            <button
              onClick={() => refetch()}
              className="p-1 rounded hover:bg-muted transition-colors"
              title="Refresh weather"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-muted-foreground ${isFetching ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Hero weather display */}
        <div className={`rounded-xl bg-gradient-to-r ${gradient} p-5 mb-4 text-white flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            {getWeatherIcon(data.condition)}
            <div>
              <div className="text-5xl font-bold leading-none">{data.temperature}°C</div>
              <div className="text-sm opacity-80 mt-1">Feels like {data.feelsLike}°C</div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-2 text-sm">
              {data.condition}
            </Badge>
            <div className="text-sm opacity-80 max-w-[160px] text-right">{data.description}</div>
          </div>
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Droplets className="h-4 w-4 text-blue-500 shrink-0" />
            <div>
              <div className="text-sm font-semibold">{data.humidity}%</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Wind className="h-4 w-4 text-gray-500 shrink-0" />
            <div>
              <div className="text-sm font-semibold">{data.windSpeed} km/h</div>
              <div className="text-xs text-muted-foreground">Wind</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Eye className="h-4 w-4 text-green-500 shrink-0" />
            <div>
              <div className="text-sm font-semibold">{data.visibility} km</div>
              <div className="text-xs text-muted-foreground">Visibility</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <CloudRain className="h-4 w-4 text-sky-500 shrink-0" />
            <div>
              <div className="text-sm font-semibold">{data.precipitation} mm</div>
              <div className="text-xs text-muted-foreground">Precipitation</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          Source: Open-Meteo · Refreshes every 5 minutes · Click ↻ to refresh now
        </p>
      </CardContent>
    </Card>
  );
}
