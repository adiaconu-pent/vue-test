import actions from './actions';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    tags: [],
    tagsQuery: '&_sort=count',
    tagsSort: 'count',
  },
  actions,
  mutations,
};
