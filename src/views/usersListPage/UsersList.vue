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
import { UPDATE_USER_FILTER, GET_USER } from "@/store/action-types";

export default {
  name: "users-list",
  components: { UsersListItem, CustomFilter, ComponentLayout },
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
    updateCurrentPage(data) {
      this.$store.commit(
        SET_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`
      );
      this.$store.dispatch(GET_USER);
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
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.updateCurrentPage({ page: this.currentPage });
      }
    }
  }
};
</script>
