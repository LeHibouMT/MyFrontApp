import { createContext } from "react";

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

/**
 * Interface for the theme, with a selected theme and a function to change the theme.
 * @param theme Language selected.
 * @param setTheme Function to change the language.
 */
export interface ThemeInterface {
  theme: PossibleThemes;
  setTheme: ((newThemeSelected: PossibleThemes) => void) | undefined;
}

/**
 * This is the theme context of the application.
 * setValue is undefined at first, it is used with an useState hook in the App component.
 */
const ThemeContext = createContext<ThemeInterface>({
  theme: "light",
  setTheme: undefined
});

export default ThemeContext;
