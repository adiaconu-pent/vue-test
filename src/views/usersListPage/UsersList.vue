<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import userService from "@/services/api/users";
import UsersListItem from "./usersListItem/UsersListItem.vue";
import { getAlertError } from "@/services/commonFunctions.js";
import { HEADEER_TOTAL_COUNT, ITEMS_PER_PAGE } from "@/constants/constants";

export default {
  name: "users-list",
  components: { UsersListItem },
  data() {
    return {
      isLoading: false,
      users: [],
      currentPage: 1,
      totalPages: 0,
      error: ""
    };
  },
  watch: {
    currentPage: function() {
      this.getUsers();
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.isLoading = true;
      userService
        .getUsers(this.currentPage)
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
    }
  }
};
</script>