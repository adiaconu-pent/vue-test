<template src="./template.html"></template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data () {
    return {
      valid: false,
      body: '',
      title: ''
    }
  },
  components: { ValidationObserver, ValidationProvider },
  methods: {
    submit () {
      this.$emit('submitQuestion', { body: this.body, title: this.title })
      this.resetForm()
    },
    resetForm () {
      this.$refs.formObserver.reset()
      this.body = ''
      this.title = ''
    }
  }
}
</script>
