import { useEffect, useState } from "react";
import Signature from "../Signature";

/**
 * This is a menu component.
 * List from props is displayed depending on the activation type.
 * @param Type Type of the menu, should be in the list ["static", "click", "hover"].
 * @param Content Displayed content.
 * @param Title Optional title for the menu.
 * @param Image Optional image for the menu.
 */
const Menu: React.FC<{
  Type: "static" | "click" | "hover";
  Content: React.ReactNode;
  Title?: string;
  Image?: string;
}> = (props) => {
  const [isVisible, setIsVisible] = useState(props.Type === "static" ? true : false);

  function switchVisibility() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    setIsVisible(props.Type === "static" ? true : false);
  }, [props.Type]);

  return (
    <div
      className={`menu--${props.Type}--${isVisible ? "on" : "off"}`}
      onMouseEnter={props.Type === "hover" ? switchVisibility : undefined}
      onMouseLeave={props.Type === "hover" ? switchVisibility : undefined}
      onClick={props.Type === "click" ? switchVisibility : undefined}>
      {props.Image && (
        <div className="menu--image">
          <h3>{props.Image}</h3>
        </div>
      )}
      {props.Title && (
        <div className="menu--title">
          <h3>{props.Title}</h3>
        </div>
      )}
      {props.Content && isVisible && <div className="menu--content">{props.Content}</div>}
      <Signature />
    </div>
  );
};

export default Menu;
