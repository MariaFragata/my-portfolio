import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // oxc minification is on by default (JS + CSS) in rolldown-vite
    // keep React + scheduler in a separate long-lived vendor chunk for caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // keep React + scheduler in a separate long-lived vendor chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'vendor'
          }
        },
      },
    },
    // surface gzip sizes in build output for quick audits
    reportCompressedSize: true,
  },
})
