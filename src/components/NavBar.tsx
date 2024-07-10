import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useDynamicLocation from "hooks/useDynamicLocation";
import useMediaQuery from "hooks/useMediaQuery";
import { PossiblePathsEnum } from "utils/constants.utils";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";
import Menu from "./subcomponents/Menu";

interface Link {
  path: string;
  label: string;
}

/**
 * Navigation bar used to switch the selected page.
 */
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { mainLocation, fullLocation } = useDynamicLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  const LinksList: Link[] = useMemo(
    () => [
      {
        path: PossiblePathsEnum.default,
        label: ts.homeTitle
      },
      {
        path: PossiblePathsEnum.about,
        label: ts.aboutTitle
      },
      {
        path: PossiblePathsEnum.settings,
        label: ts.settingsTitle
      }
    ],
    [ts]
  );

  const Content = useMemo(
    () => (
      <ul>
        {LinksList.map((menuElement, index) => {
          const isCurrentLocation = mainLocation === menuElement.path;
          return (
            <li key={index} onClick={() => navigate(menuElement.path)} data-active={isCurrentLocation}>
              <div className={`link--${isCurrentLocation ? "active" : "inactive"}`}>{menuElement.label}</div>
            </li>
          );
        })}
      </ul>
    ),
    [LinksList, mainLocation]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fullLocation]);

  return (
    <nav className={"navbar"}>
      <Menu Type={isMobile ? "click" : "static"} Content={Content} Button={AnimatedMenuButton} />
    </nav>
  );
};

export default NavBar;
