<template>
  <ValidationObserver ref="formObserver" v-slot="{ passes }">
    <v-form @submit.prevent="passes(submit)" class="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <ValidationProvider name="Question title" rules="required|minVal:10" v-slot="{ errors }">
              <div class="field">
                <v-text-field solo v-model="title" label="Title" placeholder="Title"></v-text-field>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider name="Question body" rules="required|minVal:20" v-slot="{ errors }">
              <div class="field">
                <v-textarea solo v-model="body" label="Type your question"></v-textarea>
                </v-text-field>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <v-btn type="submit" small>Post</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </ValidationObserver>
</template>

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
