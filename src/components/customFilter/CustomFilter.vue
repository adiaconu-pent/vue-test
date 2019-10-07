<template src="./template.html"></template>

<script>
import userFilter from "@/constants/filters";

export default {
  data() {
    return {
      userFilter,
      selectedFilter: ""
    };
  },
  watch: {
    selectedFilter: function() {
      this.$emit("updateParentFilter", this.selectedFilter);
    }
  }
};
</script>
