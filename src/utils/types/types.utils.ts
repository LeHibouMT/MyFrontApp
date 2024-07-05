/**
 * Interface for all contexts, with a value and a function to change the value.
 * @param value The value of the context.
 * @param setValue Function to change the value.
 */
export interface ContextInterface<T> {
  value: T;
  setValue: (newValue: T) => void;
}

// #region Theme

/**
 * This file contains all reusable types and constants used to define types.
 */

/**
 * List of possible themes.
 */
export const PossibleThemesList = ["light", "dark"] as const;

/**
 * Type for possible themes, should be in the list of possible themes.
 */
export type PossibleThemes = (typeof PossibleThemesList)[number];

/**
 * Function to verify if a string is equal to a key associated to a theme.
 */
export function isValidTheme(value: string): value is PossibleThemes {
  return PossibleThemesList.includes(value as PossibleThemes);
}

// #endregion

// #region Language
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
 * Type for possible languages, should be in the list of possible languages.
 */
export type PossibleLanguages = (typeof PossibleLanguagesList)[number];

/**
 * Function to verify if a string is equal to a key associated to a language.
 */
export function isValidLanguage(value: string): value is PossibleLanguages {
  return PossibleLanguagesList.includes(value as PossibleLanguages);
}

/**
 * Type for possible texts, should be in the list of possible texts.
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

// #endregion
