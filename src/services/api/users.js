import instance from './base'

const resource = '/users'
export default {
  getUsers: query => instance.get(`${resource}${query}&_order=desc`)
}
