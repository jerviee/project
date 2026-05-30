import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-sqljs-wasm',
      configureServer: () => {
        copyFileSync(
          path.resolve(__dirname, 'node_modules/sql.js/dist/sql-wasm.wasm'),
          path.resolve(__dirname, 'public/sql-wasm.wasm')
        )
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
