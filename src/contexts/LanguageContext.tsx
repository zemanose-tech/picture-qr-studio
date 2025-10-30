import { createContext, ReactNode, useMemo, useState } from "react";

type SupportedLanguage = "es" | "en";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: SupportedLanguage;
};

export const LanguageProvider = ({
  children,
  defaultLanguage = "es",
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<SupportedLanguage>(defaultLanguage);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "es" ? "en" : "es")),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export type { SupportedLanguage };
