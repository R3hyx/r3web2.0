import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
type TranslationContextType = {
  language: boolean; // Assuming 'language' is a boolean
  switchBool: () => void;
  setLanguage: (newLanguage: boolean) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<boolean>(false);

  const switchBool = () => {
    setLanguage((prevLanguage) => !prevLanguage);
  };
  

  return (
    <TranslationContext.Provider value={{ language, switchBool, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
