import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Crown, Calendar, MapPin } from "lucide-react";
import { getCityFacts, hasCityFacts } from "@/lib/cityFacts";
import { useLanguage } from "@/contexts/LanguageContext";

interface CityFactsProps {
  cityName: string;
}

export default function CityFacts({ cityName }: CityFactsProps) {
  const { t } = useLanguage();

  const cityFacts = getCityFacts(cityName);

  if (!cityFacts || !hasCityFacts(cityName)) {
    return null;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          {t("cityFactsTitle")} — {cityName}
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
              <div className="font-semibold text-lg">{cityFacts.population}</div>
              <div className="text-sm text-muted-foreground">{t("population")}</div>
            </div>
          </div>

          {/* Current Mayor */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-lg">{cityFacts.currentMayor}</div>
              <div className="text-sm text-muted-foreground">{t("currentMayor")}</div>
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
                  {cityFacts.foundedYear > 0
                    ? cityFacts.foundedYear
                    : `${Math.abs(cityFacts.foundedYear)} BC`}
                </div>
                <div className="text-sm text-muted-foreground">{t("founded")}</div>
              </div>
            </div>
          )}
        </div>

        {/* Famous People */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <h4 className="font-semibold">{t("famousPeople")}</h4>
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
