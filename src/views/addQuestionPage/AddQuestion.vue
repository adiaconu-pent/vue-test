<template>
  <div>
    <ComponentLayout title="Add a new question" :error="error" :isLoading="isLoading" />
    <b-alert :show="success" variant="success">{{success}}</b-alert>
    <QuestionForm @submitQuestion="addQuestion" />
  </div>
</template>

<script>
import QuestionForm from '@/components/questionForm/QuestionForm.vue'
import ComponentLayout from '@/components/componentLayout/ComponentLayout.vue'
import questionService from '@/services/api/questions'
import { getDateInt } from '@/services/commonFunctions'
export default {
  data: function () {
    return {
      isLoading: false,
      success: '',
      error: ''
    }
  },
  computed: {
    owner () {
      return this.$store.state.owner
    }
  },
  components: { QuestionForm, ComponentLayout },
  methods: {
    addQuestion ({ body, title }) {
      const today = getDateInt(new Date())
      const newQuestion = {
        body,
        title,
        owner: this.owner,
        last_activity_date: today,
        creation_date: today,
        last_edit_date: today
      }
      this.isLoading = true
      this.success = ''
      questionService
        .postQuestion(newQuestion)
        .then(response => {
          this.success = 'Added with success'
        })
        .catch(error => {
          this.error = error
        })
        .then(() => (this.isLoading = false))
    }
  }
}
</script>
