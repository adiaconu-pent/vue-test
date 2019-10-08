import userService from '@/services/api/users';
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants';
import { GET_USER, UPDATE_USER_FILTER, UPDATE_PAGINATION_FILTER } from './action-types';
import { SET_PAGINATION_FILTER, SET_USER, SET_USER_QUERY } from './mutation-types';
import { getAlertError } from '@/services/commonFunctions';

export default {
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
    context.commit(SET_USER_QUERY, payload);
    context.dispatch(GET_USER);
  },
  [UPDATE_PAGINATION_FILTER]: async (context, payload) => {
    context.commit(SET_PAGINATION_FILTER, payload);
    context.dispatch(GET_USER);
  },
};
