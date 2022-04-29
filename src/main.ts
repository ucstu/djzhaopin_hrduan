import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createApp } from "vue";
import ECharts from "vue-echarts";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./stores";
createApp(App)
  .use(store, key)
  .use(router)
  .component("v-chart", ECharts)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
