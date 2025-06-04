import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [
    vue(),
    vueDevTools(),
    Unocss({
      presets: [presetUno()]
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
