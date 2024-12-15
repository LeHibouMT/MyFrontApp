import { useContext } from "react";
import { LanguageContext, Translation } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

/**
 * Hook to get the translation.
 * @returns The translation.
 */
function useTranslation(): Translation {
  return Translator[useContext(LanguageContext).value];
}

export default useTranslation;
