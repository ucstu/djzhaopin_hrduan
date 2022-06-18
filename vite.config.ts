/// <reference types="vitest" />

// import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import importToCDN from "vite-plugin-cdn-import";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/them.scss";`,
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2015",
  },
  plugins: [
    vue(),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    checker({ typescript: true }),
    importToCDN({
      modules: [
        {
          name: "nprogress",
          var: "NProgress",
          path: "https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js",
        },
        {
          name: "axios",
          var: "axios",
          path: "https://cdn.jsdelivr.net/npm/axios@0.27.2/dist/axios.min.js",
        },
        {
          name: "echarts",
          var: "echarts",
          path: "https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js",
        },
        {
          name: "qs",
          var: "qs",
          path: "https://cdn.jsdelivr.net/npm/qs@6.10.5/dist/qs.js",
        },
        {
          name: "stompjs",
          var: "Stomp",
          path: "https://cdn.jsdelivr.net/npm/stompjs@2.3.3/lib/stomp.min.js",
        },
        {
          name: "vue",
          var: "Vue",
          path: "https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.prod.js",
        },
        // {
        //   name: "pinia-plugin-persist",
        //   var: "PiniaPluginPersist",
        //   path: "https://cdn.jsdelivr.net/npm/pinia-plugin-persist@1.0.0/dist/pinia-persist.umd.min.js",
        // },
        {
          name: "vue-echarts",
          var: "VueECharts",
          path: "https://cdn.jsdelivr.net/npm/vue-echarts@6.1.0/dist/index.umd.min.js",
        },
        {
          name: "pinia",
          var: "Pinia",
          path: "https://cdn.jsdelivr.net/npm/pinia@2.0.14/dist/pinia.iife.min.js",
        },
        {
          name: "vue-router",
          var: "VueRouter",
          path: "https://cdn.jsdelivr.net/npm/vue-router@4.0.16/dist/vue-router.global.min.js",
        },
        {
          name: "@element-plus/icons-vue",
          var: "ElementPlusIconsVue",
          path: "https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.0.4/dist/index.iife.min.js",
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          css: "https://cdn.jsdelivr.net/npm/element-plus@2.2.5/dist/index.css",
          path: "https://cdn.jsdelivr.net/npm/element-plus@2.2.5/dist/index.full.min.js",
        },
      ],
    }),
  ],
  test: {
    environment: "happy-dom",
  },
});
