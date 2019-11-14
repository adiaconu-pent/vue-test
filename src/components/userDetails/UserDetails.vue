<template src="./template.html"></template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>
