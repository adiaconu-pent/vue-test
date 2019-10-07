<template src="./template.html"></template>

<script>
export default {
  data() {
    return {
      selectedFilter: ""
    };
  },
  computed: {
    nestedFilter() {
      return this.filters.filter(el => el.subLabels);
    }
  },
  props: {
    filters: Array
  },
  created() {
    this.selectedFilter = this.$store.state.curentUserFilter;
  },
  watch: {
    selectedFilter: function() {
      this.$store.commit("changeUserFIlter", this.selectedFilter);
    }
  }
};
</script>
