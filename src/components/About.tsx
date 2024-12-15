import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import useMediaQuery from "hooks/useMediaQuery";
import useTranslation from "hooks/useTranslation";
import useViewportSize from "hooks/useViewportSize";

/**
 * Information page about the website.
 * @returns The component.
 */
const About: React.FC = () => {
  const ts = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const viewportSize = useViewportSize();
  const [backgroundHeight, setBackgroundHeight] = useState<number>(viewportSize.height / 2);

  useEffect(() => {
    const handleWheel = (event: { deltaY: number; preventDefault: () => void }) => {
      if (event.deltaY > 0 && backgroundHeight < viewportSize.height) {
        setBackgroundHeight((previousHeight) => Math.min(previousHeight + event.deltaY, viewportSize.height + 1));
        if (backgroundHeight >= viewportSize.height + 1) {
          scrollBy({ top: 0, behavior: "smooth" });
        }
      } else if (event.deltaY < 0) {
        setBackgroundHeight((previousHeight) => Math.max(previousHeight + event.deltaY, viewportSize.height / 2));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="about">
      <div
        className="first__about__section"
        style={{
          height: viewportSize.height + 1,
          width: "100%",
          backgroundSize: `auto ${Math.floor(backgroundHeight)}px`,
          position: backgroundHeight < viewportSize.height ? "fixed" : "static"
        }}></div>
    </div>
  );
};

export default About;
