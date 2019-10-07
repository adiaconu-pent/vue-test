import instance from './base';
import { ITEMS_PER_PAGE } from '@/constants/constants';

const resource = '/users';
export default {
  getUsers: (page, sort) => instance.get(`${resource}?_page=${page}&_limit=${ITEMS_PER_PAGE}&_sort=${sort}&_order=desc`),
};
