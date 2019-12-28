import { createContext } from "react";

export const LanguageContext = createContext({
    lang: "",
    handleLanguage: (_lang: string) => {}
});