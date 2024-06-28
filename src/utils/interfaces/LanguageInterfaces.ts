import { PossibleLanguages } from "utils/types/LanguageTypes";

/**
 * Interface for the language, with a selected language and a function to change the language.
 * @param language Language selected.
 * @param setLanguage Function to change the language.
 */
interface LanguageInterfaces {
  language: PossibleLanguages;
  setLanguage: ((newLangSelected: PossibleLanguages) => void) | undefined;
}

export default LanguageInterfaces;
