import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building2, Trees, ShoppingBag, Calendar } from "lucide-react";
import { getWhatsNewItems } from "@/lib/cityFacts";
import { useLanguage } from "@/contexts/LanguageContext";

interface WhatsNewSectionProps {
  cityName: string;
}

export default function WhatsNewSection({ cityName }: WhatsNewSectionProps) {
  const { t } = useLanguage();
  const whatsNewItems = getWhatsNewItems(cityName);

  if (!whatsNewItems || whatsNewItems.length === 0) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Restaurant":    return <Star className="h-5 w-5 text-orange-500" />;
      case "Business":      return <Building2 className="h-5 w-5 text-blue-500" />;
      case "Park":          return <Trees className="h-5 w-5 text-green-500" />;
      case "Store Opening": return <ShoppingBag className="h-5 w-5 text-pink-500" />;
      default:              return <Star className="h-5 w-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Restaurant":    return "bg-orange-100 text-orange-800";
      case "Business":      return "bg-blue-100 text-blue-800";
      case "Park":          return "bg-green-100 text-green-800";
      case "Store Opening": return "bg-pink-100 text-pink-800";
      default:              return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {t("whatsNewIn")} {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {whatsNewItems.map((item, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
              <div className="flex-shrink-0">{getCategoryIcon(item.category)}</div>
              <div className="flex-grow">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-base">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                </div>
                {item.openingDate && (
                  <div className="text-xs text-muted-foreground mt-2">
                    {t("opened")} {item.openingDate}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
