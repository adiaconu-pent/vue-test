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

export default {
  name: "users-list",
  components: { UsersListItem, CustomFilter },
  data() {
    return {
      isLoading: false,
      userFilter,
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["users", "curentUserSort", "error", "totalPages"])
  },
  methods: {
    updateCurrentPage(page) {
      this.currentPage = page;
    }
  },
  created() {
    this.$store.dispatch("GET_USER");
  },
  watch: {
    currentPage: function() {
      this.$store.dispatch(
        "UPDATE_PAGINATION_FILTER",
        `?_page=${this.currentPage}&_limit=20`
      );
    }
  }
};
</script>
