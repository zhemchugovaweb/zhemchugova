import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    i18n: {
      defaultLocale: "ru",
      locales: ["ru", "en"],
      routingStrategy: "prefix-other-locales",
    },
  },
  integrations: [tailwind()],
});
