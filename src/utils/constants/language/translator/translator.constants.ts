import TranslatorType from "utils/types/language/translator/translator.types";
import English from "./english/english";
import French from "./french/french";
import PossibleLanguagesEnum from "../language.constants";

/**
 * The translator.
 */
export const Translator: TranslatorType = {
  [PossibleLanguagesEnum.english]: English,
  [PossibleLanguagesEnum.french]: French
} as const;
