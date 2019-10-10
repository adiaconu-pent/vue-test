<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
import { getDateFromInt } from "@/services/commonFunctions";
import QuestionsListItemUserData from "./questionsListItemUserData/QuestionsListItemUserData.vue";
import QuestionsListItemStatistics from "./questionsListItemStatistics/QuestionsListItemStatistics.vue";
import QuestionBody from "@/components/questionBody/QuestionBody.vue";
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  components: {
    QuestionsListItemUserData,
    QuestionsListItemStatistics,
    QuestionBody
  },
  methods: {
    getDateFromInt
  }
};
</script>