<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
import { GET_QUESTIONS } from "@/store/modules/questions/action-types";
import { SET_QUESTION_QUERY } from "@/store/modules/questions/mutation-types";
import { mapState, mapActions, mapMutations } from "vuex";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import CustomFilter from "@/components/customFilter/CustomFilter.vue";
import QuestionsListItem from "./questionsListItem/QuestionsListItem.vue";
import { questionFilters } from "@/constants/filters";
import { UPDATE_PAGIANTION_FILTER } from "@/store/action-types";

export default {
  name: "questions-list",
  components: { ComponentLayout, CustomFilter, QuestionsListItem },
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
    ...mapActions("questions", ["GET_QUESTIONS", "UPDATE_QUESTION_QUERY"]),
    updateCurrentPage() {
      this.$store.dispatch(UPDATE_PAGIANTION_FILTER, this.currentPage, {
        root: true
      });
      this.GET_QUESTIONS();
    },
    updateSort(data) {
      const { page, sort } = data;

      this.UPDATE_QUESTION_QUERY(`&_sort=${sort.split("tab-")[1]}`);
      this.updateCurrentPage();
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
