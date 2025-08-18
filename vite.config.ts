/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { copyFileSync, mkdirSync } from 'fs';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-css-files',
      closeBundle() {
        // CSS 파일들을 dist 폴더로 복사
        try {
          mkdirSync(path.resolve(__dirname, 'dist/styles'), {
            recursive: true,
          });
          copyFileSync(
            path.resolve(__dirname, 'packages/styles/color.css'),
            path.resolve(__dirname, 'dist/styles/color.css')
          );
        } catch (error) {
          console.warn('CSS 파일 복사 중 오류:', error);
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@/components': path.resolve(__dirname, './packages/components'),
      '@/styles': path.resolve(__dirname, './packages/styles'),
      '@/stories': path.resolve(__dirname, './stories'),
    },
  },
  css: {
    postcss: './postcss.config.ts',
  },
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'VingleDesignSystem',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return '[name][extname]';
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
    cssCodeSplit: false,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
