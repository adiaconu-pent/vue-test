import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', required)
extend('minVal', {
  params: ['min'],
  validate (value, { min }) {
    return value.length >= min
  },
  message: 'The {_field_} must contain at least {min} characters'
})
