<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
import questionService from "@/services/api/questions";
import { getAlertError } from "@/services/commonFunctions";
import ComponentLayout from "@/components/componentLayout/ComponentLayout.vue";
import QuestionBody from "@/components/questionBody/QuestionBody.vue";
import { getDateFromInt } from "@/services/commonFunctions";
export default {
  data() {
    return {
      isLoading: false,
      data: null,
      error: ""
    };
  },
  components: { ComponentLayout, QuestionBody },
  methods: {
    async getQuestionDetails() {
      this.isLoading = true;
      questionService
        .getQuestionDetails(this.$route.params.id)
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          this.error = getAlertError(error);
        })
        .then(() => (this.isLoading = false));
    },
    getDateFromInt
  },
  created() {
    this.getQuestionDetails();
  }
};
</script>