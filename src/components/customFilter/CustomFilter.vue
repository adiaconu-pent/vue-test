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
      currentTab: "tab-reputation"
    };
  },
  props: {
    filters: Array
  },
  created() {
    this.selectedFilter = this.$store.state.curentUserSort;
  },
  methods: {
    updateFilter($event) {
      this.selectedFilter = $event;
      this.$emit("updateParentFilter", {
        filter: this.selectedFilter,
        currentTab: this.currentTab
      });
    },
    updateTab($event) {
      this.$emit("updateParentPage", 1);
      this.currentTab = $event;
    }
  }
};
</script>
