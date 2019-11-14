<template src="./template.html"></template>

<script>
export default {
  data () {
    return {
      selectedFilter: '',
      currentTab: this.defaultTab
    }
  },
  props: {
    filters: Array,
    defaultTab: String
  },
  created () {
    this.selectedFilter = this.$store.state.curentUserSort
  },
  methods: {
    updateFilter ($event) {
      this.selectedFilter = $event
      this.$emit('updateParentFilter', {
        filter: this.selectedFilter,
        currentTab: this.currentTab
      })
    },
    updateTab ($event) {
      this.currentTab = $event
      this.$emit('updateParentSort', {
        page: 1,
        sort: $event
      })
      this.selectedFilter = this.$store.state.curentUserSort
    }
  }
}
</script>
