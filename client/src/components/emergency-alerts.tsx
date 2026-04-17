import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Flame, CloudLightning, AlertCircle } from "lucide-react";
import { getEmergencyAlerts } from "@/lib/cityFacts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCityAddons } from "@/hooks/useCityAddons";

interface EmergencyAlertsProps {
  cityName: string;
}

export default function EmergencyAlerts({ cityName }: EmergencyAlertsProps) {
  const { t } = useLanguage();
  const { data: addons } = useCityAddons(cityName);

  const staticAlerts = getEmergencyAlerts(cityName);
  const alerts = staticAlerts.length > 0 ? staticAlerts : (addons?.emergencyAlerts ?? []);

  if (!alerts || alerts.length === 0) return null;

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "Weather Warning": return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "Heat Alert":      return <Flame className="h-5 w-5 text-red-600" />;
      case "Storm Alert":     return <CloudLightning className="h-5 w-5 text-purple-600" />;
      case "Road Closure":   return <AlertCircle className="h-5 w-5 text-orange-600" />;
      default:               return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "Weather Warning": return "border-yellow-200 bg-yellow-50";
      case "Heat Alert":      return "border-red-200 bg-red-50";
      case "Storm Alert":     return "border-purple-200 bg-purple-50";
      case "Road Closure":   return "border-orange-200 bg-orange-50";
      default:               return "border-gray-200 bg-gray-50";
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case "Weather Warning": return "text-yellow-900";
      case "Heat Alert":      return "text-red-900";
      case "Storm Alert":     return "text-purple-900";
      case "Road Closure":   return "text-orange-900";
      default:               return "text-gray-900";
    }
  };

  return (
    <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-red-700">
          <AlertTriangle className="h-5 w-5" />
          {t("alertsTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <Alert key={index} className={`${getAlertColor(alert.type)} border-l-4`}>
              <div className="flex gap-3">
                <div className="flex-shrink-0 pt-0.5">{getAlertIcon(alert.type)}</div>
                <div className="flex-grow">
                  <div className={`font-semibold ${getTextColor(alert.type)}`}>{alert.type}</div>
                  <AlertDescription className={getTextColor(alert.type)}>
                    {alert.description}
                  </AlertDescription>
                  {alert.validUntil && (
                    <div className={`text-xs mt-1 ${getTextColor(alert.type)}`}>
                      {t("validUntil")} {alert.validUntil}
                    </div>
                  )}
                </div>
              </div>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
