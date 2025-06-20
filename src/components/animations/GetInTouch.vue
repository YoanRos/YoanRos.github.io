<script setup></script>

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
      <div class="z-10 absolute bottom-1/3 flex justify-center items-center w-full flex-col">
        <span class="text-2xl text-white">
          If you want to reach me out please send me an email
        </span>
        <span class="text-2xl text-white"> yoanroszak@gmail.com </span>
        <span class="text-2xl text-white"> Or lets be social </span>
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
