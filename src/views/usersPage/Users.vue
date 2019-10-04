<template>
  <div class="users">
    <h1>This is the page wit users list.</h1>
  </div>
</template>

<script>
import userService from "@/services/users";

export default {
  name: "users",
  data() {
    return {
      loading: false,
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;
      userService.getUsers
        .then(response => {
          this.loading = false;
          this.users = response.data;
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    }
  }
};
</script>