import { PossibleLanguagesList } from "utils/constants/LanguageConstants";
import DictionaryInterface from "utils/interfaces/DictionaryInterface";

/**
 * Type for possible languages, should be in the list of possible languages.
 */
export type PossibleLanguages = (typeof PossibleLanguagesList)[number];

/**
 * Type for the translators, indexed by possible languages, with a dictionary as the value for each key.
 */
export type Translators = {
  [index in PossibleLanguages]: DictionaryInterface;
};
