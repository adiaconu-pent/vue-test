import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import questions from './modules/questions'
import tags from './modules/tags'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    error: '',
    curentUserSort: 'reputation_change_week',
    paginationQuery: '?_page=1&_limit=20',
    userQuery: '&_sort=reputation_change_week',
    totalPages: 0,
    isLoading: false,
    owner: {
      reputation: 696,
      user_id: 1283198,
      profile_image: 'https://i.stack.imgur.com/vIM81.jpg?s=128&g=1',
      display_name: 'Prasaathviki'
    }
  },
  mutations,
  actions,
  getters: {
    USERS: state => state.users
  },
  modules: { questions, tags }
})
