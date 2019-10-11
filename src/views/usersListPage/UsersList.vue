<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
import { mapState } from "vuex";
import UsersListItem from "./usersListItem/UsersListItem.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import { userFilter } from "@/constants/filters";
import {
  getFirstMothInt,
  buildSortLikeQuery,
  buildGraterThenQuery
} from "@/services/commonFunctions";
import {
  UPDATE_USER_FILTER,
  GET_USER,
  UPDATE_USER_SORT,
  UPDATE_PAGIANTION_FILTER
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
    ...mapState([
      "users",
      "error",
      "totalPages",
      "isLoading",
      "curentUserSort",
      "userQuery"
    ])
  },
  methods: {
    updateCurrentPage(data) {
      const { page } = data;
      this.currentPage = page;
      this.$store.dispatch(UPDATE_PAGIANTION_FILTER, this.currentPage);
      this.$store.dispatch(GET_USER);
    },
    updateCurrentFilter({ filter, currentTab }) {
      let query = buildSortLikeQuery(filter, "display_name", this.searchedText);
      if (currentTab != "tab-reputation") {
        query += buildGraterThenQuery("creation_date", getFirstMothInt());
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
        buildSortLikeQuery(
          this.curentUserSort,
          "display_name",
          this.searchedText
        )
      );
    }
  }
};
</script>
