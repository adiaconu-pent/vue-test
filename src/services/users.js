import instance from './base';

const resource = '/users';
export default {
  getUsers: instance.get(`${resource}`),
};
