/**
 * Enum of possible paths.
 */
export enum PossiblePathsEnum {
  about = "/About",
  default = "/",
  error = "*",
  settings = "/Settings",
  languageSettings = `${settings}/Language`,
  themeSettings = `${settings}/Theme`
}
