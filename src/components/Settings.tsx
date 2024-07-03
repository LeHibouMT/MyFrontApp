import Cookies from "js-cookie";
import { useContext, useMemo, useState } from "react";
import LanguageContext, { Translator } from "utils/language/language.utils";
import ThemeContext from "utils/theme/theme.utils";
import {
  isValidLanguage,
  isValidTheme,
  PossibleLanguages,
  PossibleLanguagesList,
  PossibleThemes,
  PossibleThemesList
} from "utils/types/types.utils";
import RadioButtonsList from "./subcomponents/RadioButtonsList";
import TabsMenu from "./subcomponents/TabsMenu";

interface SettingsValue {
  theme: PossibleThemes;
  language: PossibleLanguages;
}

/**
 * Settings page, you can change your theme and language with this component.
 */
const Settings: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  const [settingsValue, setSettingsValue] = useState<SettingsValue>({
    theme: themeContext.value,
    language: languageContext.value
  });
  const themeBoxes = useMemo(
    () =>
      PossibleThemesList.map((theme) => ({
        label: ts[theme],
        value: theme
      })),
    [ts]
  );
  const languageBoxes = useMemo(
    () =>
      PossibleLanguagesList.map((language) => ({
        label: ts[language],
        value: language
      })),
    [ts]
  );

  function handleSummit() {
    themeContext.setValue(settingsValue.theme);
    Cookies.set("theme", settingsValue.theme, { sameSite: "Strict", secure: true });
    languageContext.setValue(settingsValue.language);
    Cookies.set("language", settingsValue.language, { sameSite: "Strict", secure: true });
  }

  function handleReset() {
    setSettingsValue({
      theme: themeContext.value,
      language: languageContext.value
    });
  }

  function getThemeSettingsContent() {
    return (
      <>
        <p>To Change Later</p>
        <RadioButtonsList
          Boxes={themeBoxes}
          Name="theme"
          CheckedValue={settingsValue.theme}
          OnChange={(value: string) => {
            isValidTheme(value) && setSettingsValue({ ...settingsValue, theme: value });
          }}
        />
        <button type="submit">Save changes</button>
        <button type="button" onClick={handleReset}>
          Discard changes
        </button>
      </>
    );
  }

  function getLanguageSettingsContent() {
    return (
      <>
        <p>To Change Later</p>
        <RadioButtonsList
          Boxes={languageBoxes}
          Name="language"
          CheckedValue={settingsValue.language}
          OnChange={(value: string) => {
            isValidLanguage(value) && setSettingsValue({ ...settingsValue, language: value });
          }}
        />
        <button type="submit">Save changes</button>
        <button type="button" onClick={handleReset}>
          Discard changes
        </button>
      </>
    );
  }

  return (
    <div className="settings">
      <h2>{ts.settingsTitle}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSummit();
        }}>
        <TabsMenu
          Tabs={[
            { title: ts.themeSettingsTitle, content: getThemeSettingsContent() },
            { title: ts.languageSettingsTitle, content: getLanguageSettingsContent() }
          ]}
          OnTabChange={handleReset}
        />
      </form>
    </div>
  );
};

export default Settings;
