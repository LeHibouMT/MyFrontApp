import PossibleThemesEnum from "utils/constants/theme.constants";
import { Translation } from "utils/types/language/translator/translator.types";
import PossibleLanguagesEnum from "../../language.constants";

/** French Dictionary. */
const French: Translation = {
  [PossibleLanguagesEnum.english]: "English",
  [PossibleLanguagesEnum.french]: "Français",
  [PossibleThemesEnum.dark]: "Sombre",
  [PossibleThemesEnum.light]: "Clair",
  aboutTitle: "À Propos",
  errorTitle: "Erreur",
  headerTitle: "Header",
  homeTitle: "Mon Parcours",
  languageSettingsTitle: "Langage",
  settingsTitle: "Paramètres",
  themeSettingsTitle: "Thème",
  welcome: "Accueil"
};

export default French;
