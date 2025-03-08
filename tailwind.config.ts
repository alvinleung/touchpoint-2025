import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: "Times New Roman",
        // sans: "Helvetica",
      },
      padding: {
        body: "var(--body-padding)",
        "nav-height": "57px",
      },
      margin: {
        body: "var(--body-padding)",
        "nav-height": "57px",
      },
      colors: {
        "wallet-green": "var(--wallet-green)",
        "good-red": "var(--good-red)",
        main: "var(--color-main)",
        inverted: "var(--color-inverted)",
      },
    },
  },
  plugins: [],
} satisfies Config;
