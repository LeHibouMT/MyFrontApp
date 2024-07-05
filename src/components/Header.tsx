import NavBar from "./NavBar";

/**
 * The Header component is visible with the navigation bar at the top of all pages.
 */
const Header: React.FC = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export default Header;
