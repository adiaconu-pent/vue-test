import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    error: '',
    curentUserSort: 'reputation_change_week',
    paginationQuery: '?_page=1&_limit=20',
    userQuery: '',
    totalPages: 0,
  },
  mutations,
  actions,
  getters: {
    USERS: state => state.users,
  },
});
