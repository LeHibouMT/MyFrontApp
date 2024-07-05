import "styles/Styles";
import useMediaQuery from "hooks/useMediaQuery";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LanguageContext from "utils/language/language.utils";
import ThemeContext from "utils/theme/theme.utils";
import { isValidLanguage, isValidTheme, PossibleLanguages, PossibleThemes } from "utils/types/types.utils";
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
    const themeCookie = Cookies.get("theme");
    if (themeCookie && isValidTheme(themeCookie)) {
      return themeCookie;
    }
    if (prefersDarkThemeQuery) {
      return "dark";
    }
    return "light";
  }

  function getLanguage(): PossibleLanguages {
    const languageCookie = Cookies.get("language");
    if (languageCookie && isValidLanguage(languageCookie)) {
      return languageCookie;
    }
    return "english";
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
              <Route path="/Settings" element={<Settings />} />
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
