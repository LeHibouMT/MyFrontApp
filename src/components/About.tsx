import { useContext } from "react";
import LanguageContext, { Translator } from "utils/language/language.utils";

/**
 * Information page about the website.
 */
const About: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.language];

  return (
    <div className="about">
      <h2>{ts.aboutTitle}</h2>
    </div>
  );
};

export default About;
