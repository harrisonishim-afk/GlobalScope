import { Button } from "@/components/ui/button";
import { MapPin, X, Search, Mic, MicOff } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (city: string) => void;
  dark?: boolean;
}

const popularCities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export default function SearchForm({ searchQuery, setSearchQuery, handleSearch, dark = false }: SearchFormProps) {
  const { t } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      setVoiceSupported(true);
      const recognition = new SpeechRecognitionAPI();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript.trim();
        setSearchQuery(transcript);
        setIsListening(false);
        if (transcript) handleSearch(transcript);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }

    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.abort();
      setIsListening(false);
    } else {
      setSearchQuery("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) handleSearch(searchQuery.trim());
  };

  const handleQuickSearch = (city: string) => {
    setSearchQuery(city);
    handleSearch(city);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className={`flex items-center gap-2 bg-white rounded-xl border shadow-sm hover:border-sky-300 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100 transition-all overflow-hidden pl-3.5 pr-1.5 py-1.5 ${isListening ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}>
          <MapPin className="h-4 w-4 text-sky-500 shrink-0" />
          <input
            type="text"
            className="flex-grow text-sm text-gray-800 placeholder:text-gray-400 bg-transparent border-none outline-none min-w-0 py-0.5"
            placeholder={isListening ? "Listening…" : t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
          {searchQuery && !isListening && (
            <button
              type="button"
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          {voiceSupported && (
            <button
              type="button"
              onClick={toggleListening}
              title={isListening ? "Stop listening" : "Search by voice"}
              className={`p-1.5 rounded-lg transition-all shrink-0 ${
                isListening
                  ? "text-red-500 bg-red-50 hover:bg-red-100 animate-pulse"
                  : "text-gray-400 hover:text-sky-600 hover:bg-sky-50"
              }`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
          )}
          <Button
            type="submit"
            size="sm"
            className="shrink-0 rounded-lg px-4 h-8 text-sm font-semibold bg-sky-600 hover:bg-sky-700 text-white shadow-sm"
          >
            <Search className="h-3.5 w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">{t("searchButton")}</span>
          </Button>
        </div>
      </form>

      {isListening && (
        <div className="mt-2 flex items-center gap-2 text-xs text-red-500 font-medium animate-pulse">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
          Listening — say a city name…
        </div>
      )}

      {!isListening && (
        <div className="mt-2.5 flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-medium ${dark ? "text-slate-400" : "text-gray-400"}`}>
            {t("popularLabel")}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {popularCities.map((city) => (
              <button
                key={city}
                onClick={() => handleQuickSearch(city)}
                className={`text-xs px-2.5 py-0.5 rounded-full border font-medium transition-colors ${
                  dark
                    ? "bg-white/10 border-white/20 text-slate-300 hover:bg-white/20 hover:text-white"
                    : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
