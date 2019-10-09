import actions from './actions';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    questions: [],
  },
  actions,
  mutations,
};
