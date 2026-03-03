import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    monkey({
      entry: 'src/main.jsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'barbra/streisand',
        match: ['*://*.twitter.com/*', '*://*.x.com/*', '*://x.com/*'],
        downloadURL: 'https://github.com/bingbangbopper/dlscript/releases/latest/download/dlscript.user.js',
        updateURL: 'https://github.com/bingbangbopper/dlscript/releases/latest/download/dlscript.user.js',
        version: pkg.version,
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
        },
      },
    }),
  ],
});
