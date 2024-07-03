import { useContext } from "react";
import LanguageContext, { Translator } from "utils/language/language.utils";

/**
 * Default page.
 */
const Home: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];

  return (
    <div className="home">
      <h2>{ts.welcome}</h2>
    </div>
  );
};

export default Home;
