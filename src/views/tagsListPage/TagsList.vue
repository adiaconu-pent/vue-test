<template src="./template.html"></template>

<script>
import { mapState, mapActions } from "vuex";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import { tagsFilters } from "@/constants/filters";
import { SET_PAGINATION_FILTER } from "@/store/mutation-types";

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
      this.$store.commit(
        SET_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`,
        { root: true }
      );
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