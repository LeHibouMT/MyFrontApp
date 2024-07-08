/**
 * Enum of possible languages.
 */
enum PossibleLanguagesEnum {
  english = "en",
  french = "fr"
}

/**
 * Default language.
 */
export const DefaultLanguage = PossibleLanguagesEnum.english as const;

/**
 * Key for the language cookie.
 */
export const LanguageKey: string = "Language" as const;

export default PossibleLanguagesEnum;
