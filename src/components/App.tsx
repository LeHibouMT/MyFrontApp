import "components/Styles";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import Cookies from "js-cookie";
import PossibleLanguagesEnum, { LanguageKey } from "utils/constants/language/language.constants";
import PossibleThemesEnum, { ThemeKey } from "utils/constants/theme.constants";
import { LanguageContext, ThemeContext } from "utils/contexts/contexts.utils";
import PossibleLanguages, { isValidLanguage } from "utils/types/language/language.types";
import PossibleThemes, { isValidTheme } from "utils/types/theme.types";
import About from "./About";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Settings from "./Settings";

/**
 * The routing of the application is done in this component.
 * The header is present in all pages so it is imported here.
 * Styles are imported from styles.tsx.
 * The className allows theme detection.
 * The theme hook is used for the ThemeContext.Provider.value.
 * The language hook is used for the LanguageContext.Provider.value.
 */
const App: React.FC = () => {
  const prefersDarkThemeQuery = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<PossibleThemes>(getTheme());
  const [language, setLanguage] = useState<PossibleLanguages>(getLanguage());

  function getTheme(): PossibleThemes {
    const themeCookie = Cookies.get(ThemeKey);
    if (themeCookie && isValidTheme(themeCookie)) {
      return themeCookie;
    }
    if (prefersDarkThemeQuery) {
      return PossibleThemesEnum.dark;
    }
    return PossibleThemesEnum.light;
  }

  function getLanguage(): PossibleLanguages {
    const languageCookie = Cookies.get(LanguageKey);
    if (languageCookie && isValidLanguage(languageCookie)) {
      return languageCookie;
    }
    return PossibleLanguagesEnum.english;
  }

  useEffect(() => {
    setTheme(getTheme());
  }, [prefersDarkThemeQuery]);

  return (
    <ThemeContext.Provider value={{ value: theme, setValue: setTheme }}>
      <LanguageContext.Provider value={{ value: language, setValue: setLanguage }}>
        <div id="app" className={`app__theme--${theme}`}>
          <Header />
          <section className="banner--left"></section>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Settings/:setting?" element={<Settings />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <section className="banner--right"></section>
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
