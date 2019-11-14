<template>
  <div>
    <div>
      <p class="text-primary">{{votes}}</p>
      <p class="text-second"> votes</p>
    </div>
    <div>
      <p class="text-primary">{{answers}}</p>
      <p class="text-second"> answers</p>
    </div>
    <p class="text-second"><span>{{views}}</span><span> views</span></p>
  </div>
</template>

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

<style lang="scss">
  .question-card {
    .statistic-data {
      text-align: center;
      padding-top: 15px;
      color: #6a737c;
    }
  }
</style>
