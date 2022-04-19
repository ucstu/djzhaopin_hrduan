import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Enroll from "../pages/Enroll/index.vue";
import HomeCompany from "../pages/Home/Company.vue";
import Home from "../pages/Home/index.vue";
import HomePerson from "../pages/Home/Person.vue";
import Login from "../pages/Login/index.vue";
import PublishJob from "../pages/PublishJob/index.vue";
const leftBarRouteList: RouteRecordRaw[] = [
  {
    path: "/Home/",
    component: Home,
    redirect: "/Home/Person",
    children: [
      {
        name: "Company",
        path: "Company/:companyName",
        component: HomeCompany,
      },
      {
        name: "Person",
        path: "Person",
        component: HomePerson,
      },
    ],
  },
  {
    path: "/PublishJob",
    component: PublishJob,
  },
  {
    path: "/Setting/",
    redirect: "/Setting/PersonInfo",
    component: () => import("../components/Setting.vue"),
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
    path: "/System/",
    redirect: "/System/Message",
    component: () => import("../components/System.vue"),
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
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/Enroll",
    component: Enroll,
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
// router.beforeEach((to, from, next) => {
//   if (to.path === "/Login") {
//     next();
//   } else {
//     if (localStorage.getItem("token")) {
//       leftBarRouteList.forEach((item) => {
//         router.addRoute(item);
//       });
//       next();
//     } else {
//       next("/Login");
//     }
//   }
// });

export default router;
