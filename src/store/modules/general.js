import {
  FETCH_USERS,
  UPDATE_PAGIANTION_FILTER,
  UPDATE_USER_FILTER,
  UPDATE_USER_SORT
} from '../action-types'
import {
  SET_ERROR, SET_IS_LOADING, SET_PAGINATION_FILTER,
  SET_TOTAL_PAGES, SET_USER_QUERY, SET_USER_SORT
} from '../mutation-types'

const initialState = {
  error: '',
  curentUserSort: 'reputation_change_week',
  paginationQuery: '?_page=1&_limit=20',
  userQuery: '&_sort=reputation_change_week',
  totalPages: 0,
  isLoading: false
}

export default {
  namespaced: true,
  state: initialState,
  getters: {

  },
  actions: {
    [UPDATE_USER_FILTER]: async ({ commit, dispatch }, payload) => {
      commit(SET_USER_QUERY, payload)
      dispatch(FETCH_USERS, { root: true })
    },
    [UPDATE_USER_SORT]: ({ commit }, payload) => {
      commit(SET_USER_SORT, payload)
    },
    [UPDATE_PAGIANTION_FILTER]: ({ commit }, payload) => {
      commit(SET_PAGINATION_FILTER, `?_page=${payload}&_limit=20`)
    }
  },
  mutations: {
    [SET_USER_QUERY]: (state, payload) => {
      state.userQuery = payload
    },
    [SET_PAGINATION_FILTER]: (state, payload) => {
      state.paginationQuery = payload
    },

    [SET_USER_SORT]: (state, sort) => {
      state.curentUserSort = sort
    },
    [SET_ERROR]: (state, error) => {
      state.error = error
    },
    [SET_TOTAL_PAGES]: (state, pages) => {
      state.totalPages = pages
    },
    [SET_IS_LOADING]: (state, isLoading) => {
      state.isLoading = isLoading
    }
  }
}
