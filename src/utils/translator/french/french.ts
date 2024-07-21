import { PossibleLanguagesEnum, Translation } from "utils/language.utils";
import { PossibleThemesEnum } from "utils/theme.utils";

/**
 * French translation.
 */
const French: Translation = {
  [PossibleThemesEnum.light]: "Clair",
  [PossibleThemesEnum.dark]: "Sombre",
  [PossibleLanguagesEnum.english]: "English",
  [PossibleLanguagesEnum.french]: "Français",
  aboutTitle: "À Propos",
  cancelButtonLabel: "Annuler",
  errorTitle: "Erreur",
  headerTitle: "Navigation",
  homeTitle: "Parcours",
  languageSettingsTitle: "Langage",
  settingsTitle: "Paramètres",
  submitButtonLabel: "Confirmer",
  themeSettingsTitle: "Thème",
  unsavedChanges: "Vous avez des modifications non sauvegardées, veuillez les confirmer ou les annuler.",
  welcome: "Accueil"
};

export default French;
