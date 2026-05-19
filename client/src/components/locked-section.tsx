import { ReactNode } from "react";
import { Lock, Sparkles } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function LockedSection({ children, title, description }: Props) {
  const { isSubscribed, openModal } = useSubscription();

  if (isSubscribed) return <>{children}</>;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white">
      {/* Blurred / faded preview */}
      <div className="pointer-events-none select-none filter blur-[3px] grayscale opacity-50 max-h-[280px] overflow-hidden">
        {children}
      </div>

      {/* Locked overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white via-white/95 to-white/40 backdrop-blur-[1px]">
        <div className="text-center px-6 py-8 max-w-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 mb-3">
            <Lock className="h-5 w-5 text-sky-600" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
          {description && (
            <p className="text-xs text-gray-500 mb-4">{description}</p>
          )}
          <button
            onClick={openModal}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/20 hover:shadow-lg transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Unlock with Premium · $20/yr
          </button>
        </div>
      </div>
    </div>
  );
}
