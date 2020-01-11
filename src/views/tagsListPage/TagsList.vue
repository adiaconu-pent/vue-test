<template>
  <div class="questions">
    <component-layout title="Tags" :error="error" :isLoading="isLoading">
      <v-text-field v-model="searchedText" placeholder="Search by name">
      </v-text-field>
      <custom-filter defaultTab="tab-count" @updateParentSort="updateSort" :filters="tagsFilters" />
      <div v-if="tags.tags.length">
        <v-list three-line avatar>
          <v-row>
            <v-col cols="12" md="3" sm="4" v-for="tag in tags.tags" :key="tag.name">
              <v-list-item>
                <v-list-item-content>
                  <v-row no-gutters align="center">
                    <v-chip>{{tag.name}} </v-chip><span class="text-second"> × {{tag.count}}</span>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
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
import { tagsFilters } from '@/constants/filters'
import { UPDATE_PAGIANTION_FILTER } from '@/store/action-types'

export default {
  components: { ComponentLayout, CustomFilter },
  data () {
    return {
      currentPage: 1,
      tagsFilters,
      searchedText: ''
    }
  },
  computed: {
    ...mapState(['tags', 'error', 'totalPages', 'isLoading'])
  },
  methods: {
    ...mapActions('tags', ['GET_TAGS', 'UPDATE_TAG_QUERY', 'UPDATE_TAG_SORT']),
    updateCurrentPage () {
      // this.$store.dispatch(UPDATE_PAGIANTION_FILTER, this.currentPage, {
      //   root: true
      // })
      this.GET_TAGS()
    },
    updateSort (data) {
      const { sort } = data
      const currentSort = sort.split('tab-')[1]
      this.UPDATE_TAG_QUERY({ currentSort, searchedText: this.searchedText })
      this.UPDATE_TAG_SORT(currentSort)
      this.updateCurrentPage()
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.updateCurrentPage()
      }
    },
    searchedText: function () {
      this.UPDATE_TAG_QUERY({
        currentSort: this.tags.tagsSort,
        searchedText: this.searchedText
      })
      this.updateCurrentPage()
    }
  }
}
</script>

<style lang="scss" src="@/styles/tags.scss"></style>
