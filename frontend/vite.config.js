import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // 👇 Evita rutas rotas en producción (GitHub Pages)
  base: mode === 'production' ? '/hd-22016-grupo6-apf3/' : '/',
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // 👈 para que Vitest tenga acceso a jest-dom
  },
}));
