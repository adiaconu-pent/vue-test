<template>
  <v-app>
    <CustomHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import CustomHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: { CustomHeader }
}
</script>
