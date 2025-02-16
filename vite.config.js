import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Module5/', // Set the base path for GitHub Pages
  plugins: [react()],
})
