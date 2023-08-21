import Vue from "vue";
import VueRouter from "vue-router";
import PatternContent from "../views/pattern_content/PatternContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id?",
    name: "PatternContent",
    component: PatternContent,
    props: (route) => ({ id: route.params.id ? Number(route.params.id) : 1}),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
