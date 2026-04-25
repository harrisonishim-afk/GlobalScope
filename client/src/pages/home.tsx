import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SearchForm from "@/components/search-form";
import NewsSection from "@/components/news-section";
import NeighborhoodMap from "@/components/neighborhood-map";
import CityVibe from "@/components/city-vibe";
import WeatherSection from "@/components/weather-section";
import EmergencyAlerts from "@/components/emergency-alerts";
import CityFacts from "@/components/city-facts";
import WhatsNewSection from "@/components/whats-new-section";
import PlacesPopularityMap from "@/components/places-popularity-map";
import CityProblems from "@/components/city-problems";
import LocalJobs from "@/components/local-jobs";
import LockedSection from "@/components/locked-section";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { NewsItem } from "@shared/schema";
import { hasNeighborhoodData } from "@/lib/neighborhoodAnalysis";
import { MapPin, X, Newspaper, CloudSun, Briefcase, Globe } from "lucide-react";

const FEATURES = [
  { icon: CloudSun,  label: "Live Weather" },
  { icon: Newspaper, label: "Breaking News" },
  { icon: Briefcase, label: "Local Jobs" },
  { icon: MapPin,    label: "Popular Places" },
  { icon: Globe,     label: "13 Languages" },
];

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-grow h-px bg-gray-200" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 py-1 rounded-full bg-white border border-gray-200 whitespace-nowrap shadow-sm">
        {label}
      </span>
      <div className="flex-grow h-px bg-gray-200" />
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");
  const { t } = useLanguage();
  const { isSubscribed } = useSubscription();

  const { data: newsItems, isLoading, isError, error, refetch } = useQuery<NewsItem[]>({
    queryKey: [`/api/news/${currentCity}`],
    enabled: !!currentCity,
  });

  const handleSearch = (city: string) => {
    if (city.trim()) setCurrentCity(city);
  };

  const clearCity = () => {
    setCurrentCity("");
    setSearchQuery("");
  };

  const showNeighborhoodMap = currentCity && newsItems && newsItems.length > 0 && hasNeighborhoodData(currentCity);
  const showCityFeatures   = currentCity && newsItems && newsItems.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">

        {/* ── HERO (before search) ─────────────────────────────────────── */}
        {!currentCity && (
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">

            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">

              {/* Live badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-400/20 rounded-full text-sky-300 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Live data for every city on Earth
              </div>

              {/* Headline */}
              <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                {t("pageTitle").split(",")[0]},
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {t("pageTitle").split(",")[1] ?? "Local Focus"}
                </span>
              </h2>

              <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
                {t("pageSubtitle")}
              </p>

              {/* Search box */}
              <div className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <SearchForm
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearch={handleSearch}
                  dark
                />
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap justify-center gap-2.5 mt-10">
                {FEATURES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/8 border border-white/10 rounded-full text-slate-300 text-sm font-medium hover:bg-white/12 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-sky-400" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom wave */}
            <div className="relative h-12 overflow-hidden">
              <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
                <path d="M0 48L60 42C120 36 240 24 360 18C480 12 600 12 720 16.5C840 21 960 30 1080 33C1200 36 1320 33 1380 31.5L1440 30V48H0Z" fill="rgb(249 250 251)" />
              </svg>
            </div>
          </div>
        )}

        {/* ── STICKY COMPACT BAR (after search) ─────────────────────────── */}
        {currentCity && (
          <div className="bg-white border-b border-gray-200 shadow-sm sticky top-16 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
              <div className="flex-grow max-w-lg">
                <SearchForm
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearch={handleSearch}
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 font-semibold text-xs">
                  <MapPin className="h-3.5 w-3.5" />
                  {currentCity}
                </span>
                <button
                  onClick={clearCity}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                  title="Clear city"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── CITY DASHBOARD ────────────────────────────────────────────── */}
        {currentCity && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

            {/* City banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/5 rounded-full" />
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/15 rounded-xl backdrop-blur-sm">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight leading-none">{currentCity}</h2>
                    <p className="text-sky-200 text-sm mt-1 font-medium">City Dashboard · Live Data</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/15 rounded-full text-white/90 text-xs font-medium backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-green-300 opacity-75" />
                      <span className="relative h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    Live
                  </span>
                  <button
                    onClick={clearCity}
                    className="sm:hidden p-2 rounded-lg bg-white/15 hover:bg-white/25 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Weather + Alerts */}
            <div className="space-y-4">
              <WeatherSection cityName={currentCity} />
              {isSubscribed ? (
                <EmergencyAlerts cityName={currentCity} />
              ) : (
                <LockedSection
                  title="Emergency Alerts"
                  description="Get real-time weather warnings, heat alerts, storm alerts, and road closures."
                >
                  <EmergencyAlerts cityName={currentCity} />
                </LockedSection>
              )}
            </div>

            {/* City Info */}
            <SectionDivider label="City Info" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <CityFacts cityName={currentCity} />
              {isSubscribed ? (
                <WhatsNewSection cityName={currentCity} />
              ) : (
                <LockedSection
                  title="What's New"
                  description="See the latest happenings, openings, and events in your city."
                >
                  <WhatsNewSection cityName={currentCity} />
                </LockedSection>
              )}
            </div>

            {/* Around the City */}
            <SectionDivider label="Around the City" />
            <div className="space-y-5">
              {isSubscribed ? (
                <PlacesPopularityMap cityName={currentCity} />
              ) : (
                <LockedSection
                  title="Popular Places Map"
                  description="Discover top-rated shops, venues, and hotspots with live popularity ratings."
                >
                  <PlacesPopularityMap cityName={currentCity} />
                </LockedSection>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {isSubscribed ? (
                  <CityProblems cityName={currentCity} />
                ) : (
                  <LockedSection
                    title="City Problems"
                    description="Track protests, crime statistics, and infrastructure issues."
                  >
                    <CityProblems cityName={currentCity} />
                  </LockedSection>
                )}
                {isSubscribed ? (
                  <LocalJobs cityName={currentCity} />
                ) : (
                  <LockedSection
                    title="Local Jobs"
                    description="Browse open positions with salary, employer, and sector details."
                  >
                    <LocalJobs cityName={currentCity} />
                  </LockedSection>
                )}
              </div>
            </div>

            {/* Culture & Media — Premium only */}
            {isSubscribed && (showNeighborhoodMap || showCityFeatures) && (
              <SectionDivider label="Culture & Media" />
            )}
            {isSubscribed && showNeighborhoodMap && newsItems && (
              <div className="mb-6">
                <NeighborhoodMap newsItems={newsItems} cityName={currentCity} />
              </div>
            )}
            {isSubscribed && showCityFeatures && (
              <CityVibe newsItems={newsItems} cityName={currentCity} />
            )}
            {!isSubscribed && (
              <>
                <SectionDivider label="Culture & Media" />
                <LockedSection
                  title="Neighborhood Map & Music Mood"
                  description="Visualize news activity by neighborhood and get music recommendations matched to your city's mood."
                >
                  <CityVibe newsItems={newsItems} cityName={currentCity} />
                </LockedSection>
              </>
            )}

            {/* News */}
            <SectionDivider label="Latest Headlines" />
            <NewsSection
              newsItems={newsItems}
              isLoading={isLoading}
              isError={isError}
              errorMessage={error instanceof Error ? error.message : "An error occurred"}
              currentCity={currentCity}
              handleRetry={() => refetch()}
              handleQuickSearch={handleSearch}
            />
          </div>
        )}

        {/* Pre-search news placeholder */}
        {!currentCity && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <NewsSection
              newsItems={undefined}
              isLoading={false}
              isError={false}
              errorMessage=""
              currentCity=""
              handleRetry={() => {}}
              handleQuickSearch={handleSearch}
            />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
