import { useContext, useState } from "react";
import { useBlocker, useParams } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import { PossiblePathsEnum } from "utils/constants.utils";
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
import Modal from "./subcomponents/Modal";
import RadioButtonsList from "./subcomponents/RadioButtonsList";
import TabsMenu, { TabInterfaceLink } from "./subcomponents/TabsMenu";

type SettingsValue = {
  [ThemeKey]: PossibleThemes;
  [LanguageKey]: PossibleLanguages;
};

type SettingsKeys = keyof SettingsValue;

type Tabs = {
  [S in SettingsKeys]: TabInterfaceLink<S>;
};

/**
 * Settings page, you can change your theme and language with this component.
 * @returns The component.
 */
const Settings: React.FC = () => {
  const { setting } = useParams();
  const ts = useTranslation();
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const [settingsValue, setSettingsValue] = useState<SettingsValue>({
    [ThemeKey]: themeContext.value,
    [LanguageKey]: languageContext.value
  });
  const [haveUnsavedChanges, setHaveUnsavedChanges] = useState<boolean>(false);
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => haveUnsavedChanges && currentLocation.pathname !== nextLocation.pathname
  );
  const tabs: Tabs = {
    [ThemeKey]: {
      id: ThemeKey,
      title: ts.themeSettingsTitle,
      content: getThemeSettingsContent(),
      path: PossiblePathsEnum.themeSettings
    },
    [LanguageKey]: {
      id: LanguageKey,
      title: ts.languageSettingsTitle,
      content: getLanguageSettingsContent(),
      path: PossiblePathsEnum.languageSettings
    }
  };
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
                if (value === themeContext.value) {
                  setHaveUnsavedChanges(false);
                } else {
                  setHaveUnsavedChanges(true);
                }
              }
            }}
          />
        }
        onSubmitData={(formData: FormData) => {
          const data = formData.get(key);
          if (data && isValidTheme(data)) {
            data && themeContext.setValue(data);
            setThemeCookie(data);
            setHaveUnsavedChanges(false);
          }
        }}
        handleReset={() => {
          setSettingsValue({ ...settingsValue, [key]: themeContext.value });
          setHaveUnsavedChanges(false);
        }}
        disabled={!haveUnsavedChanges}
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
                if (value === languageContext.value) {
                  setHaveUnsavedChanges(false);
                } else {
                  setHaveUnsavedChanges(true);
                }
              }
            }}
          />
        }
        onSubmitData={(formData: FormData) => {
          const data = formData.get(key);
          if (data && isValidLanguage(data)) {
            data && languageContext.setValue(data);
            setLanguageCookie(data);
            setHaveUnsavedChanges(false);
          }
        }}
        handleReset={() => {
          setSettingsValue({ ...settingsValue, [key]: languageContext.value });
          setHaveUnsavedChanges(false);
        }}
        disabled={!haveUnsavedChanges}
      />
    );
  }

  return (
    <div className="settings">
      <h2>{ts.settingsTitle}</h2>
      <TabsMenu
        tabs={Object.values(tabs)}
        initialTab={Object.keys(tabs).findIndex((key) => areSameString(key, setting))}
      />
      {blocker.state === "blocked" && (
        <Modal
          content={ts.unsavedChanges}
          onClose={blocker.reset}
          onlyCloseButton={false}
        />
      )}
    </div>
  );
};

export default Settings;
