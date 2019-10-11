<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import { mapState } from "vuex";
import UsersListItem from "./usersListItem/UsersListItem.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import userService from "@/services/api/users";
import { userFilter } from "@/constants/filters";
import { getAlertError } from "@/services/commonFunctions.js";
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from "@/constants/constants";
import { getFirstMothInt } from "@/services/commonFunctions";
import { SET_USER_SORT, SET_PAGINATION_FILTER } from "@/store/mutation-types";
import {
  UPDATE_USER_FILTER,
  GET_USER,
  UPDATE_USER_SORT
} from "@/store/action-types";

export default {
  name: "users-list",
  components: { UsersListItem, CustomFilter, ComponentLayout },
  data() {
    return {
      userFilter,
      currentPage: 1,
      searchedText: ""
    };
  },
  computed: {
    ...mapState(["users", "error", "totalPages", "isLoading", "curentUserSort"])
  },
  methods: {
    updateCurrentPage(data) {
      const { page } = data;
      if (this.currentPage !== page) this.currentPage = page;
      this.$store.commit(
        SET_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`
      );
      this.$store.dispatch(GET_USER);
    },
    updateCurrentFilter({ filter, currentTab }) {
      let query = `&_sort=${filter}&display_name_like=${this.searchedText}`;
      if (currentTab != "tab-reputation") {
        query += `&creation_date_gte=${getFirstMothInt()}`;
      }
      this.$store.dispatch(UPDATE_USER_SORT, filter);
      this.$store.dispatch(UPDATE_USER_FILTER, query);
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.updateCurrentPage({ page: this.currentPage });
      }
    },
    searchedText: function() {
      this.$store.dispatch(
        UPDATE_USER_FILTER,
        `&sort=${this.curentUserSort}&display_name_like=${this.searchedText}`
      );
      this.updateCurrentPage({ page: this.currentPage });
    }
  }
};
</script>
