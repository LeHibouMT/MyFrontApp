import { useContext } from "react";
import LanguageContext, { Translator } from "utils/language/language.utils";

/**
 * Error page.
 */
const Error: React.FC = () => {
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];

  return (
    <div className="error">
      <h2>{ts.errorTitle}</h2>
    </div>
  );
};

export default Error;
