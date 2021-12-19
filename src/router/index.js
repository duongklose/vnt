import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import DashboardAdmin from "../views/admin/Dashboard.vue"
import Transportation from "../views/admin/Transportations.vue"

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: DashboardAdmin
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardAdmin
  },
  {
    path: "/transportations",
    name: "Transportation",
    component: Transportation
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //   children :[
  //     { 
  //       path: 'user/:userId',
  //       component: () =>
  //       import("../components/User.vue"),
  //     }
  //   ]
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
