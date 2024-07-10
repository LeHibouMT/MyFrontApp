import { createContext } from "react";
import Cookies from "js-cookie";
import PossibleThemesEnum from "./theme.utils";
import { ContextInterface } from "./types.utils";

// #region types

/**
 * Enum of possible languages.
 */
export enum PossibleLanguagesEnum {
  english = "en",
  french = "fr"
}

/**
 * Type of possible languages, useful for type checking and inference.
 */
type PossibleLanguages = `${PossibleLanguagesEnum}`;

/**
 * All possible word keys for the translation type below.
 */
type PossibleWordKeys =
  | `${PossibleThemesEnum}`
  | `${PossibleLanguagesEnum}`
  | "aboutTitle"
  | "cancelButtonLabel"
  | "errorTitle"
  | "headerTitle"
  | "homeTitle"
  | "languageSettingsTitle"
  | "settingsTitle"
  | "submitButtonLabel"
  | "themeSettingsTitle"
  | "welcome";

/**
 * type for translations indexed by all possible text keys.
 */
export type Translation = {
  [key in PossibleWordKeys]: string;
};

/**
 * Type for the translator, indexed by possible languages, with a translation as the value for each key.
 */
export type TranslatorType = {
  [key in PossibleLanguages]: Translation;
};

// #endregion

// #region constants

/**
 * Default language.
 */
export const DefaultLanguage: PossibleLanguages = PossibleLanguagesEnum.english as const;

/**
 * Key for the language cookie.
 */
export const LanguageKey = "Language" as const;

/**
 * This is the language context of the application.
 */
export const LanguageContext = createContext<ContextInterface<PossibleLanguages>>({
  value: DefaultLanguage,
  setValue: () => {}
});

// #endregion

// #region functions

/**
 * Function to verify if a string is equal to a key associated to a language.
 */
export function isValidLanguage(value: string): value is PossibleLanguages {
  return (Object.values(PossibleLanguagesEnum) as string[]).includes(value);
}

/**
 * Returns the language cookie if it exists and is valid, otherwise returns undefined.
 */
export function getLanguageCookie(): PossibleLanguages | undefined {
  const cookie = Cookies.get(LanguageKey);
  return cookie && isValidLanguage(cookie) ? cookie : undefined;
}

/**
 * Sets the language cookie.
 * @param value The new value.
 */
export function setLanguageCookie(value: PossibleLanguages) {
  Cookies.set(LanguageKey, value, { sameSite: "Strict", secure: true });
}

// #endregion

export default PossibleLanguages;
