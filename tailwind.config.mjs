const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15%, 1fr))",
      },
      fontFamily: {
        nova: ["Bona Nova", ...defaultTheme.fontFamily.sans],
        mont: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
