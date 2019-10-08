<template src="./template.html"></template>

<script>
import { BASE_SORT_QUERY } from "@/constants/constants";
import { getFirstMothInt } from "@/services/commonFunctions";
import { mapState } from "vuex";
import { SET_USER_SORT } from "@/store/mutation-types";
export default {
  data() {
    return {
      selectedFilter: "",
      currentTab: "tab-reputation",
      curentQuery: ""
    };
  },
  computed: {
    nestedFilters() {
      return this.filters.filter(el => el.subLabels);
    },
    ...mapState(["userQuery", "paginationQuery"])
  },
  props: {
    filters: Array
  },
  created() {
    this.selectedFilter = this.$store.state.curentUserSort;
  },
  watch: {
    selectedFilter: function() {
      let query = `&_sort=${this.selectedFilter}`;
      if (this.currentTab != "tab-reputation") {
        query += `&creation_date_gte=${getFirstMothInt()}`;
      }
      this.$store.commit(SET_USER_SORT, this.selectedFilter);
      this.$store.dispatch("UPDATE_USER_FILTER", query);
    }
  },
  methods: {
    updateFilter($event) {
      this.selectedFilter = $event;
    },
    updateTab($event) {
      this.$emit("updateUserPage", 1);
      this.currentTab = $event;
    }
  }
};
</script>
