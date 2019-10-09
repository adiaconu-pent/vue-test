<template src="./template.html"></template>

<script>
import { GET_QUESTIONS } from "@/store/modules/questions/action-types";
import { SET_QUESTION_QUERY } from "@/store/modules/questions/mutation-types";
import { mapState, mapActions, mapMutations } from "vuex";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import { questionFilters } from "@/constants/filters";
import { SET_PAGINATION_FILTER } from "@/store/mutation-types";

export default {
  name: "questions-list",
  components: { ComponentLayout, CustomFilter },
  data() {
    return {
      currentPage: 1,
      questionFilters
    };
  },
  computed: {
    ...mapState(["questions", "error", "totalPages", "isLoading"])
  },
  methods: {
    ...mapActions("questions", ["GET_QUESTIONS"]),
    ...mapMutations("questions", ["SET_QUESTION_QUERY"]),
    updateCurrentPage() {
      this.$store.commit(
        SET_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`,
        { root: true }
      );
      this.GET_QUESTIONS();
    },
    updateSort(data) {
      const { page, sort } = data;
      if (this.currentPage !== page) this.currentPage = page;
      this.$store.commit(
        SET_PAGINATION_FILTER,
        `?_page=${this.currentPage}&_limit=20`,
        { root: true }
      );
      this.SET_QUESTION_QUERY(`&_sort=${sort.split("tab-")[1]}`);
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.updateCurrentPage();
      }
    }
  }
};
</script>
