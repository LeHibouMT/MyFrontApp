import useTranslation from "hooks/useTranslation";

/**
 * Information page about the website.
 * @returns The component.
 */
const About: React.FC = () => {
  const ts = useTranslation();

  return (
    <div className="about">
      <h2>{ts.aboutTitle}</h2>
    </div>
  );
};

export default About;
