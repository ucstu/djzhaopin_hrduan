import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { createApp } from "vue";
import ECharts from "vue-echarts";
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();
pinia.use(piniaPluginPersist);

createApp(App)
  .use(router)
  .use(pinia)
  .component("v-chart", ECharts)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
