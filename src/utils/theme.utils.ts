import { createContext } from "react";
import Cookies from "js-cookie";
import { ContextInterface } from "./types.utils";

// #region types

/**
 * Enum of possible themes.
 */
export enum PossibleThemesEnum {
  light = "light",
  dark = "dark"
}

/**
 * Type of possible themes, useful for type checking and inference.
 */
type PossibleThemes = `${PossibleThemesEnum}`;

// #endregion

// #region constants

/**
 * Default theme.
 */
export const DefaultTheme: PossibleThemes = PossibleThemesEnum.light as const;

/**
 * Key for the theme cookie.
 */
export const ThemeKey = "Theme" as const;

/**
 * This is the theme context of the application.
 */
export const ThemeContext = createContext<ContextInterface<PossibleThemes>>({
  value: DefaultTheme,
  setValue: () => {}
});

// #endregion

// #region functions

/**
 * Function to verify if a string is equal to a key associated to a theme.
 */
export function isValidTheme(value: string): value is PossibleThemes {
  return (Object.values(PossibleThemesEnum) as string[]).includes(value);
}

/**
 * Returns the theme cookie if it exists and is valid, otherwise returns undefined.
 */
export function getThemeCookie(): PossibleThemes | undefined {
  const cookie = Cookies.get(ThemeKey);
  return cookie && isValidTheme(cookie) ? cookie : undefined;
}

/**
 * Sets the theme cookie.
 * @param value The new value.
 */
export function setThemeCookie(value: PossibleThemes) {
  Cookies.set(ThemeKey, value, { sameSite: "Strict", secure: true });
}

// #endregion

export default PossibleThemes;
