/**
 * Animated button.
 * @param checked true if the button is active.
 */
const AnimatedMenuButton: React.FC<{ checked: boolean }> = (props) => {
  return (
    <input
      type="checkbox"
      role="button"
      aria-label="Animated menu button"
      aria-description="Made by Temani Afif"
      className="animated__menu__button"
      checked={props.checked}
      readOnly={true}
    />
  );
};

export default AnimatedMenuButton;
