<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <section class="about">
              <div class="about__heading my-3 text-center">
                <h1>About</h1>
              </div>
              <div class="p-3">
                <nuxt-content :document="about" />
              </div>
              <div class="about__links">
                <a
                  v-for="(icon, i) in socialIcons.icons"
                  :key="icon.name + i"
                  class="about__link"
                  :href="icon.url"
                  target="_blank"
                >
                  <Icon class="about__icon" :name="icon.name" />
                </a>
              </div>
              <div
                class="
                  my-3
                  text-nowrap
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <Button
                  v-if="resumeUrl"
                  primary-glow
                  :link="resumeUrl"
                  class="me-1"
                  download=""
                  >Resume
                  <Icon class="ms-1" name="download" />
                </Button>
                <Button outline-primary nuxt-link="/contact">Contact</Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      resumeUrl: 'https://file.io/Z5SYnFXH0F3P',
    }
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const navbar = await $content('navbar').fetch()
    const socialIcons = await $content('social-icons').fetch()
    return {
      about,
      navbar,
      socialIcons,
    }
  },
  head: {
    title: 'About - Codefolio',
  },
  methods: {
    downloadResume() {
      window.open(this.resumeUrl, '_blank')
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/scss/abstracts';

.about {
  padding: pxToRem(10) 0;

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: pxToRem(8);
    padding: pxToRem(20);
    z-index: 200;
  }

  &__link {
    backface-visibility: hidden;
    transform: translateZ(0);
    display: inline-flex;
    color: $gray-7;
    transition: all 0.2s ease;

    @include hoctive {
      transform: scale(1.2);
      color: $gray-8;
    }
  }

  &__icon {
    width: 2em !important;
    height: 2em !important;
  }
}
</style>
