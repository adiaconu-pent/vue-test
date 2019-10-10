<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>