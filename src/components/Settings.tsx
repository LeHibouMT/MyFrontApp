import { useContext } from "react";
import Cookies from "js-cookie";
import ThemeContext, { PossibleThemesList, isValidTheme } from "utils/theme/theme.utils";
import LanguageContext, {
  Translator,
  PossibleLanguagesList,
  isValidLanguage,
  isValidText
} from "utils/language/language.utils";
import Menu from "./subcomponents/Menu";

/**
 * Settings page, you can change your theme and language with this component.
 */
const Settings: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.language];

  const getThemeContent = () => (
    <ul>
      {PossibleThemesList.map((elem, index) => (
        <li key={index}>
          <button
            onClick={() => {
              if (themeContext.setTheme && isValidTheme(elem)) {
                themeContext.setTheme(elem);
                Cookies.set("theme", elem);
              }
            }}>
            {isValidText(elem) && ts[elem]}
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
              if (languageContext.setLanguage && isValidLanguage(elem)) {
                languageContext.setLanguage(elem);
                Cookies.set("language", elem);
              }
            }}>
            {isValidText(elem) && ts[elem]}
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
