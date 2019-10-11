import Vue from 'vue';
import Router from 'vue-router';
import UserList from './views/usersListPage/UsersList.vue';
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
      name: 'users',
      component: UserList,
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('./views/questionsListPage/QuestionList.vue'),
    },
    {
      path: '/tags',
      component: () => import('./views/tagsListPage/TagsList.vue'),
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
