<template>
  <div class="all h-fit absolute top-0 bottom-0 left-0 right-0 m-auto">
    <div class="flex justify-center items-center">
      <ChevronLeftIcon class="w-20 text-lightYellow" />
      <h1>THIS IS A BOILERPLATE</h1>
      <ChevronRightIcon class="w-20 text-lightYellow" />
    </div>
    <p class="mt-8 text-lg text-center text-tertiaryLight">
      Nuxt, Eslint, Prettier, Hero Icons, Babel, Tailwind, Jest, Husky and
      Storybook... <br />
      check the
      <u> <a href="https://github.com/enas-elm/Nuxt-Boilerplate">github</a> </u>
      for more information !
    </p>

    <MyComponent />
  </div>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'MyPage',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
}
</script>
