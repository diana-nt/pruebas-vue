import Vue from "vue";
import VueRouter from "vue-router";
import AppUserList from "../views/AppUserList.vue";
import AppContact from "@/views/AppContact";
import AppLegal from "@/views/AppLegal";
import AppUser from "@/views/AppUser";
import UserInfo from "@/components/UserInfo";
import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "Home",
    component: AppUserList
  },
  {
    path: "/contact",
    name: "Contact",
    component: AppContact
  },
  {
    path: "/legal",
    name: "Legal",
    component: AppLegal
  },
  {
    path: "/user/:username",
    name: "Users",
    component: AppUser,
    children: [
      {
        path: "info",
        name: "Info",
        props: true,
        component: UserInfo
      }
    ]
  },
  { path: "*", component: NotFound}
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "escuela-vue-exact",
  linkActiveClass: "escuela-vue-active",
  routes
});

export default router;
