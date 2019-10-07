<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import userService from "@/services/api/users";
import UsersListItem from "./usersListItem/UsersListItem.vue";
import { getAlertError } from "@/services/commonFunctions.js";

export default {
  name: "users-list",
  components: { UsersListItem },
  data() {
    return {
      isLoading: false,
      users: [],
      currentPage: this.$route.query._page,
      error: ""
    };
  },
  created() {
    console.log(this.$store.state.user);
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.isLoading = true;
      userService
        .getUsers(this.currentPage)
        .then(response => {
          this.isLoading = false;
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