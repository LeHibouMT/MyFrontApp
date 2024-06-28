import { createContext } from "react";
import ThemeInterface from "utils/interfaces/ThemeInterface";

/**
 * This is the theme context of the application.
 * setValue is undefined at first, it is used with an useState hook in the App component.
 */
const ThemeContext = createContext<ThemeInterface>({
  theme: "light",
  setTheme: undefined
});

export default ThemeContext;
