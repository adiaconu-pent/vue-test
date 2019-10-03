<template>
  <div class="user-details">
    <h1>This is the page for user {{$route.params.id}}.</h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'user-details',
};
</script>