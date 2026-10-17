import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,

    hmr: {
      host: "192.168.0.197",
      protocol: "ws",
      port: 5000,
    },
  },
});
