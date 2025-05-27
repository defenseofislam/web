import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web",
  plugins: [
    react(),
    ghPages(),
  ],
});