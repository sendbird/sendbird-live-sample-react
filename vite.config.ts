import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sendbird-live-sample-react/',
  define: {
    'process.env': {}
  },
  plugins: [react()]
})
