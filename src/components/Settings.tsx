import { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PossibleLanguages, {
  PossibleLanguagesEnum,
  isValidLanguage,
  LanguageContext,
  LanguageKey,
  setLanguageCookie
} from "utils/language.utils";
import PossibleThemes, {
  isValidTheme,
  PossibleThemesEnum,
  setThemeCookie,
  ThemeContext,
  ThemeKey
} from "utils/theme.utils";
import Translator from "utils/translator/translator.utils";
import Form from "./subcomponents/Form";
import RadioButtonsList from "./subcomponents/RadioButtonsList";
import TabsMenu, { TabInterface } from "./subcomponents/TabsMenu";

type SettingsValue = {
  [ThemeKey]: PossibleThemes;
  [LanguageKey]: PossibleLanguages;
};

type Tabs = {
  [S in keyof SettingsValue]: TabInterface<S>;
};

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
    [ThemeKey]: themeContext.value,
    [LanguageKey]: languageContext.value
  });
  const themeSettingsContent = useMemo(() => getThemeSettingsContent(), [ts, settingsValue[ThemeKey]]);
  const languageSettingsContent = useMemo(() => getLanguageSettingsContent(), [ts, settingsValue[LanguageKey]]);
  const tabs: Tabs = {
    [ThemeKey]: { id: ThemeKey, title: ts.themeSettingsTitle, content: themeSettingsContent },
    [LanguageKey]: { id: LanguageKey, title: ts.languageSettingsTitle, content: languageSettingsContent }
  };

  function handleReset() {
    setSettingsValue({
      [ThemeKey]: themeContext.value,
      [LanguageKey]: languageContext.value
    });
  }

  function getThemeSettingsContent() {
    return (
      <Form
        content={
          <RadioButtonsList
            Boxes={Object.values(PossibleThemesEnum).map((theme) => ({
              label: ts[theme],
              value: theme
            }))}
            Name={ThemeKey}
            OnChange={(value: string) => {
              isValidTheme(value) && setSettingsValue({ ...settingsValue, [ThemeKey]: value });
            }}
            CheckedValue={settingsValue[ThemeKey]}
          />
        }
        onSubmit={(e) => {
          e.preventDefault();
          themeContext.setValue(settingsValue[ThemeKey]);
          setThemeCookie(settingsValue[ThemeKey]);
        }}
        handleReset={handleReset}
      />
    );
  }

  function getLanguageSettingsContent() {
    return (
      <Form
        content={
          <RadioButtonsList
            Boxes={Object.values(PossibleLanguagesEnum).map((language) => ({
              label: ts[language],
              value: language
            }))}
            Name={LanguageKey}
            OnChange={(value: string) => {
              isValidLanguage(value) && setSettingsValue({ ...settingsValue, [LanguageKey]: value });
            }}
            CheckedValue={settingsValue[LanguageKey]}
          />
        }
        onSubmit={(e) => {
          e.preventDefault();
          languageContext.setValue(settingsValue[LanguageKey]);
          setLanguageCookie(settingsValue[LanguageKey]);
        }}
        handleReset={handleReset}
      />
    );
  }

  return (
    <section className="settings">
      <h2>{ts.settingsTitle}</h2>
      <TabsMenu
        Tabs={Object.values(tabs)}
        InitialTab={Object.values(tabs).findIndex((tab) => tab.id === setting)}
        OnTabChange={(tab: TabInterface) => {
          handleReset();
          navigate(`/Settings/${tab.id}`);
        }}
      />
    </section>
  );
};

export default Settings;
