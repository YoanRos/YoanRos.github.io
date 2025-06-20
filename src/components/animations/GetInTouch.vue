<script setup>
import IconGitHub from '~icons/mdi/github'
import IconMastodon from '~icons/mdi/mastodon'

import IconLinkedin from '~icons/mdi/linkedin'
</script>

<template>
  <div class="relative h-screen overflow-hidden bg-white">
    <div class="flex whitespace-nowrap animate-marquee absolute">
      <span class="text-light-pink text-[40rem] xl:text-[50rem] font-mrsSaint pr-16">
        GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH
      </span>
      <span class="text-light-pink text-[40rem] xl:text-[50rem] font-mrsSaint pr-16">
        GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH
      </span>
    </div>

    <div>
      <img src="/arc2.svg" alt="arc" class="absolute bottom-0 w-full" />
      <div class="z-10 absolute bottom-1/6 flex justify-center items-center w-full flex-col gap-4">
        <span class="font-bold font-radiate-regular text-2xl text-white">
          If you want to reach me out please send me an email
        </span>
        <a href="mailto:yoanroszak@gmail.com" class="text-2xl text-white"> yoanroszak@gmail.com </a>
        <span class="font-bold font-radiate-regular text-2xl text-white"> Or lets be social </span>

        <div class="flex flex-wrap gap-3 justify-end">
          <a
            href="https://www.linkedin.com/in/yoan-roszak/"
            target="_blank"
            class="bg-light-purple p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconLinkedin class="w-6 h-6 md:w-10 md:h-10" />
          </a>
          <a
            href="https://github.com/YoanRos"
            target="_blank"
            class="bg-light-purple p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconGitHub class="w-6 h-6 md:w-10 md:h-10" />
          </a>

          <a
            href="https://mastodon.social/@yoros"
            target="_blank"
            class="bg-light-purple p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconMastodon class="w-6 h-6 md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: scroll-left 100s linear infinite;
}
</style>
