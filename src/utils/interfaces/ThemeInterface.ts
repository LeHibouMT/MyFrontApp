import { PossibleThemes } from "utils/types/ThemeTypes";

/**
 * Interface for the theme, with a selected theme and a function to change the theme.
 * @param theme Language selected.
 * @param setTheme Function to change the language.
 */
interface ThemeInterface {
  theme: PossibleThemes;
  setTheme: ((newThemeSelected: PossibleThemes) => void) | undefined;
}

export default ThemeInterface;
