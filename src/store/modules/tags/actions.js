import tagService from '@/services/api/tags';
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from '@/constants/constants';
import { GET_TAGS, UPDATE_TAG_QUERY } from './action-types';
import { SET_TAGS, SET_TAG_QUERY } from './mutation-types';
import { getAlertError } from '@/services/commonFunctions';
import { SET_IS_LOADING, SET_TOTAL_PAGES, SET_ERROR } from '@/store/mutation-types';

export default {
  [GET_TAGS]: async ({ rootState, commit, state }) => {
    commit(SET_IS_LOADING, true, { root: true });
    tagService
      .getTags(`${rootState.paginationQuery}${state.tagsQuery}`)
      .then((response) => {
        const totalPages = Math.ceil(response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE);
        commit(SET_TOTAL_PAGES, totalPages, { root: true });
        commit(SET_TAGS, response.data);
      })
      .catch((error) => {
        commit(SET_ERROR, getAlertError(error), { root: true });
        console.log(error);
      })
      .then(() => commit(SET_IS_LOADING, false, { root: true }));
  },
  [UPDATE_TAG_QUERY]: (context, payload) => {
    context.commit(SET_TAG_QUERY, payload);
  },
};
