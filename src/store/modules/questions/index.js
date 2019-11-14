import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    questions: [],
    questionsQuery: '&_sort=score'
  },
  actions,
  mutations
}
