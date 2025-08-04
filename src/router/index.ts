import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      component: List
    }
  ]
});

export default router;
