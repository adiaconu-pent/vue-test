import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import tags from './modules/tags'
import users from './modules/users'
import general from './modules/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { questions, tags, users, general }
})
