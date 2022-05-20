import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import ElementPlus from "unplugin-element-plus/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(process.env.NODE_ENV, mode);

  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use './src/styles/element/index.scss' as *; @use '@/styles/them.scss' as dj;`,
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
      sourcemap: "inline",
    },
    plugins: [
      vue(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      checker({ typescript: true }),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      ElementPlus({
        useSource: true,
      }),
    ],
  };
});
