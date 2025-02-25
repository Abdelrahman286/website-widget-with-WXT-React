import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: ["activeTab", "scripting", "sidePanel", "storage", "tabs"],
    action: {},
    name: "Widget Tester",
    description: "Test accessibility widget of different websites",
  },
  vite: () => ({
    plugins: [react()],
  }),
});
