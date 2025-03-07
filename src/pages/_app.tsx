import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactLenis } from "lenis/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <Navigation />
      <Component {...pageProps} />
      <div className=" bg-inverted text-main w-full text-center uppercase tracking-wide">Give a shit.</div>
    </ReactLenis>
  );
}
