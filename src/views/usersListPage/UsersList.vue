<template>
  <div class="users">
    <component-layout title="Users" :error="error" :isLoading="isLoading">
      <div v-if="users.length">
        <v-text-field v-model="searchedText" placeholder="Search by name">
        </v-text-field>
        <custom-filter defaultTab="tab-reputation" @updateParentSort="updateCurrentPage"
                       @updateParentFilter="updateCurrentFilter" :filters="userFilter" />
        <v-list three-line avatar>
          <v-container>
            <v-row>
              <v-col cols="12" md="3" sm="4" v-for="user in users" :key="user.id">
                <users-list-item :user="user" />
              </v-col>
            </v-row>
          </v-container>
        </v-list>
        <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
      </div>
    </component-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import UsersListItem from './usersListItem/UsersListItem.vue'
import CustomFilter from '@/components/customFilter/CustomFilter.vue'
import ComponentLayout from '@/components/componentLayout/ComponentLayout.vue'
import { userFilter } from '@/constants/filters'
import {
  getFirstMothInt,
  buildSortLikeQuery,
  buildGraterThenQuery
} from '@/services/commonFunctions'
import {
  UPDATE_USER_FILTER,
  GET_USER,
  UPDATE_USER_SORT,
  UPDATE_PAGIANTION_FILTER
} from '@/store/action-types'
import { FETCH_USERS } from '../../store/action-types'

export default {
  name: 'users-list',
  components: { UsersListItem, CustomFilter, ComponentLayout },
  data () {
    return {
      userFilter,
      currentPage: 1,
      searchedText: ''
    }
  },
  computed: {
    ...mapState([
      'error',
      'totalPages',
      'isLoading',
      'curentUserSort',
      'userQuery'
    ]),
    ...mapGetters({
      users: 'users/getUsers'
    })
  },
  methods: {
    ...mapActions({
      getUsers: `'users/'${FETCH_USERS}`,
      updatePagination: `general/${UPDATE_PAGIANTION_FILTER}`
    }),
    updateCurrentPage (data) {
      const { page } = data
      this.currentPage = page
      // this.updatePagination(this.currentPage)
      this.getUsers()
    },
    updateCurrentFilter ({ filter, currentTab }) {
      let query = buildSortLikeQuery(filter, 'display_name', this.searchedText)
      if (currentTab !== 'tab-reputation') {
        query += buildGraterThenQuery('creation_date', getFirstMothInt())
      }
      // this.$store.dispatch(UPDATE_USER_SORT, filter)
      // this.$store.dispatch(UPDATE_USER_FILTER, query)
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.updateCurrentPage({ page: this.currentPage })
      }
    },
    searchedText: function () {
      this.$store.dispatch(
        UPDATE_USER_FILTER,
        buildSortLikeQuery(
          this.curentUserSort,
          'display_name',
          this.searchedText
        )
      )
    }
  }
}
</script>
