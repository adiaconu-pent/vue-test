import { SET_TAGS, SET_TAG_QUERY } from './mutation-types';

export default {
  [SET_TAGS]: (state, payload) => {
    state.tags = payload;
  },
  [SET_TAG_QUERY]: (state, payload) => {
    state.tagsQuery = payload;
  },
};
