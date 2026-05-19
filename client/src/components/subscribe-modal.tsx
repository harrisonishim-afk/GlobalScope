import { useSubscription } from "@/contexts/SubscriptionContext";
import { X, Crown, Check, Zap, Bell, MapPin, Briefcase, Music, Shield, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLAN_FEATURES = [
  { icon: Bell,     color: "text-rose-500",   bg: "bg-rose-50",   label: "Emergency Alerts",         desc: "Real-time warnings & closures" },
  { icon: Star,     color: "text-amber-500",  bg: "bg-amber-50",  label: "What's New",               desc: "Weekly openings & city events" },
  { icon: MapPin,   color: "text-sky-500",    bg: "bg-sky-50",    label: "Popular Places Map",        desc: "Live popularity ratings" },
  { icon: Shield,   color: "text-red-500",    bg: "bg-red-50",    label: "City Problems",             desc: "Safety stats & infrastructure" },
  { icon: Briefcase,color: "text-emerald-500",bg: "bg-emerald-50",label: "Local Jobs",               desc: "Open roles with salaries" },
  { icon: Zap,      color: "text-violet-500", bg: "bg-violet-50", label: "Neighborhood Heatmap",      desc: "News activity by area" },
  { icon: Music,    color: "text-pink-500",   bg: "bg-pink-50",   label: "Music Mood",               desc: "City vibe playlists" },
];

export default function SubscribeModal() {
  const { showModal, closeModal, subscribe, isSubscribed, unsubscribe } = useSubscription();
  const { toast } = useToast();

  if (!showModal) return null;

  const handleSubscribe = () => {
    subscribe();
    closeModal();
    toast({
      title: "Welcome to Globalscope Premium! 🎉",
      description: "All add-ons are now unlocked. Enjoy the full experience.",
    });
  };

  const handleCancel = () => {
    unsubscribe();
    closeModal();
    toast({
      title: "Subscription cancelled",
      description: "You've been moved back to the free plan.",
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-white/70" />
        </button>

        {/* Hero header */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-8 pt-10 pb-7 text-center overflow-hidden">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-6 left-6 w-40 h-40 bg-sky-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-4 w-40 h-40 bg-indigo-400/15 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 mb-4">
              <Crown className="h-8 w-8 text-white" />
            </div>
            {isSubscribed ? (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-1">You're Premium</h2>
                <p className="text-sky-300/80 text-sm">All add-ons are unlocked</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-1">Globalscope Premium</h2>
                <p className="text-sky-300/80 text-sm">Unlock the full city experience</p>
                <div className="mt-4 inline-flex items-baseline gap-1 bg-white/10 px-5 py-2 rounded-2xl border border-white/10">
                  <span className="text-4xl font-black text-white">$20</span>
                  <span className="text-sky-300/80 text-sm font-medium">/year</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="px-6 pt-5 pb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            {isSubscribed ? "Your unlocked features" : "Everything you unlock"}
          </p>
          <div className="space-y-2">
            {PLAN_FEATURES.map(({ icon: Icon, color, bg, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`flex-shrink-0 w-8 h-8 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-gray-800">{label}</span>
                  <span className="text-xs text-gray-400"> — {desc}</span>
                </div>
                <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-5">
          {isSubscribed ? (
            <div className="space-y-2.5">
              <div className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl py-3 text-sm font-semibold">
                <Check className="h-4 w-4" />
                Premium active — all features unlocked
              </div>
              <button
                onClick={handleCancel}
                className="w-full py-2.5 rounded-2xl text-xs font-semibold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel subscription
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleSubscribe}
                className="w-full py-3.5 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Premium · $20/year
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-2.5">
                Cancel anytime · Demo — no real charge
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
