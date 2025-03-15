import localFont from "next/font/local";

export const nimbusFont = localFont({
  src: [
    {
      path: "../../public/nimbus-sans/NimbusSanL-Reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/nimbus-sans/NimbusSanL-Bol.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nimbus",
});
