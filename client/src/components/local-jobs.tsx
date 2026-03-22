import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";
import { getLocalJobs } from "@/lib/cityFacts";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocalJobsProps {
  cityName: string;
}

const SECTOR_COLORS: Record<string, string> = {
  Technology:     "bg-sky-100 text-sky-800",
  Healthcare:     "bg-red-100 text-red-800",
  Finance:        "bg-emerald-100 text-emerald-800",
  Education:      "bg-yellow-100 text-yellow-800",
  Hospitality:    "bg-pink-100 text-pink-800",
  Construction:   "bg-amber-100 text-amber-800",
  Retail:         "bg-violet-100 text-violet-800",
  Government:     "bg-indigo-100 text-indigo-800",
  Media:          "bg-rose-100 text-rose-800",
  Transportation: "bg-teal-100 text-teal-800",
};

function getJobTypeColor(type: string) {
  switch (type) {
    case "Full-time":  return "bg-green-100 text-green-800";
    case "Part-time":  return "bg-blue-100 text-blue-800";
    case "Contract":   return "bg-purple-100 text-purple-800";
    case "Internship": return "bg-orange-100 text-orange-800";
    default:           return "bg-gray-100 text-gray-800";
  }
}

export default function LocalJobs({ cityName }: LocalJobsProps) {
  const { t } = useLanguage();
  const jobs = getLocalJobs(cityName);

  if (!jobs || jobs.length === 0) return null;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          {t("jobsIn")} {cityName}
        </CardTitle>
        <CardDescription>{t("jobsSubtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-white flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-base leading-tight">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{job.employer}</p>
                </div>
                <Badge className={getJobTypeColor(job.type)}>{job.type}</Badge>
              </div>

              <p className="text-sm text-gray-700">{job.description}</p>

              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {job.neighborhood}
                </span>
                {job.salary && (
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {job.salary}
                  </span>
                )}
                {job.posted && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {t("posted")} {job.posted}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-1">
                <Badge variant="outline" className={SECTOR_COLORS[job.sector] || "bg-gray-100 text-gray-800"}>
                  {job.sector}
                </Badge>
                <button className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  {t("applyNow")}
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
