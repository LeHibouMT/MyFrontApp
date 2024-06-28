import { PossibleThemesList } from "utils/constants/ThemeConstants";

/**
 * Type for possible themes, should be in the list of possible themes.
 */
export type PossibleThemes = (typeof PossibleThemesList)[number];
