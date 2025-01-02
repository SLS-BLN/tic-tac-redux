/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig as testConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [svgr(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    // to match project server expectation
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors)
    strictPort: true,
  },
});

const tstConfig = testConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: "v8", // default
    },
  },
});

export default {
  ...config,
  ...tstConfig,
};
