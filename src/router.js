import Vue from 'vue';
import Router from 'vue-router';
import UserList from './views/usersListPage/UsersList.vue';
import UserDetails from './views/UserDetails.vue';
import Questions from './views/Questions.vue';
import Tags from './views/Tags.vue';
import Home from './views/Home.vue';
import NotFoundComponent from './components/NotFoundComponent.vue';

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
      component: () => import('./views/About.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: UserList,
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserDetails,
      children: [
        {
          path: 'tags',
          component: Tags,
        },
        {
          path: 'questions',
          component: Questions,
        },
      ],
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
});
