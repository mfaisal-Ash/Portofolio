import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Vercel automatically sets the VERCEL env var during build.
// On Vercel the app is served from the domain root, so base must be "/".
// On GitHub Pages it's served from https://<user>.github.io/Portofolio,
// so it needs the "/portofolio" base path.
export default defineConfig({
  base: process.env.VERCEL ? "/" : "/portofolio",
  plugins: [react()],
})
