import { SET_QUESTIONS, SET_QUESTION_QUERY } from './mutation-types'

export default {
  [SET_QUESTIONS]: (state, payload) => {
    state.questions = payload
  },
  [SET_QUESTION_QUERY]: (state, payload) => {
    state.questionsQuery = payload
  }
}
