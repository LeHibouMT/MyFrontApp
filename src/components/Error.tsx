import useTranslation from "hooks/useTranslation";

/**
 * Error page.
 * @returns The component.
 */
const Error: React.FC = () => {
  const ts = useTranslation();

  return (
    <div className="error">
      <h2>{ts.errorTitle}</h2>
    </div>
  );
};

export default Error;
