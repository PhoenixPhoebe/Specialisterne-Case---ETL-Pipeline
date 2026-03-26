import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // frontend ports
    proxy: {
      // forward /vejrData requests to backend on port 3000
      "/vejrData": {
        target: "http://VejrREST:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});