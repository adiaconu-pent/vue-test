<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
export default {
  props: {
    votes: {
      type: Number,
      required: true,
      default: 0
    },
    answers: {
      type: Number,
      required: true,
      default: 0
    },
    views: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>
