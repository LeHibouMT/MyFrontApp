import "components/Styles";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { PossiblePathsEnum } from "utils/constants.utils";
import PossibleLanguages, { DefaultLanguage, getLanguageCookie, LanguageContext } from "utils/language.utils";
import PossibleThemes, { DefaultTheme, getThemeCookie, PossibleThemesEnum, ThemeContext } from "utils/theme.utils";
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
    const themeCookie = getThemeCookie();
    return themeCookie ? themeCookie : prefersDarkThemeQuery ? PossibleThemesEnum.dark : DefaultTheme;
  }

  function getLanguage(): PossibleLanguages {
    const languageCookie = getLanguageCookie();
    return languageCookie ?? DefaultLanguage;
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
              <Route path={PossiblePathsEnum.default} element={<Home />} />
              <Route path={PossiblePathsEnum.about} element={<About />} />
              <Route path={`${PossiblePathsEnum.settings}/:setting?`} element={<Settings />} />
              <Route path={PossiblePathsEnum.error} element={<Error />} />
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
