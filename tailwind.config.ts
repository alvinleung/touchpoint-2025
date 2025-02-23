import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        body: "32px",
        "nav-height": "57px",
      },
      margin: {
        body: "32px",
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
