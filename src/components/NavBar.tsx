import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import LanguageContext, { Translator } from "utils/language/language.utils";
import Menu from "./subcomponents/Menu";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";

interface Link {
  path: string;
  label: string;
}

/**
 * Navigation bar used to switch the selected page.
 */
const NavBar: React.FC = () => {
  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState(isMobileQuery);
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.language];
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

  const getContent = () => (
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
      <Menu
        Type={isMobile ? "click" : "static"}
        Content={getContent()}
        Button={isMobile ? AnimatedMenuButton : undefined}
      />
    </div>
  );
};

export default NavBar;
