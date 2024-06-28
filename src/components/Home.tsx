import { useContext } from "react";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";

/**
 * Default page.
 */
const Home: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);

  return (
    <div className="home">
      <h2>{ts.welcome}</h2>
    </div>
  );
};

export default Home;
