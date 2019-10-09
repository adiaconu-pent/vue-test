<template src="./template.html"></template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    error: String,
    isLoading: Boolean
  }
};
</script>
