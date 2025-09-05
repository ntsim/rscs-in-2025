import baseConfig from "@slidev/client/uno.config.ts";
import { defineConfig } from "unocss";

export default defineConfig({
  ...baseConfig,
  shortcuts: {
    ...baseConfig.shortcuts,
    "text-primary":
      "color-$slidev-theme-primary dark:color-$slidev-theme-primary-dark",
  },
});
