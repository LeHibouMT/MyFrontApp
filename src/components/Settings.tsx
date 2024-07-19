import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import { areSameString } from "utils/functions.utils";
import {
  PossibleLanguagesEnum,
  isValidLanguage,
  LanguageContext,
  LanguageKey,
  setLanguageCookie,
  PossibleLanguages
} from "utils/language.utils";
import {
  isValidTheme,
  PossibleThemes,
  PossibleThemesEnum,
  setThemeCookie,
  ThemeContext,
  ThemeKey
} from "utils/theme.utils";
import Form from "./subcomponents/Form";
import RadioButtonsList from "./subcomponents/RadioButtonsList";
import TabsMenu, { TabInterface } from "./subcomponents/TabsMenu";

type SettingsValue = {
  [ThemeKey]: PossibleThemes;
  [LanguageKey]: PossibleLanguages;
};

type SettingsKeys = keyof SettingsValue;

type Tabs = {
  [S in SettingsKeys]: TabInterface<S>;
};

/**
 * Settings page, you can change your theme and language with this component.
 * @returns The component.
 */
const Settings: React.FC = () => {
  const { setting } = useParams();
  const navigate = useNavigate();
  const ts = useTranslation();
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const [settingsValue, setSettingsValue] = useState<SettingsValue>({
    [ThemeKey]: themeContext.value,
    [LanguageKey]: languageContext.value
  });
  function getThemeSettingsContent() {
    const key = ThemeKey;
    return (
      <Form
        content={
          <RadioButtonsList
            boxes={Object.values(PossibleThemesEnum).map((theme) => ({
              label: ts[theme],
              value: theme
            }))}
            name={key}
            checked={settingsValue[key]}
            onChange={(value) => {
              if (isValidTheme(value)) {
                setSettingsValue({ ...settingsValue, [key]: value });
              }
            }}
          />
        }
        onSubmitData={(formData: FormData) => {
          const data = formData.get(key);
          if (!data) {
            throw Error("theme missing from data");
          }
          if (!isValidTheme(data)) {
            throw Error("invalid theme value");
          }
          themeContext.setValue(data);
          setThemeCookie(data);
        }}
        handleReset={() => setSettingsValue({ ...settingsValue, [key]: themeContext.value })}
        disabled={settingsValue[key] === themeContext.value}
      />
    );
  }
  function getLanguageSettingsContent() {
    const key = LanguageKey;
    return (
      <Form
        content={
          <RadioButtonsList
            boxes={Object.values(PossibleLanguagesEnum).map((language) => ({
              label: ts[language],
              value: language
            }))}
            name={key}
            checked={settingsValue[key]}
            onChange={(value) => {
              if (isValidLanguage(value)) {
                setSettingsValue({ ...settingsValue, [key]: value });
              }
            }}
          />
        }
        onSubmitData={(formdata) => {
          const data = formdata.get(key);
          if (!data) {
            throw Error("language missing from data");
          }
          if (!isValidLanguage(data)) {
            throw Error("invalid language value");
          }
          languageContext.setValue(data);
          setLanguageCookie(data);
        }}
        handleReset={() => setSettingsValue({ ...settingsValue, [key]: languageContext.value })}
        disabled={settingsValue[key] === languageContext.value}
      />
    );
  }
  const tabs: Tabs = {
    [ThemeKey]: { id: ThemeKey, title: ts.themeSettingsTitle, content: getThemeSettingsContent() },
    [LanguageKey]: { id: LanguageKey, title: ts.languageSettingsTitle, content: getLanguageSettingsContent() }
  };

  return (
    <div className="settings">
      <h2>{ts.settingsTitle}</h2>
      <TabsMenu
        tabs={Object.values(tabs)}
        initialTab={Object.keys(tabs).findIndex((key) => areSameString(key, setting))}
        onTabChange={(tab: TabInterface) => {
          navigate(`../${tab.id}`, { relative: "path" });
        }}
      />
    </div>
  );
};

export default Settings;
