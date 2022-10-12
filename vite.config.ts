import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
      ],
      rules: [
        ['/^bg-(/\d+)$/', { background: '$1' }]
      ],
      theme: {
        colors: {
          primary: 'var(--primary-color)',
          dark_bg: 'var(--dark-bg)',
        },
      },
    },
    ),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus()
    ,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
