<template src="./template.html"></template>

<script>
export default {
  name: "users-list-item",
  components: {},
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    subtitle: function() {
      return `<p>${this.user.location || ""} <span class='text--primary'> ${
        this.user.reputation_change_week
      }</span></p>`;
    }
  }
};
</script>