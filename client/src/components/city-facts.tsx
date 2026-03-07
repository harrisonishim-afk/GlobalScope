import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Users, Star, Crown, Calendar, MapPin } from "lucide-react";
import { getCityFacts, hasCityFacts } from "@/lib/cityFacts";

interface CityFactsProps {
  cityName: string;
}

export default function CityFacts({ cityName }: CityFactsProps) {
  const {
    data: cityFacts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Object>({
    queryKey: [`/api/facts/${cityName}`],
    enabled: !!cityName,
  });
 // const cityFacts = getCityFacts(cityName);
  
  if (!cityFacts || !hasCityFacts(cityName)) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Quick Facts about {cityName}
          {cityFacts.nickname && (
            <Badge variant="outline" className="ml-2">
              {cityFacts.nickname}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Population */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-lg">{cityFacts.population.city}</div>
              <div className="text-sm text-muted-foreground">Population</div>
            </div>
          </div>

          {/* Current Mayor */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-lg">{cityFacts.government.mayor}</div>
              <div className="text-sm text-muted-foreground">Current Mayor</div>
            </div>
          </div>

          {/* Founded Year */}
          {cityFacts.foundedYear && (
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-lg">
                  {cityFacts.settled_founded > 0 ? cityFacts.settled_founded : `${Math.abs(cityFacts.settled_founded)} BC`}
                </div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
            </div>
          )}
        </div>

        {/* Famous People */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <h4 className="font-semibold">Famous People Born Here</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {cityFacts.famousPeople.map((person, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {person}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}