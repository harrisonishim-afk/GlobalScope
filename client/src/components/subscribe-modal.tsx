import { useSubscription } from "@/contexts/SubscriptionContext";
import { Check, X, Crown, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PREMIUM_FEATURES = [
  "Emergency Alerts & weather warnings",
  "What's New in your city this week",
  "Popular Places map with live ratings",
  "City Problems & safety statistics",
  "Local Jobs feed",
  "Neighborhood activity heatmap",
  "Music recommendations from city mood",
  "Premium polished design",
  "Priority data refresh",
];

const FREE_FEATURES = [
  "Live weather",
  "Latest news",
  "City Facts (1 add-on only)",
];

export default function SubscribeModal() {
  const { showModal, closeModal, subscribe, isSubscribed, unsubscribe } = useSubscription();
  const { toast } = useToast();

  if (!showModal) return null;

  const handleSubscribe = () => {
    subscribe();
    closeModal();
    toast({
      title: "Welcome to Globalscope Premium!",
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-8 pt-10 pb-8 text-center relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 mb-4 shadow-lg">
              <Crown className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-1.5">Globalscope Premium</h2>
            <p className="text-sm text-sky-200/80">Unlock the full city dashboard</p>
            <div className="mt-5 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-extrabold">$10</span>
              <span className="text-sky-200/80 text-sm">/month</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Free</h3>
              <ul className="space-y-2">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3 flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Premium
              </h3>
              <ul className="space-y-2">
                {PREMIUM_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                    <Check className="h-3.5 w-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isSubscribed ? (
            <div className="space-y-3">
              <div className="text-center text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl py-3 font-semibold">
                You're a Premium member
              </div>
              <button
                onClick={handleCancel}
                className="w-full py-3 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel subscription
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleSubscribe}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/40"
              >
                Subscribe for $10/month
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-3">
                Cancel anytime. Demo subscription — no real charge.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
