import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
