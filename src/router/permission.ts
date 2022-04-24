import { Message } from "@element-plus/icons-vue/dist/types";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useStore } from "vuex";
import router from ".";
import { key } from "../stores";
const store = useStore(key);
NProgress.configure({ showSpinner: false });
const whitelist = ["/login"];
router.beforeEach(async (to, _, next) => {
  NProgress.start();
  if (store.state.token) {
    if (to.path == "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.userName;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          await store.dispatch("getInfo");
          next();
        } catch (error) {
          await store.dispatch("logout");
          Message.error(error || "请重新登录");
          next({ path: "/login" });
          NProgress.done();
        }
      }
    }
  } else {
    if (whitelist.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
      NProgress.done();
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
