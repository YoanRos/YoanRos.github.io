<script setup>
import Projects from '../components/Projects.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

import CV from '@/components/Resume/CV.vue'
import AnimatedFlower from '@/components/animations/AnimatedFlower.vue'
import GetInTouch from '@/components/animations/GetInTouch.vue'

const showMenu = ref(false)
</script>
<template>
  <div class="flex flex-col bg-white">
    <!-- <NavBar v-model:showMenu="showMenu" /> -->
    <div class="flex h-screen p-16">
      <div class="flex items-end">
        <h1
          class="lg:text-7xl md:text-7xl sm:text-6xl 2xl:text-9xl xl:text-8xl text-6xl font-groovy-orange leading-tight font-bold text-light-pink"
        >
          Goededag ! <br />I am
          <a
            href="https://www.linkedin.com/in/yoan-roszak/"
            target="_blank"
            class="text-light-purple hover:underline"
          >
            Yoan Roszak</a
          >
          <br />
          a
          <span class="text-light-purple">Full Stack Developer</span>
          <br />
          Located in
          <span class="text-light-purple">Amsterdam</span>
        </h1>
      </div>
      <div class="absolute top-0 right-0 h-full xl:w-2/5 w-1/3 overflow-hidden">
        <AnimatedFlower />
      </div>
    </div>
    <div class="flex h-screen p-16 flex-col justify-between" id="work">
      <h3 class="heading3">Projects I contributed to</h3>
      <Projects />
    </div>

    <GetInTouch />
  </div>
</template>
