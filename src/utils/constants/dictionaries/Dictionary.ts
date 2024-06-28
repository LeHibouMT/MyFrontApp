import { PossibleLanguages, Translators } from "utils/types/LanguageTypes";
import French from "./french/French";
import English from "./english/English";

/**
 * Return translator depending on the selected language.
 * @param languageSelected Language selected by the user, should be in the list of possible languages.
 */
const Dictionary = (languageSelected: PossibleLanguages) => {
  const translators: Translators = {
    english: English,
    french: French
  };
  return translators[languageSelected];
};

export default Dictionary;
