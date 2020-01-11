<template>
  <div class="questions">
    <component-layout title="Question" :error="error" :isLoading="isLoading">
      <div v-if="questions.questions.length">
        <custom-filter defaultTab="tab-score" @updateParentSort="updateSort" :filters="questionFilters" />
        <v-list three-line avatar>
          <QuestionsListItem v-for="question in questions.questions" :question="question" :key="question.id" />
        </v-list>
        <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
      </div>
    </component-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ComponentLayout from '@/components/componentLayout/ComponentLayout.vue'
import CustomFilter from '@/components/customFilter/CustomFilter.vue'
import QuestionsListItem from './questionsListItem/QuestionsListItem.vue'
import { questionFilters } from '@/constants/filters'
import { UPDATE_PAGIANTION_FILTER } from '@/store/action-types'

export default {
  name: 'questions-list',
  components: { ComponentLayout, CustomFilter, QuestionsListItem },
  data () {
    return {
      currentPage: 1,
      questionFilters
    }
  },
  computed: {
    ...mapState(['questions', 'error', 'totalPages', 'isLoading'])
  },
  methods: {
    ...mapActions('questions', ['GET_QUESTIONS', 'UPDATE_QUESTION_QUERY']),
    updateCurrentPage () {
      // this.$store.dispatch(UPDATE_PAGIANTION_FILTER, this.currentPage, {
      //   root: true
      // })
      this.GET_QUESTIONS()
    },
    updateSort (data) {
      const { sort } = data

      this.UPDATE_QUESTION_QUERY(`&_sort=${sort.split('tab-')[1]}`)
      this.updateCurrentPage()
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.updateCurrentPage()
      }
    }
  }
}
</script>
