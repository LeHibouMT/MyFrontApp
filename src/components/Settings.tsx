import { useContext } from "react";
import Cookies from "js-cookie";
import ThemeContext from "utils/contexts/ThemeContext";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";
import { PossibleThemesList } from "utils/constants/ThemeConstants";
import { PossibleLanguagesList } from "utils/constants/LanguageConstants";
import Menu from "./subcomponents/Menu";

/**
 * Settings page, you can change your theme and language with this component.
 */
const Settings: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);

  const getThemeContent = () => (
    <ul>
      {PossibleThemesList.map((elem, index) => (
        <li key={index}>
          <button
            onClick={() => {
              if (themeContext.setTheme) {
                themeContext.setTheme(elem);
                Cookies.set("theme", elem);
              }
            }}>
            {elem}
          </button>
        </li>
      ))}
    </ul>
  );

  const getLanguageContent = () => (
    <ul>
      {PossibleLanguagesList.map((elem, index) => (
        <li key={index}>
          <button
            onClick={() => {
              if (languageContext.setLanguage) {
                languageContext.setLanguage(elem);
                Cookies.set("language", elem);
              }
            }}>
            {elem}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="settings">
      <h2>{ts.settingsTitle}</h2>
      <Menu Type="static" Content={getThemeContent()} Title={ts.themeSettingsTitle} />
      <Menu Type="static" Content={getLanguageContent()} Title={ts.languageSettingsTitle} />
    </div>
  );
};

export default Settings;
