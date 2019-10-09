<template src="./template.html"></template>

<script>
import { GET_QUESTIONS } from "@/store/modules/questions/action-types";
import { mapState, mapActions } from "vuex";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";

export default {
  name: "questions-list",
  components: { ComponentLayout },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["questions", "error", "totalPages", "isLoading"])
  },
  methods: {
    ...mapActions("questions", ["GET_QUESTIONS"])
  },
  // methods: {
  //   updateCurrentPage(page) {
  //     this.currentPage = page;
  //   }
  // },
  created() {
    this.GET_QUESTIONS();
  }
  // watch: {
  //   currentPage: function() {
  //     this.$store.dispatch(
  //       "UPDATE_PAGINATION_FILTER",
  //       `?_page=${this.currentPage}&_limit=20`
  //     );
  //   }
  // }
};
</script>
