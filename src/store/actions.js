import userService from '@/services/api/users';
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants';
import {
  GET_USER,
  UPDATE_USER_FILTER,
  UPDATE_USER_SORT,
  UPDATE_PAGIANTION_FILTER,
} from './action-types';
import {
  SET_USER,
  SET_USER_QUERY,
  SET_TOTAL_PAGES,
  SET_ERROR,
  SET_IS_LOADING,
  SET_USER_SORT,
  SET_PAGINATION_FILTER,
} from './mutation-types';
import { getAlertError } from '@/services/commonFunctions';

export default {
  [GET_USER]: async ({ commit, state }) => {
    commit(SET_IS_LOADING, true);
    userService
      .getUsers(`${state.paginationQuery}${state.userQuery}`)
      .then((response) => {
        const totalPages = Math.ceil(response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE);
        commit(SET_TOTAL_PAGES, totalPages);
        commit(SET_USER, response.data);
      })
      .catch((error) => {
        commit(SET_ERROR, getAlertError(error));
        console.log(error);
      })
      .then(() => commit(SET_IS_LOADING, false));
  },
  [UPDATE_USER_FILTER]: async ({ commit, dispatch }, payload) => {
    commit(SET_USER_QUERY, payload);
    dispatch(GET_USER);
  },
  [UPDATE_USER_SORT]: ({ commit }, payload) => {
    commit(SET_USER_SORT, payload);
  },
  [UPDATE_PAGIANTION_FILTER]: ({ commit }, payload) => {
    commit(SET_PAGINATION_FILTER, `?_page=${payload}&_limit=20`);
  },
};
