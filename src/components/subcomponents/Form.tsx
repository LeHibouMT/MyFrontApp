import { FormEventHandler, useContext } from "react";
import { LanguageContext } from "utils/language.utils";
import Translator from "utils/translator/translator.utils";

/**
 * Form component.
 * @param content Content of the form, should have inputs at the top level.
 * @param onSubmit Function to execute when clicking on the submit button.
 * @param handleReset Function to execute when clicking on the cancel button.
 */
const Form: React.FC<{
  content: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  handleReset: () => void;
}> = (props) => {
  const languageContext = useContext(LanguageContext);
  const ts = Translator[languageContext.value];
  return (
    <form onSubmit={props.onSubmit}>
      {props.content}
      <button type="submit">{ts.submitButtonLabel}</button>
      <button type="button" onClick={props.handleReset}>
        {ts.cancelButtonLabel}
      </button>
    </form>
  );
};

export default Form;
