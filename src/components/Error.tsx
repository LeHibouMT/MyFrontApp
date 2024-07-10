import { useContext } from "react";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

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
