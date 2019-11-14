<template src="./template.html"></template>
<style lang="scss" src='@/styles/questions.scss'></style>

<script>
import { getDateFromInt } from '@/services/commonFunctions'
import QuestionsListItemStatistics from './questionsListItemStatistics/QuestionsListItemStatistics.vue'
import QuestionBody from '@/components/questionBody/QuestionBody.vue'
import UserDetails from '@/components/userDetails/UserDetails.vue'
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  components: {
    QuestionsListItemStatistics,
    QuestionBody,
    UserDetails
  },
  methods: {
    getDateFromInt
  }
}
</script>
