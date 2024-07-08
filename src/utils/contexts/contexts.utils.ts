import { createContext } from "react";
import { DefaultLanguage } from "utils/constants/language/language.constants";
import { DefaultTheme } from "utils/constants/theme.constants";
import PossibleLanguages from "utils/types/language/language.types";
import PossibleThemes from "utils/types/theme.types";
import { ContextInterface } from "utils/types/types.utils";

/**
 * This is the theme context of the application.
 */
export const ThemeContext = createContext<ContextInterface<PossibleThemes>>({
  value: DefaultTheme,
  setValue: () => {}
});

/**
 * This is the language context of the application.
 */
export const LanguageContext = createContext<ContextInterface<PossibleLanguages>>({
  value: DefaultLanguage,
  setValue: () => {}
});
