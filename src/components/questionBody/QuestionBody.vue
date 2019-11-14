<template>
  <div>
    <v-card-title v-if="navigate">
      <router-link class="question-title" v-html="title" :to="{ path: `${navigate}` }"></router-link>
    </v-card-title>
    <v-card-text v-html="body" class="question-body"></v-card-text>
    <v-chip v-for="tag in tags" :key="tag">{{tag}}</v-chip>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    tags: Array,
    navigate: String
  }
}
</script>
