import { useEffect, useState } from "react";
import Signature from "../Signature";

/**
 * This is a menu component.
 * List from props is displayed depending on the activation type.
 * @param Type Type of the menu, should be in the list ["static", "click", "hover"].
 * @param Content Displayed content.
 * @param Title Optional title for the menu.
 * @param Button Optional button for the menu.
 */
const NavBarMenu: React.FC<{
  Type: "static" | "click" | "hover";
  Content: React.ReactNode;
  Title?: string;
  Button?: React.FC<boolean>;
}> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(props.Type === "static" ? true : false);

  function switchVisibility() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    setIsVisible(props.Type === "static" ? true : false);
  }, [props.Type]);

  return (
    <div
      className={`navbar__menu--${props.Type}--${isVisible ? "on" : "off"}`}
      onMouseEnter={props.Type === "hover" ? switchVisibility : undefined}
      onMouseLeave={props.Type === "hover" ? switchVisibility : undefined}>
      {props.Title && (
        <div className="menu__title">
          <h3>{props.Title}</h3>
        </div>
      )}
      {props.Button && (
        <div className="menu__button" onClick={props.Type === "click" ? switchVisibility : undefined}>
          {props.Button(isVisible)}
        </div>
      )}
      {props.Content && isVisible && (
        <div className="menu__content" onClick={props.Type === "static" ? undefined : switchVisibility}>
          {props.Content}
        </div>
      )}
      <Signature />
    </div>
  );
};

export default NavBarMenu;
