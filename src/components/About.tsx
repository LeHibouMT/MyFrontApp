import DOMPurify from "dompurify";
import useMediaQuery from "hooks/useMediaQuery";
import useTranslation from "hooks/useTranslation";

/**
 * Information page about the website.
 * @returns The component.
 */
const About: React.FC = () => {
  const ts = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="about">
      <h2 className="about__title">{ts.biographyTitle}</h2>
      <img
        className="about__selfie"
        src="/media/png/selfieAXASmaller.jpg"
        alt="Selfie"
      />
      <section
        className="biography"
        aria-label="Biography">
        {isMobile ? (
          <>
            <p
              style={{ marginBottom: "1rem" }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ts.biographyText1) }}
            />
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ts.biographyText2) }} />
          </>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ts.biographyText1) + " " + ts.biographyText2 }} />
        )}
      </section>
    </div>
  );
};

export default About;
