import userService from '@/services/api/users';
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants';
import { GET_USER, UPDATE_USER_FILTER } from './action-types';
import {
  SET_USER,
  SET_USER_QUERY,
  SET_TOTAL_PAGES,
  SET_ERROR,
  SET_IS_LOADING,
} from './mutation-types';
import { getAlertError } from '@/services/commonFunctions';

export default {
  [GET_USER]: async (context) => {
    context.commit(SET_IS_LOADING, true);
    userService
      .getUsers(`${context.state.paginationQuery}${context.state.userQuery}`)
      .then((response) => {
        const totalPages = Math.ceil(response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE);
        context.commit(SET_TOTAL_PAGES, totalPages);
        context.commit(SET_USER, response.data);
      })
      .catch((error) => {
        context.commit(SET_ERROR, getAlertError(error));
        console.log(error);
      })
      .then(() => context.commit(SET_IS_LOADING, false));
  },
  [UPDATE_USER_FILTER]: async (context, payload) => {
    context.commit(SET_USER_QUERY, payload);
    context.dispatch(GET_USER);
  },
};
