import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@composition': path.resolve(__dirname, './src/composition'),
    },
  },
})
