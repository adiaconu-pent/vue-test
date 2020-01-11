import {
  SET_USER_QUERY,
  SET_PAGINATION_FILTER,
  SET_USER,
  SET_USER_SORT,
  SET_ERROR,
  SET_TOTAL_PAGES,
  SET_IS_LOADING
} from './mutation-types'

export default {
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
