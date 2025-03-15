import Navigation from "@/components/TopHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { ReactLenis } from "lenis/react";
import { nimbusFont } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const scheme = pageProps?.scheme || ""; // Get the class from page props
  return (
    <div
      id="main-div"
      className={`${nimbusFont.className} ${scheme} bg-main text-inverted flex flex-col w-full`}
    >
      {/* <ReactLenis root> */}
      <Navigation />
      <Component {...pageProps} />
      <footer className="bg-good-red text-wallet-green w-full text-center uppercase tracking-wide">
        Give a shit.
      </footer>
      {/* </ReactLenis> */}
    </div>
  );
}
