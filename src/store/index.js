import Vue from 'vue';
import Vuex from 'vuex';
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants';
import userService from '@/services/api/users';
import {
  GET_USER,
  SET_USER,
  UPDATE_USER_FILTER,
  UPDATE_PAGINATION_FILTER,
  UPDATE_USER_QUERY,
  SET_USER_SORT,
  SET_PAGINATION_FILTER,
} from './mutation-types';
import { getAlertError } from '@/services/commonFunctions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    error: '',
    curentUserSort: 'reputation_change_week',
    paginationQuery: '?_page=1&_limit=20',
    userQuery: '',
    totalPages: 0,
  },
  mutations: {
    [UPDATE_USER_QUERY]: (state, payload) => {
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
  },
  actions: {
    [GET_USER]: async (context) => {
      userService
        .getUsers(`${context.state.paginationQuery}${context.state.userQuery}`)
        .then((response) => {
          context.state.totalPages = Math.ceil(
            response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE,
          );
          context.commit(SET_USER, response.data);
        })
        .catch((error) => {
          context.state.error = getAlertError(error);
          console.log(error);
        });
    },
    [UPDATE_USER_FILTER]: async (context, payload) => {
      context.commit(UPDATE_USER_QUERY, payload);
      context.dispatch(GET_USER);
    },
    [UPDATE_PAGINATION_FILTER]: async (context, payload) => {
      context.commit(SET_PAGINATION_FILTER, payload);
      context.dispatch(GET_USER);
    },
  },
  getters: {
    USERS: state => state.users,
  },
});
