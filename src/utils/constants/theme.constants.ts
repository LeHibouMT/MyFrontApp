/**
 * Enum of possible themes.
 */
enum PossibleThemesEnum {
  light = "light",
  dark = "dark"
}

/**
 * Default theme.
 */
export const DefaultTheme = PossibleThemesEnum.light as const;

/**
 * Key for the theme cookie.
 */
export const ThemeKey: string = "Theme" as const;

export default PossibleThemesEnum;
