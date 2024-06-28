import { useContext } from "react";
import LanguageContext from "utils/contexts/LanguageContext";
import Dictionary from "utils/constants/dictionaries/Dictionary";

/**
 * Error page.
 */
const Error: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Dictionary(languageContext.language);

  return (
    <div className="error">
      <h2>{ts.errorTitle}</h2>
    </div>
  );
};

export default Error;
