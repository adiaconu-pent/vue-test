<template>
  <div>
    <v-tabs :value="currentTab" @change="updateTab($event)" background-color="deep-purple accent-4" class="elevation-2"
            dark>
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="filter in filters" :key="filter.value" :href="`#tab-${filter.value}`">
        {{filter.label}}
      </v-tab>

      <v-tab-item v-for="filter in filters" :key="filter.label" :value="'tab-' + filter.value">
        <v-card flat tile>
          <v-btn-toggle :value="selectedFilter" @change="updateFilter($event)" tile color="deep-purple accent-3"
                        group>
            <v-btn v-for="subFilter in filter.subLabels" :value="subFilter.value">
              {{subFilter.label}}
            </v-btn>
          </v-btn-toggle>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedFilter: '',
      currentTab: this.defaultTab
    }
  },
  props: {
    filters: Array,
    defaultTab: String
  },
  created () {
    this.selectedFilter = this.$store.state.curentUserSort
  },
  methods: {
    updateFilter ($event) {
      this.selectedFilter = $event
      this.$emit('updateParentFilter', {
        filter: this.selectedFilter,
        currentTab: this.currentTab
      })
    },
    updateTab ($event) {
      this.currentTab = $event
      this.$emit('updateParentSort', {
        page: 1,
        sort: $event
      })
      this.selectedFilter = this.$store.state.curentUserSort
    }
  }
}
</script>
