import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import DashboardAdmin from "../views/admin/DashboardAdmin.vue"
import Transportation from "../views/admin/Transportations.vue"
import User from "../views/admin/Users.vue"
import Dashboard from "../views/home/Dashboard.vue"
import Vehicle from "../views/home/Vehicles.vue"
import Trip from "../views/home/Trips.vue"
import NewTrip from "../views/home/NewTrip.vue"
import DetailTrip from "../views/home/DetailTrip.vue"
import Review from "../views/home/Review.vue"

const routes = [
  //================================================================
  //Route for home
  //================================================================
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/vehicles",
    name: "Vehicle",
    component: Vehicle
  },
  {
    path: "/trips",
    name: "Trip",
    component: Trip
  },
  {
    path: "/newtrip",
    name: "NewTrip",
    component: NewTrip
  },
  {
    path: "/detailtrip",
    name: "DetailTrip",
    component: DetailTrip
  },
  {
    path: "/review",
    name: "Review",
    component: Review
  },
  //================================================================
  //Route for admin
  //================================================================
  {
    path: "/admin",
    name: "DashboardAdmin",
    component: DashboardAdmin
  },
  {
    path: "/admin/dashboard",
    name: "DashboardAdmin",
    component: DashboardAdmin
  },
  {
    path: "/admin/manage_transportations",
    name: "Transportation",
    component: Transportation
  },
  {
    path: "/admin/manage_users",
    name: "User",
    component: User
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
