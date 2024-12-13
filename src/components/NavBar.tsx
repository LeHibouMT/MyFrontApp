import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDynamicLocation from "hooks/useDynamicLocation";
import useMediaQuery from "hooks/useMediaQuery";
import useTranslation from "hooks/useTranslation";
import { PossiblePathsEnum } from "utils/constants.utils";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";
import BackButton from "./subcomponents/BackButton";
import Menu from "./subcomponents/Menu";

interface Link {
  path: string;
  label: string;
  subLinks?: Link[];
}

/**
 * Navigation bar used to switch the selected page.
 * @returns The component.
 */
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { fullLocation } = useDynamicLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ts = useTranslation();
  const [contentVisible, setContentVisible] = useState<boolean>(isMobile ? false : true);
  const [currentLinks, setCurrentLinks] = useState<Link[]>();
  const [previousLinks, setPreviousLinks] = useState<(Link[] | undefined)[]>([]);
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
        {
          path: PossiblePathsEnum.themeSettings,
          label: ts.themeSettingsTitle
        },
        {
          path: PossiblePathsEnum.languageSettings,
          label: ts.languageSettingsTitle
        }
      ]
    }
  ];

  function getContent() {
    return (
      <>
        {previousLinks.length > 0 && (
          <BackButton
            onClick={() => {
              setCurrentLinks(previousLinks.at(-1));
              setPreviousLinks(previousLinks.slice(0, -1));
            }}
          />
        )}
        <ul>
          {(currentLinks ? currentLinks : linksList).map((menuElement, index) => {
            const isCurrentMainLocation =
              fullLocation === menuElement.path ||
              (menuElement.path !== PossiblePathsEnum.default && fullLocation.startsWith(menuElement.path));
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
                    setPreviousLinks([...previousLinks, currentLinks]);
                    setCurrentLinks(menuElement.subLinks);
                  }
                }}
                data-active={isCurrentMainLocation}>
                {<div className={`link--${isCurrentMainLocation ? "active" : "inactive"}`}>{menuElement.label}</div>}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  function resetNavBar() {
    setCurrentLinks(undefined);
    setPreviousLinks([]);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    resetNavBar();
  }, [fullLocation]);

  useEffect(() => {
    resetNavBar();
  }, [ts]);

  useEffect(() => {
    setContentVisible(isMobile ? false : true);
    resetNavBar();
  }, [isMobile]);

  useEffect(() => {
    if (!contentVisible) {
      resetNavBar();
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
