import PossibleThemesEnum from "utils/constants/theme.constants";

/**
 * Type for possible themes, union of the values of the possible themes enum.
 */
type PossibleThemes = `${PossibleThemesEnum}`;

/**
 * Function to verify if a string is equal to a key associated to a theme.
 */
export function isValidTheme(value: string): value is PossibleThemes {
  return (Object.values(PossibleThemesEnum) as string[]).includes(value);
}

export default PossibleThemes;
