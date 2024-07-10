import { useContext } from "react";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

/**
 * Hook to get the translation.
 * @returns The translation.
 */
function useTranslation() {
  const translator = Translator[useContext(LanguageContext).value];

  return translator;
}

export default useTranslation;
