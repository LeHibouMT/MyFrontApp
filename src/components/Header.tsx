import NavBar from "./NavBar";

/**
 * The Header component is visible on all pages with the navigation bar.
 */
const Header: React.FC = () => {
  return (
    <div className="header">
      <NavBar />
    </div>
  );
};

export default Header;
