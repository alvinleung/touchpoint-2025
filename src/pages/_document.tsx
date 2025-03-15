import { nimbusFont } from "@/utils/fonts";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  const { pageProps } = props.__NEXT_DATA__.props;
  const bodyClass = pageProps?.bodyClass || ""; // Get the class from page props

  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased ${bodyClass} ${nimbusFont.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
