import Vue from "vue";
import VueRouter from "vue-router";
import ZhaPhotography from "../components/ZhaPhotography.vue";
import Price  from "../components/Price.vue";
import Contact from "../components/Contact.vue";
import Help from "../components/Help.vue";


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name:"ZhaPhotography",
    component: ZhaPhotography,
  },
  {
    path: "/price",
    name:"Price",
    component: Price,
  },
  {
    path: "/contact",
    name:"Contact",
    component: Contact,
  },
  {
    path: "/help",
    name:"Help",
    component: Help,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
