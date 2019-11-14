<template>
  <v-row no-gutters class="user-data">
    <v-col cols="12" sm="4">
      <v-avatar tile>
        <img :src="imageUrl" :alt="name">
      </v-avatar>
    </v-col>
    <v-col cols="12" sm="8">
      <p class="text-second">{{name}}</p>
      <p class="text-second">{{score}}</p>
    </v-col>
  </v-row>
</template>

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
