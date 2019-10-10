<template src="./template.html"></template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  data() {
    return {
      valid: false,
      body: ""
    };
  },
  components: { ValidationObserver, ValidationProvider },
  methods: {
    submit() {
      console.log("Submitting to server!");
    }
  }
};
</script>