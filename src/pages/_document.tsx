import { nimbusFont } from "@/utils/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased  ${nimbusFont.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
