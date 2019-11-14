<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="user.profile_image"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-html="user.display_name"></v-list-item-title>
      <v-list-item-subtitle v-html="subtitle"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { userFields } from '@/constants/fields'
export default {
  name: 'users-list-item',
  components: {},
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    subtitle: function () {
      const { curentUserSort } = this.$store.state
      const subtitle =
        curentUserSort === userFields.CREATION_DATE
          ? this.user.reputation
          : this.user[this.$store.state.curentUserSort]
      return `<p>${this.user.location ||
        ''} <span class='text--primary'> ${subtitle}</span></p>`
    }
  }
}
</script>
