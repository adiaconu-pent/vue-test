import UserDetails from '../userDetails/UserDetails'
import { shallowMount } from '@vue/test-utils'

const mountUserDetails = propsData => shallowMount(UserDetails, {
  propsData
})

describe('UserDetails.vue', () => {
  test('render the user image', () => {
    const userData = {
      imageUrl: 'https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg',
      name: 'Ana',
      score: 10
    }
    const wrapper = mountUserDetails(userData)
    expect(wrapper.find('img').attributes().src).toBe(userData.imageUrl)
    expect(wrapper.find('img').attributes().alt).toBe(userData.name)
    expect(wrapper.find('p').text()).toBe(userData.name)
  })
  test('render just name and score', () => {
    const userData = {
      imageUrl: 'https://p7.hiclipart.com/preview/282/256/961/user-profile-avatar-computer-icons-google-account.jpg',
      name: 'Ana',
      score: 10
    }
    const wrapper = mountUserDetails(userData)
    expect(wrapper.findAll('p')).toHaveLength(2)
  })
})
