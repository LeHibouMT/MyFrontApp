import { createContext } from "react";
import { ContextInterface, PossibleLanguages, TranslatorType } from "utils/types/types.utils";
import English from "./english/english";
import French from "./french/french";

/**
 * The translator.
 */
export const Translator: TranslatorType = {
  english: English,
  french: French
};

/**
 * This is the language context of the application.
 */
const LanguageContext = createContext<ContextInterface<PossibleLanguages>>({
  value: "english",
  setValue: () => {}
});

export default LanguageContext;
