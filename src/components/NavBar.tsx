import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";
import LinkInterface from "utils/interfaces/LinkInterface";
import Menu from "./subcomponents/Menu";

/**
 * Navigation bar used to switch the selected page.
 */
const NavBar: React.FC = () => {
  const isMobileQuery = useMediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState(isMobileQuery);
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);
  const currentPage = useLocation().pathname;

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

  const generateContent = () => (
    <ul>
      {LinksList.map((menuElement, index) => (
        <li key={index}>
          <Link
            to={menuElement.path}
            className={`link--${currentPage.toLowerCase() === menuElement.path.toLowerCase() ? "active" : "inactive"}`}>
            {menuElement.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`navbar${isMobile ? "--mobile" : ""}`}>
      <Menu Type={isMobile ? "click" : "static"} Content={generateContent()} Image={isMobile ? undefined : undefined} />
    </div>
  );
};

export default NavBar;
