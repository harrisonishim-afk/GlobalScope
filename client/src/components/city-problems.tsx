import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, AlertCircle, Zap } from "lucide-react";
import { getCityProblems, CityProblem } from "@/lib/cityFacts";

interface CityProblemsProps {
  cityName: string;
}

export default function CityProblems({ cityName }: CityProblemsProps) {
  const problems = getCityProblems(cityName);
  
  if (!problems || problems.length === 0) {
    return null;
  }

  const getProblemIcon = (type: string) => {
    switch (type) {
      case "Protests":
        return <Users className="h-5 w-5 text-purple-600" />;
      case "Crime":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "Infrastructure":
        return <AlertCircle className="h-5 w-5 text-orange-600" />;
      default:
        return <Zap className="h-5 w-5 text-gray-600" />;
    }
  };

  const getProblemColor = (type: string) => {
    switch (type) {
      case "Protests":
        return "border-l-purple-500 bg-purple-50";
      case "Crime":
        return "border-l-red-500 bg-red-50";
      case "Infrastructure":
        return "border-l-orange-500 bg-orange-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="mb-8 border-amber-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <AlertTriangle className="h-5 w-5" />
          City Problems & Issues
        </CardTitle>
        <CardDescription>
          Current challenges and concerns in the city
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`border-l-4 p-4 rounded-lg ${getProblemColor(problem.type)}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 flex-grow">
                  <div className="flex-shrink-0 pt-0.5">
                    {getProblemIcon(problem.type)}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-base">{problem.type}</h4>
                    <p className="text-sm text-gray-700 mt-1">{problem.description}</p>
                    {problem.details && (
                      <ul className="text-xs text-gray-600 mt-2 space-y-1 ml-4">
                        {problem.details.map((detail, i) => (
                          <li key={i} className="list-disc">{detail}</li>
                        ))}
                      </ul>
                    )}
                    {problem.lastUpdated && (
                      <div className="text-xs text-gray-500 mt-2">
                        Updated: {problem.lastUpdated}
                      </div>
                    )}
                  </div>
                </div>
                <Badge className={getSeverityColor(problem.severity)}>
                  {problem.severity}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
