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
  aboutTitle: "À Propos de moi",
  biographyText1:
    "Bonjour! Je m'appelle <b>Michel TAING</b>, et je suis ingénieur logiciel. Je suis diplômé en informatique de l'ESIEE Paris, où j'ai étudié pendant trois ans.",
  biographyText2:
    "Avant cela, j'ai suivi un cursus en sciences générales. Je me spécialise en <b>TypeScript</b> (et JavaScript aussi) et en <b>Python</b>. Ce site web a d'ailleurs été réalisé avec React et TypeScript. Je maîtrise également le C#.",
  biographyTitle: "Votre Ingénieur Logiciel",
  cancelButtonLabel: "Annuler",
  errorTitle: "Erreur",
  footerCookiesText: "Ce site  utilise uniquement les cookies nécessaires pour son fonctionnement sans aucun suivi.",
  footerRightsText: "© 2024, Tous droits réservés.",
  footerSignatureText: "Site réalisé par Michel TAING.",
  headerTitle: "Navigation",
  homeTitle: "Accueil",
  languageSettingsTitle: "Langage",
  settingsTitle: "Paramètres",
  submitButtonLabel: "Confirmer",
  themeSettingsTitle: "Thème",
  unsavedChanges: "Vous avez des modifications non sauvegardées, veuillez les confirmer ou les annuler.",
  welcome: "Bienvenue sur mon site web!"
};

export default French;
