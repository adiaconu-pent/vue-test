import instance from './base';

const resource = '/questions';
export default {
  getQuestions: query => instance.get(`${resource}${query}&_order=desc`),
};