import instance from './base';

const resource = '/users';
export default {
  getUsers: page => instance.get(`${resource}?_page=${page}`),
};
