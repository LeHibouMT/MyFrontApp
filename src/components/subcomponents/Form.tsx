import useTranslation from "hooks/useTranslation";

/**
 * Form component.
 * @param content Content of the form.
 * @param onSubmitData Function to execute with data on submit.
 * @param handleReset Optional function to execute when clicking on the cancel button.
 * @param disabled Optional boolean, true if buttons should be disabled.
 * @returns The component.
 */
const Form: React.FC<{
  content: React.ReactNode;
  onSubmitData: (formdata: FormData) => void;
  handleReset?: () => void;
  disabled?: boolean;
}> = (props) => {
  const ts = useTranslation();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        if (data.entries().next().done) {
          console.log("no data");
        } else {
          props.onSubmitData(data);
        }
      }}>
      {props.content}
      <div className="form__button__container">
        <button
          type="submit"
          disabled={props.disabled}>
          {ts.submitButtonLabel}
        </button>
        <button
          type={props.handleReset ? "button" : "reset"}
          onClick={props.handleReset}
          disabled={props.disabled}>
          {ts.cancelButtonLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;
