import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users';
import UserDetails from './views/UserDetails';
import Questions from './views/Questions';
import Tags from './views/Tags';
import NotFoundComponent from './components/NotFoundComponent'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserDetails,
      children: [
        {
          path: 'tags',
          component: Tags
        },
        {
          path: 'questions',
          component: Questions
        }
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ],
});
