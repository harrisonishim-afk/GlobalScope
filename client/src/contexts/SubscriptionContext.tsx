import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type SubscriptionContextType = {
  isSubscribed: boolean;
  subscribe: () => void;
  unsubscribe: () => void;
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

const STORAGE_KEY = "globalscope_premium";

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") setIsSubscribed(true);
    } catch {}
  }, []);

  const subscribe = () => {
    setIsSubscribed(true);
    try { localStorage.setItem(STORAGE_KEY, "true"); } catch {}
  };

  const unsubscribe = () => {
    setIsSubscribed(false);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <SubscriptionContext.Provider
      value={{
        isSubscribed,
        subscribe,
        unsubscribe,
        showModal,
        openModal: () => setShowModal(true),
        closeModal: () => setShowModal(false),
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription must be used within SubscriptionProvider");
  return ctx;
}
