import { useContext } from "react";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";

/**
 * Information page about the website.
 */
const About: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);

  return (
    <div className="about">
      <h2>{ts.aboutTitle}</h2>
    </div>
  );
};

export default About;
