import PossibleLanguagesEnum from "utils/constants/language/language.constants";
import PossibleThemesEnum from "utils/constants/theme.constants";
import PossibleLanguages from "../language.types";

/**
 * Interface for translations indexed by all possible text keys.
 */
export interface Translation {
  [PossibleLanguagesEnum.english]: string;
  [PossibleLanguagesEnum.french]: string;
  [PossibleThemesEnum.dark]: string;
  [PossibleThemesEnum.light]: string;
  aboutTitle: string;
  errorTitle: string;
  headerTitle: string;
  homeTitle: string;
  languageSettingsTitle: string;
  settingsTitle: string;
  themeSettingsTitle: string;
  welcome: string;
}

/**
 * Type for the translator, indexed by possible languages, with a translation as the value for each key.
 */
type TranslatorType = {
  [index in PossibleLanguages]: Translation;
};

export default TranslatorType;
