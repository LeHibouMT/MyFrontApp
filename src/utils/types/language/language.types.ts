import PossibleLanguagesEnum from "utils/constants/language/language.constants";

/**
 * Type for possible languages, union of the values of the possible languages enum.
 */
type PossibleLanguages = `${PossibleLanguagesEnum}`;

/**
 * Function to verify if a string is equal to a key associated to a language.
 */
export function isValidLanguage(value: string): value is PossibleLanguages {
  return (Object.values(PossibleLanguagesEnum) as string[]).includes(value);
}

export default PossibleLanguages;
