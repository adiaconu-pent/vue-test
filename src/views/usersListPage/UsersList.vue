<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import { mapState } from "vuex";
import UsersListItem from "./usersListItem/UsersListItem.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import userService from "@/services/api/users";
import userFilter from "@/constants/filters";
import { getAlertError } from "@/services/commonFunctions.js";
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from "@/constants/constants";
import { getFirstMothInt } from "@/services/commonFunctions";
import { SET_USER_SORT } from "@/store/mutation-types";
import {
  UPDATE_USER_FILTER,
  UPDATE_PAGINATION_FILTER,
  GET_USER
} from "@/store/action-types";

export default {
  name: "users-list",
  components: { UsersListItem, CustomFilter },
  data() {
    return {
      userFilter,
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["users", "error", "totalPages", "isLoading"])
  },
  methods: {
    updateCurrentPage(page) {
      this.currentPage = page;
      this.$store.dispatch(
        UPDATE_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`
      );
    },
    updateCurrentFilter({ filter, currentTab }) {
      let query = `&_sort=${filter}`;
      if (currentTab != "tab-reputation") {
        query += `&creation_date_gte=${getFirstMothInt()}`;
      }
      this.$store.commit(SET_USER_SORT, filter);
      this.$store.dispatch(UPDATE_USER_FILTER, query);
    }
  },
  created() {
    this.$store.dispatch(GET_USER);
  },
  watch: {
    currentPage: function() {
      this.updateCurrentPage(this.currentPage);
    }
  }
};
</script>
