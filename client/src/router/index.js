import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;