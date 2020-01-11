import { FETCH_USERS } from '../action-types'
import {
  SET_ERROR, SET_IS_LOADING,
  SET_TOTAL_PAGES, SET_USER } from '../mutation-types'
import userService from '../../services/api/users'
import { getAlertError } from '../../services/commonFunctions'
import {
  HEADEER_TOTAL_COUNT,
  ITEMS_PER_PAGE
} from '../../constants/constants'

const initialState = {
  users: [],
  owner: {
    reputation: 696,
    user_id: 1283198,
    profile_image: 'https://i.stack.imgur.com/vIM81.jpg?s=128&g=1',
    display_name: 'Prasaathviki'
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    getUsers: state => state.users,
    getOwner: state => state.owner
  },
  actions: {
    [FETCH_USERS]: async ({ commit, state, rootState }) => {
      commit('general/SET_IS_LOADING', true, { root: true })
      userService
        .getUsers(`${rootState.paginationQuery}${rootState.userQuery}`)
        .then((response) => {
          const totalPages = Math.ceil(response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE)
          commit(SET_TOTAL_PAGES, totalPages, { root: true })
          commit(SET_USER, response.data)
        })
        .catch((error) => {
          commit(SET_ERROR, getAlertError(error), { root: true })
          console.log(error)
        })
        .then(() => commit('general/SET_IS_LOADING', false, { root: true }))
    }
  },
  mutations: {
    [SET_USER]: (state, users) => {
      state.users = users
    },
  }
}
