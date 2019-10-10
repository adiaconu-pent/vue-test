import Vue from 'vue';
import Router from 'vue-router';
import UserList from './views/usersListPage/UsersList.vue';
import Home from './views/Home.vue';
import NotFoundComponent from './components/NotFoundComponent.vue';
import QuestionDetails from './views/questionDetailsPage/QuestionDetails.vue';
import AddQuestion from './views/addQuestionPage/AddQuestion.vue';

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
      path: '/users',
      name: 'users',
      component: UserList,
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('./views/questionsListPage/QuestionList.vue'),
    },
    {
      path: '/questions/:id',
      component: QuestionDetails,
    },
    {
      path: '/question/add',
      name: 'user',
      component: AddQuestion,
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
});
