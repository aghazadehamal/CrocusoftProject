"use client";
import { createContext, useContext, useState } from "react";
import az from "../locales/az.json";
import en from "../locales/en.json";


const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("az"); 
  const translations = locale === "az" ? az : en; 

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <I18nContext.Provider value={{ locale, translations, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}


export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}


export default I18nProvider;
