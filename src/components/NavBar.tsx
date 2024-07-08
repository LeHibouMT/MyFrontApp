import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { Translator } from "utils/constants/language/translator/translator.constants";
import { LanguageContext } from "utils/contexts/contexts.utils";
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();

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
    <nav className={"navbar"}>
      <Menu Type={isMobile ? "click" : "static"} Content={Content} Button={AnimatedMenuButton} />
    </nav>
  );
};

export default NavBar;
