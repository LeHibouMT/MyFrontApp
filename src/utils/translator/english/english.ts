import { PossibleLanguagesEnum, Translation } from "utils/language.utils";
import { PossibleThemesEnum } from "utils/theme.utils";

/**
 * English translation.
 */
const English: Translation = {
  [PossibleThemesEnum.light]: "Light",
  [PossibleThemesEnum.dark]: "Dark",
  [PossibleLanguagesEnum.english]: "English",
  [PossibleLanguagesEnum.french]: "Français",
  aboutTitle: "About",
  cancelButtonLabel: "Cancel",
  errorTitle: "Error",
  headerTitle: "Navigation",
  homeTitle: "Journey",
  languageSettingsTitle: "Language",
  settingsTitle: "Settings",
  submitButtonLabel: "Confirm",
  themeSettingsTitle: "Theme",
  unsavedChanges: "You have unsaved changes, please confirm or cancel changes.",
  welcome: "Home"
};

export default English;
