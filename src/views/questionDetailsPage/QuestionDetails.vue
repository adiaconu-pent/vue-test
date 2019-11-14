<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
import questionService from '@/services/api/questions'
import { getAlertError, getDateFromInt } from '@/services/commonFunctions'
import ComponentLayout from '@/components/componentLayout/ComponentLayout.vue'
import QuestionBody from '@/components/questionBody/QuestionBody.vue'
import UserDetails from '@/components/userDetails/UserDetails.vue'

export default {
  data () {
    return {
      isLoading: false,
      data: null,
      error: ''
    }
  },
  components: { ComponentLayout, QuestionBody, UserDetails },
  methods: {
    async getQuestionDetails () {
      this.isLoading = true
      questionService
        .getQuestionDetails(this.$route.params.id)
        .then(response => {
          this.data = response.data
        })
        .catch(error => {
          this.error = getAlertError(error)
        })
        .then(() => (this.isLoading = false))
    },
    getDateFromInt
  },
  created () {
    this.getQuestionDetails()
  }
}
</script>
