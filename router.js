import { createRouter, createWebHashHistory } from "vue-router";
import List from "./src/components/List.vue";
import Cart from "./src/components/Cart.vue";

const routes = [
  {path:'/', component: List, props:true },
  {path : '/cart', component: Cart, props:true}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;