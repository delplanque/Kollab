import Vue from "vue";
import Router from "vue-router";
// import { store } from "../store/store";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/features/${view}/Index.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("home")
    },
    {
      path: "/plastic",
      name: "plastic",
      component: loadView("plastic")
    },
    {
      path: "/deforestation",
      name: "deforestation",
      component: loadView("deforestation")
    },
    {
      path: "/air-quality",
      name: "air-quality",
      component: loadView("air-quality")
    },
    {
      path: "/biodiversity",
      name: "biodiversity",
      component: loadView("biodiversity")
    },
    {
      path: "/natural-ressource",
      name: "natural-ressource",
      component: loadView("natural-ressource")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
