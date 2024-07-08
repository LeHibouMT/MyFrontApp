import { useContext } from "react";
import { Translator } from "utils/constants/language/translator/translator.constants";
import { LanguageContext } from "utils/contexts/contexts.utils";

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
