import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      include: /src\/assets\/.*\.svg$/, // this allows icon.svg in app dir to work. All SVGs to be handled by SVGR are in src/assets
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
