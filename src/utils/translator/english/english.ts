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
  aboutTitle: "About me",
  biographyText1:
    "Hello! My name is <b>Michel TAING</b>, and I'm a Software Engineer. I hold a degree in Computer Science from ESIEE Paris, where I studied for three years.",
  biographyText2:
    "Before that, I pursued a general science curriculum. I specialize in <b>TypeScript</b> (JavaScript too) and <b>Python</b>. This website was made with React and TypeScript by the way. I’m also proficient in C#.",
  biographyTitle: "Your Software Engineer",
  cancelButtonLabel: "Cancel",
  errorTitle: "Error",
  footerCookiesText: "This website only use sctrictly necessary cookies without any tracking.",
  footerRightsText: "© 2024, All rights reserved.",
  footerSignatureText: "Website made by Michel TAING.",
  headerTitle: "Navigation",
  homeTitle: "Home",
  languageSettingsTitle: "Language",
  settingsTitle: "Settings",
  submitButtonLabel: "Confirm",
  themeSettingsTitle: "Theme",
  unsavedChanges: "You have unsaved changes, please confirm or cancel changes.",
  welcome: "Welcome to my website!"
};

export default English;
