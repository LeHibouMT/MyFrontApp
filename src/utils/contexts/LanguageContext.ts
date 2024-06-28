import { createContext } from "react";
import LanguageInterfaces from "utils/interfaces/LanguageInterfaces";

/**
 * This is the language context of the application.
 * setLanguage undefined at first, it is used with an useState hook in the App component.
 */
const LanguageContext = createContext<LanguageInterfaces>({
  language: "english",
  setLanguage: undefined
});

export default LanguageContext;
