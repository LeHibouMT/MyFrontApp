import Signature from "components/Signature";

/**
 * This is a menu component.
 * List from props is displayed depending on the activation type.
 * @param content Displayed content.
 * @param onClickContent Optional onClick function for the content.
 * @param contentVisible Optional boolean, true if content is visible.
 * @param title Optional title for the menu.
 * @param button Optional button for the menu.
 * @param onClickButton Optional onClick function for the button.
 * @returns The component.
 */
const Menu: React.FC<{
  content: React.ReactNode;
  onClickContent?: () => void;
  contentVisible?: boolean;
  title?: string;
  button?: React.FC<{ checked: boolean }>;
  onClickButton?: () => void;
}> = (props) => {
  return (
    <div className={`menu--${props.contentVisible ? "on" : "off"}`}>
      {props.title && (
        <div className="menu__title">
          <h3>{props.title}</h3>
        </div>
      )}
      {props.button && (
        <div
          className="menu__button"
          onClick={props.onClickButton}>
          {<props.button checked={props.contentVisible !== false} />}
        </div>
      )}
      {props.contentVisible !== false && (
        <div
          className="menu__content"
          onClick={props.onClickContent}>
          {props.content}
        </div>
      )}
      <Signature />
    </div>
  );
};

export default Menu;
