import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LangCode, LANGUAGES, translations, TranslationKey } from "@/lib/translations";

interface LanguageContextType {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => translations[key]["en"],
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    const stored = localStorage.getItem("gs_lang");
    return (stored as LangCode) || "en";
  });

  const langMeta = LANGUAGES.find((l) => l.code === lang);
  const isRTL = langMeta?.rtl ?? false;

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("gs_lang", l);
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry["en"] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
