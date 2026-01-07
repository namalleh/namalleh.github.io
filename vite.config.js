import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: { origin: /^https?:\/\/(?:(?:[^:]+\.)?((www\.)?namalleh.(cc|com))|www\.googletagmanager\.com|cdn\.shabbatguard\.com|q\.quora\.com|snap\.licdn\.com|px\.ads\.linkedin\.com|localhost)/ },
  },
  publicDir: "./public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"),
    }
  },
  build: {
    minify: true,
    cssMinify: true,
  },
  plugins: [
    react(),
  ],
})
