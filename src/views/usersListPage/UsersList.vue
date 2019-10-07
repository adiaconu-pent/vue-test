<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import UsersListItem from "./usersListItem/UsersListItem.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import userService from "@/services/api/users";
import getAlertError from "@/services/commonFunctions.js";
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from "@/constants/constants";

export default {
  name: "users-list",
  components: { UsersListItem, CustomFilter },
  data() {
    return {
      isLoading: false,
      users: [],
      currentPage: 1,
      totalPages: 0,
      error: "",
      selectedFilter: ""
    };
  },
  watch: {
    currentPage: function() {
      this.getUsers();
    },
    selectedFilter: function() {
      this.getUsers(this.selectedFilter);
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers(sort) {
      this.isLoading = true;
      userService
        .getUsers(this.currentPage, sort)
        .then(response => {
          this.isLoading = false;
          this.totalPages = Math.ceil(
            response.headers[HEADEER_TOTAL_COUNT] / ITEMS_PER_PAGE
          );
          this.users = response.data;
        })
        .catch(error => {
          this.isLoading = false;
          this.error = getAlertError(error);
          console.log(error);
        });
    },
    selectFilter(filter) {
      this.selectedFilter = filter;
    }
  }
};
</script>
