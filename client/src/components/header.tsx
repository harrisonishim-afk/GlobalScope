import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Crown, Sparkles } from "lucide-react";
import logoPath from "../assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES } from "@/lib/translations";
import { useSubscription } from "@/contexts/SubscriptionContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const { isSubscribed, openModal } = useSubscription();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <img src={logoPath} alt="Globalscope Logo" className="h-9 w-auto" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
              Globalscope
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden lg:block text-sm text-gray-400 font-medium">{t("tagline")}</span>

          {/* Subscribe / Premium badge */}
          {isSubscribed ? (
            <button
              onClick={openModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 hover:border-amber-300 transition-all shadow-sm"
            >
              <Crown className="h-3.5 w-3.5" />
              <span>Premium</span>
            </button>
          ) : (
            <button
              onClick={openModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/20 hover:shadow-lg transition-all"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Subscribe · $10/mo</span>
              <span className="sm:hidden">Premium</span>
            </button>
          )}

          {/* Language picker */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-2 pl-3 pr-2.5 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-sky-300 transition-all text-sm font-medium text-gray-700 shadow-sm"
            >
              <Globe className="h-4 w-4 text-sky-500" />
              <span className="text-base leading-none">{current.flag}</span>
              <span className="uppercase text-xs font-bold text-gray-600 hidden sm:block">
                {current.code === "en-us" ? "EN-US" : current.code.toUpperCase()}
              </span>
              <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 max-h-80 overflow-y-auto">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-1">
                  {t("chooseLanguage")}
                </div>
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      lang === l.code
                        ? "bg-sky-50 text-sky-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg leading-none">{l.flag}</span>
                    <span className="flex-grow text-left">{l.name}</span>
                    {lang === l.code && (
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
