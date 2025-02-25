import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

interface AppContextType {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  activeStyles: { [key: string]: number };
  setActiveStyles: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

const STORAGE_KEY = "activeStyles";

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  // Load active styles from localStorage or default to an empty object
  const [activeStyles, setActiveStyles] = useState<{ [key: string]: number }>(
    () => {
      if (typeof window !== "undefined") {
        const storedStyles = localStorage.getItem(STORAGE_KEY);
        return storedStyles ? JSON.parse(storedStyles) : {};
      }
      return {};
    }
  );

  const [isOpened, setIsOpened] = useState(false);

  // Save activeStyles to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activeStyles));
  }, [activeStyles]);

  const value: AppContextType = {
    isOpened,
    setIsOpened,
    activeStyles,
    setActiveStyles,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use the context safely
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
