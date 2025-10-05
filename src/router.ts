import { createRouter, createMemoryHistory } from "vue-router";

import Meeple from "./components/Meeple.vue";
import Clicker from "./components/Clicker.vue";

const routes = [
  { path: "/", component: Clicker },
  { path: "/meeple", component: Meeple },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
