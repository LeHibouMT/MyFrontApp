import { PossibleLanguagesEnum, TranslatorType } from "utils/language.utils";
import English from "./english/english";
import French from "./french/french";

/**
 * The translator.
 */
const Translator: TranslatorType = {
  [PossibleLanguagesEnum.english]: English,
  [PossibleLanguagesEnum.french]: French
} as const;

export default Translator;
