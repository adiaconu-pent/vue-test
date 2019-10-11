import instance from './base';

const resource = '/tags';
export default {
  getTags: query => instance.get(`${resource}${query}&_order=desc`),
};
