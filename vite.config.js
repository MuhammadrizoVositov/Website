import { fileURLToPath, URL } from "node:url";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import vue from "@vitejs/plugin-vue";
dotenv.config();
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
