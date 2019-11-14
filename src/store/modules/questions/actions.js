import questionService from '@/services/api/questions'
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants'
import { GET_QUESTIONS, UPDATE_QUESTION_QUERY } from './action-types'
import { SET_QUESTIONS, SET_QUESTION_QUERY } from './mutation-types'
import { getAlertError } from '@/services/commonFunctions'
import { SET_IS_LOADING, SET_TOTAL_PAGES, SET_ERROR } from '@/store/mutation-types'

export default {
  [GET_QUESTIONS]: async ({ rootState, commit, state }) => {
    commit(SET_IS_LOADING, true, { root: true })
    questionService
      .getQuestions(`${rootState.paginationQuery}${state.questionsQuery}`)
      .then((response) => {
        const totalPages = Math.ceil(response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE)
        commit(SET_TOTAL_PAGES, totalPages, { root: true })
        commit(SET_QUESTIONS, response.data)
      })
      .catch((error) => {
        commit(SET_ERROR, getAlertError(error), { root: true })
        console.log(error)
      })
      .then(() => commit(SET_IS_LOADING, false, { root: true }))
  },
  [UPDATE_QUESTION_QUERY]: ({ commit }, payload) => {
    commit(SET_QUESTION_QUERY, payload)
  }
}
