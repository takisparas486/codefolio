import { shallowMount } from '@vue/test-utils'
import about from '@/pages/about.vue'

describe('about', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(about, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },
          about: {},
          socialIcons: {
            icons: [
              { name: 'discord', url: '#' },
              { name: 'twitter', url: '#' },
              {
                name: 'facebook',
                url: 'https://www.facebook.com/takis.paras.7',
              },
            ],
          },
        }
      },
      stubs: ['Icon', 'nuxt-content'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
