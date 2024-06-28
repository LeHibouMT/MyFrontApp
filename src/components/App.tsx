import "styles/Styles";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ErrorPage from "pages/ErrorPage";
import SettingsPage from "pages/SettingsPage";
import useMediaQuery from "hooks/useMediaQuery";
import ThemeContext from "utils/contexts/ThemeContext";
import LanguageContext from "utils/contexts/LanguageContext";
import { PossibleThemes } from "utils/types/ThemeTypes";
import { PossibleThemesList } from "utils/constants/ThemeConstants";
import { PossibleLanguages } from "utils/types/LanguageTypes";
import { PossibleLanguagesList } from "utils/constants/LanguageConstants";
import Header from "./Header";

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
    if (themeCookie && PossibleThemesList.includes(themeCookie)) {
      return themeCookie;
    }
    if (prefersDarkThemeQuery) {
      return "dark";
    }
    return "light";
  }

  function getLanguage(): PossibleLanguages {
    const languageCookie = Cookies.get("language");
    if (languageCookie && PossibleLanguagesList.includes(languageCookie)) {
      return languageCookie;
    }
    return "english";
  }

  useEffect(() => {
    setTheme(getTheme());
  }, [prefersDarkThemeQuery]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div id="app" className={`app--${theme}--theme`}>
          <Header />
          <div className="page--content">
            <div className="banner--left"></div>
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Settings" element={<SettingsPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
            <div className="banner--right"></div>
          </div>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
