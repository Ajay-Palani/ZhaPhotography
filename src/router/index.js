import Vue from "vue";
import VueRouter from "vue-router";
import ZhaPhotography from "../components/ZhaPhotography.vue";
import Price  from "../components/Price.vue";
import Contact from "../components/Contact.vue";
import Help from "../components/Help.vue";
import GalleryView from '@/components/GalleryView.vue';


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
  { path: '/gallery/:name', name: 'GalleryView', component: GalleryView, props: true },
];

const router = new VueRouter({
  mode: 'hash',  // ✅ THIS IS THE FIX
  routes,
});

export default router;
