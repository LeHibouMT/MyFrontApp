import { useContext } from "react";
import { Translator } from "utils/constants/language/translator/translator.constants";
import { LanguageContext } from "utils/contexts/contexts.utils";

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
