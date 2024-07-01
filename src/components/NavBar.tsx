import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";
import LinkInterface from "utils/interfaces/LinkInterface";
import Menu from "./subcomponents/Menu";
import AnimatedMenuButton from "./subcomponents/AnimatedMenuButton";

/**
 * Navigation bar used to switch the selected page.
 */
const NavBar: React.FC = () => {
  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState(isMobileQuery);
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  /**
   * Links for the navigation.
   */
  const LinksList: LinkInterface[] = [
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
