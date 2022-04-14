import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Enroll from "../pages/Enroll/index.vue";
import HomeCompany from "../pages/Home/Company.vue";
import Home from "../pages/Home/index.vue";
import HomePerson from "../pages/Home/Person.vue";
import Login from "../pages/Login/index.vue";
import PublishJob from "../pages/PublishJob/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Enroll",
    component: Enroll,
  },
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
        component: () => import("../pages/Manage/Individual/index.vue"),
      },
    ],
  },
  {
    path: "/Manage",
    component: () => import("../pages/Manage/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
