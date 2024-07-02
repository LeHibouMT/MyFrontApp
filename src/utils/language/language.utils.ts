import { createContext } from "react";
import English from "./english/english";
import French from "./french/french";

/**
 * List of possible languages.
 */
export const PossibleLanguagesList = ["english", "french"] as const;

/**
 * List of possible texts.
 */
export const PossibleTextsList = [
  "aboutTitle",
  "dark",
  "english",
  "errorTitle",
  "french",
  "headerTitle",
  "homeTitle",
  "languageSettingsTitle",
  "light",
  "settingsTitle",
  "themeSettingsTitle",
  "welcome"
] as const;

/**
 * Type for possible languages, should be in the enumeration of possible languages.
 */
export type PossibleLanguages = (typeof PossibleLanguagesList)[number];

/**
 * Function to verify if a string is equal to a key associated to a language.
 */
export function isValidLanguage(value: string): value is PossibleLanguages {
  return PossibleLanguagesList.includes(value as PossibleLanguages);
}

/**
 * Type for possible texts, should be in the enumeration of possible texts.
 */
export type PossibleTexts = (typeof PossibleTextsList)[number];

/**
 * Function to verify if a string is equal to a key associated to a text.
 */
export function isValidText(value: string): value is PossibleTexts {
  return PossibleTextsList.includes(value as PossibleTexts);
}

/**
 * Type for dictionaries indexed by all possible texts.
 */
export type Dictionary = {
  [key in PossibleTexts]: string;
};

/**
 * Type for the translator, indexed by possible languages, with a dictionary as the value for each key.
 */
export type TranslatorType = {
  [index in PossibleLanguages]: Dictionary;
};

/**
 * The translator.
 */
export const Translator: TranslatorType = {
  english: English,
  french: French
};

/**
 * Interface for the language, with a selected language and a function to change the language.
 * @param language Language selected.
 * @param setLanguage Function to change the language.
 */
export interface LanguageInterface {
  language: PossibleLanguages;
  setLanguage: (newLangSelected: PossibleLanguages) => void;
}

/**
 * This is the language context of the application.
 * setLanguage is just an empty function at first,
 * It is used with an useState hook in the App component.
 */
const LanguageContext = createContext<LanguageInterface>({
  language: "english",
  setLanguage: () => {}
});

export default LanguageContext;
