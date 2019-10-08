import {
  SET_USER_QUERY, SET_PAGINATION_FILTER, SET_USER, SET_USER_SORT,
} from './mutation-types';

export default {
  [SET_USER_QUERY]: (state, payload) => {
    state.userQuery = payload;
  },
  [SET_PAGINATION_FILTER]: (state, payload) => {
    state.paginationQuery = payload;
  },
  [SET_USER]: (state, users) => {
    state.users = users;
  },
  [SET_USER_SORT]: (state, sort) => {
    state.curentUserSort = sort;
  },
};
