import React from "react";

interface Props {
  quote: string;
}
const Footer = ({ quote }: Props) => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
      }}
      className="pt-1 w-full text-xs text-center uppercase tracking-wide"
    >
      {quote}
    </footer>
  );
};

export default Footer;
