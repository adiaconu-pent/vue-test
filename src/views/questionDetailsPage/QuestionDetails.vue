<template>
  <v-card>
    <ComponentLayout :error="error" :isLoading="isLoading" />
    <div v-if="data">
      <p v-html="data.title" class="display-1"></p>
      <p>Asked <span>{{getDateFromInt(data.creation_date)}}</span> Active
        <span>{{getDateFromInt(data.last_activity_date)}}</span> Viewed <span>{{data.view_count || 0}} times</span>
      </p>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="2">
          <p>{{data.score}}</p>
        </v-col>
        <v-col cols="12" md="10">
          <QuestionBody :title="data.title" :body="data.body" :tags="data.tags" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <UserDetails :imageUrl="data.owner.profile_image" :name="data.owner.display_name"
                       :score="data.owner.reputation" />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

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
