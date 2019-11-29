import { shallowMount } from '@vue/test-utils'
import QuestionDetails from '../questionDetailsPage/QuestionDetails'

describe('QuestionDetails.vue', () => {
  test('render the user image', () => {
    const userData = {
      imageUrl: 'https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg',
      name: 'Ana',
      score: 10
    }

    const wrapper = shallowMount(QuestionDetails, {
      data: userData
    })
    expect(wrapper).toMatchSnapshot()
  })
})
