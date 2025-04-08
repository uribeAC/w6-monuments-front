import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    reporters: [`verbose`],
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },

  plugins: [react()],
});
