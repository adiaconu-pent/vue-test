<template>
  <div>
    <p v-html="title" class="display-1 text-center margin-top"></p>
    <v-alert v-if="error" type="error">{{error}}</v-alert>
    <v-text-field v-if="isLoading" color="success" loading disabled></v-text-field>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    error: String,
    isLoading: Boolean
  }
}
</script>
