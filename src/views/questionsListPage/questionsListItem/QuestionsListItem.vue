<template>
  <v-card max-height="250" class="mx-auto question-card">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="2" class="statistic-data">
          <QuestionsListItemStatistics :votes="question.score" :answers="question.answer_count"
                                       :views="question.view_count" />
        </v-col>
        <v-col cols="12" sm="8">
          <QuestionBody :title="question.title" :navigate="`/questions/${question.id}`" :body="question.body"
                        :tags="question.tags" />
        </v-col>
        <v-col cols="12" sm="2">
          <div>
            <p class="text-second">asked on {{getDateFromInt(question.creation_date)}}</p>
          </div>
          <UserDetails :imageUrl="question.owner.profile_image" :name="question.owner.display_name"
                       :score="question.owner.reputation" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

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

<style lang="scss" src='@/styles/questions.scss'></style>
