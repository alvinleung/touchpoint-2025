import Navigation from "@/components/TopHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { ReactLenis } from "lenis/react";
import { nimbusFont } from "@/utils/fonts";
import RandomFooter from "@/components/RandomFooter";

export default function App({ Component, pageProps }: AppProps) {
  const scheme = pageProps?.scheme || ""; // Get the class from page props

  return (
    <div
      id="main-div"
      className={`${nimbusFont.className} ${scheme} max-w-full bg-main text-inverted flex flex-col w-full`}
    >
      {/* <ReactLenis root> */}
      <Navigation />
      <Component {...pageProps} />
      <RandomFooter />
      {/* </ReactLenis> */}
    </div>
  );
}
