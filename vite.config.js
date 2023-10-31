import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react() ],
  define: { global: {}, 'process.env': process.env },
  esbuild: { logOverride: { 'this-is-undefined-in-esm': 'silent' } },
})
