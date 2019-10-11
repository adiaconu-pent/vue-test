<template src="./template.html"></template>

<script>
import { mapState, mapActions } from "vuex";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import { tagsFilters } from "@/constants/filters";
import { UPDATE_PAGIANTION_FILTER } from "@/store/action-types";

export default {
  components: { ComponentLayout, CustomFilter },
  data() {
    return {
      currentPage: 1,
      tagsFilters,
      searchedText: ""
    };
  },
  computed: {
    ...mapState(["tags", "error", "totalPages", "isLoading"])
  },
  methods: {
    ...mapActions("tags", ["GET_TAGS", "UPDATE_TAG_QUERY", "UPDATE_TAG_SORT"]),
    updateCurrentPage() {
      this.$store.dispatch(UPDATE_PAGIANTION_FILTER, this.currentPage, {
        root: true
      });
      this.GET_TAGS();
    },
    updateSort(data) {
      const { page, sort } = data;
      const currentSort = sort.split("tab-")[1];
      this.UPDATE_TAG_QUERY(
        `&_sort=${currentSort}&name_like=${this.searchedText}`
      );
      this.UPDATE_TAG_SORT(currentSort);
      this.updateCurrentPage();
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.updateCurrentPage();
      }
    },
    searchedText: function() {
      this.UPDATE_TAG_QUERY(
        `&sort=${this.tags.tagsSort}&name_like=${this.searchedText}`
      );
      this.updateCurrentPage();
    }
  }
};
</script>