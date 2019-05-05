import Vue from 'vue';
import Router from 'vue-router';
import MainView from '@/views/MainView';
Vue.use(Router);
export const router = new Router({
  routes: [
    {
      path:"/",
      name: 'films',
      component: MainView
    }
  ]
})
