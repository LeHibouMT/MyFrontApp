import { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import PossibleLanguagesEnum, { LanguageKey } from "utils/constants/language/language.constants";
import { Translator } from "utils/constants/language/translator/translator.constants";
import PossibleThemesEnum, { ThemeKey } from "utils/constants/theme.constants";
import { LanguageContext, ThemeContext } from "utils/contexts/contexts.utils";
import PossibleLanguages, { isValidLanguage } from "utils/types/language/language.types";
import PossibleThemes, { isValidTheme } from "utils/types/theme.types";
import RadioButtonsList from "./subcomponents/RadioButtonsList";
import TabsMenu from "./subcomponents/TabsMenu";

interface SettingsValue {
  theme: PossibleThemes;
  language: PossibleLanguages;
}

interface SettingsTab {
  title: string;
  content: React.ReactNode;
  key: string;
}

/**
 * Settings page, you can change your theme and language with this component.
 */
const Settings: React.FC = () => {
  const { setting } = useParams();
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  const [settingsValue, setSettingsValue] = useState<SettingsValue>({
    theme: themeContext.value,
    language: languageContext.value
  });
  const themeSettingsContent = useMemo(() => getThemeSettingsContent(), [ts, settingsValue.theme]);
  const languageSettingsContent = useMemo(() => getLanguageSettingsContent(), [ts, settingsValue.language]);
  const tabs: SettingsTab[] = [
    { title: ts.themeSettingsTitle, content: themeSettingsContent, key: ThemeKey },
    { title: ts.languageSettingsTitle, content: languageSettingsContent, key: LanguageKey }
  ];

  function handleReset() {
    setSettingsValue({
      theme: themeContext.value,
      language: languageContext.value
    });
  }

  function getThemeSettingsContent() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          themeContext.setValue(settingsValue.theme);
          Cookies.set(ThemeKey, settingsValue.theme, { sameSite: "Strict", secure: true });
        }}>
        <p>To Change Later</p>
        <RadioButtonsList
          Boxes={Object.values(PossibleThemesEnum).map((theme) => ({
            label: ts[theme],
            value: theme
          }))}
          Name={ThemeKey}
          CheckedValue={settingsValue.theme}
          OnChange={(value: string) => {
            isValidTheme(value) && setSettingsValue({ ...settingsValue, theme: value });
          }}
        />
        <button type="submit">Save changes</button>
        <button type="button" onClick={handleReset}>
          Discard changes
        </button>
      </form>
    );
  }

  function getLanguageSettingsContent() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          languageContext.setValue(settingsValue.language);
          Cookies.set(LanguageKey, settingsValue.language, { sameSite: "Strict", secure: true });
        }}>
        <p>To Change Later</p>
        <RadioButtonsList
          Boxes={Object.values(PossibleLanguagesEnum).map((language) => ({
            label: ts[language],
            value: language
          }))}
          Name={LanguageKey}
          CheckedValue={settingsValue.language}
          OnChange={(value: string) => {
            isValidLanguage(value) && setSettingsValue({ ...settingsValue, language: value });
          }}
        />
        <button type="submit">Save changes</button>
        <button type="button" onClick={handleReset}>
          Discard changes
        </button>
      </form>
    );
  }

  return (
    <section className="settings">
      <h2>{ts.settingsTitle}</h2>
      <TabsMenu
        Tabs={tabs}
        InitialTab={tabs.findIndex((tab) => tab.key === setting)}
        OnTabChange={(tab: SettingsTab) => {
          handleReset();
          navigate(`/Settings/${tab.key}`);
        }}
      />
    </section>
  );
};

export default Settings;
