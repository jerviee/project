import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync, mkdirSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-sqljs-wasm',
      buildStart() {
        // Ensure public directory exists
        if (!existsSync(path.resolve(__dirname, 'public'))) {
          mkdirSync(path.resolve(__dirname, 'public'), { recursive: true });
        }
        // Copy sql.js wasm file to public directory
        copyFileSync(
          path.resolve(__dirname, 'node_modules/sql.js/dist/sql-wasm.wasm'),
          path.resolve(__dirname, 'public/sql-wasm.wasm')
        );
      },
      configureServer() {
        // Also copy for dev server
        if (!existsSync(path.resolve(__dirname, 'public'))) {
          mkdirSync(path.resolve(__dirname, 'public'), { recursive: true });
        }
        copyFileSync(
          path.resolve(__dirname, 'node_modules/sql.js/dist/sql-wasm.wasm'),
          path.resolve(__dirname, 'public/sql-wasm.wasm')
        );
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
