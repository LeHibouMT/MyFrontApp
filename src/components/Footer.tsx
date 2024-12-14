import useTranslation from "hooks/useTranslation";

/**
 * The Footer component is visible at the bottom of all pages.
 * @returns The component.
 */
const Footer: React.FC = () => {
  const ts = useTranslation();
  return (
    <footer className="footer">
      <span>{ts.footerSignatureText}</span>
      <span>{ts.footerRightsText}</span>
      <span>{ts.footerCookiesText}</span>
    </footer>
  );
};

export default Footer;
