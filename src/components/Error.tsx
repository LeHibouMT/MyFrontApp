import { useContext } from "react";
import { Translator } from "utils/constants/language/translator/translator.constants";
import { LanguageContext } from "utils/contexts/contexts.utils";

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
