/**
 * Animated button.
 */
const AnimatedMenuButton: React.FC<boolean> = (checked) => {
  return (
    <input
      type="checkbox"
      role="button"
      aria-label="Animated menu button"
      aria-description="Made by Temani Afif"
      className="animated__menu__button"
      checked={checked}
      readOnly={true}
    />
  );
};

export default AnimatedMenuButton;
