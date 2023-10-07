<template>
    <div class="all">

        <div class="flex justify-center items-center">
            <ChevronLeftIcon class="h-10 w-10 text-[#e1fd86]" />
            <h1>This is a boilerplate</h1>
            <ChevronRightIcon class="h-10 w-10 text-[#e1fd86]" />
        </div>
        <p class="mt-8 text-lg text-center text-tertiaryLight">
            Eslint, Prettier, Hero Icons, Babel, Tailwind, Nuxt... <br>
            check the <u> <a href="https://github.com/enas-elm">github</a> </u> for more information !
        </p>
    </div>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

export default {
    name: 'Home',
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
};
</script>

s
