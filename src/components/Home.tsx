import useTranslation from "hooks/useTranslation";

/**
 * Default page.
 * @returns The component.
 */
const Home: React.FC = () => {
  const ts = useTranslation();

  return (
    <div className="home">
      <h2>{ts.welcome}</h2>
    </div>
  );
};

export default Home;
