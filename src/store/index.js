import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curentUserFilter: 'reputation_change_week',
  },
  mutations: {
    changeUserFIlter(state, payload) {
      state.curentUserFilter = payload;
    },
  },
  actions: {},
});
