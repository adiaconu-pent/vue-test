import { SET_QUESTIONS } from './mutation-types';

export default {
  [SET_QUESTIONS]: (state, payload) => {
    state.questions = payload;
  },
};
