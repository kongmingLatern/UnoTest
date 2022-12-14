import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // 分包策略
          // 如果包含 node_modules 的依赖，就单独打包
          if (id.includes('node_modules')) {
            return "vendor"
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({ scale: 1.5 })
      ],
      shortcuts: [
        ['icon-btn', 'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'],
        ['j-c-c', 'justify-center'],
        ['j-c-b', 'justify-between'],
        ['j-c-a', 'justify-around'],
        ['a-i-b', 'items-baseline'],
        ['a-i-c', 'items-center'],
        ['f-c-c', 'flex justify-center items-center'],
        ['f-b-c', 'flex justify-between items-center'],
      ],
      rules: [
        ['/^bg-(/d+)$/', { background: '$1' }],
        // ['/^(min-|max-)?([wh])-?(.+)$/', { height: `${1 / 4}rem` }]
        // [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
        // [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
        ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }],
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
    ElementPlus(),
    Icons({ autoInstall: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
