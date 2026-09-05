import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // The prerender pass runs the app under Node. Bundle dependencies rather
    // than externalising them, so Node is never handed the stylesheet that
    // `aos` imports.
    noExternal: true,
  },
})
