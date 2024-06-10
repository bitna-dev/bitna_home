import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
})
