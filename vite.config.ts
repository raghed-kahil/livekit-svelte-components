import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'livekit-svelte-components',
      entry: './src/index.ts'
    },
  },
  plugins: [svelte()],
})
