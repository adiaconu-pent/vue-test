<template>
  <div>
    <p v-html="title" class="display-1 text-center margin-top" />
    <b-alert :show="!isLoading && error !== ''" variant="danger">{{error}}</b-alert>
    <div class="text-center">
      <b-spinner variant="success" label="Spinning" v-if="isLoading" />
    </div>
    <slot/>
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
