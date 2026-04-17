import { useQuery } from "@tanstack/react-query";

export interface WhatsNewItem {
  name: string;
  category: string;
  description: string;
  openingDate?: string;
}

export interface EmergencyAlert {
  type: string;
  description: string;
  validUntil?: string;
}

export interface PopularPlace {
  name: string;
  type: string;
  popularity: string;
  location?: string;
  description?: string;
  visitorCount?: string;
}

export interface CityProblem {
  type: string;
  severity: string;
  description: string;
  details?: string[];
  lastUpdated?: string;
}

export interface LocalJob {
  title: string;
  employer: string;
  type: string;
  sector: string;
  description: string;
  neighborhood: string;
  salary?: string;
  posted?: string;
}

export interface CityAddons {
  whatsNew: WhatsNewItem[];
  emergencyAlerts: EmergencyAlert[];
  popularPlaces: PopularPlace[];
  problems: CityProblem[];
  localJobs: LocalJob[];
}

const REFETCH_MS = 60 * 1000; // 1 minute

export function useCityAddons(cityName: string) {
  return useQuery<CityAddons>({
    queryKey: ["/api/city-addons", cityName],
    queryFn: async () => {
      const res = await fetch(`/api/city-addons/${encodeURIComponent(cityName)}`);
      if (!res.ok) throw new Error("Failed to fetch city addons");
      return res.json();
    },
    enabled: !!cityName,
    staleTime: REFETCH_MS,
    refetchInterval: REFETCH_MS,
  });
}
