<script setup>
import Projects from '../components/Projects.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

import IconGitHub from '~icons/mdi/github'
import IconMastodon from '~icons/mdi/mastodon'
import IconLinkedin from '~icons/mdi/linkedin'
import CV from '@/components/Resume/CV.vue'

const showMenu = ref(false)
</script>
<template>
  <div class="flex bg-gray-200">
    <NavBar v-model:showMenu="showMenu" />
    <div
      :class="[showMenu ? 'pl-44 md:pl-36' : 'pl-8 md:pl-36']"
      class="flex-1 bg-gray-200 transition-all"
    >
      <div class="banner-1 pb-8">
        <div class="flex flex-col gap-2">
          <img
            class="rounded-full border border-gray-100 shadow-sm w-12 h-12 md:w-34 md:h-34"
            src="/photo.png"
            alt="user image"
          />
          <h1
            class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-radiate font-bold leading-tight text-soft-pink"
          >
            I am
            <a
              href="https://www.linkedin.com/in/yoan-roszak/"
              target="_blank"
              class="text-lavender hover:underline"
            >
              Yoan Roszak</a
            ><br />
            a Full Stack Developer
          </h1>
        </div>
        <CV />
      </div>
      <div class="banner-2 space-y-10 pb-20" id="work">
        <h3 class="heading3 my-5">Projects I contributed to</h3>
        <Projects />
      </div>
      <div class="banner-1" id="experience">
        <div class="">
          <h3 class="heading3">Timeline</h3>
          <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">Soon available</p>
        </div>
      </div>
      <div class="banner-2 pb-4" id="about">
        <div class="flex flex-col gap-8">
          <h3 class="heading3 my-5">Let’s work together and make some impactfull tech</h3>
          <a href="mailto:yoanroszak@gmail.com" class="text-2xl text-lavender font-work_sans"
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
  </div>
</template>
