<template src="./template.html"></template>
<style lang="scss" src='./style.scss'></style>

<script>
import { getDateFromInt } from "@/services/commonFunctions";
export default {
  props: {
    votes: {
      type: Number,
      required: true
    },
    answers: {
      type: Number,
      required: true
    },
    views: {
      type: Number,
      required: true
    }
  }
};
</script>