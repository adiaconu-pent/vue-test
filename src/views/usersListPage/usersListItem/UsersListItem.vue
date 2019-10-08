<template src="./template.html"></template>

<script>
import { userFields } from "@/constants/fields";
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
      const { curentUserSort } = this.$store.state;
      const subtitle =
        curentUserSort == userFields.CREATION_DATE
          ? this.user.reputation
          : this.user[this.$store.state.curentUserSort];
      return `<p>${this.user.location ||
        ""} <span class='text--primary'> ${subtitle}</span></p>`;
    }
  }
};
</script>