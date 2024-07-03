import useMediaQuery from "hooks/useMediaQuery";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageContext, { Translator } from "utils/language/language.utils";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";
import NavBarMenu from "./subcomponents/NavBarMenu";

interface Link {
  path: string;
  label: string;
}

/**
 * Navigation bar used to switch the selected page.
 */
const NavBar: React.FC = () => {
  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState<boolean>(isMobileQuery);
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  /**
   * Links for the navigation.
   */
  const LinksList: Link[] = [
    {
      path: "/",
      label: ts.homeTitle
    },
    {
      path: "/About",
      label: ts.aboutTitle
    },
    {
      path: "/Settings",
      label: ts.settingsTitle
    }
  ];

  const Content = (
    <ul>
      {LinksList.map((menuElement, index) => (
        <li key={index} onClick={() => navigate(menuElement.path)}>
          <div
            className={`link--${currentPage.toLowerCase() === menuElement.path.toLowerCase() ? "active" : "inactive"}`}>
            {menuElement.label}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`navbar${isMobile ? "--mobile" : ""}`}>
      <NavBarMenu
        Type={isMobile ? "click" : "static"}
        Content={Content}
        Button={isMobile ? AnimatedMenuButton : undefined}
      />
    </div>
  );
};

export default NavBar;
