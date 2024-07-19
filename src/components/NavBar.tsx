import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDynamicLocation from "hooks/useDynamicLocation";
import useMediaQuery from "hooks/useMediaQuery";
import useTranslation from "hooks/useTranslation";
import { PossiblePathsEnum } from "utils/constants.utils";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";
import BackButton from "./subcomponents/BackButton";
import Menu from "./subcomponents/Menu";

interface SubLink {
  path: string;
  label: string;
}

interface Link extends SubLink {
  subLinks?: SubLink[];
}

/**
 * Navigation bar used to switch the selected page.
 * @returns The component.
 */
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { mainLocation, fullLocation } = useDynamicLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ts = useTranslation();
  const [contentVisible, setContentVisible] = useState<boolean>(isMobile ? false : true);
  const [subLinks, setSubLinks] = useState<SubLink[]>();
  const linksList: Link[] = [
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
      label: ts.settingsTitle,
      subLinks: [
        { path: PossiblePathsEnum.themeSettings, label: ts.themeSettingsTitle },
        { path: PossiblePathsEnum.languageSettings, label: ts.languageSettingsTitle }
      ]
    }
  ];

  function getContent() {
    return subLinks ? (
      <>
        <BackButton onClick={() => setSubLinks(undefined)} />
        <ul>
          {subLinks.map((menuElement, index) => {
            const isCurrentLocation = fullLocation === menuElement.path;
            return (
              <li
                key={index}
                onClick={() => {
                  navigate(menuElement.path);
                  if (isMobile) {
                    setContentVisible(false);
                  } else {
                    setSubLinks(undefined);
                  }
                }}
                data-active={isCurrentLocation}>
                {<div className={`link--${isCurrentLocation ? "active" : "inactive"}`}>{menuElement.label}</div>}
              </li>
            );
          })}
        </ul>
      </>
    ) : (
      <ul>
        {linksList.map((menuElement, index) => {
          const isCurrentMainLocation = mainLocation === menuElement.path;
          return (
            <li
              key={index}
              onClick={() => {
                if (!menuElement.subLinks?.length) {
                  navigate(menuElement.path);
                  if (isMobile) {
                    setContentVisible(false);
                  }
                } else {
                  setSubLinks(menuElement.subLinks);
                }
              }}
              data-active={isCurrentMainLocation}>
              {<div className={`link--${isCurrentMainLocation ? "active" : "inactive"}`}>{menuElement.label}</div>}
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fullLocation]);

  useEffect(() => {
    setSubLinks(undefined);
  }, [ts]);

  useEffect(() => {
    setContentVisible(isMobile ? false : true);
    setSubLinks(undefined);
  }, [isMobile]);

  useEffect(() => {
    if (!contentVisible) {
      setSubLinks(undefined);
    }
  }, [contentVisible]);

  return (
    <nav className={"navbar"}>
      <Menu
        content={getContent()}
        contentVisible={contentVisible}
        button={isMobile ? AnimatedMenuButton : undefined}
        onClickButton={isMobile ? () => setContentVisible(!contentVisible) : undefined}
      />
    </nav>
  );
};

export default NavBar;
