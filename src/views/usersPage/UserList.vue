<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import userService from "@/services/users";
import UserListItem from "./userListItem/UserListItem.vue";

export default {
  name: "user-list",
  components: { UserListItem },
  data() {
    return {
      isLoading: false,
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.isLoading = true;
      userService.getUsers
        .then(response => {
          this.isLoading = false;
          this.users = response.data;
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
    }
  }
};
</script>