<script setup>
import Projects from '../components/Projects.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

import IconGitHub from '~icons/mdi/github'
import IconMastodon from '~icons/mdi/mastodon'

import IconLinkedin from '~icons/mdi/linkedin'
import CV from '@/components/Resume/CV.vue'
import AnimatedFlower from '@/components/animations/AnimatedFlower.vue'

const showMenu = ref(false)
</script>
<template>
  <div class="flex flex-col bg-white">
    <!-- <NavBar v-model:showMenu="showMenu" /> -->
    <div class="flex h-screen p-16">
      <div class="flex items-end">
        <h1
          class="lg:text-9xl md:text-3xl sm:text-xl text-lg font-groovy-orange leading-tight font-bold text-light-pink"
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
      <div class="w-1/3">
        <AnimatedFlower />
      </div>
    </div>
    <div class="flex">
      <CV />
    </div>
    <div class="banner-2 space-y-10 pb-20" id="work">
      <h3 class="heading3 my-5">Projects I contributed to</h3>
      <Projects />
    </div>
    <div class="" id="experience">
      <div class="">
        <h3 class="heading3">Timeline</h3>
        <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">Soon available</p>
      </div>
    </div>
    <div class="banner-2 pb-4" id="about">
      <div class="flex flex-col gap-8">
        <h3 class="heading3 my-5">Let’s work together and make some impactfull tech</h3>
        <a
          href="mailto:yoanroszak@gmail.com"
          class="text-2xl text-celestial_blue-700 font-work_sans"
          >yoanroszak@gmail.com</a
        >
      </div>

      <div class="flex flex-wrap gap-2 justify-end">
        <a
          href="https://www.linkedin.com/in/yoan-roszak/"
          target="_blank"
          class="bg-mint-green p-3 text-white rounded-lg hover:bg-dark-mint-green transition-colors"
        >
          <IconLinkedin class="w-6 h-6 md:w-10 md:h-10" />
        </a>
        <a
          href="https://github.com/YoanRos"
          target="_blank"
          class="bg-mint-green p-3 text-white rounded-lg hover:bg-dark-mint-green transition-colors"
        >
          <IconGitHub class="w-6 h-6 md:w-10 md:h-10" />
        </a>

        <a
          href="https://mastodon.social/@yoros"
          target="_blank"
          class="bg-mint-green p-3 text-white rounded-lg hover:bg-dark-mint-green transition-colors"
        >
          <IconMastodon class="w-6 h-6 md:w-10 md:h-10" />
        </a>
      </div>
    </div>
  </div>
</template>
