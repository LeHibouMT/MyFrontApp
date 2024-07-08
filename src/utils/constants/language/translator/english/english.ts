import PossibleThemesEnum from "utils/constants/theme.constants";
import { Translation } from "utils/types/language/translator/translator.types";
import PossibleLanguagesEnum from "../../language.constants";

/** English dictionary. */
const English: Translation = {
  [PossibleLanguagesEnum.english]: "English",
  [PossibleLanguagesEnum.french]: "Français",
  [PossibleThemesEnum.dark]: "Dark",
  [PossibleThemesEnum.light]: "Light",
  aboutTitle: "About",
  errorTitle: "Error",
  headerTitle: "Header",
  homeTitle: "My Journey",
  languageSettingsTitle: "Language",
  settingsTitle: "Settings",
  themeSettingsTitle: "Theme",
  welcome: "Home"
};

export default English;
