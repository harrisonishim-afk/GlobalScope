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
import { NewsItem } from "@shared/schema";
import { hasNeighborhoodData } from "@/lib/neighborhoodAnalysis";
import { MapPin, X } from "lucide-react";

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-grow h-px bg-gray-200" />
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
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
  const showCityFeatures = currentCity && newsItems && newsItems.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">

        {/* ── BEFORE SEARCH: hero landing ───────────────────────────────── */}
        {!currentCity && (
          <div className="bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                {t("pageTitle")}
              </h2>
              <p className="text-lg text-gray-500 mb-8">{t("pageSubtitle")}</p>
              <SearchForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
            </div>
          </div>
        )}

        {/* ── AFTER SEARCH: compact top bar ─────────────────────────────── */}
        {currentCity && (
          <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
              <div className="flex-grow max-w-lg">
                <SearchForm
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearch={handleSearch}
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 shrink-0">
                <MapPin className="h-4 w-4 text-sky-500" />
                <span className="font-semibold text-gray-800">{currentCity}</span>
                <button
                  onClick={clearCity}
                  className="ml-1 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                  title="Clear city"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── CITY DASHBOARD ────────────────────────────────────────────── */}
        {currentCity && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-0">

            {/* City banner */}
            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-2xl p-5 mb-6 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/20 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight leading-none">{currentCity}</h2>
                  <p className="text-sky-200 text-sm mt-0.5">City Dashboard</p>
                </div>
              </div>
              <button
                onClick={clearCity}
                className="sm:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ── Weather + Alerts ───────────────────────────────────────── */}
            <WeatherSection cityName={currentCity} />
            <EmergencyAlerts cityName={currentCity} />

            {/* ── City Info ─────────────────────────────────────────────── */}
            <SectionDivider label="City Info" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="min-w-0">
                <CityFacts cityName={currentCity} />
              </div>
              <div className="min-w-0">
                <WhatsNewSection cityName={currentCity} />
              </div>
            </div>

            {/* ── Popular Places ─────────────────────────────────────────── */}
            <SectionDivider label="Around the City" />
            <PlacesPopularityMap cityName={currentCity} />

            {/* ── Problems + Jobs ────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="min-w-0">
                <CityProblems cityName={currentCity} />
              </div>
              <div className="min-w-0">
                <LocalJobs cityName={currentCity} />
              </div>
            </div>

            {/* ── Culture & Media ────────────────────────────────────────── */}
            {(showNeighborhoodMap || showCityFeatures) && (
              <SectionDivider label="Culture & Media" />
            )}

            {showNeighborhoodMap && newsItems && (
              <div className="mb-6">
                <NeighborhoodMap newsItems={newsItems} cityName={currentCity} />
              </div>
            )}

            {showCityFeatures && (
              <CityVibe newsItems={newsItems} cityName={currentCity} />
            )}

            {/* ── News ──────────────────────────────────────────────────── */}
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

        {/* When no city yet, still show news section prompt */}
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
