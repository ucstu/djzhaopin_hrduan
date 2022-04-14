import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/element/index.scss' as *;`,
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver({
      importStyle: "sass",
    })],
  }),
  Components({
    resolvers: [ElementPlusResolver({
      importStyle: "sass",
    })],
  }),
  ElementPlus({
    useSource: true,
  })]
})
