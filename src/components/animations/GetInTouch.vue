<script setup>
import IconGitHub from '~icons/mdi/github'
import IconMastodon from '~icons/mdi/mastodon'
import IconLinkedin from '~icons/mdi/linkedin'
</script>

<template>
  
    <div class="h-full whitespace-nowrap animate-marquee absolute bottom-0">
      <span
        class="text-light-pink text-[20rem] cursor-default select-none md:text-[40rem] xl:text-[50rem] font-mrsSaint pr-8 md:pr-16"
      >
        GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH
      </span>
      <span
        class="text-light-pink text-[20rem] cursor-default select-none md:text-[40rem] xl:text-[50rem] font-mrsSaint pr-8 md:pr-16"
      >
        GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH
      </span>
    </div>

    <div>
      <img src="/arc2.svg" alt="arc" class="absolute xl:-bottom-16 bottom-4 md:bottom-0 w-full" />
      <div
        class="z-10 absolute bottom-0 md:bottom-1 xl:bottom-3 2xl:bottom-1/12 flex justify-center items-center w-full flex-col gap-2 md:gap-4"
      >
        <span class="font-bold font-radiate-regular text-lg md:text-2xl text-white text-center">
          If you want to reach me out please send me an email
        </span>
        <a href="mailto:yoanroszak@gmail.com" class="text-lg md:text-2xl text-white"
          >yoanroszak@gmail.com</a
        >
        <span class="font-bold font-radiate-regular text-lg md:text-2xl text-white text-center">
          Or let s be social
        </span>

        <div class="flex flex-wrap gap-2 md:gap-3 justify-center bg-light-pink w-full">
          <a
            href="https://www.linkedin.com/in/yoan-roszak/"
            target="_blank"
            class="bg-light-purple p-2 md:p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconLinkedin class="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10" />
          </a>
          <a
            href="https://github.com/YoanRos"
            target="_blank"
            class="bg-light-purple p-2 md:p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconGitHub class="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10" />
          </a>

          <a
            href="https://mastodon.social/@yoros"
            target="_blank"
            class="bg-light-purple p-2 md:p-3 text-white rounded-lg hover:bg-eminence transition-colors"
          >
            <IconMastodon class="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10" />
          </a>
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
  animation: scroll-left 50s linear infinite;
}

@media (min-width: 768px) {
  .animate-marquee {
    animation: scroll-left 80s linear infinite;
  }
}

@media (min-width: 1280px) {
  .animate-marquee {
    animation: scroll-left 100s linear infinite;
  }
}
</style>
