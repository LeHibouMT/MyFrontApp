import { createContext } from "react";
import { ContextInterface, PossibleThemes } from "utils/types/types.utils";

/**
 * This is the theme context of the application.
 */
const ThemeContext = createContext<ContextInterface<PossibleThemes>>({
  value: "light",
  setValue: () => {}
});

export default ThemeContext;
