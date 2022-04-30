import { store } from "@/stores";
import { ElMessage } from "element-plus";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const leftBarRouteList: RouteRecordRaw[] = [
  {
    meta: { requiresAuth: true },
    path: "/Home/",
    component: () => import("../pages/Home/index.vue"),
    redirect: "/Home/Person",
    children: [
      {
        name: "Company",
        path: "Company/:companyName",
        component: () => import("../pages/Home/Company.vue"),
      },
      {
        name: "Person",
        path: "Person",
        component: () => import("../pages/Home/Person.vue"),
      },
    ],
  },
  {
    meta: { requiresAuth: true },
    name: "PublishJob",
    path: "/PublishJob/:PublishJobId?",
    component: () => import("../pages/PublishJob/index.vue"),
  },
  {
    meta: { requiresAuth: true },
    path: "/Setting/",
    redirect: "/Setting/PersonInfo",
    component: () => import("../components/Setting/Setting.vue"),
    children: [
      {
        name: "PersonInfo",
        path: "PersonInfo",
        component: () => import("../pages/Setting/PersonInfo/index.vue"),
      },
      {
        name: "Authentication",
        path: "Authentication",
        component: () => import("../pages/Setting/Authentication/index.vue"),
      },
      {
        name: "Execution",
        path: "Execution",
        component: () =>
          import("../pages/Setting/Authentication/Execution.vue"),
      },
      {
        name: "Comprises",
        path: "Comprises",
        component: () => import("../pages/Setting/Comprises/index.vue"),
      },
      {
        name: "Other",
        path: "Other",
        component: () => import("../pages/Setting/Other/index.vue"),
      },
    ],
  },
  {
    meta: { requiresAuth: true },
    path: "/System/",
    redirect: "/System/Message",
    component: () => import("../components/System/System.vue"),
    children: [
      {
        path: "Message",
        component: () => import("../pages/Manage/Message/index.vue"),
      },
      {
        path: "Position",
        component: () => import("../pages/Manage/Position/index.vue"),
      },
      {
        path: "ResumeRecevie",
        component: () => import("../pages/Manage/Resume/ReResume.vue"),
      },
      {
        path: "ResumeDownload",
        component: () => import("../pages/Manage/Resume/DwResume.vue"),
      },
      {
        name: "Resume",
        path: "Resume/:userId",
        component: () => import("../pages/Manage/Resume/index.vue"),
      },
      {
        path: "Interview",
        component: () => import("../pages/Manage/Interview/index.vue"),
      },
      {
        path: "Talent",
        component: () => import("../pages/Manage/Talent/index.vue"),
      },
      {
        path: "Data",
        component: () => import("../pages/Manage/Data/index.vue"),
      },
      {
        path: "Individual",
        redirect: "/System/Individual/Guy",
        component: () => import("../pages/Manage/Individual/index.vue"),
        children: [
          {
            name: "Guy",
            path: "Guy",
            component: () => import("../pages/Manage/Individual/Guy.vue"),
          },
          {
            name: "Firm",
            path: "Firm",
            component: () => import("../pages/Manage/Individual/Firm.vue"),
          },
        ],
      },
    ],
  },
  {
    name: "Manage",
    path: "/Manage",
    component: () => import("../pages/Manage/index.vue"),
  },
];

const unAuthRouterList: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    meta: { requiresAuth: false },
  },
  {
    path: "/Login",
    component: () => import("../pages/Login/index.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/Enroll",
    component: () => import("../pages/Enroll/index.vue"),
    meta: { requiresAuth: false },
  },
];

const routes: Array<RouteRecordRaw> = [
  ...unAuthRouterList,
  ...leftBarRouteList,
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

NProgress.configure({ showSpinner: false });
const whitelist = ["/Login", "/Enroll"];
router.beforeEach(async (to, _, next) => {
  NProgress.start();
  if (to.meta.requiresAuth && store.state.token) {
    if (to.path === "/Login") {
      next("/Login");
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.userName;
      if (hasGetUserInfo) {
        next();
      } else {
        NProgress.done();
        next("/Login");
        ElMessage.error("请先登录");
      }
    }
  } else {
    if (whitelist.indexOf(to.path)) {
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

export default router;
