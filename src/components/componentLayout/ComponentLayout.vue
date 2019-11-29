<template>
  <div>
    <p v-html="title" class="display-1 text-center margin-top"></p>
    <b-alert :show="!isLoading" variant="danger">{{error}}</b-alert>
    <div class="text-center">
      <b-spinner variant="success" label="Spinning" v-if="isLoading"></b-spinner>
    </div>
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
