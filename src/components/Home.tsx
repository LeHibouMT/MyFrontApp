import { useContext } from "react";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

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
