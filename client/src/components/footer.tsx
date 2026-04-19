import { Globe, Newspaper, CloudSun, Briefcase, MapPin, Mail, Shield, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoPath from "../assets/logo.png";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoPath} alt="Globalscope" className="h-8 w-auto brightness-0 invert opacity-80" />
              <span className="text-xl font-bold text-white tracking-tight">Globalscope</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your live window into every city on Earth. Weather forecasts, breaking news, local jobs, and community insights — in 13 languages.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: "🌍", label: "Any City" },
                { icon: "⚡", label: "Live Data" },
                { icon: "🗣", label: "13 Languages" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 font-medium"
                >
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Features</h3>
            <ul className="space-y-3">
              {[
                { icon: CloudSun, label: "Live Weather" },
                { icon: Newspaper, label: "News Headlines" },
                { icon: Briefcase, label: "Local Jobs" },
                { icon: MapPin, label: "Popular Places" },
                { icon: Globe, label: "13 Languages" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { icon: Info, label: "About" },
                { icon: Shield, label: "Privacy Policy" },
                { icon: Mail, label: "Contact Us" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {year} Globalscope. {t("footerRights")}
          </p>
          <p className="text-xs text-slate-600">
            Powered by <span className="text-slate-500">Open-Meteo</span> · <span className="text-slate-500">NewsAPI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
