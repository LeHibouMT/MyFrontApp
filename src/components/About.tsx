import { useContext } from "react";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

/**
 * Information page about the website.
 */
const About: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];

  return (
    <div className="about">
      <h2>{ts.aboutTitle}</h2>
    </div>
  );
};

export default About;
